import React, { useState } from 'react';
import '../styles/components/Accordion.scss';

interface Item { question: string; answer: React.ReactNode | string; }

interface Props { items: Item[]; }

const Accordion: React.FC<Props> = ({ items }) => {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleIndex = (index: number) => {
        setOpenIndex(prev => (prev === index ? null : index));
    };

    return (
        <div className="accordion">
            {items.map((item, index) => {
                const isOpen = openIndex === index;
                return (
                    <div key={index} className={`accordion-item${isOpen ? ' open' : ''}`}>
                        <button
                            type="button"
                            className={`accordion-header${isOpen ? ' open' : ''}`}
                            onClick={() => toggleIndex(index)}
                            aria-expanded={isOpen}
                            aria-controls={`accordion-panel-${index}`}
                            id={`accordion-header-${index}`}
                        >
                            <span className="accordion-title">{item.question}</span>
                            <span className="accordion-icon" aria-hidden>
                                {isOpen ? (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="18 15 12 9 6 15" />
                                    </svg>
                                ) : (
                                    <svg width="16" height="16" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
                                        <polyline points="6 9 12 15 18 9" />
                                    </svg>
                                )}
                            </span>
                        </button>
                        {isOpen && (
                            <div
                                id={`accordion-panel-${index}`}
                                role="region"
                                aria-labelledby={`accordion-header-${index}`}
                                className="accordion-content"
                            >
                                {typeof item.answer === 'string' ? <p>{item.answer}</p> : item.answer}
                            </div>
                        )}
                    </div>
                );
            })}
        </div>
    );
};
export default Accordion;