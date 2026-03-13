import React, { useEffect, useRef } from 'react';
import leftimg from "../../../assets/MASSKLEIDUNG/pants/Rasory Masshose 07.jpg";
import centerimg from "../../../assets/MASSKLEIDUNG/pants/Rasory Masshose 06.jpg";
import rightimg from "../../../assets/MASSKLEIDUNG/pants/Rasory Masshose 04 HOME.jpg";
import './GridImage.css';

const GridImage = () => {
  const containerRef = useRef(null);

  useEffect(() => {
    // Intersection Observer to trigger entrance animations on scroll
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            entry.target.classList.add('animate');
            // Stop observing once animated
            observer.unobserve(entry.target);
          }
        });
      },
      { threshold: 0.15 } // Trigger when 15% of the item is visible
    );

    const elements = containerRef.current.querySelectorAll('.animate-on-scroll');
    elements.forEach((el) => observer.observe(el));

    return () => observer.disconnect();
  }, []);

  return (
    <section className="trousers-grid-section">
      <div className="trousers-grid-container" ref={containerRef}>
        <div className="trousers-grid-item animate-on-scroll delay-0">
          <div className="image-wrapper">
            <img 
              src={leftimg} 
              alt="Man in burgundy suit" 
              className="grid-img"
            />
            <div className="hover-overlay">
              <span className="overlay-text">Burgundy</span>
            </div>
          </div>
        </div>

        <div className="trousers-grid-item animate-on-scroll delay-1">
          <div className="image-wrapper">
            <img 
              src={centerimg} 
              alt="Classic elegant grey suit" 
              className="grid-img"
            />
            <div className="hover-overlay">
              <span className="overlay-text">Elegant Grey</span>
            </div>
          </div>
        </div>

        <div className="trousers-grid-item animate-on-scroll delay-2">
          <div className="image-wrapper">
            <img 
              src={rightimg} 
              alt="Man leaning on pillar in beige trousers" 
              className="grid-img"
            />
            <div className="hover-overlay">
              <span className="overlay-text">Classic Beige</span>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridImage;
