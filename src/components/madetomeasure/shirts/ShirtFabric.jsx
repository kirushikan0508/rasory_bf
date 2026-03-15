import React from 'react';
import './ShirtFabric.css';
import logo1 from "../../../assets/Rasory And Fabric Logo - LK/shirt/Rasory-Fabric-Brand-Allini.png";
import logo2 from "../../../assets/Rasory And Fabric Logo - LK/shirt/Rasory-Fabric-Brand-Ctessile.png";
import logo3 from "../../../assets/Rasory And Fabric Logo - LK/shirt/Rasory-Fabric-Brand-Getzner.png";
import logo4 from "../../../assets/Rasory And Fabric Logo - LK/shirt/Rasory-Fabric-Brand-Metzeler.png";
import logo5 from "../../../assets/Rasory And Fabric Logo - LK/shirt/Rasory-Fabric-Brand-Mileta.png";


import reda from "../../../assets/download.jpg";


const Fabric = () => {
  // Brand logos - mapping to placeholder images for now
  // In a real scenario, these would be local asset imports or CDN URLs
  const brands = [
    { id: 1, logo: logo1 },
    { id: 2, logo: logo2 },
    { id: 3, logo: logo3 },
    { id: 4, logo: logo4 },
    { id: 5, logo: logo5 },
    // { id: 6, logo: "https://placehold.co/200x100/171717/C6A75E?text=CANCLINI" },
    // { id: 7, logo: "https://placehold.co/200x100/171717/C6A75E?text=THOMAS+MASON" },
    // { id: 8, logo: "https://placehold.co/200x100/171717/C6A75E?text=LORO+PIANA" },
    // { id: 9, logo: "https://placehold.co/200x100/171717/C6A75E?text=VITALE+BARBERIS" },
    // { id: 10, logo: "https://placehold.co/200x100/171717/C6A75E?text=DORMEUIL" },
    // { id: 11, logo: "https://placehold.co/200x100/171717/C6A75E?text=HOLLAND+%26+SHERRY" }
  ];

  // Double the brands to create a seamless infinite loop
  const totalBrands = [...brands, ...brands];

  return (
    <section className="fabric-section">
      <div className="fabric-header">
        <h2>Stoffe der Spitzenklasse</h2>
      </div>

      <div className="fabric-slider-container">
        <div className="fabric-track">
          {totalBrands.map((brand, index) => (
            <div className="fabric-item" key={index}>
              <div className="fabric-logo-container">
                <img 
                  src={brand.logo} 
                  alt={`Fabric Brand Logo ${index + 1}`} 
                  className="fabric-logo-img"
                  loading="lazy"
                />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Fabric;
