import React, { useState } from 'react';
import { getTexts } from '../utils/texts';
import logo from '@assets/images/logo_seguros_azteca.png';
import menuIcon from '@assets/icons/menu.svg';
import '../styles/components/Navbar.scss';

const Navbar: React.FC = () => {
    const texts = getTexts();
    const [selectedOption, setSelectedOption] = useState<string>(texts.navbar.menu.home);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuOptions = [
        texts.navbar.menu.home,
        texts.navbar.menu.newInsurance,
        texts.navbar.menu.helpCenter,
        texts.navbar.menu.policies
    ];

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMenuOptionClick = (option: string) => {
        setSelectedOption(option);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="banner-navbar">
            <div className="banner-navbar__logo">
                <img src={logo} alt="Seguros Azteca" loading="lazy" />
            </div>

            {/* Menú desktop */}
            <nav className="banner-navbar__menu banner-navbar__menu--desktop">
                {menuOptions.map((option) => (
                    <button
                        key={option}
                        className={`banner-navbar__menu-item ${selectedOption === option ? 'active' : ''}`}
                        onClick={() => setSelectedOption(option)}
                    >
                        {option}
                    </button>
                ))}
            </nav>

            {/* Botón menú móvil */}
            <button
                className="banner-navbar__menu-toggle"
                onClick={handleMenuToggle}
                aria-label={texts.navbar.mobile.menuToggle}
            >
                <img src={menuIcon} alt={texts.navbar.mobile.menuIcon} loading="lazy" />
            </button>

            {/* Menú móvil desplegable */}
            {isMobileMenuOpen && (
                <div className="banner-navbar__mobile-menu">
                    {menuOptions.map((option) => (
                        <button
                            key={option}
                            className={`banner-navbar__mobile-menu-item ${selectedOption === option ? 'active' : ''}`}
                            onClick={() => handleMenuOptionClick(option)}
                        >
                            {option}
                        </button>
                    ))}
                </div>
            )}
        </div>
    );
};

export default Navbar;

