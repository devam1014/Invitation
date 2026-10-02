import { weddingData } from '../../data/weddingData.js';

export function renderVenueSection() {
  const { name, shortAddress, fullAddressLines } = weddingData.venue;

  return `
    <section id="venueSection" class="venue-section reveal-on-scroll" aria-label="The Venue">
      <div class="venue-container">
        
        <!-- Compact Title -->
        <div class="venue-header">
          <h2 class="venue-title">THE VENUE</h2>
          <div class="venue-divider">
            <span class="divider-line"></span>
            <span class="divider-diamond">✦</span>
            <span class="divider-line"></span>
          </div>
        </div>

        <!-- 3D Flip Card Perspective Container -->
        <div class="venue-card-perspective">
          <div class="venue-card-inner" id="venueCardInner">
            
            <!-- FRONT FACE of Card (with new address.png background artwork) -->
            <div class="venue-card-face venue-card-front">
              <h3 class="venue-name">${name}</h3>
              <p class="venue-address-text">${shortAddress}</p>
              <button 
                id="showFullAddressBtn" 
                class="venue-toggle-btn"
                type="button"
                aria-label="Show full venue address"
              >
                SHOW FULL ADDRESS
              </button>
            </div>

            <!-- BACK FACE of Card (with full-address.png background artwork) -->
            <div class="venue-card-face venue-card-back">
              <h3 class="venue-name">${name}</h3>
              <div class="venue-full-lines">
                ${fullAddressLines.map(line => `<p class="venue-address-line">${line}</p>`).join('')}
              </div>
              <button 
                id="hideFullAddressBtn" 
                class="venue-toggle-btn"
                type="button"
                aria-label="Hide full venue address"
              >
                HIDE FULL ADDRESS
              </button>
            </div>

          </div>
        </div>

      </div>
    </section>
  `;
}
