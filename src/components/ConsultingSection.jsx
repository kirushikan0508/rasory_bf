import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Layers, Scissors, Check, ChevronDown } from 'lucide-react';
import './ConsultingSection.css';

const steps = [
    {
        id: 1,
        title: "Consultation",
        icon: <MessageSquare size={32} />,
        shortDesc: "Understanding your vision.",
        fullDesc: "We begin with a personal consultation to understand your lifestyle, preferences, and the occasion. Whether over a coffee or in our studio, we discuss style, fit, and your unique requirements."
    },
    {
        id: 2,
        title: "Fabric Selection",
        icon: <Layers size={32} />,
        shortDesc: "Curated premium materials.",
        fullDesc: "Choose from our exclusive collection of the world's finest fabrics. We guide you through textures, weights, and patterns to find the perfect material that complements your design and purpose."
    },
    {
        id: 3,
        title: "Fitting & Delivery",
        icon: <Scissors size={32} />,
        shortDesc: "Perfecting the fit.",
        fullDesc: "Our master tailors conduct multiple fittings to ensure every millimeter is precise. The process concludes only when you are completely satisfied with the fit, comfort, and silhouette of your garment."
    }
];

const ConsultingSection = () => {
    const [activeStep, setActiveStep] = useState(null);

    const toggleStep = (index) => {
        setActiveStep(activeStep === index ? null : index);
    };

    return (
        <section id="process" className="consulting section-padding">
            <div className="premium-container">
                <motion.div
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    transition={{ duration: 0.8 }}
                    className="section-header"
                >
                    <span className="section-label">The Journey</span>
                    <h2 className="section-title">Our Tailoring Process</h2>
                    <p className="section-description">A structured journey from the initial spark of an idea to your final masterpiece.</p>
                </motion.div>

                <div className="stepper-container">
                    {/* Animated Connecting Line (Desktop) */}
                    <div className="stepper-line-container desktop-only">
                        <div className="stepper-line-bg"></div>
                        <motion.div
                            initial={{ width: 0 }}
                            whileInView={{ width: '100%' }}
                            viewport={{ once: true }}
                            transition={{ duration: 1.5, delay: 0.5 }}
                            className="stepper-line-fill"
                        ></motion.div>
                    </div>

                    <div className="steps-wrapper">
                        {steps.map((step, index) => (
                            <div
                                key={step.id}
                                className={`step-item ${activeStep === index ? 'active' : ''}`}
                                onMouseEnter={() => setActiveStep(index)}
                                onClick={() => toggleStep(index)}
                            >
                                <motion.div
                                    initial={{ scale: 0, opacity: 0 }}
                                    whileInView={{ scale: 1, opacity: 1 }}
                                    viewport={{ once: true }}
                                    transition={{ duration: 0.5, delay: index * 0.3 }}
                                    className="step-icon-wrapper"
                                >
                                    <div className="step-icon">
                                        {step.icon}
                                    </div>
                                    <div className="step-number">{step.id}</div>
                                </motion.div>

                                <div className="step-content">
                                    <h3 className="step-title">{step.title}</h3>
                                    <p className="step-short-desc">{step.shortDesc}</p>

                                    <AnimatePresence>
                                        {activeStep === index && (
                                            <motion.div
                                                initial={{ height: 0, opacity: 0 }}
                                                animate={{ height: 'auto', opacity: 1 }}
                                                exit={{ height: 0, opacity: 0 }}
                                                className="step-details"
                                            >
                                                <p>{step.fullDesc}</p>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>

                                    <ChevronDown
                                        size={20}
                                        className={`expand-icon mobile-only ${activeStep === index ? 'rotated' : ''}`}
                                    />
                                </div>
                            </div>
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
};

export default ConsultingSection;
