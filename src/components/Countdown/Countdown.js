import { weddingData } from '../../data/weddingData.js';

export function renderCountdownSection() {
  const { targetTimestamp } = weddingData.weddingDate;

  return `
    <section id="countdownSection" class="countdown-section reveal-on-scroll" aria-label="Countdown Section">
      <div class="countdown-container">
        
        <!-- Compact Header -->
        <div class="countdown-header">
          <h2 class="countdown-title">THE COUNTDOWN</h2>
          <p class="countdown-subtitle">✦ Until our special day ✦</p>
        </div>

        <!-- Countdown Card Container -->
        <div class="countdown-card" id="countdownCard">
          <div class="countdown-card-border" aria-hidden="true"></div>

          <!-- Dynamic Active Countdown Layer -->
          <div class="countdown-active-layer" id="countdownActiveLayer">
            <div class="countdown-col">
              <span class="countdown-val" id="countdownDays">00</span>
              <span class="countdown-lbl">DAYS</span>
            </div>
            <div class="countdown-col-divider"></div>
            <div class="countdown-col">
              <span class="countdown-val" id="countdownHours">00</span>
              <span class="countdown-lbl">HRS</span>
            </div>
            <div class="countdown-col-divider"></div>
            <div class="countdown-col">
              <span class="countdown-val" id="countdownMinutes">00</span>
              <span class="countdown-lbl">MIN</span>
            </div>
            <div class="countdown-col-divider"></div>
            <div class="countdown-col">
              <span class="countdown-val" id="countdownSeconds">00</span>
              <span class="countdown-lbl">SEC</span>
            </div>
          </div>

          <!-- Permanent "WE ARE MARRIED" Layer (Shown when target date reached) -->
          <div class="countdown-married-layer" id="countdownMarriedLayer" style="display: none;" aria-hidden="true">
            <div class="married-diamonds">✦ ✦ ✦</div>
            <h3 class="married-title">WE ARE MARRIED</h3>
            <p class="married-sub">Our forever has begun.</p>
            <div class="married-diamonds">✦ ✦ ✦</div>
          </div>

        </div>

      </div>
    </section>
  `;
}
