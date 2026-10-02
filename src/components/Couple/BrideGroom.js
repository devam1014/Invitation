import { weddingData } from '../../data/weddingData.js';

export function renderBrideGroomSection() {
  const { groom, bride } = weddingData;

  const topFlourishSvg = `
    <svg class="frame-flourish top-flourish" viewBox="0 0 40 12" fill="none" xmlns="http://www.w3.org/2000/svg">
      <path d="M20 0C22.5 4 27 6 32 6C36 6 39 4 40 2C38.5 6 34 8.5 29 8.5C25 8.5 22 7 20 12C18 7 15 8.5 11 8.5C6 8.5 1.5 6 0 2C1 4 4 6 8 6C13 6 17.5 4 20 0Z" fill="#c8a962" opacity="0.85"/>
      <circle cx="20" cy="6" r="1.5" fill="#8c6a2d"/>
    </svg>
  `;

  return `
    <section class="couple-section reveal-on-scroll" aria-label="The Couple">
      <div class="couple-header">
        <h2 class="couple-title">THE COUPLE</h2>
        <div class="couple-divider">
          <span class="divider-line"></span>
          <span class="divider-diamond">✦</span>
          <span class="divider-line"></span>
        </div>
      </div>

      <div class="couple-grid">
        <!-- GROOM (LEFT COLUMN - MANDATORY) -->
        <div class="couple-column groom-column reveal-on-scroll stagger-groom">
          <div class="portrait-frame-wrapper">
            ${topFlourishSvg}
            <div class="portrait-frame">
              <img src="${groom.image}" alt="${groom.name} - ${groom.title}" class="portrait-image" loading="lazy" />
              <div class="frame-inner-border"></div>
            </div>
          </div>
          <div class="couple-details">
            <h3 class="person-name">${groom.name}</h3>
            <p class="parent-line-1">${groom.parentsLine1}</p>
            <p class="parent-line-2">${groom.parentsLine2}</p>
          </div>
        </div>

        <!-- DELICATE CENTRAL DIVIDER -->
        <div class="center-vertical-divider" aria-hidden="true"></div>

        <!-- BRIDE (RIGHT COLUMN - MANDATORY) -->
        <div class="couple-column bride-column reveal-on-scroll stagger-bride">
          <div class="portrait-frame-wrapper">
            ${topFlourishSvg}
            <div class="portrait-frame">
              <img src="${bride.image}" alt="${bride.name} - ${bride.title}" class="portrait-image" loading="lazy" />
              <div class="frame-inner-border"></div>
            </div>
          </div>
          <div class="couple-details">
            <h3 class="person-name">${bride.name}</h3>
            <p class="parent-line-1">${bride.parentsLine1}</p>
            <p class="parent-line-2">${bride.parentsLine2}</p>
          </div>
        </div>
      </div>
    </section>
  `;
}
