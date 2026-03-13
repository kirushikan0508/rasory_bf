import React, { useEffect, useRef } from 'react';
import imgup from "../../../assets/Event Home Page Massanzuge/Rasory Event and Massanzuge-01.jpg";
import leftdown from "../../../assets/MASSKLEIDUNG/jacket/Rasory Masssako 05.jpg";
import centerdown from "../../../assets/MASSKLEIDUNG/jacket/Rasory Masssako 04.jpg";
import rightdown from "../../../assets/MASSKLEIDUNG/jacket/Rasory Masssako 01 HOME.jpg";
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
    <section className="grid-image-section">
      <div className="grid-image-container" ref={containerRef}>
        {/* Top Full Width Image */}
        <div className="grid-top-row animate-on-scroll delay-0">
          <div className="image-wrapper">
            <img 
              src={imgup} 
              alt="Two men in elegant white double-breasted suits" 
              className="grid-img"
            />
            <div className="hover-overlay">
              <span className="overlay-text"></span>
            </div>
          </div>
        </div>

        {/* Bottom 3 Columns Images */}
        <div className="grid-bottom-row">
          <div className="grid-item animate-on-scroll delay-1">
            <div className="image-wrapper">
              <img 
                src={leftdown} 
                alt="Man in black double-breasted suit" 
                className="grid-img"
              />
              <div className="hover-overlay">
                <span className="overlay-text"></span>
              </div>
            </div>
          </div>

          <div className="grid-item animate-on-scroll delay-2">
            <div className="image-wrapper">
              <img 
                src={centerdown} 
                alt="Man in elegant dark three-piece suit" 
                className="grid-img"
              />
              <div className="hover-overlay">
                <span className="overlay-text"></span>
              </div>
            </div>
          </div>

          <div className="grid-item animate-on-scroll delay-3">
            <div className="image-wrapper">
              <img 
                src={rightdown} 
                alt="Man adjusting tailored suit jacket" 
                className="grid-img"
              />
              <div className="hover-overlay">
                <span className="overlay-text"></span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default GridImage;
