import React from 'react';
import { NavLink } from 'react-router-dom';
import { getTexts } from '../utils/texts';
import '../styles/components/SubNavbar.scss';
import pulseIcon from '../assets/icons/pulse.svg';

const SubNavbar: React.FC = () => {
    const texts = getTexts();

    return (
        <div className="sub-navbar-container">
            <nav className="breadcrumb">
                <span>{texts.navbar.breadcrumb.home}</span>
                <span>/</span>
                <span>{texts.navbar.breadcrumb.insurance}</span>
                <span>/</span>
                <span>{texts.navbar.breadcrumb.vidamax}</span>
            </nav>

            <div className="sub-navbar-header">
                <div className="icon-container">
                    <img src={pulseIcon} alt="Pulse icon" loading="lazy" />
                </div>
                <h2 className="title">{texts.app.title}</h2>
            </div>

            <nav className="sub-navbar">
                <NavLink to="/descripcion" className={({ isActive }) => isActive ? "active" : ""}>{texts.navbar.tabs.description}</NavLink>
                <NavLink to="/planes" className={({ isActive }) => isActive ? "active" : ""}>{texts.navbar.tabs.plans}</NavLink>
                <NavLink to="/siniestro" className={({ isActive }) => isActive ? "active" : ""}>{texts.navbar.tabs.claim}</NavLink>
                <NavLink to="/condiciones" className={({ isActive }) => isActive ? "active" : ""}>{texts.navbar.tabs.conditions}</NavLink>
            </nav>
        </div>
    );
};

export default SubNavbar;