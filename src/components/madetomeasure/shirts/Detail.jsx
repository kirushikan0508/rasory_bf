import React from 'react';
import { motion } from 'framer-motion';
import { Grid, PencilLine, Ruler } from 'lucide-react';
import './Detail.css';

const Detail = () => {
  const steps = [
    {
      icon: <Grid size={32} strokeWidth={1.5} />,
      title: "Kennenlernen & Auswahl",
      description: "Als ersten Schritt lade ich Sie zu einem entspannten Gespräch bei einer Tasse Kaffee ein. Gemeinsam besprechen wir Ihre Wünsche, Vorstellungen und den gewünschten Stil. Wir wählen hochwertige Stoffe, Muster und Farben aus, um die Basis für Ihr persönliches Kleidungsstück zu schaffen."
    },
    {
      icon: <PencilLine size={32} strokeWidth={1.5} />,
      title: "Passform & Individualisierung",
      description: "In dieser Phase nehmen wir Ihre genauen Masse auf, um eine optimale Passform zu gewährleisten. Danach gestalten wir die Details – Revers, Nahtfarben, Knöpfe, Innenfutter sowie spezielle Wünsche wie individuelle Stickereien oder Reversformen. Gemeinsam kreieren wir ein einzigartiges, perfekt auf Sie zugeschnittenes Kleidungsstück."
    },
    {
      icon: <Ruler size={32} strokeWidth={1.5} />,
      title: "Anprobe & Fertigstellung",
      description: "Bei der Anprobe überprüfen wir Passform und Komfort und nehmen bei Bedarf letzte Anpassungen vor. Abschliessend vervollständigen wir Ihr Outfit mit passenden Accessoires, um Ihren Look persönlich und stilvoll zu perfektionieren."
    }
  ];

  return (
    <section className="shirt-detail-section">
      <motion.div
        className="shirt-detail-header"
        initial={{ opacity: 0, y: 30 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.8 }}
      >
        <h2>Unser Beratungskonzept</h2>
        <p>Mit diesem strukturierten Beratungskonzept begleiten wir Sie auf Ihrem Weg von der ersten Idee bis zum finalen Look.</p>
      </motion.div>

      <div className="shirt-detail-grid">
        {steps.map((step, index) => (
          <motion.div
            key={index}
            className="shirt-detail-item"
            initial={{ opacity: 0, y: 40 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.8, delay: index * 0.2 }}
          >
            <div className="shirt-detail-icon-wrapper">
              {step.icon}
            </div>
            <h3>{step.title}</h3>
            <p>{step.description}</p>
          </motion.div>
        ))}
      </div>
    </section>
  );
};

export default Detail;
