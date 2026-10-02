import { weddingData } from '../../data/weddingData.js';

export function renderEventsSection() {
  // Update Event 4 topPercent to 84.5% to align Event 4 Details Card perfectly with Event 4 artwork frame
  const events = weddingData.events.map(evt => {
    if (evt.id === 4) {
      return { ...evt, topPercent: '84.5' };
    }
    return evt;
  });

  // Render 4 interactive tap hotspots shifted +10px right
  const hotspotsHtml = events.map(evt => {
    const isLeft = evt.side === 'left';
    return `
      <div 
        class="event-tap-hotspot hotspot-${evt.id} ${isLeft ? 'hotspot-left' : 'hotspot-right'}"
        data-event-id="${evt.id}"
        style="top: ${evt.topPercent}%;"
        role="button"
        tabindex="0"
        aria-label="Toggle details for ${evt.title}"
      ></div>
    `;
  }).join('');

  // Render 4 EMPTY Details Cards positioned on opposite side, shifted +10px right, Event 4 UP at 84.5%
  const detailsCardsHtml = events.map(evt => {
    const oppositeSide = evt.side === 'left' ? 'details-opposite-right' : 'details-opposite-left';
    return `
      <div 
        id="eventDetailsCard-${evt.id}"
        class="event-details-card ${oppositeSide}"
        style="top: ${evt.topPercent}%;"
        data-details-id="${evt.id}"
        aria-hidden="true"
      >
        <!-- Empty Details Card surface for now -->
        <div class="details-hairline-border" aria-hidden="true"></div>
      </div>
    `;
  }).join('');

  return `
    <section id="eventsSection" class="events-section reveal-on-scroll" aria-label="Our Celebrations">
      <div class="events-header">
        <h2 class="events-title">OUR CELEBRATIONS</h2>
        <p class="events-subtitle">&ldquo;A collection of beautiful moments leading to our forever.&rdquo;</p>
        <div class="events-divider">
          <span class="divider-line"></span>
          <span class="divider-diamond">✦</span>
          <span class="divider-line"></span>
        </div>
      </div>

      <div class="events-artwork-wrapper" id="eventsArtworkWrapper">
        <!-- Core Artwork Image (Untouched Foundation) -->
        <img
          src="/images/event-card.png"
          alt="Our Celebrations Artwork"
          class="events-artwork-image"
          loading="lazy"
        />

        <!-- Interactive Tap Hotspots over event-card.png frames (+10px right shift) -->
        <div class="events-hotspots-container">
          ${hotspotsHtml}
        </div>

        <!-- Opposite Details Cards Container (+10px right shift, Event 4 UP at 84.5%) -->
        <div class="events-details-container">
          ${detailsCardsHtml}
        </div>
      </div>
    </section>
  `;
}

// Client-side interaction initializer with multi-open state support
export function initEventsInteraction() {
  const openEvents = new Set();

  const hotspots = document.querySelectorAll('.event-tap-hotspot');
  const detailsCards = document.querySelectorAll('.event-details-card');

  function toggleEvent(id) {
    const targetId = parseInt(id, 10);

    if (openEvents.has(targetId)) {
      openEvents.delete(targetId);
    } else {
      openEvents.add(targetId);
    }

    hotspots.forEach(hs => {
      const hsId = parseInt(hs.getAttribute('data-event-id'), 10);
      if (openEvents.has(hsId)) {
        hs.classList.add('active-hotspot');
      } else {
        hs.classList.remove('active-hotspot');
      }
    });

    detailsCards.forEach(card => {
      const cardId = parseInt(card.getAttribute('data-details-id'), 10);
      if (openEvents.has(cardId)) {
        card.classList.add('visible-details');
        card.setAttribute('aria-hidden', 'false');
      } else {
        card.classList.remove('visible-details');
        card.setAttribute('aria-hidden', 'true');
      }
    });
  }

  hotspots.forEach(hs => {
    hs.addEventListener('click', (e) => {
      e.stopPropagation();
      const id = hs.getAttribute('data-event-id');
      toggleEvent(id);
    });

    hs.addEventListener('keydown', (e) => {
      if (e.key === 'Enter' || e.key === ' ') {
        e.preventDefault();
        const id = hs.getAttribute('data-event-id');
        toggleEvent(id);
      }
    });
  });
}
