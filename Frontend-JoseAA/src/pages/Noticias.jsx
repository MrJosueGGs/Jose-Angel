import React, { useEffect, useState } from 'react';
import api from '../api/axios';
import { Calendar, ArrowLeft } from 'lucide-react';
import { Link } from 'react-router-dom';

const Noticias = () => {
    const [noticias, setNoticias] = useState([]);

    useEffect(() => {
        api.get('noticias/')
            .then(res => setNoticias(res.data))
            .catch(err => console.error("Error al cargar noticias:", err));
    }, []);

    return (
        <div className="min-h-screen bg-[#FDFBF7] p-8">
            <div className="max-w-7xl mx-auto">
                <Link to="/" className="flex items-center gap-2 text-[#1B3A57] font-bold mb-8 hover:underline">
                    <ArrowLeft size={20} /> Volver al Inicio
                </Link>
                
                <h2 className="text-4xl font-serif font-bold text-[#1B3A57] mb-10 border-b-2 border-red-600 pb-2">
                    Cartelera Digital de Noticias
                </h2>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {noticias.length > 0 ? noticias.map(n => (
                        <div key={n.id} className="bg-white p-6 rounded-lg shadow-md border-t-4 border-blue-900">
                            <div className="flex items-center gap-2 text-red-600 text-xs font-bold mb-3">
                                <Calendar size={14} />
                                {new Date(n.fecha_creacion).toLocaleDateString()}
                            </div>
                            <h3 className="text-xl font-bold text-gray-800 mb-3">{n.titulo}</h3>
                            <p className="text-gray-600 text-sm leading-relaxed">{n.contenido}</p>
                        </div>
                    )) : (
                        <p className="text-gray-500 italic">No hay noticias publicadas actualmente.</p>
                    )}
                </div>
            </div>
        </div>
    );
};

export default Noticias;