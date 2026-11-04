# Scrapped animations

Liquid Ink, Magnetic Particles, and 5D Perspective. The HTML and CSS below were moved out of the live showcase. The styles use the shared design tokens in `css/styles.css`.

## HTML

```html
        <p>Three motion studies exploring distinct visual effects.</p>

        <div class="project-wrapper animation-showcase">
          <article class="project-item">
            <div class="project-placeholder-art animation-stage animation-stage--liquid-ink" aria-hidden="true"></div>
            <h3>Liquid Ink</h3>
          </article>

          <article class="project-item">
            <div class="project-placeholder-art animation-stage animation-stage--magnetic-particles" aria-hidden="true">
              <div class="particle-field__layer particle-field__layer--far">
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
              </div>
              <div class="particle-field__layer particle-field__layer--middle">
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
              </div>
              <div class="particle-field__layer particle-field__layer--near">
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
                <span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span><span class="particle-field__dot"></span>
              </div>
            </div>
            <h3>Magnetic Particles</h3>
          </article>

          <article class="project-item project-item--five-d">
            <div class="project-placeholder-art animation-stage animation-stage--five-d" aria-hidden="true">
              <div class="five-d-world">
                <div class="five-d-layer five-d-layer--far">
                  <div class="five-d-portal five-d-portal--wide">
                    <div class="five-d-aperture"></div>
                  </div>
                  <div class="five-d-polyhedron five-d-polyhedron--far">
                    <span class="five-d-polyhedron__face"></span>
                    <span class="five-d-polyhedron__face"></span>
                    <span class="five-d-polyhedron__face"></span>
                  </div>
                  <span class="five-d-vector five-d-vector--far"></span>
                </div>

                <div class="five-d-layer five-d-layer--middle">
                  <div class="five-d-portal five-d-portal--diamond">
                    <div class="five-d-aperture"></div>
                  </div>
                  <div class="five-d-polyhedron five-d-polyhedron--middle">
                    <span class="five-d-polyhedron__face"></span>
                    <span class="five-d-polyhedron__face"></span>
                    <span class="five-d-polyhedron__face"></span>
                  </div>
                  <span class="five-d-vector five-d-vector--middle"></span>
                </div>

                <div class="five-d-layer five-d-layer--near">
                  <div class="five-d-portal five-d-portal--tall">
                    <div class="five-d-aperture"></div>
                  </div>
                  <div class="five-d-polyhedron five-d-polyhedron--near">
                    <span class="five-d-polyhedron__face"></span>
                    <span class="five-d-polyhedron__face"></span>
                    <span class="five-d-polyhedron__face"></span>
                  </div>
                  <span class="five-d-vector five-d-vector--near"></span>
                </div>

                <div class="five-d-layer five-d-layer--foreground">
                  <div class="five-d-portal five-d-portal--slanted">
                    <div class="five-d-aperture"></div>
                  </div>
                  <div class="five-d-polyhedron five-d-polyhedron--foreground">
                    <span class="five-d-polyhedron__face"></span>
                    <span class="five-d-polyhedron__face"></span>
                    <span class="five-d-polyhedron__face"></span>
                  </div>
                  <span class="five-d-vector five-d-vector--foreground"></span>
                </div>
              </div>
              <div class="five-d-horizon"></div>
            </div>
            <h3>5D Perspective</h3>
          </article>
        </div>
```

## CSS

```css
:root {
    --animation-stage-aspect-ratio: 9 / 16;
}

.animation-stage--liquid-ink {
    aspect-ratio: var(--animation-stage-aspect-ratio);
    align-self: start;
    background:
        radial-gradient(ellipse at 30% 20%, rgb(255 255 255 / 54%), transparent 56%),
        radial-gradient(ellipse at 75% 74%, rgb(0 0 0 / 22%), transparent 58%),
        var(--gray-1);
    background-size: 180% 180%, 170% 170%, auto;
    background-position: 0% 20%, 100% 80%;
    background-repeat: no-repeat;
    animation: ink-base-drift 16s ease-in-out infinite alternate;
    overflow-block: hidden;
    overflow-inline: hidden;
    position: relative;
}

.animation-showcase .animation-stage {
    align-self: start;
    aspect-ratio: var(--animation-stage-aspect-ratio);
    inline-size: 100%;
    overflow-block: hidden;
    overflow-inline: hidden;
}

.animation-stage--magnetic-particles {
    --particle-zero: 0;
    --particle-white: #fff;
    --particle-black: #000;
    --particle-stage-background: var(--particle-black);
    --particle-drift-unit: clamp(var(--space-2), 1.5vw, var(--space-6));
    background: var(--particle-stage-background);
    isolation: isolate;
    position: relative;
}

.particle-field__layer {
    --particle-dot-color: var(--particle-white);
    --particle-dot-size: var(--space-1);
    --particle-layer-opacity: 0.62;
    --particle-layer-inline-offset: 0rem;
    --particle-layer-block-offset: 0rem;
    inset-block: var(--particle-zero);
    inset-inline: var(--particle-zero);
    position: absolute;
}

.particle-field__layer--far {
    --particle-layer-opacity: 0.38;
    --particle-layer-inline-offset: -5%;
    --particle-layer-block-offset: -3%;
}

.particle-field__layer--middle {
    --particle-dot-size: calc(var(--space-1) * 1.5);
    --particle-layer-opacity: 0.64;
}

.particle-field__layer--near {
    --particle-dot-size: var(--space-2);
    --particle-layer-opacity: 0.92;
    --particle-layer-inline-offset: 5%;
    --particle-layer-block-offset: 3%;
}

.particle-field__dot {
    --particle-start-inline: 50%;
    --particle-start-block: 50%;
    --particle-drift-inline: var(--particle-drift-unit);
    --particle-drift-block: calc(var(--particle-drift-unit) * -1);
    --particle-end-opacity: 0.48;
    --particle-start-scale: 0.7;
    --particle-end-scale: 0.9;
    --particle-duration: 52s;
    --particle-delay: 0s;
    animation: particle-float var(--particle-duration) ease-in-out infinite alternate;
    animation-delay: var(--particle-delay);
    background: var(--particle-dot-color);
    block-size: var(--particle-dot-size);
    border-radius: 50%;
    inset-block-start: calc(var(--particle-start-block) + var(--particle-layer-block-offset));
    inset-inline-start: calc(var(--particle-start-inline) + var(--particle-layer-inline-offset));
    inline-size: var(--particle-dot-size);
    opacity: var(--particle-start-opacity, var(--particle-layer-opacity));
    position: absolute;
    scale: var(--particle-start-scale);
    translate: var(--particle-zero) var(--particle-zero);
}

.particle-field__dot:nth-child(1) {
    --particle-start-inline: 10%;
    --particle-start-block: 13%;
    --particle-middle-inline: 22%;
    --particle-middle-block: 22%;
    --particle-duration: 17s;
    --particle-delay: -8s;
}

.particle-field__dot:nth-child(2) {
    --particle-start-inline: 76%;
    --particle-start-block: 9%;
    --particle-middle-inline: 62%;
    --particle-middle-block: 17%;
    --particle-start-opacity: 0.58;
    --particle-middle-opacity: 0.16;
    --particle-start-scale: 1.1;
    --particle-middle-scale: 0.68;
    --particle-duration: 23s;
    --particle-delay: -15s;
}

.particle-field__dot:nth-child(3) {
    --particle-start-inline: 34%;
    --particle-start-block: 42%;
    --particle-middle-inline: 45%;
    --particle-middle-block: 32%;
    --particle-start-opacity: 0.36;
    --particle-middle-opacity: 0.72;
    --particle-start-scale: 0.62;
    --particle-middle-scale: 1.16;
    --particle-duration: 29s;
    --particle-delay: -21s;
}

.particle-field__dot:nth-child(4) {
    --particle-start-inline: 83%;
    --particle-start-block: 68%;
    --particle-middle-inline: 68%;
    --particle-middle-block: 78%;
    --particle-start-opacity: 0.68;
    --particle-middle-opacity: 0.2;
    --particle-start-scale: 0.92;
    --particle-middle-scale: 0.6;
    --particle-duration: 20s;
    --particle-delay: -5s;
}

.particle-field__dot:nth-child(5) {
    --particle-start-inline: 19%;
    --particle-start-block: 84%;
    --particle-middle-inline: 31%;
    --particle-middle-block: 73%;
    --particle-start-opacity: 0.28;
    --particle-middle-opacity: 0.64;
    --particle-start-scale: 0.58;
    --particle-middle-scale: 1.24;
    --particle-duration: 26s;
    --particle-delay: -18s;
}

.particle-field__dot:nth-child(6) {
    --particle-start-inline: 52%;
    --particle-start-block: 25%;
    --particle-middle-inline: 41%;
    --particle-middle-block: 15%;
    --particle-start-opacity: 0.52;
    --particle-middle-opacity: 0.18;
    --particle-start-scale: 1;
    --particle-middle-scale: 0.68;
    --particle-duration: 31s;
    --particle-delay: -12s;
}

.particle-field__dot:nth-child(7) {
    --particle-start-inline: 59%;
    --particle-start-block: 58%;
    --particle-middle-inline: 74%;
    --particle-middle-block: 47%;
    --particle-start-opacity: 0.3;
    --particle-middle-opacity: 0.7;
    --particle-start-scale: 0.62;
    --particle-middle-scale: 1.12;
    --particle-duration: 21s;
    --particle-delay: -19s;
}

.particle-field__dot:nth-child(8) {
    --particle-start-inline: 91%;
    --particle-start-block: 39%;
    --particle-middle-inline: 79%;
    --particle-middle-block: 51%;
    --particle-start-opacity: 0.7;
    --particle-middle-opacity: 0.24;
    --particle-start-scale: 0.86;
    --particle-middle-scale: 0.58;
    --particle-duration: 27s;
    --particle-delay: -6s;
}

.particle-field__dot:nth-child(9) {
    --particle-start-inline: 45%;
    --particle-start-block: 93%;
    --particle-middle-inline: 56%;
    --particle-middle-block: 81%;
    --particle-start-opacity: 0.38;
    --particle-middle-opacity: 0.68;
    --particle-start-scale: 0.72;
    --particle-middle-scale: 1.18;
    --particle-duration: 24s;
    --particle-delay: -16s;
}

.particle-field__dot:nth-child(10) {
    --particle-start-inline: 5%;
    --particle-start-block: 51%;
    --particle-middle-inline: 17%;
    --particle-middle-block: 42%;
    --particle-start-opacity: 0.48;
    --particle-middle-opacity: 0.14;
    --particle-start-scale: 0.84;
    --particle-middle-scale: 0.58;
    --particle-duration: 32s;
    --particle-delay: -24s;
}

.particle-field__dot:nth-child(11) {
    --particle-start-inline: 68%;
    --particle-start-block: 27%;
    --particle-middle-inline: 81%;
    --particle-middle-block: 34%;
    --particle-start-opacity: 0.32;
    --particle-middle-opacity: 0.7;
    --particle-start-scale: 0.64;
    --particle-middle-scale: 1.18;
    --particle-duration: 22s;
    --particle-delay: -10s;
}

.particle-field__dot:nth-child(12) {
    --particle-start-inline: 39%;
    --particle-start-block: 64%;
    --particle-middle-inline: 52%;
    --particle-middle-block: 55%;
    --particle-start-opacity: 0.68;
    --particle-middle-opacity: 0.2;
    --particle-start-scale: 1.04;
    --particle-middle-scale: 0.62;
    --particle-duration: 28s;
    --particle-delay: -20s;
}

.particle-field__dot:nth-child(13) {
    --particle-start-inline: 94%;
    --particle-start-block: 89%;
    --particle-middle-inline: 78%;
    --particle-middle-block: 78%;
    --particle-start-opacity: 0.38;
    --particle-middle-opacity: 0.66;
    --particle-start-scale: 0.7;
    --particle-middle-scale: 1.12;
    --particle-duration: 25s;
    --particle-delay: -14s;
}

.particle-field__dot:nth-child(1) {
    --particle-drift-inline: calc(var(--particle-drift-unit) * 3);
    --particle-drift-block: calc(var(--particle-drift-unit) * 2);
    --particle-duration: 64s;
    --particle-delay: -22s;
    --particle-end-opacity: 0.64;
    --particle-end-scale: 1.08;
}

.particle-field__dot:nth-child(2) {
    --particle-drift-inline: calc(var(--particle-drift-unit) * -2);
    --particle-drift-block: calc(var(--particle-drift-unit) * 3);
    --particle-duration: 72s;
    --particle-delay: -41s;
    --particle-end-opacity: 0.32;
    --particle-end-scale: 0.82;
}

.particle-field__dot:nth-child(3) {
    --particle-drift-inline: calc(var(--particle-drift-unit) * 2);
    --particle-drift-block: calc(var(--particle-drift-unit) * -3);
    --particle-duration: 58s;
    --particle-delay: -18s;
    --particle-end-opacity: 0.78;
    --particle-end-scale: 1.18;
}

.particle-field__dot:nth-child(4) {
    --particle-drift-inline: calc(var(--particle-drift-unit) * -3);
    --particle-drift-block: calc(var(--particle-drift-unit) * -2);
    --particle-duration: 68s;
    --particle-delay: -37s;
    --particle-end-opacity: 0.4;
    --particle-end-scale: 0.76;
}

.particle-field__dot:nth-child(5) {
    --particle-drift-inline: calc(var(--particle-drift-unit) * 1);
    --particle-drift-block: calc(var(--particle-drift-unit) * 4);
    --particle-duration: 76s;
    --particle-delay: -29s;
    --particle-end-opacity: 0.7;
    --particle-end-scale: 1.12;
}

.particle-field__dot:nth-child(6) {
    --particle-drift-inline: calc(var(--particle-drift-unit) * -4);
    --particle-drift-block: var(--particle-zero);
    --particle-duration: 62s;
    --particle-delay: -46s;
    --particle-end-opacity: 0.36;
    --particle-end-scale: 0.8;
}

.particle-field__dot:nth-child(7) {
    --particle-drift-inline: calc(var(--particle-drift-unit) * 4);
    --particle-drift-block: calc(var(--particle-drift-unit) * 1);
    --particle-duration: 74s;
    --particle-delay: -15s;
    --particle-end-opacity: 0.76;
    --particle-end-scale: 1.2;
}

.particle-field__dot:nth-child(8) {
    --particle-drift-inline: var(--particle-zero);
    --particle-drift-block: calc(var(--particle-drift-unit) * -4);
    --particle-duration: 56s;
    --particle-delay: -32s;
    --particle-end-opacity: 0.44;
    --particle-end-scale: 0.78;
}

.particle-field__dot:nth-child(9) {
    --particle-drift-inline: calc(var(--particle-drift-unit) * 3);
    --particle-drift-block: calc(var(--particle-drift-unit) * -2);
    --particle-duration: 80s;
    --particle-delay: -51s;
    --particle-end-opacity: 0.72;
    --particle-end-scale: 1.16;
}

.particle-field__dot:nth-child(10) {
    --particle-drift-inline: calc(var(--particle-drift-unit) * -1);
    --particle-drift-block: calc(var(--particle-drift-unit) * 4);
    --particle-duration: 66s;
    --particle-delay: -24s;
    --particle-end-opacity: 0.38;
    --particle-end-scale: 0.84;
}

.particle-field__dot:nth-child(11) {
    --particle-drift-inline: calc(var(--particle-drift-unit) * 4);
    --particle-drift-block: calc(var(--particle-drift-unit) * -1);
    --particle-duration: 78s;
    --particle-delay: -43s;
    --particle-end-opacity: 0.68;
    --particle-end-scale: 1.1;
}

.particle-field__dot:nth-child(12) {
    --particle-drift-inline: calc(var(--particle-drift-unit) * -3);
    --particle-drift-block: calc(var(--particle-drift-unit) * 2);
    --particle-duration: 60s;
    --particle-delay: -12s;
    --particle-end-opacity: 0.34;
    --particle-end-scale: 0.74;
}

.particle-field__dot:nth-child(13) {
    --particle-drift-inline: calc(var(--particle-drift-unit) * 2);
    --particle-drift-block: var(--particle-zero);
    --particle-duration: 70s;
    --particle-delay: -35s;
    --particle-end-opacity: 0.74;
    --particle-end-scale: 1.22;
}

.particle-field__dot:nth-child(14) {
    --particle-start-inline: 8%;
    --particle-start-block: 4%;
    --particle-drift-inline: calc(var(--particle-drift-unit) * -2);
    --particle-drift-block: calc(var(--particle-drift-unit) * 3);
    --particle-duration: 82s;
    --particle-delay: -27s;
    --particle-end-opacity: 0.4;
    --particle-end-scale: 0.8;
}

.particle-field__dot:nth-child(15) {
    --particle-start-inline: 48%;
    --particle-start-block: 7%;
    --particle-drift-inline: var(--particle-zero);
    --particle-drift-block: calc(var(--particle-drift-unit) * 4);
    --particle-duration: 54s;
    --particle-delay: -39s;
    --particle-end-opacity: 0.72;
    --particle-end-scale: 1.16;
}

.particle-field__dot:nth-child(16) {
    --particle-start-inline: 93%;
    --particle-start-block: 28%;
    --particle-drift-inline: calc(var(--particle-drift-unit) * -4);
    --particle-drift-block: calc(var(--particle-drift-unit) * 1);
    --particle-duration: 76s;
    --particle-delay: -19s;
    --particle-end-opacity: 0.34;
    --particle-end-scale: 0.78;
}

.particle-field__dot:nth-child(17) {
    --particle-start-inline: 7%;
    --particle-start-block: 73%;
    --particle-drift-inline: calc(var(--particle-drift-unit) * 3);
    --particle-drift-block: calc(var(--particle-drift-unit) * -2);
    --particle-duration: 62s;
    --particle-delay: -48s;
    --particle-end-opacity: 0.7;
    --particle-end-scale: 1.14;
}

.particle-field__dot:nth-child(18) {
    --particle-start-inline: 92%;
    --particle-start-block: 96%;
    --particle-drift-inline: calc(var(--particle-drift-unit) * -3);
    --particle-drift-block: calc(var(--particle-drift-unit) * -2);
    --particle-duration: 72s;
    --particle-delay: -31s;
    --particle-end-opacity: 0.42;
    --particle-end-scale: 0.82;
}

.particle-field__dot:nth-child(19) {
    --particle-start-inline: 28%;
    --particle-start-block: 8%;
    --particle-drift-inline: calc(var(--particle-drift-unit) * 2);
    --particle-drift-block: calc(var(--particle-drift-unit) * 3);
    --particle-duration: 74s;
    --particle-delay: -33s;
    --particle-end-opacity: 0.56;
    --particle-end-scale: 1.08;
}

.particle-field__dot:nth-child(20) {
    --particle-start-inline: 57%;
    --particle-start-block: 16%;
    --particle-drift-inline: calc(var(--particle-drift-unit) * -3);
    --particle-drift-block: calc(var(--particle-drift-unit) * -1);
    --particle-duration: 68s;
    --particle-delay: -44s;
    --particle-end-opacity: 0.34;
    --particle-end-scale: 0.76;
}

.particle-field__dot:nth-child(21) {
    --particle-start-inline: 30%;
    --particle-start-block: 29%;
    --particle-drift-inline: var(--particle-zero);
    --particle-drift-block: calc(var(--particle-drift-unit) * 4);
    --particle-duration: 80s;
    --particle-delay: -26s;
    --particle-end-opacity: 0.74;
    --particle-end-scale: 1.18;
}

.particle-field__dot:nth-child(22) {
    --particle-start-inline: 90%;
    --particle-start-block: 50%;
    --particle-drift-inline: calc(var(--particle-drift-unit) * -4);
    --particle-drift-block: calc(var(--particle-drift-unit) * 2);
    --particle-duration: 58s;
    --particle-delay: -49s;
    --particle-end-opacity: 0.42;
    --particle-end-scale: 0.82;
}

.particle-field__dot:nth-child(23) {
    --particle-start-inline: 7%;
    --particle-start-block: 64%;
    --particle-drift-inline: calc(var(--particle-drift-unit) * 3);
    --particle-drift-block: calc(var(--particle-drift-unit) * -3);
    --particle-duration: 72s;
    --particle-delay: -17s;
    --particle-end-opacity: 0.68;
    --particle-end-scale: 1.12;
}

.particle-field__dot:nth-child(24) {
    --particle-start-inline: 53%;
    --particle-start-block: 78%;
    --particle-drift-inline: calc(var(--particle-drift-unit) * -2);
    --particle-drift-block: calc(var(--particle-drift-unit) * -4);
    --particle-duration: 62s;
    --particle-delay: -38s;
    --particle-end-opacity: 0.38;
    --particle-end-scale: 0.8;
}

@keyframes particle-float {
    to {
        opacity: var(--particle-end-opacity);
        scale: var(--particle-end-scale);
        translate: var(--particle-drift-inline) var(--particle-drift-block);
    }
}

.animation-showcase .animation-stage--five-d {
    --five-d-zero: 0;
    --five-d-zoom: 1.5;
    --five-d-perspective: 46rem;
    --five-d-view-tilt-x: 28deg;
    --five-d-view-tilt-y: -8deg;
    --five-d-view-turn: 8deg;
    --five-d-world-duration: 42s;
    --five-d-world-color: oklch(from var(--gray-1) l c h / 90%);
    --five-d-edge-color: oklch(from var(--gray-1) l c h / 64%);
    --five-d-dim-color: oklch(from var(--gray-1) l c h / 34%);
    --five-d-haze-color: oklch(from var(--gray-1) l c h / 16%);
    --five-d-border-size: var(--border-thin);
    --five-d-background: radial-gradient(ellipse at 50% 45%, var(--gray-7), var(--gray-9));
    background: var(--five-d-background);
    isolation: isolate;
    perspective: var(--five-d-perspective);
    perspective-origin: center;
    position: relative;
    aspect-ratio: 16 / 10;
}

.five-d-world {
    animation: five-d-world-tilt var(--five-d-world-duration) ease-in-out infinite;
    inset-block: var(--five-d-zero);
    inset-inline: var(--five-d-zero);
    position: absolute;
    transform-style: preserve-3d;
}

.five-d-layer {
    --five-d-layer-depth: -18rem;
    --five-d-layer-arrival-depth: -6rem;
    --five-d-layer-rotate-x: 32deg;
    --five-d-layer-rotate-y: -24deg;
    --five-d-layer-rotate-z: 16deg;
    --five-d-layer-arrival-rotate-x: 48deg;
    --five-d-layer-arrival-rotate-y: 20deg;
    --five-d-layer-arrival-rotate-z: -12deg;
    --five-d-layer-scale: 0.72;
    --five-d-layer-arrival-scale: 1.08;
    --five-d-layer-opacity: 0.48;
    --five-d-layer-arrival-opacity: 1;
    --five-d-layer-duration: 34s;
    --five-d-layer-delay: 0s;
    animation: five-d-layer-travel var(--five-d-layer-duration) ease-in-out infinite var(--five-d-layer-delay);
    inset-block: var(--five-d-zero);
    inset-inline: var(--five-d-zero);
    opacity: var(--five-d-layer-opacity);
    position: absolute;
    transform: translateZ(var(--five-d-layer-depth)) rotateX(var(--five-d-layer-rotate-x)) rotateY(var(--five-d-layer-rotate-y)) rotateZ(var(--five-d-layer-rotate-z)) scale(var(--five-d-layer-scale));
    transform-style: preserve-3d;
}

.five-d-layer--far {
    --five-d-layer-depth: -28rem;
    --five-d-layer-arrival-depth: -13rem;
    --five-d-layer-rotate-x: 42deg;
    --five-d-layer-rotate-y: -38deg;
    --five-d-layer-rotate-z: 20deg;
    --five-d-layer-arrival-rotate-x: 28deg;
    --five-d-layer-arrival-rotate-y: 28deg;
    --five-d-layer-arrival-rotate-z: -18deg;
    --five-d-layer-scale: 0.64;
    --five-d-layer-arrival-scale: 0.98;
    --five-d-layer-opacity: 0.24;
    --five-d-layer-arrival-opacity: 0.7;
    --five-d-layer-duration: 39s;
    --five-d-layer-delay: -12s;
}

.five-d-layer--middle {
    --five-d-layer-depth: -20rem;
    --five-d-layer-arrival-depth: -7rem;
    --five-d-layer-rotate-x: 26deg;
    --five-d-layer-rotate-y: 28deg;
    --five-d-layer-rotate-z: -24deg;
    --five-d-layer-arrival-rotate-x: 46deg;
    --five-d-layer-arrival-rotate-y: -18deg;
    --five-d-layer-arrival-rotate-z: 18deg;
    --five-d-layer-scale: 0.76;
    --five-d-layer-arrival-scale: 1.14;
    --five-d-layer-opacity: 0.62;
    --five-d-layer-arrival-opacity: 0.94;
    --five-d-layer-duration: 31s;
    --five-d-layer-delay: -7s;
}

.five-d-layer--near {
    --five-d-layer-depth: -12rem;
    --five-d-layer-arrival-depth: -3rem;
    --five-d-layer-rotate-x: 38deg;
    --five-d-layer-rotate-y: -20deg;
    --five-d-layer-rotate-z: 32deg;
    --five-d-layer-arrival-rotate-x: 24deg;
    --five-d-layer-arrival-rotate-y: 24deg;
    --five-d-layer-arrival-rotate-z: -22deg;
    --five-d-layer-scale: 0.88;
    --five-d-layer-arrival-scale: 1.2;
    --five-d-layer-opacity: 0.78;
    --five-d-layer-arrival-opacity: 1;
    --five-d-layer-duration: 27s;
    --five-d-layer-delay: -18s;
}

.five-d-layer--foreground {
    --five-d-layer-depth: -5rem;
    --five-d-layer-arrival-depth: -17rem;
    --five-d-layer-rotate-x: 24deg;
    --five-d-layer-rotate-y: 34deg;
    --five-d-layer-rotate-z: -18deg;
    --five-d-layer-arrival-rotate-x: 50deg;
    --five-d-layer-arrival-rotate-y: -30deg;
    --five-d-layer-arrival-rotate-z: 26deg;
    --five-d-layer-scale: 1.08;
    --five-d-layer-arrival-scale: 0.78;
    --five-d-layer-opacity: 0.82;
    --five-d-layer-arrival-opacity: 0.3;
    --five-d-layer-duration: 36s;
    --five-d-layer-delay: -23s;
}

.five-d-portal {
    --five-d-portal-inline-size: 74%;
    --five-d-portal-block-size: 58%;
    --five-d-portal-rotate-x: 32deg;
    --five-d-portal-rotate-y: -18deg;
    --five-d-portal-rotate-z: 16deg;
    --five-d-portal-depth: var(--space-4);
    --five-d-portal-duration: 29s;
    animation: five-d-portal-rotate var(--five-d-portal-duration) ease-in-out infinite alternate;
    border-block: var(--five-d-border-size) solid var(--five-d-world-color);
    border-inline: var(--five-d-border-size) solid var(--five-d-edge-color);
    box-shadow: inset 0 0 var(--space-5) var(--five-d-haze-color), 0 0 var(--space-5) var(--five-d-haze-color);
    block-size: var(--five-d-portal-block-size);
    inline-size: var(--five-d-portal-inline-size);
    inset-block: var(--five-d-zero);
    inset-inline: var(--five-d-zero);
    margin: auto;
    position: absolute;
    transform: translateZ(var(--five-d-portal-depth)) rotateX(var(--five-d-portal-rotate-x)) rotateY(var(--five-d-portal-rotate-y)) rotateZ(var(--five-d-portal-rotate-z));
    transform-style: preserve-3d;
}

.five-d-portal::before,
.five-d-portal::after,
.five-d-aperture {
    border-block: var(--five-d-border-size) solid var(--five-d-dim-color);
    border-inline: var(--five-d-border-size) solid var(--five-d-dim-color);
    content: "";
    inset-block: var(--space-4);
    inset-inline: var(--space-4);
    position: absolute;
    transform-style: preserve-3d;
}

.five-d-portal::before {
    transform: translateZ(calc(var(--space-4) * -1)) rotateY(18deg);
}

.five-d-portal::after {
    inset-block: calc(var(--space-4) * -1);
    inset-inline: calc(var(--space-4) * -1);
    opacity: 0.45;
    transform: translateZ(calc(var(--space-8) * -1)) rotateX(-18deg);
}

.five-d-aperture {
    inset-block: var(--space-8);
    inset-inline: var(--space-8);
    opacity: 0.6;
    transform: translateZ(calc(var(--space-2) * -1));
}

.five-d-portal--wide {
    --five-d-portal-inline-size: 92%;
    --five-d-portal-block-size: 52%;
    --five-d-portal-rotate-x: 42deg;
    --five-d-portal-rotate-y: 22deg;
    --five-d-portal-rotate-z: -28deg;
    --five-d-portal-depth: calc(var(--space-8) * -1);
    --five-d-portal-duration: 37s;
}

.five-d-portal--diamond {
    --five-d-portal-inline-size: 68%;
    --five-d-portal-block-size: 66%;
    --five-d-portal-rotate-x: 28deg;
    --five-d-portal-rotate-y: -32deg;
    --five-d-portal-rotate-z: 42deg;
    --five-d-portal-depth: var(--space-8);
    --five-d-portal-duration: 31s;
}

.five-d-portal--tall {
    --five-d-portal-inline-size: 62%;
    --five-d-portal-block-size: 76%;
    --five-d-portal-rotate-x: 38deg;
    --five-d-portal-rotate-y: 28deg;
    --five-d-portal-rotate-z: -34deg;
    --five-d-portal-depth: calc(var(--space-4) * -1);
    --five-d-portal-duration: 25s;
}

.five-d-portal--slanted {
    --five-d-portal-inline-size: 88%;
    --five-d-portal-block-size: 44%;
    --five-d-portal-rotate-x: 26deg;
    --five-d-portal-rotate-y: -38deg;
    --five-d-portal-rotate-z: 28deg;
    --five-d-portal-depth: var(--space-8);
    --five-d-portal-duration: 33s;
}

.five-d-polyhedron {
    --five-d-polyhedron-inline-size: var(--space-12);
    --five-d-polyhedron-block-size: var(--space-12);
    --five-d-polyhedron-block-position: 38%;
    --five-d-polyhedron-inline-position: 24%;
    --five-d-polyhedron-depth: var(--space-5);
    --five-d-polyhedron-rotate-x: 28deg;
    --five-d-polyhedron-rotate-y: 38deg;
    --five-d-polyhedron-rotate-z: -16deg;
    --five-d-polyhedron-duration: 23s;
    animation: five-d-polyhedron-turn var(--five-d-polyhedron-duration) ease-in-out infinite;
    block-size: var(--five-d-polyhedron-block-size);
    inline-size: var(--five-d-polyhedron-inline-size);
    inset-block-start: var(--five-d-polyhedron-block-position);
    inset-inline-start: var(--five-d-polyhedron-inline-position);
    position: absolute;
    transform: translateZ(var(--five-d-polyhedron-depth)) rotateX(var(--five-d-polyhedron-rotate-x)) rotateY(var(--five-d-polyhedron-rotate-y)) rotateZ(var(--five-d-polyhedron-rotate-z));
    transform-style: preserve-3d;
}

.five-d-polyhedron--far {
    --five-d-polyhedron-inline-size: var(--space-8);
    --five-d-polyhedron-block-size: var(--space-8);
    --five-d-polyhedron-block-position: 23%;
    --five-d-polyhedron-inline-position: 62%;
    --five-d-polyhedron-depth: calc(var(--space-8) * -1);
    --five-d-polyhedron-duration: 26s;
}

.five-d-polyhedron--middle {
    --five-d-polyhedron-inline-size: var(--space-10);
    --five-d-polyhedron-block-size: var(--space-10);
    --five-d-polyhedron-block-position: 67%;
    --five-d-polyhedron-inline-position: 20%;
    --five-d-polyhedron-depth: var(--space-4);
    --five-d-polyhedron-duration: 19s;
}

.five-d-polyhedron--near {
    --five-d-polyhedron-inline-size: var(--space-7);
    --five-d-polyhedron-block-size: var(--space-7);
    --five-d-polyhedron-block-position: 32%;
    --five-d-polyhedron-inline-position: 72%;
    --five-d-polyhedron-depth: var(--space-8);
    --five-d-polyhedron-duration: 28s;
}

.five-d-polyhedron--foreground {
    --five-d-polyhedron-inline-size: var(--space-12);
    --five-d-polyhedron-block-size: var(--space-12);
    --five-d-polyhedron-block-position: 72%;
    --five-d-polyhedron-inline-position: 57%;
    --five-d-polyhedron-depth: calc(var(--space-4) * -1);
    --five-d-polyhedron-duration: 22s;
}

.five-d-polyhedron__face {
    --five-d-face-rotation: 0deg;
    background: linear-gradient(145deg, var(--five-d-dim-color), transparent);
    border-block: var(--five-d-border-size) solid var(--five-d-edge-color);
    border-inline: var(--five-d-border-size) solid var(--five-d-edge-color);
    clip-path: polygon(50% 0, 100% 100%, 0 100%);
    inset-block: var(--five-d-zero);
    inset-inline: var(--five-d-zero);
    position: absolute;
    transform: rotateY(var(--five-d-face-rotation)) translateZ(var(--five-d-polyhedron-depth));
    transform-style: preserve-3d;
}

.five-d-polyhedron__face:nth-child(2) {
    --five-d-face-rotation: 120deg;
}

.five-d-polyhedron__face:nth-child(3) {
    --five-d-face-rotation: 240deg;
}

.five-d-vector {
    --five-d-vector-block-position: 50%;
    --five-d-vector-rotate-x: 62deg;
    --five-d-vector-rotate-y: 0deg;
    --five-d-vector-rotate-z: 28deg;
    --five-d-vector-depth: var(--space-8);
    --five-d-vector-duration: 21s;
    animation: five-d-vector-slide var(--five-d-vector-duration) ease-in-out infinite alternate;
    background: linear-gradient(90deg, transparent, var(--five-d-edge-color), transparent);
    block-size: var(--five-d-border-size);
    inset-block-start: var(--five-d-vector-block-position);
    inset-inline: var(--five-d-zero);
    position: absolute;
    transform: translateZ(var(--five-d-vector-depth)) rotateX(var(--five-d-vector-rotate-x)) rotateY(var(--five-d-vector-rotate-y)) rotateZ(var(--five-d-vector-rotate-z));
}

.five-d-vector--far {
    --five-d-vector-block-position: 31%;
    --five-d-vector-rotate-x: 78deg;
    --five-d-vector-rotate-y: 28deg;
    --five-d-vector-rotate-z: -18deg;
    --five-d-vector-depth: calc(var(--space-8) * -1);
    --five-d-vector-duration: 33s;
}

.five-d-vector--middle {
    --five-d-vector-block-position: 58%;
    --five-d-vector-rotate-x: 52deg;
    --five-d-vector-rotate-y: -24deg;
    --five-d-vector-rotate-z: 36deg;
    --five-d-vector-depth: var(--space-6);
    --five-d-vector-duration: 25s;
}

.five-d-vector--near {
    --five-d-vector-block-position: 43%;
    --five-d-vector-rotate-x: 72deg;
    --five-d-vector-rotate-y: 18deg;
    --five-d-vector-rotate-z: -34deg;
    --five-d-vector-depth: var(--space-8);
    --five-d-vector-duration: 29s;
}

.five-d-vector--foreground {
    --five-d-vector-block-position: 72%;
    --five-d-vector-rotate-x: 44deg;
    --five-d-vector-rotate-y: -32deg;
    --five-d-vector-rotate-z: 22deg;
    --five-d-vector-depth: calc(var(--space-5) * -1);
    --five-d-vector-duration: 19s;
}

.five-d-horizon {
    animation: five-d-horizon-glow var(--five-d-world-duration) ease-in-out infinite alternate;
    background: radial-gradient(ellipse, var(--five-d-haze-color), transparent 68%);
    block-size: 28%;
    inline-size: 100%;
    inset-block-end: 0;
    inset-inline: 0;
    pointer-events: none;
    position: absolute;
    transform: translateZ(calc(var(--space-16) * -1));
}

@keyframes five-d-world-tilt {
    0%,
    100% {
        transform: rotateX(var(--five-d-view-tilt-x)) rotateY(var(--five-d-view-tilt-y)) scale(var(--five-d-zoom));
    }

    50% {
        transform: rotateX(calc(var(--five-d-view-tilt-x) - 8deg)) rotateY(calc(var(--five-d-view-tilt-y) + 10deg)) rotateZ(var(--five-d-view-turn)) scale(var(--five-d-zoom));
    }
}

@keyframes five-d-layer-travel {
    0%,
    100% {
        opacity: var(--five-d-layer-opacity);
        transform: translateZ(var(--five-d-layer-depth)) rotateX(var(--five-d-layer-rotate-x)) rotateY(var(--five-d-layer-rotate-y)) rotateZ(var(--five-d-layer-rotate-z)) scale(var(--five-d-layer-scale));
    }

    50% {
        opacity: var(--five-d-layer-arrival-opacity);
        transform: translateZ(var(--five-d-layer-arrival-depth)) rotateX(var(--five-d-layer-arrival-rotate-x)) rotateY(var(--five-d-layer-arrival-rotate-y)) rotateZ(var(--five-d-layer-arrival-rotate-z)) scale(var(--five-d-layer-arrival-scale));
    }
}

@keyframes five-d-portal-rotate {
    to {
        transform: translateZ(calc(var(--five-d-portal-depth) * -1)) rotateX(calc(var(--five-d-portal-rotate-x) + 12deg)) rotateY(calc(var(--five-d-portal-rotate-y) - 14deg)) rotateZ(calc(var(--five-d-portal-rotate-z) + 18deg));
    }
}

@keyframes five-d-polyhedron-turn {
    50% {
        transform: translateZ(calc(var(--five-d-polyhedron-depth) * -1)) rotateX(calc(var(--five-d-polyhedron-rotate-x) + 120deg)) rotateY(calc(var(--five-d-polyhedron-rotate-y) + 70deg)) rotateZ(calc(var(--five-d-polyhedron-rotate-z) - 46deg)) scale(1.18);
    }
}

@keyframes five-d-vector-slide {
    to {
        transform: translateZ(calc(var(--five-d-vector-depth) * -1)) rotateX(calc(var(--five-d-vector-rotate-x) - 18deg)) rotateY(calc(var(--five-d-vector-rotate-y) + 16deg)) rotateZ(calc(var(--five-d-vector-rotate-z) + 22deg));
    }
}

@keyframes five-d-horizon-glow {
    to {
        opacity: 0.42;
        transform: translateZ(calc(var(--space-16) * -1)) scale(1.28);
    }
}

.animation-stage--liquid-ink::before,
.animation-stage--liquid-ink::after {
    content: "";
    position: absolute;
    inset: -12%;
    border-radius: 58% 42% 64% 36% / 42% 62% 38% 58%;
    filter: blur(10px);
    will-change: transform, border-radius;
}

.animation-stage--liquid-ink::before {
    background:
        radial-gradient(ellipse at 32% 38%, rgb(0 0 0 / 72%) 0%, rgb(32 32 32 / 58%) 36%, transparent 68%),
        radial-gradient(ellipse at 68% 66%, rgb(255 255 255 / 82%) 0%, transparent 66%);
    background-size: 135% 135%, 145% 145%;
    background-position: 0% 20%, 100% 80%;
    background-repeat: no-repeat;
    animation: ink-flow-one 8s ease-in-out infinite alternate;
}

.animation-stage--liquid-ink::after {
    inset: -20%;
    background:
        radial-gradient(ellipse at 68% 35%, rgb(0 0 0 / 56%) 0%, transparent 62%),
        radial-gradient(ellipse at 32% 76%, rgb(255 255 255 / 76%) 0%, transparent 62%);
    background-size: 140% 140%, 135% 135%;
    background-position: 100% 0%, 0% 100%;
    background-repeat: no-repeat;
    animation: ink-flow-two 13s ease-in-out -4s infinite alternate-reverse;
}

@keyframes ink-base-drift {
    0% {
        background-position: 0% 20%, 100% 80%;
    }

    34% {
        background-position: 85% 0%, 15% 100%;
    }

    68% {
        background-position: 100% 75%, 0% 25%;
    }

    100% {
        background-position: 10% 100%, 90% 0%;
    }
}

@keyframes ink-flow-one {
    0% {
        border-radius: 58% 42% 64% 36% / 42% 62% 38% 58%;
        background-position: 0% 20%, 100% 80%;
        transform: translate3d(-16%, -13%, 0) rotate(-28deg) scale(0.78);
    }

    36% {
        border-radius: 43% 57% 51% 49% / 62% 39% 61% 38%;
        background-position: 70% 0%, 20% 100%;
        transform: translate3d(12%, -20%, 0) rotate(12deg) scale(1.08);
    }

    72% {
        border-radius: 66% 34% 39% 61% / 41% 65% 35% 59%;
        background-position: 100% 70%, 0% 25%;
        transform: translate3d(-8%, 18%, 0) rotate(-8deg) scale(0.92);
    }

    100% {
        border-radius: 38% 62% 42% 58% / 60% 40% 62% 38%;
        background-position: 100% 80%, 0% 20%;
        transform: translate3d(18%, 16%, 0) rotate(30deg) scale(1.22);
    }
}

@keyframes ink-flow-two {
    0% {
        border-radius: 44% 56% 36% 64% / 58% 38% 62% 42%;
        background-position: 100% 0%, 0% 100%;
        transform: translate3d(16%, -15%, 0) rotate(32deg) scale(1.24);
    }

    32% {
        border-radius: 61% 39% 49% 51% / 36% 59% 41% 64%;
        background-position: 15% 85%, 85% 10%;
        transform: translate3d(-8%, 20%, 0) rotate(-10deg) scale(0.94);
    }

    68% {
        border-radius: 40% 60% 63% 37% / 57% 43% 60% 40%;
        background-position: 0% 20%, 100% 80%;
        transform: translate3d(18%, -8%, 0) rotate(18deg) scale(1.14);
    }

    100% {
        border-radius: 64% 36% 58% 42% / 38% 64% 36% 62%;
        background-position: 0% 100%, 100% 0%;
        transform: translate3d(-18%, 15%, 0) rotate(-30deg) scale(0.78);
    }
}


@media screen and (min-width: 650px) {
    .animation-showcase {
        grid-template-columns: repeat(2, minmax(0, 1fr));
    }


}

@media screen and (min-width: 650px) {
    .animation-showcase .project-item--five-d {
        grid-column: span 2;
    }


}

@media screen and (min-width: 860px) {
    .animation-showcase {
        grid-template-columns: repeat(3, minmax(0, 1fr));
    }


}

@media (prefers-reduced-motion: reduce) {
    .animation-stage--liquid-ink {
        animation: ink-base-reduced 48s ease-in-out infinite alternate;
    }

    .animation-stage--liquid-ink::before {
        animation: ink-flow-reduced-one 32s ease-in-out infinite alternate;
        will-change: auto;
    }

    .animation-stage--liquid-ink::after {
        animation: ink-flow-reduced-two 38s ease-in-out infinite alternate;
        will-change: auto;
    }

    .particle-field__layer,
    .particle-field__dot {
        animation: none;
    }

    .five-d-world,
    .five-d-layer,
    .five-d-portal,
    .five-d-polyhedron,
    .five-d-vector,
    .five-d-horizon {
        animation: none;
    }
}

@keyframes ink-flow-reduced-one {
    from { transform: translate3d(-1%, -1%, 0) scale(1); }
    to { transform: translate3d(2%, 1%, 0) scale(1.02); }
}

@keyframes ink-flow-reduced-two {
    from { transform: translate3d(1%, -1%, 0) scale(1.01); }
    to { transform: translate3d(-2%, 1%, 0) scale(0.99); }
}

@keyframes ink-base-reduced {
    from { background-position: 0% 20%, 100% 80%; }
    to { background-position: 10% 30%, 90% 70%; }
}

/* Focused refinements for the Magnetic Particles and 5D Perspective studies. */
.animation-showcase .animation-stage--magnetic-particles {
    --particle-zero: 0;
    --particle-white: #fff;
    --particle-black: #000;
    --particle-stage-background: #000;
    background: #000;
}

.animation-showcase .particle-field__layer {
    display: grid;
    grid-template-columns: repeat(8, minmax(0, 1fr));
    grid-template-rows: repeat(6, minmax(0, 1fr));
    padding: 2.5%;
}

.animation-showcase .particle-field__layer--far { padding: 0 4% 5% 0; }
.animation-showcase .particle-field__layer--middle { padding: 3% 0 0 3%; }
.animation-showcase .particle-field__layer--near { padding: 0 2% 2% 0; }

.animation-showcase .particle-field__dot {
    --particle-dot-color: #fff;
    --particle-dot-size: 2px;
    --particle-layer-opacity: 1;
    --particle-start-opacity: 1;
    --particle-end-opacity: 1;
    --particle-drift-inline: 0px;
    --particle-drift-block: 0px;
    animation: particle-atmosphere var(--particle-duration, 54s) ease-in-out infinite alternate;
    animation-delay: var(--particle-delay, 0s);
    align-self: center;
    background: #fff;
    block-size: var(--particle-dot-size);
    border-radius: 50%;
    inline-size: var(--particle-dot-size);
    inset: auto;
    opacity: 1;
    position: relative;
    scale: 1;
    translate: 0 0;
}

.animation-showcase .particle-field__layer--far .particle-field__dot { --particle-dot-size: 1px; }
.animation-showcase .particle-field__layer--middle .particle-field__dot { --particle-dot-size: 2px; }
.animation-showcase .particle-field__layer--near .particle-field__dot { --particle-dot-size: 3px; }
.animation-showcase .particle-field__dot:nth-child(3n) { --particle-drift-inline: 22px; --particle-drift-block: -16px; --particle-duration: 23s; --particle-delay: -7s; }
.animation-showcase .particle-field__dot:nth-child(3n + 1) { --particle-drift-inline: -18px; --particle-drift-block: 20px; --particle-duration: 29s; --particle-delay: -17s; }
.animation-showcase .particle-field__dot:nth-child(3n + 2) { --particle-drift-inline: 12px; --particle-drift-block: 24px; --particle-duration: 26s; --particle-delay: -11s; }

@keyframes particle-atmosphere {
    0%, 100% { translate: calc(var(--particle-drift-inline) * -1) calc(var(--particle-drift-block) * -1); }
    50% { translate: var(--particle-drift-inline) var(--particle-drift-block); }
}

.animation-showcase .animation-stage--liquid-ink {
    --ink-black: #000;
    background: #000;
}

.animation-showcase .animation-stage--liquid-ink::before {
    background:
        radial-gradient(ellipse at 32% 38%, rgb(255 255 255 / 94%) 0%, rgb(255 255 255 / 42%) 36%, transparent 68%),
        radial-gradient(ellipse at 68% 66%, rgb(255 255 255 / 76%) 0%, transparent 66%);
}

.animation-showcase .animation-stage--liquid-ink::after {
    background:
        radial-gradient(ellipse at 68% 35%, rgb(255 255 255 / 68%) 0%, transparent 62%),
        radial-gradient(ellipse at 32% 76%, rgb(255 255 255 / 88%) 0%, transparent 62%);
}

.animation-showcase .animation-stage--five-d {
    aspect-ratio: var(--animation-stage-aspect-ratio);
    align-self: stretch;
    --five-d-world-color: #fff;
    --five-d-edge-color: rgb(255 255 255 / 74%);
    --five-d-dim-color: rgb(255 255 255 / 42%);
    --five-d-haze-color: rgb(255 255 255 / 18%);
    --five-d-background: #000;
    --five-d-zoom: 1.6;
    --five-d-perspective: 34rem;
    inline-size: 100%;
    max-inline-size: 100%;
    box-sizing: border-box;
    background: #000;
}

.animation-showcase .project-item--five-d {
    grid-column: auto;
}

.animation-showcase .five-d-world {
    transform-style: preserve-3d;
    translate: 0 -26%;
}
.animation-showcase .five-d-layer { filter: drop-shadow(0 0 8px rgb(255 255 255 / 12%)); }
.animation-showcase .five-d-portal { clip-path: polygon(8% 0, 92% 0, 100% 12%, 100% 88%, 92% 100%, 8% 100%, 0 88%, 0 12%); }
.animation-showcase .five-d-portal::before { border-color: rgb(255 255 255 / 68%); }
.animation-showcase .five-d-portal::after { border-color: rgb(255 255 255 / 36%); filter: blur(1px); }
.animation-showcase .five-d-polyhedron__face { background: linear-gradient(145deg, rgb(255 255 255 / 20%), transparent 68%); }

@media (prefers-reduced-motion: reduce) {
    .animation-showcase .particle-field__dot { animation: none; }
}


```
