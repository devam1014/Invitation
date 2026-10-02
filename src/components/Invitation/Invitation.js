export function renderInvitationSection() {
  return `
    <section id="invitationCardSection" class="invitation-card-section reveal-on-scroll" aria-label="Invitation Card">
      <div class="invitation-card-artwork-wrapper" id="invitationCardArtworkWrapper">
        <!-- Core Background Artwork Image -->
        <img
          src="/images/invitation.png"
          alt="Invitation Background Artwork"
          class="invitation-card-artwork-image"
          loading="lazy"
        />

        <!-- Content Layer Above Artwork (Empty for now) -->
        <div class="invitation-card-content-layer" id="invitationCardContentLayer">
          <!-- Future invitation content will be placed here -->
        </div>
      </div>
    </section>
  `;
}
