import React from 'react';
import { Routes, Route } from 'react-router-dom';
import Descripcion from '@views/Descripcion';
import Planes from '@views/Planes';
import Siniestro from '@views/Siniestro';
import Condiciones from '@views/Condiciones';

const AppRoutes: React.FC = () => (
    <Routes>
        <Route path="/" element={<Descripcion />} /> {/* Ruta por defecto */}
        <Route path="/descripcion" element={<Descripcion />} />
        <Route path="/planes" element={<Planes />} />
        <Route path="/siniestro" element={<Siniestro />} />
        <Route path="/condiciones" element={<Condiciones />} />
        {/* Opcional: Ruta 404 si no coincide */}
        <Route path="*" element={<div>Página no encontrada</div>} />
    </Routes>
);

export default AppRoutes;