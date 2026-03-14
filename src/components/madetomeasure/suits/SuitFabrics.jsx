import React from 'react';
import './SuitFabrics.css';

import reda from "../../../assets/download.jpg";
import logo1 from "../../../assets/Rasory And Fabric Logo - LK/Suit the fabrics/Rasory Fabric-Brand Hedva.png";
import logo2 from "../../../assets/Rasory And Fabric Logo - LK/Suit the fabrics/Rasory-Fabric-Brand-Brisbane-Moss.png";
import logo3 from "../../../assets/Rasory And Fabric Logo - LK/Suit the fabrics/Rasory-Fabric-Brand--Carnet.png";
import logo4 from "../../../assets/Rasory And Fabric Logo - LK/Suit the fabrics/Rasory-Fabric-Brand-Drago.png";
import logo5 from "../../../assets/Rasory And Fabric Logo - LK/Suit the fabrics/Rasory-Fabric-Brand--Guabello.png";
import logo6 from "../../../assets/Rasory And Fabric Logo - LK/Suit the fabrics/Rasory-Fabric-Brand-Lora-Piana.png";
import logo7 from "../../../assets/Rasory And Fabric Logo - LK/Suit the fabrics/Rasory-Fabric-Brand--Moon.png";
import logo8 from "../../../assets/Rasory And Fabric Logo - LK/Suit the fabrics/Rasory-Fabric-Brand-Paulo-de-Oliveira.png";
import logo9 from "../../../assets/Rasory And Fabric Logo - LK/Suit the fabrics/Rasory-Fabric-Brand-Reda.png";
import logo10 from "../../../assets/Rasory And Fabric Logo - LK/Suit the fabrics/Rasory-Fabric-Brand-Scabal.png";
import logo11 from "../../../assets/Rasory And Fabric Logo - LK/Suit the fabrics/Rasory-Fabric-Brand--The-British-Millerain.png";
import logo12 from "../../../assets/Rasory And Fabric Logo - LK/Suit the fabrics/Rasory-Fabric-Brand--Vitale-Barberis-Canonico.png";

const Fabric = () => {
  // Brand logos - mapping to placeholder images for now
  // In a real scenario, these would be local asset imports or CDN URLs
  const brands = [
    { id: 1, logo: logo1 },
    { id: 2, logo: logo2},
    { id: 3, logo: logo3},
    { id: 4, logo: logo4 },
    { id: 5, logo: logo5 },
    { id: 6, logo: logo6 },
    { id: 7, logo: logo7 },
    { id: 8, logo: logo8 },
    { id: 9, logo: logo9 },
    { id: 10, logo: logo10 },
    { id: 11, logo: logo11},
    { id :12, logo:logo12}
  ];

  // Double the brands to create a seamless infinite loop
  const totalBrands = [...brands, ...brands];

  return (
    <section className="fabric-section">
      <div className="fabric-header">
        <h2>Top-quality fabrics</h2>
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
