import React from 'react';
import { motion } from 'framer-motion';
import { Grid, PencilLine, Ruler } from 'lucide-react';
import './Detail.css';

const Detail = () => {
  const steps = [
    {
      icon: <Grid size={32} strokeWidth={1.5} />,
      title: "Getting to know each other & selection",
      description: "As a first step, I invite you to a relaxed chat over a cup of coffee. Together, we'll discuss your wishes, ideas, and desired style. We'll select high-quality fabrics, patterns, and colors to create the foundation for your personalized garment."
    },
    {
      icon: <PencilLine size={32} strokeWidth={1.5} />,
      title: "Fit & Customization",
      description: "In this phase, we take your precise measurements to ensure an optimal fit. We then design the details - lapels, seam colors, buttons, lining, and any special requests such as custom embroidery or lapel shapes. Together, we create a unique garment perfectly tailored to you."
    },
    {
      icon: <Ruler size={32} strokeWidth={1.5} />,
      title: "Fitting & Completion",
      description: "During the fitting, we check the fit and comfort and make any necessary final adjustments. Finally, we complete your outfit with matching accessories to perfect your look in a personal and stylish way."
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
        <h2>Our consulting concept</h2>
        <p>With this structured consulting concept, we accompany you on your journey from the initial idea to the final look.</p>
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
