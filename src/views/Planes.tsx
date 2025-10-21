import React from 'react';
import { getTexts } from '../utils/texts';
import '../styles/views/Planes.scss';

const Planes: React.FC = () => {
    const texts = getTexts();

    return (
        <div className="planes">
            <h1>{texts.planes.title}</h1>
            <p>{texts.planes.subtitle}</p>
        </div>
    );
};

export default Planes;