export function renderCoupleSection() {
  return `
    <section id="coupleSection" class="couple-section reveal-on-scroll" aria-label="The Couple">
      <div class="couple-artwork-wrapper" id="coupleArtworkWrapper">
        <!-- Core Background Artwork Image -->
        <img
          src="/images/groom-bride.jpeg"
          alt="Bride & Groom Artwork"
          class="couple-artwork-image"
          loading="lazy"
        />

        <!-- Left Portrait Frame Overlay (Naruto - Groom) -->
        <div 
          class="couple-frame-overlay frame-left clickable-photo"
          data-src="/images/naruto.jpg"
          data-alt="Naruto - Groom"
          role="button"
          tabindex="0"
          aria-label="View photo: Naruto - Groom"
        >
          <img
            src="/images/naruto.jpg"
            alt="Naruto - Groom"
            class="frame-photo"
            loading="lazy"
          />
        </div>

        <!-- Right Portrait Frame Overlay (Hinata - Bride) -->
        <div 
          class="couple-frame-overlay frame-right clickable-photo"
          data-src="/images/hinata.jpg"
          data-alt="Hinata - Bride"
          role="button"
          tabindex="0"
          aria-label="View photo: Hinata - Bride"
        >
          <img
            src="/images/hinata.jpg"
            alt="Hinata - Bride"
            class="frame-photo"
            loading="lazy"
          />
        </div>
      </div>
    </section>
  `;
}
