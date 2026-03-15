import React, { useState } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { MessageSquare, Layers, Scissors, Check, ChevronDown } from 'lucide-react';
import './ConsultingSection.css';

const steps = [
    {
        id: 1,
        title: "Kennenlernen & Auswahl",
        icon: <MessageSquare size={32} />,
        shortDesc: "Wir verstehen Ihre Vision.",
        fullDesc: "Im ersten Schritt lade ich Sie zu einem entspannten Gespräch bei einer Tasse Kaffee ein. Gemeinsam klären wir Ihre Wünsche, Vorstellungen und den gewünschten Stil. Wir wählen hochwertige Stoffe, Muster und Farben aus, um die Basis für Ihr persönliches Kleidungsstück zu schaffen."
    },
    {
        id: 2,
        title: "Passform & Individualisierung",
        icon: <Layers size={32} />,
        shortDesc: "Kuratierte Premium-Materialien.",
        fullDesc: "In dieser Phase nehmen wir präzise Ihre Masse, um eine optimale Passform zu gewährleisten. Anschliessend gestalten wir die Details – Revers, Nahtfarben, Knöpfe, Innenfutter sowie besondere Wünsche wie spezielle Stickereien oder Reversformen. Gemeinsam schaffen wir ein Unikat, das perfekt auf Sie abgestimmt ist."
    },
    {
        id: 3,
        title: "Anprobe & Abschluss",
        icon: <Scissors size={32} />,
        shortDesc: "Perfektionierung der Passform.",
        fullDesc: "Bei der Anprobe prüfen wir Passform und Tragegefühl und nehmen, falls nötig, letzte Feinabstimmungen vor. Zum Abschluss runden wir Ihr Outfit mit passenden Accessoires ab, um Ihren Look individuell und stilvoll zu perfektionieren."
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
                    <p className="section-description">Mit diesem strukturierten Beratungskonzept begleiten wir Sie auf dem Weg, von der ersten Idee bis zum finalen Look.</p>
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
