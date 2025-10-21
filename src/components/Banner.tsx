import React from 'react';
import banner from '@assets/images/banner_vidamax.webp';
import Navbar from './Navbar';
import '../styles/components/Banner.scss';

const Banner: React.FC = () => {
    return (
        <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
            <Navbar />
        </div>
    );
};

export default Banner;