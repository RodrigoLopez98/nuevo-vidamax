import React from 'react';
import Accordion from '@components/Accordion';
import { getTexts } from '../utils/texts';
import '../styles/views/Descripcion.scss';

const Descripcion: React.FC = () => {
    const texts = getTexts();

    const faqs = [
        {
            question: texts.description.faqs.whatCovers.question,
            answer: (
                <div>
                    <p>{texts.description.faqs.whatCovers.answer.economicBenefit}</p>
                    <p>{texts.description.faqs.whatCovers.answer.funeralService}</p>
                    <p>{texts.description.faqs.whatCovers.answer.legalAdvice}</p>
                    <p>{texts.description.faqs.whatCovers.answer.bodyTransport}</p>
                    <p>{texts.description.faqs.whatCovers.answer.wakeRoom}</p>
                    <p>{texts.description.faqs.whatCovers.answer.burial}</p>
                    <p>{texts.description.faqs.whatCovers.answer.debtSettlement}</p>
                </div>
            )
        },
        {
            question: texts.description.faqs.howToPay.question,
            answer: texts.description.faqs.howToPay.answer
        },
        {
            question: texts.description.faqs.duration.question,
            answer: texts.description.faqs.duration.answer
        },
        {
            question: texts.description.faqs.requirements.question,
            answer: (
                <div>
                    <p>{texts.description.faqs.requirements.answer.age}</p>
                    <p>{texts.description.faqs.requirements.answer.credit}</p>
                </div>
            )
        },
        {
            question: texts.description.faqs.exclusions.question,
            answer: texts.description.faqs.exclusions.answer
        },
    ];

    return (
        <div className="descripcion">
            <h2>{texts.description.title}</h2>
            <p>{texts.description.subtitle}</p>
            <div className="faq-section">
                <Accordion items={faqs} />
            </div>
            <button className="back-button">{texts.description.backButton}</button>
        </div>
    );
};

export default Descripcion;