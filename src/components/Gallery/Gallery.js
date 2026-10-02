export function renderGallerySection() {
  const galleryImages = [
    { id: 1, src: '/images/1.jpg', alt: 'Gallery Moment 1', class: 'col-span-12 height-panoramic' },
    { id: 2, src: '/images/2.jpg', alt: 'Gallery Moment 2', class: 'col-span-6 height-tall-portrait' },
    { id: 3, src: '/images/3.jpg', alt: 'Gallery Moment 3', class: 'col-span-6 height-tall-portrait' },
    { id: 4, src: '/images/4.jpg', alt: 'Gallery Moment 4', class: 'col-span-5 height-medium-portrait' },
    { id: 8, src: '/images/8.jpg', alt: 'Gallery Moment 8', class: 'col-span-7 height-medium-landscape' },
    { id: 5, src: '/images/5.jpg', alt: 'Gallery Moment 5', class: 'col-span-12 height-widescreen' },
    { id: 6, src: '/images/6.jpg', alt: 'Gallery Moment 6', class: 'col-span-6 height-tall-portrait' },
    { id: 7, src: '/images/7.jpg', alt: 'Gallery Moment 7', class: 'col-span-6 height-tall-portrait' }
  ];

  return `
    <section id="gallerySection" class="gallery-section reveal-on-scroll" aria-label="Our Moments Gallery">
      <div class="gallery-header">
        <h2 class="gallery-title">OUR MOMENTS</h2>
        <p class="gallery-subtitle">&ldquo;A glimpse into the moments we'll cherish forever.&rdquo;</p>
        <div class="gallery-divider">
          <span class="divider-line"></span>
          <span class="divider-diamond">✦</span>
          <span class="divider-line"></span>
        </div>
      </div>

      <!-- Curated Editorial Mosaic Collage Grid (90% width container) -->
      <div class="gallery-collage-grid" id="galleryCollageGrid">
        ${galleryImages.map((img, idx) => `
          <div 
            class="gallery-item ${img.class}" 
            data-index="${idx}" 
            data-src="${img.src}" 
            data-alt="${img.alt}"
            role="button"
            tabindex="0"
            aria-label="View photo: ${img.alt}"
          >
            <img 
              src="${img.src}" 
              alt="${img.alt}" 
              class="gallery-photo" 
              loading="lazy" 
            />
          </div>
        `).join('')}
      </div>

      <!-- Lightbox Modal System -->
      <div id="galleryLightbox" class="gallery-lightbox" aria-hidden="true">
        <button id="lightboxClose" class="lightbox-close" aria-label="Close Lightbox">&times;</button>
        <div class="lightbox-content">
          <img id="lightboxImage" src="" alt="" class="lightbox-image" />
        </div>
      </div>
    </section>
  `;
}
