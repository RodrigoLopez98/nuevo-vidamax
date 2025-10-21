import React, { useState } from 'react';
import banner from '@assets/images/banner_vidamax.webp';
import logo from '@assets/images/logo_seguros_azteca.png';
import menuIcon from '@assets/icons/menu.svg';
import '../styles/components/Banner.scss';

type MenuOption = 'Inicio' | 'Nuevos Seguros' | 'Centro de ayuda' | 'Pólizas';

const Banner: React.FC = () => {
    const [selectedOption, setSelectedOption] = useState<MenuOption>('Inicio');
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

    const menuOptions: MenuOption[] = ['Inicio', 'Nuevos Seguros', 'Centro de ayuda', 'Pólizas'];

    const handleMenuToggle = () => {
        setIsMobileMenuOpen(!isMobileMenuOpen);
    };

    const handleMenuOptionClick = (option: MenuOption) => {
        setSelectedOption(option);
        setIsMobileMenuOpen(false);
    };

    return (
        <div className="banner" style={{ backgroundImage: `url(${banner})` }}>
            <div className="banner-navbar">
                <div className="banner-navbar__logo">
                    <img src={logo} alt="Seguros Azteca" />
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
                    aria-label="Abrir menú"
                >
                    <img src={menuIcon} alt="Menú" />
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
        </div>
    );
};

export default Banner;