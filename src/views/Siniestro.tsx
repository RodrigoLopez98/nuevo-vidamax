import React, { useState } from 'react';
import Button from '@components/Button';
import Accordion from '@components/Accordion';
import { getTexts } from '../utils/texts';
import '../styles/views/Siniestro.scss';

const Siniestro: React.FC = () => {
    const [activeTab, setActiveTab] = useState('fallecimiento');
    const texts = getTexts();

    const stepsFallecimiento: React.ReactNode[] = [
        <span>{texts.siniestro.sentences.articlel}<strong>{texts.siniestro.sentences.boldBeneficiary}</strong> {texts.siniestro.sentences.sentenceOne}</span>,
        <span>{texts.siniestro.sentences.articlel}<strong>{texts.siniestro.sentences.boldExecutor}</strong> {texts.siniestro.sentences.sentenceTwo}</span>,
        <span>{texts.siniestro.sentences.articlel}<strong>{texts.siniestro.sentences.boldExecutor}</strong> {texts.siniestro.sentences.sentenceThree}</span>,
        <span>{texts.siniestro.sentences.articlel}<strong>{texts.siniestro.sentences.boldBeneficiary}</strong> {texts.siniestro.sentences.sentenceFour}</span>,
        <span>{texts.siniestro.sentences.articlel}<strong>{texts.siniestro.sentences.boldExecutor}</strong> {texts.siniestro.sentences.sentenceFive}</span>,
        <span><strong>{texts.siniestro.sentences.boldSegurosAzteca}</strong> {texts.siniestro.sentences.sentenceSix}</span>,
        <span><strong>{texts.siniestro.sentences.boldSegurosAzteca}</strong> {texts.siniestro.sentences.sentenceSeven}</span>,
    ];

    const stepsServicioFunerario: React.ReactNode[] = [
        <span>{texts.siniestro.sentences.articlel}<strong>{texts.siniestro.sentences.boldSolicitant}</strong> {texts.siniestro.sentences.sentenceEight}</span>,
        <span>{texts.siniestro.sentences.articlel}<strong>{texts.siniestro.sentences.boldExecutor}</strong> {texts.siniestro.sentences.sentenceNine}</span>,
        <span>{texts.siniestro.sentences.articlel}<strong>{texts.siniestro.sentences.boldExecutor}</strong> {texts.siniestro.sentences.sentenceTen}:
            <ul>
                <li>{texts.siniestro.funeralSteps.step3Data.deceasedName}</li>
                <li>{texts.siniestro.funeralSteps.step3Data.policyNumber}</li>
                <li>{texts.siniestro.funeralSteps.step3Data.applicantName}</li>
                <li>{texts.siniestro.funeralSteps.step3Data.contactPhones}</li>
            </ul>
        </span>,
        <span>{texts.siniestro.sentences.articlel}<strong>{texts.siniestro.sentences.boldExecutor}</strong> {texts.siniestro.sentences.sentenceEleven}<br />{texts.siniestro.funeralSteps.step4Note}</span>,
        <span>{texts.siniestro.sentences.articlel}<strong>{texts.siniestro.sentences.boldSolicitant}</strong> {texts.siniestro.sentences.sentenceTwelve}:
            <ul>
                <li>{texts.siniestro.funeralSteps.step5Docs.deathCertificate}</li>
                <li>{texts.siniestro.funeralSteps.step5Docs.idDeceased}</li>
                <li>{texts.siniestro.funeralSteps.step5Docs.receipt}</li>
            </ul>
        </span>,
    ];

    const documentosServicioFunerario = [
        {
            question: texts.siniestro.documents.funeral.title,
            answer: (
                <div>
                    <p>{texts.siniestro.documents.funeral.items.claimForm}</p>
                    <p className="doc-sub">{texts.siniestro.documents.funeral.items.claimFormType}</p>

                    <p>{texts.siniestro.documents.funeral.items.deathAct}</p>
                    <p className="doc-sub">{texts.siniestro.documents.funeral.items.deathActType}</p>

                    <p>{texts.siniestro.documents.funeral.items.healthCertificate}</p>
                    <p className="doc-sub">{texts.siniestro.documents.funeral.items.healthCertificateType}</p>

                    <p>{texts.siniestro.documents.funeral.items.insuredId}</p>
                    <p className="doc-sub">{texts.siniestro.documents.funeral.items.insuredIdType}</p>

                    <p>{texts.siniestro.documents.funeral.items.marriageAct}</p>
                    <p className="doc-sub">{texts.siniestro.documents.funeral.items.marriageActType}</p>

                    <p>{texts.siniestro.documents.funeral.items.insuredBirth}</p>
                    <p className="doc-sub">{texts.siniestro.documents.funeral.items.insuredBirthType}</p>

                    <p>{texts.siniestro.documents.funeral.items.beneficiaryBirth}</p>
                    <p className="doc-sub">{texts.siniestro.documents.funeral.items.beneficiaryBirthType}</p>

                    <p>{texts.siniestro.documents.funeral.items.beneficiaryId}</p>
                    <p className="doc-sub">{texts.siniestro.documents.funeral.items.beneficiaryIdType}</p>

                    <p>{texts.siniestro.documents.funeral.items.addressProof}</p>
                    <p className="doc-sub">{texts.siniestro.documents.funeral.items.addressProofType}</p>

                    <p>{texts.siniestro.documents.funeral.items.accidentalDeath}</p>
                    <p className="doc-sub">{texts.siniestro.documents.funeral.items.accidentalDeathType}</p>

                    <p>{texts.siniestro.documents.funeral.items.important}</p>
                </div>
            )
        }
    ];

    const documentosFallecimiento = [
        {
            question: texts.siniestro.documents.death.title,
            answer: (
                <div>
                    <p>• {texts.siniestro.documents.death.items.id}</p>
                    <p>• {texts.siniestro.documents.death.items.deathCertificate}</p>
                    <p>• {texts.siniestro.documents.death.items.curp}</p>
                    <p>• {texts.siniestro.documents.death.items.policy}</p>
                    <p>• {texts.siniestro.documents.death.items.creditProof}</p>
                </div>
            )
        }
    ];

    return (
        <div className="siniestro">
            <h1>{texts.siniestro.title}</h1>
            <p>{texts.siniestro.subtitle}</p>
            <div className="tabs">
                <Button onClick={() => setActiveTab('fallecimiento')} active={activeTab === 'fallecimiento'}>{texts.siniestro.tabs.death}</Button>
                <Button onClick={() => setActiveTab('servicio-funerario')} active={activeTab === 'servicio-funerario'}>{texts.siniestro.tabs.funeral}</Button>
            </div>
            {activeTab === 'fallecimiento' ? (
                <div className="instructions">
                    <ol className="ordered-steps">
                        {stepsFallecimiento.map((step, index) => <li key={index}>{step}</li>)}
                    </ol>
                    <p className="response-time"><strong>{texts.siniestro.responseTime}</strong></p>
                    <Accordion items={documentosFallecimiento} />
                </div>
            ) : (
                <div className="instructions">
                    <ol className="ordered-steps">
                        {stepsServicioFunerario.map((step, index) => <li key={index}>{step}</li>)}
                    </ol>
                    <Accordion items={documentosServicioFunerario} />
                </div>
            )}
        </div>
    );
};

export default Siniestro;