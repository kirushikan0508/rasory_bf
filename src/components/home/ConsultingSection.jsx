import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Layers, Scissors, Check, ChevronDown } from 'lucide-react';
import './ConsultingSection.css';

const steps = [
    {
        id: 1,
        title: "Beratung",
        icon: <MessageSquare size={32} />,
        shortDesc: "Ihre Vision verstehen.",
        fullDesc: "Wir beginnen mit einer persönlichen Beratung, um Ihren Lebensstil, Ihre Vorlieben und den Anlass zu verstehen. Ob bei einem Kaffee oder in unserem Atelier, wir besprechen Stil, Passform und Ihre individuellen Anforderungen."
    },
    {
        id: 2,
        title: "Stoffauswahl",
        icon: <Layers size={32} />,
        shortDesc: "Kuratierte Premium-Materialien.",
        fullDesc: "Wählen Sie aus unserer exklusiven Kollektion der feinsten Stoffe der Welt. Wir führen Sie durch Texturen, Gewichte und Muster, um das perfekte Material zu finden, das Ihr Design und Ihren Zweck ergänzt."
    },
    {
        id: 3,
        title: "Anprobe & Übergabe",
        icon: <Scissors size={32} />,
        shortDesc: "Die Passform perfektionieren.",
        fullDesc: "Unsere Schneidermeister führen mehrere Anproben durch, um sicherzustellen, dass jeder Millimeter präzise ist. Der Prozess ist erst abgeschlossen, wenn Sie mit Passform, Komfort und Silhouette Ihres Kleidungsstücks vollkommen zufrieden sind."
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
                    <span className="section-label">Der Weg</span>
                    <h2 className="section-title">Unsere Beratungskonzept</h2>
                    <p className="section-description">Eine strukturierte Reise vom ersten Funken einer Idee bis zu Ihrem finalen Meisterwerk.</p>
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
