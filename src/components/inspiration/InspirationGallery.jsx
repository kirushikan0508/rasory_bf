import React, { useEffect, useRef } from 'react';
import './InspirationGallery.css';
import gallery1 from "../../assets/Inspiration/Rasory Inspiration 01.jpg";
import gallery2 from "../../assets/Inspiration/Rasory Inspiration 02.jpg";
import gallery3 from "../../assets/Inspiration/Rasory Inspiration 03.jpg";
import gallery4 from "../../assets/Inspiration/Rasory Inspiration 04.jpg";
import gallery5 from "../../assets/Inspiration/Rasory Inspiration 05.jpg";
import gallery6 from "../../assets/Inspiration/Rasory Inspiration 06.jpg";
import gallery7 from "../../assets/Inspiration/Rasory Inspiration 07.jpg";
import gallery8 from "../../assets/Inspiration/Rasory Inspiration 08.jpg";
import gallery9 from "../../assets/Inspiration/Rasory Inspiration 09.jpg";
import gallery10 from "../../assets/Inspiration/Rasory Inspiration 10.jpg";

const InspirationGallery = () => {
    const fadeRefs = useRef([]);

    useEffect(() => {
        const observer = new IntersectionObserver(
            (entries) => {
                entries.forEach((entry) => {
                    if (entry.isIntersecting) {
                        entry.target.classList.add('visible');
                    }
                });
            },
            { threshold: 0.1 }
        );

        fadeRefs.current.forEach((el) => {
            if (el) observer.observe(el);
        });

        return () => observer.disconnect();
    }, []);

    const addRef = (el) => {
        if (el && !fadeRefs.current.includes(el)) {
            fadeRefs.current.push(el);
        }
    };

        const galleryImages = [
           { src: gallery1, alt: "Rasory Inspiration 01", size: "tall" },
           { src: gallery2, alt: "Rasory Inspiration 02", size: "normal" },
           { src: gallery3, alt: "Rasory Inspiration 03", size: "wide" },
           { src: gallery4, alt: "Rasory Inspiration 04", size: "normal" },
           { src: gallery5, alt: "Rasory Inspiration 05", size: "tall" },
           { src: gallery6, alt: "Rasory Inspiration 06", size: "normal" },
           { src: gallery7, alt: "Rasory Inspiration 07", size: "normal" },
           { src: gallery8, alt: "Rasory Inspiration 08", size: "normal" },
           { src: gallery9, alt: "Rasory Inspiration 09", size: "normal" },
           { src: gallery10, alt: "Rasory Inspiration 10", size: "wide" }
        ];

    // const galleryImages = [
    //     { src: 'https://images.unsplash.com/photo-1507679799987-c73779587ccf?auto=format&fit=crop&q=80&w=600', alt: 'Navy suit style', size: 'tall' },
    //     { src: 'https://images.unsplash.com/photo-1593032465175-481ac7f401a0?auto=format&fit=crop&q=80&w=600', alt: 'Tailor fitting', size: 'normal' },
    //     { src: 'https://images.unsplash.com/photo-1594938298596-f9fe3195ed84?auto=format&fit=crop&q=80&w=600', alt: 'Formal suit', size: 'wide' },
    //     { src: 'https://images.unsplash.com/photo-1617137968427-85924c800a22?auto=format&fit=crop&q=80&w=600', alt: 'Casual elegance', size: 'normal' },
    //     { src: 'https://images.unsplash.com/photo-1594938291221-94f18cbb5660?auto=format&fit=crop&q=80&w=600', alt: 'Classic trousers', size: 'tall' },
    //     { src: 'https://images.unsplash.com/photo-1593030761757-71fae45fa0e7?auto=format&fit=crop&q=80&w=600', alt: 'Business shirt', size: 'normal' },
    //     { src: 'https://images.unsplash.com/photo-1583743814966-8936f5b7be1a?auto=format&fit=crop&q=80&w=600', alt: 'Walking style', size: 'normal' },
    //     { src: 'https://images.unsplash.com/photo-1544441893-675973e31985?auto=format&fit=crop&q=80&w=600', alt: 'Accessories detail', size: 'normal' },
    //     { src: 'https://images.unsplash.com/photo-1584324204369-0268ec3b71eb?auto=format&fit=crop&q=80&w=600', alt: 'Watch and cuff', size: 'normal' },
    // ];

    return (
        <section className="insp-gallery-section">
            <div className="insp-gallery-container">
                <div className="insp-masonry-grid">
                    {galleryImages.map((img, i) => (
                        <div
                            className={`insp-masonry-item insp-size-${img.size}`}
                            key={i}
                            ref={addRef}
                            style={{ transitionDelay: `${i * 0.08}s` }}
                        >
                            <img src={img.src} alt={img.alt} />
                            <div className="insp-img-overlay"></div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default InspirationGallery;
