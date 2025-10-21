import React from 'react';
import { BrowserRouter } from 'react-router-dom';
import './styles/App.scss';
import SubNavbar from '@components/SubNavbar';
import Banner from '@components/Banner';
import AppRoutes from '@routes/routes';

const App: React.FC = () => (
    <BrowserRouter>
        <div className="app">
            <Banner />
            <SubNavbar />
            <AppRoutes />
        </div>
    </BrowserRouter>
);

export default App;