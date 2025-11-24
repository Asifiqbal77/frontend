import React from 'react';
import pic1 from './assets/pic1.avif';
import kar2 from './assets/kar2.avif';
import lah2 from './assets/lah2.avif';


function Herosection({ slides }) {

  const defaultSlides = [
    { src: pic1, alt: 'Scenic mountains and lake — Slide 1', caption: 'Explore the mountains' },
    { src: kar2, alt: 'Sunset over city skyline — Slide 2', caption: 'Explre City Lahore' },
    { src: lah2, alt: 'Coastal road with palm trees — Slide 3', caption: 'explore Karachi' },
  ];

  const carouselSlides = Array.isArray(slides) && slides.length ? slides : defaultSlides;

  return (
    <section aria-label="Hero carousel" className="hero-section">
      <div
        id="heroCarousel"
        className="carousel slide"
        data-bs-ride="carousel"
        data-bs-interval="5000"    // 5s per slide
        data-bs-pause="hover"     // pause on hover
      >
        {/* Indicators */}
        <div className="carousel-indicators">
          {carouselSlides.map((_, idx) => (
            <button
              key={idx}
              type="button"
              data-bs-target="#heroCarousel"
              data-bs-slide-to={idx}
              className={idx === 0 ? 'active' : ''}
              aria-current={idx === 0 ? 'true' : undefined}
              aria-label={`Slide ${idx + 1}`}
            />
          ))}
        </div>

        {/* Slides */}
        <div className="carousel-inner">
          {carouselSlides.map((slide, idx) => (
            <div className={`carousel-item${idx === 0 ? ' active' : ''}`} key={idx}>
              {/* Consider using <picture> with srcSet for responsive images if you provide multiple formats/sizes */}
              <img
                src={slide.src}
                className="d-block w-100"
                alt={slide.alt || `Slide ${idx + 1}`}
                loading="lazy"
                decoding="async"
                style={{ objectFit: 'cover', maxHeight: '70vh' }} // keeps tall images from stretching the page
              />
              {slide.caption && (
                <div className="carousel-caption d-none d-md-block">
                  <h3>{slide.caption}</h3>
                </div>
              )}
            </div>
          ))}
        </div>

        {/* Controls */}
        <button
          className="carousel-control-prev"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="prev"
          aria-label="Previous slide"
        >
          <span className="carousel-control-prev-icon" aria-hidden="true" />
          <span className="visually-hidden">Previous</span>
        </button>

        <button
          className="carousel-control-next"
          type="button"
          data-bs-target="#heroCarousel"
          data-bs-slide="next"
          aria-label="Next slide"
        >
          <span className="carousel-control-next-icon" aria-hidden="true" />
          <span className="visually-hidden">Next</span>
        </button>
      </div>
    </section>
  );
}

export default Herosection;
