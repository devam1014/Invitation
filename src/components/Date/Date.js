import { weddingData } from '../../data/weddingData.js';

export function renderDateSection() {
  const { day, month, year } = weddingData.weddingDate;

  return `
    <section id="dateSection" class="date-section reveal-on-scroll" aria-label="Wedding Date Section">
      <div class="date-container">
        
        <!-- Compact Header -->
        <div class="date-header">
          <h2 class="date-title">THE DATE</h2>
          <p class="date-instruction">✦ Scratch to reveal ✦<br><span class="instruction-sub">the date</span></p>
        </div>

        <!-- Scratch Card Wrapper (Contains Date Card + Canvas Overlay) -->
        <div class="scratch-card-wrapper" id="scratchCardWrapper">
          
          <!-- Revealed Date Card Layer (Underneath Canvas) -->
          <div class="revealed-date-card" id="revealedDateCard" aria-hidden="true">
            <div class="date-card-border" aria-hidden="true"></div>
            <div class="date-col">
              <span class="date-val">${day}</span>
              <span class="date-lbl">DAY</span>
            </div>
            <div class="date-col-divider"></div>
            <div class="date-col">
              <span class="date-val">${month}</span>
              <span class="date-lbl">MONTH</span>
            </div>
            <div class="date-col-divider"></div>
            <div class="date-col">
              <span class="date-val">${year}</span>
              <span class="date-lbl">YEAR</span>
            </div>
          </div>

          <!-- Interactive Scratch Canvas Overlay -->
          <canvas 
            id="scratchCanvas" 
            class="scratch-canvas" 
            role="button" 
            tabindex="0" 
            aria-label="Scratch or press enter to reveal the wedding date"
          ></canvas>

        </div>

      </div>
    </section>
  `;
}
