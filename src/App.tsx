import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/App.scss';
import SubNavbar from '@components/SubNavbar';
import Banner from '@components/Banner';
import AppRoutes from '@routes/routes';
import familyImage from '@assets/images/imagen_familia_seguro_vida.png';

const App: React.FC = () => (
    <BrowserRouter>
        <div className="app">
            <Banner />
            <SubNavbar />
            <div className="main-content">
                <div className="content-left">
                    <AppRoutes />
                </div>
                <div className="content-right">
                    <img src={familyImage} alt="Familia sonriendo junta" className="family-image" />
                </div>
            </div>
        </div>
    </BrowserRouter>
);

export default App;