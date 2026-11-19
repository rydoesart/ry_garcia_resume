// Run with: node scripts/generate-form-keyframes.cjs
// Build-time only: the page and all three effects run entirely in CSS.
const fs = require('node:fs');
const path = require('node:path');
const root = path.join(__dirname, '..');
const target = path.join(root, 'css', 'dimensions.css');
const html = fs.readFileSync(path.join(root, 'animations.html'), 'utf8');
const marker = '/* Generated tesseract keyframes';
const source = fs.readFileSync(target, 'utf8').split(marker)[0].trimEnd();
const number = value => String(Number(value.toFixed(6)));
// The model font size is the projection unit; em keeps generated frames compact.
const length = value => `${number(value)}em`;

// The vertex index encodes x, y, z, w signs in its four bits.
function project(index, angle) {
    const [x, y, z, w] = [1, 2, 4, 8].map(bit => index & bit ? 1 : -1);
    const sine = Math.sin(angle * Math.PI / 180);
    const cosine = Math.cos(angle * Math.PI / 180);
    const factor = 3.6 / (3.6 - x * sine - w * cosine);
    return [(x * cosine - w * sine) * factor, y * factor, z * factor];
}

function pose(indices, angle, previousRotation) {
    const a = project(indices[0], angle);
    let transform = `scale3d(1, var(--ay), var(--az)) translate3d(${a.map(length).join(', ')})`;
    if (indices.length === 1) return { css: `transform: ${transform};` };
    const b = project(indices[1], angle);
    const [x, y, z] = b.map((value, index) => value - a[index]);
    let rotation = Math.atan2(y, x) * 180 / Math.PI;
    // Avoid a full reverse spin when atan2 crosses its -180/180-degree seam.
    if (previousRotation !== undefined) {
        while (rotation - previousRotation > 180) rotation -= 360;
        while (rotation - previousRotation < -180) rotation += 360;
    }
    const tilt = -Math.atan2(z, Math.hypot(x, y)) * 180 / Math.PI;
    transform += ` rotateZ(${number(rotation)}deg) rotateY(${number(tilt)}deg)`;
    return {
        css: `inline-size: ${length(Math.hypot(x, y, z))}; transform: ${transform};`,
        rotation
    };
}

const sections = [
    '/* Generated tesseract keyframes: node scripts/generate-form-keyframes.cjs */',
    '/* True XW rotation sampled every five degrees; CSS interpolates between samples. */'
];
// Reflection across Y/Z lets symmetric vertices and edges share keyframes.
const groups = new Map();
for (const match of html.matchAll(/data-(edge|vertex)="([\d ]+)"/g)) {
    const [, kind, value] = match;
    const indices = value.split(' ').map(Number);
    const reflection = ~indices[0] & 6;
    const canonical = indices.map(index => index ^ reflection);
    const name = `form-${kind}-${canonical.join('-')}`;
    if (!groups.has(name)) groups.set(name, {indices: canonical, selectors: []});
    groups.get(name).selectors.push(`.form-${kind}[data-${kind}="${value}"]`);
}
for (const [name, {indices, selectors}] of groups) {
    sections.push(`${selectors.join(',\n')} {`,
        `    --form-animation: ${name};`,
        `    ${pose(indices, 24).css}`,
        '}', `@keyframes ${name} {`);
    let previousRotation;
    for (let angle = 0; angle <= 360; angle += 5) {
        const result = pose(indices, angle, previousRotation);
        previousRotation = result.rotation;
        sections.push(`    ${number(angle / 3.6)}% { ${result.css} }`);
    }
    sections.push('}');
}
fs.writeFileSync(target, `${source}\n\n${sections.join('\n')}\n`);
