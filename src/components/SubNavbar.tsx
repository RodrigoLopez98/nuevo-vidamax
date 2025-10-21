import React from 'react';
import { NavLink } from 'react-router-dom';
import '../styles/components/SubNavbar.scss';
import pulseIcon from '../assets/icons/pulse.svg';

const SubNavbar: React.FC = () => (
    <div className="sub-navbar-container">
        <nav className="breadcrumb">
            <span>Inicio</span>
            <span>/</span>
            <span>Nuestros Seguros</span>
            <span>/</span>
            <span>Nuevo Vidamax</span>
        </nav>

        <div className="sub-navbar-header">
            <div className="icon-container">
                <img src={pulseIcon} alt="Pulse icon" />
            </div>
            <h2 className="title">Nuevo Vidamax</h2>
        </div>

        <nav className="sub-navbar">
            <NavLink to="/descripcion" className={({ isActive }) => isActive ? "active" : ""}>Descripción</NavLink>
            <NavLink to="/planes" className={({ isActive }) => isActive ? "active" : ""}>Planes</NavLink>
            <NavLink to="/siniestro" className={({ isActive }) => isActive ? "active" : ""}>¿Tienes un siniestro?</NavLink>
            <NavLink to="/condiciones" className={({ isActive }) => isActive ? "active" : ""}>Condiciones</NavLink>
        </nav>
    </div>
);

export default SubNavbar;