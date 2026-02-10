import React, { useState } from 'react';
import api from '../api/axios';
import { Link } from 'react-router-dom';
import { ArrowLeft, UserPlus } from 'lucide-react';

const Inscripcion = () => {
    const [formData, setFormData] = useState({
        nombre_completo: '',
        cedula: '',
        seccion: ''
    });

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            await api.post('inscripciones/', formData);
            alert("¡Registro enviado con éxito! Verifique con el administrador.");
            setFormData({ nombre_completo: '', cedula: '', seccion: '' });
        } catch (err) {
            alert("Error al procesar la inscripción. Intente de nuevo.");
        }
    };

    return (
        <div className="min-h-screen bg-[#FDFBF7] p-8">
            <div className="max-w-2xl mx-auto">
                <Link to="/" className="flex items-center gap-2 text-[#1B3A57] font-bold mb-8 hover:underline">
                    <ArrowLeft size={20} /> Volver
                </Link>

                <div className="bg-white rounded-xl shadow-2xl overflow-hidden border border-gray-100">
                    <div className="bg-[#1B3A57] p-6 text-white text-center">
                        <UserPlus size={40} className="mx-auto mb-2" />
                        <h2 className="text-2xl font-serif font-bold">Planilla de Inscripción Online</h2>
                        <p className="text-blue-100 text-sm">U.E.N José Ángel Álamo</p>
                    </div>

                    <form onSubmit={handleSubmit} className="p-8 space-y-6">
                        <div>
                            <label className="block text-sm font-bold text-gray-700 mb-2">Nombre Completo del Estudiante</label>
                            <input 
                                required
                                className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-900 outline-none"
                                value={formData.nombre_completo}
                                onChange={e => setFormData({...formData, nombre_completo: e.target.value})}
                            />
                        </div>
                        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Cédula de Identidad</label>
                                <input 
                                    required
                                    className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-900 outline-none"
                                    value={formData.cedula}
                                    onChange={e => setFormData({...formData, cedula: e.target.value})}
                                />
                            </div>
                            <div>
                                <label className="block text-sm font-bold text-gray-700 mb-2">Sección / Año</label>
                                <input 
                                    required
                                    placeholder="Ej: 4to Año - B"
                                    className="w-full p-3 border rounded focus:ring-2 focus:ring-blue-900 outline-none"
                                    value={formData.seccion}
                                    onChange={e => setFormData({...formData, seccion: e.target.value})}
                                />
                            </div>
                        </div>
                        <button className="w-full bg-[#C62828] hover:bg-[#B71C1C] text-white font-bold py-4 rounded-lg shadow-lg transition transform hover:-translate-y-1">
                            Enviar Solicitud de Inscripción
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
};

export default Inscripcion;