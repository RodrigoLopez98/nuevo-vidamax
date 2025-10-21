import React from 'react';
import { getTexts } from '../utils/texts';
import '../styles/views/Condiciones.scss';

const Condiciones: React.FC = () => {
    const texts = getTexts();

    return (
        <div className="condiciones">
            <h1>{texts.condiciones.title}</h1>
            <p>{texts.condiciones.subtitle}</p>
        </div>
    );
};

export default Condiciones;