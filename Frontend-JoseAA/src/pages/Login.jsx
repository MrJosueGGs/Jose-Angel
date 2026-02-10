import api from '../api/axios';
import React, { useState } from "react";
import {
  LayoutDashboard,
  FileText,
  Upload,
  LogOut,
  Plus,
  Trash2,
  Bell,
  Search,
  User,
  CheckCircle,
  X,
  Image as ImageIcon, 
  Bold,
  Italic,
  List,
  Link as LinkIcon,
  AlignLeft
} from "lucide-react";


const theme = {
  primary: "bg-[#1B3A57]",
  primaryText: "text-[#1B3A57]",
  accent: "bg-[#C62828]",
  accentHover: "hover:bg-[#B71C1C]",
  accentText: "text-[#C62828]",
  bgLight: "bg-[#FDFBF7]",
};

const logoUrl = "https://i.imgur.com/1tbjjyM.png"; 

const SchoolAdmin = () => {
  const [isLoggedIn, setIsLoggedIn] = useState(false);
  const [activeTab, setActiveTab] = useState("dashboard"); 

  
  if (!isLoggedIn) {
    return <AdminLogin onLogin={() => setIsLoggedIn(true)} />;
  }

  return (
    <div className={`flex h-screen ${theme.bgLight} font-sans`}>
      {/* SIDEBAR */}
      <aside className={`w-64 ${theme.primary} text-white flex flex-col shadow-2xl`}>
        <div className="p-6 flex flex-col items-center border-b border-blue-900">
          <img src={logoUrl} alt="Logo" className="w-16 h-16 object-contain mb-3 bg-white rounded-full p-1" />
          <h2 className="font-serif font-bold text-lg tracking-wide">Panel Administrativo</h2>
          <p className="text-xs text-blue-200">U.E.N José Ángel Álamo</p>
        </div>

        <nav className="flex-1 py-6 space-y-2 px-4">
          <SidebarItem 
            icon={<LayoutDashboard size={20} />} 
            text="Vista General" 
            active={activeTab === "dashboard"} 
            onClick={() => setActiveTab("dashboard")} 
          />
          <SidebarItem 
            icon={<Bell size={20} />} 
            text="Noticias y Anuncios" 
            active={activeTab === "news"} 
            onClick={() => setActiveTab("news")} 
          />
          <SidebarItem 
            icon={<FileText size={20} />} 
            text="Gestión de Archivos" 
            active={activeTab === "files"} 
            onClick={() => setActiveTab("files")} 
          />
        </nav>

        <div className="p-4 border-t border-blue-900">
          <button 
            onClick={() => setIsLoggedIn(false)}
            className="flex items-center gap-3 w-full px-4 py-3 text-red-300 hover:bg-blue-900 rounded transition-colors"
          >
            <LogOut size={20} />
            <span>Cerrar Sesión</span>
          </button>
        </div>
      </aside>

      {/* MAIN CONTENT */}
      <main className="flex-1 flex flex-col overflow-hidden">
        {/* Top Header */}
        <header className="h-16 bg-white shadow-sm border-b border-gray-200 flex justify-between items-center px-8">
          <h2 className={`text-2xl font-serif font-bold ${theme.primaryText}`}>
            {activeTab === "dashboard" && "Bienvenido, Administrador"}
            {activeTab === "news" && "Gestor de Noticias"}
            {activeTab === "files" && "Archivos y Planillas"}
          </h2>
          <div className="flex items-center gap-4">
            <div className="flex items-center gap-2 bg-gray-100 px-3 py-1.5 rounded-full">
              <div className="w-8 h-8 rounded-full bg-[#1B3A57] text-white flex items-center justify-center">
                <User size={16} />
              </div>
              <span className="text-sm font-medium text-gray-700 pr-2">Admin User</span>
            </div>
          </div>
        </header>

        {/* Content Area */}
        <div className="flex-1 overflow-y-auto p-8">
          {activeTab === "dashboard" && <DashboardHome changeTab={setActiveTab} />}
          {activeTab === "news" && <NewsManager />}
          {activeTab === "files" && <FilesManager />}
        </div>
      </main>
    </div>
  );
};



// 1. PANTALLA DE LOGIN
const handleSubmit = async (e) => {
  e.preventDefault();
  try {
    const response = await api.post('api/auth/login/', {
      username: email, // Django usa username
      password: password
    });
    
    // Guardamos el token para que axios lo use en todas las peticiones
    localStorage.setItem('access', response.data.access);
    onLogin(); // Activa el dashboard
  } catch (err) {
    alert("Usuario o clave incorrectos");
  }


  return (
    <div className={`min-h-screen flex items-center justify-center ${theme.primary} relative overflow-hidden`}>
       {/* Background pattern decorative */}
       <div className="absolute inset-0 opacity-10" style={{backgroundImage: 'radial-gradient(#ffffff 1px, transparent 1px)', backgroundSize: '30px 30px'}}></div>
       
      <div className="bg-white p-8 rounded-lg shadow-2xl w-full max-w-md z-10 animate-fade-in-up">
        <div className="text-center mb-8">
          <img src={logoUrl} alt="Logo" className="w-20 h-20 mx-auto mb-4 object-contain" />
          <h2 className={`text-3xl font-serif font-bold ${theme.primaryText}`}>Acceso Administrativo</h2>
          <p className="text-gray-500 text-sm mt-2">Ingrese sus credenciales para gestionar el sitio</p>
        </div>
        
        <form onSubmit={handleSubmit} className="space-y-6">
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Correo Institucional</label>
            <input 
              type="email" 
              required
              className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#1B3A57] focus:ring-1 focus:ring-[#1B3A57] outline-none transition"
              placeholder="admin@colegio.edu.ve"
            />
          </div>
          <div>
            <label className="block text-sm font-bold text-gray-700 mb-2">Contraseña</label>
            <input 
              type="password" 
              required
              className="w-full px-4 py-3 rounded border border-gray-300 focus:border-[#1B3A57] focus:ring-1 focus:ring-[#1B3A57] outline-none transition"
              placeholder="••••••••"
            />
          </div>
          <button 
            type="submit"
            className={`w-full ${theme.primary} hover:bg-[#132a40] text-white font-bold py-3 rounded transition shadow-lg`}
          >
            Iniciar Sesión
          </button>
        </form>
        <div className="mt-6 text-center text-xs text-gray-400">
          U.E.N José Ángel Álamo • Panel de Control
        </div>
      </div>
    </div>
  );
};

// 2. DASHBOARD HOME (VISTA GENERAL)
const DashboardHome = ({ changeTab }) => {
  return (
    <div className="space-y-8">
      {/* Stats Cards */}
      <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-blue-900 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-bold uppercase">Noticias Publicadas</p>
            <h3 className="text-3xl font-bold text-gray-800">12</h3>
          </div>
          <div className="bg-blue-50 p-3 rounded-full text-blue-900"><Bell size={24}/></div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-red-600 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-bold uppercase">Archivos PDF</p>
            <h3 className="text-3xl font-bold text-gray-800">5</h3>
          </div>
          <div className="bg-red-50 p-3 rounded-full text-red-600"><FileText size={24}/></div>
        </div>
        <div className="bg-white p-6 rounded-lg shadow border-l-4 border-green-600 flex items-center justify-between">
          <div>
            <p className="text-gray-500 text-sm font-bold uppercase">Estado del Sistema</p>
            <h3 className="text-xl font-bold text-green-600">Activo</h3>
          </div>
          <div className="bg-green-50 p-3 rounded-full text-green-600"><CheckCircle size={24}/></div>
        </div>
      </div>

      {/* Quick Actions */}
      <div className="bg-white rounded-lg shadow p-8">
        <h3 className="text-xl font-serif font-bold text-gray-800 mb-6 border-b pb-2">Acciones Rápidas</h3>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          <div 
            onClick={() => changeTab("news")}
            className="group cursor-pointer border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center hover:border-blue-900 hover:bg-blue-50 transition-all"
          >
            <div className="bg-blue-100 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <Plus size={32} className="text-blue-900" />
            </div>
            <h4 className="font-bold text-lg text-gray-700">Crear Nueva Noticia</h4>
            <p className="text-sm text-center text-gray-500 mt-2">Redactar un anuncio para la página principal</p>
          </div>

          <div 
            onClick={() => changeTab("files")}
            className="group cursor-pointer border-2 border-dashed border-gray-300 rounded-xl p-8 flex flex-col items-center justify-center hover:border-red-600 hover:bg-red-50 transition-all"
          >
            <div className="bg-red-100 p-4 rounded-full mb-4 group-hover:scale-110 transition-transform">
              <Upload size={32} className="text-red-600" />
            </div>
            <h4 className="font-bold text-lg text-gray-700">Subir Planilla PDF</h4>
            <p className="text-sm text-center text-gray-500 mt-2">Cargar constancias o formularios de inscripción</p>
          </div>
        </div>
      </div>
    </div>
  );
};

// 3. GESTOR DE NOTICIAS
const NewsManager = () => {
  // Datos simulados locales para el ejemplo
  const [posts, setPosts] = useState([
    { id: 1, title: "Inicio Inscripción 2024", date: "2024-02-05", category: "Administrativo" },
    { id: 2, title: "Suspensión Mantenimiento", date: "2024-02-01", category: "Urgente" },
  ]);

  return (
    <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
      {/* Formulario (Lado Izquierdo) */}
      <div className="lg:col-span-2 space-y-6">
        <div className="bg-white p-6 rounded-lg shadow-md">
          <h3 className="text-lg font-serif font-bold text-gray-800 mb-6 flex items-center gap-2">
            <Plus size={20} className="text-red-600" /> Redactar Noticia
          </h3>
          <form className="space-y-4">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Título</label>
                <input type="text" className="w-full p-2 border rounded focus:ring-1 focus:ring-blue-900 outline-none" placeholder="Ej: Reunion de Padres" />
              </div>
              <div>
                <label className="block text-sm font-semibold text-gray-700 mb-1">Categoría</label>
                <select className="w-full p-2 border rounded focus:ring-1 focus:ring-blue-900 outline-none">
                   <option>General</option>
                   <option>Anuncio</option>
                   <option>Administrativo</option>
                   <option>Deportes</option>
                   <option>Urgente</option>
                </select>
              </div>
            </div>
            <div>
               <label className="block text-sm font-semibold text-gray-700 mb-1">Imagen de Portada (URL)</label>
               <div className="flex gap-2">
                 <input type="text" className="w-full p-2 border rounded focus:ring-1 focus:ring-blue-900 outline-none" placeholder="https://..." />
                 <button type="button" className="bg-gray-200 px-4 rounded text-sm font-bold text-gray-600">Subir</button>
               </div>
            </div>
            <div>
              <label className="block text-sm font-semibold text-gray-700 mb-1">Contenido</label>
              <textarea rows="6" className="w-full p-2 border rounded focus:ring-1 focus:ring-blue-900 outline-none" placeholder="Escriba aquí el contenido del anuncio..."></textarea>
            </div>
            <div className="pt-4 flex justify-end gap-3">
              <button type="button" className="px-6 py-2 border border-gray-300 rounded text-gray-600 hover:bg-gray-50">Cancelar</button>
              <button type="submit" className={`${theme.primary} text-white px-6 py-2 rounded hover:opacity-90 font-bold`}>Publicar Noticia</button>
            </div>
          </form>
        </div>
      </div>

      {/* Lista lateral (Lado Derecho) */}
      <div className="lg:col-span-1">
        <div className="bg-white p-6 rounded-lg shadow-md h-full">
           <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">Publicaciones Recientes</h3>
           <div className="space-y-4">
             {posts.map(post => (
               <div key={post.id} className="p-4 border border-gray-100 rounded-lg bg-gray-50 hover:bg-white hover:shadow-md transition group relative">
                 <div className="flex justify-between items-start mb-1">
                    <span className="text-xs font-bold text-red-600 uppercase">{post.category}</span>
                    <span className="text-xs text-gray-400">{post.date}</span>
                 </div>
                 <h4 className="font-bold text-[#1B3A57] text-sm leading-tight">{post.title}</h4>
                 
                 <div className="absolute top-2 right-2 opacity-0 group-hover:opacity-100 transition-opacity flex gap-1">
                    <button className="p-1 bg-white text-red-600 rounded shadow hover:bg-red-50" title="Eliminar"><Trash2 size={14}/></button>
                 </div>
               </div>
             ))}
           </div>
        </div>
      </div>
    </div>
  );
};

// 4. GESTOR DE ARCHIVOS
const FilesManager = () => {
  const [files, setFiles] = useState([
    { id: 1, name: "Planilla_Preinscripcion_2024.pdf", size: "1.2 MB", type: "PDF" },
    { id: 2, name: "Constancia_Estudios_Modelo.pdf", size: "800 KB", type: "PDF" },
    { id: 3, name: "Lista_Utiles_1er_Ano.pdf", size: "2.4 MB", type: "PDF" },
  ]);

  return (
    <div className="bg-white rounded-lg shadow-md flex flex-col h-full">
      {/* Area de Subida */}
      <div className="p-8 border-b border-gray-200 bg-gray-50">
         <div className="border-2 border-dashed border-gray-300 rounded-lg p-8 flex flex-col items-center justify-center text-center bg-white hover:border-blue-900 transition-colors cursor-pointer">
            <Upload size={48} className="text-gray-300 mb-4" />
            <h3 className="text-lg font-bold text-gray-700">Arrastra archivos aquí o haz clic para subir</h3>
            <p className="text-sm text-gray-500 mt-2">Solo archivos PDF. Máximo 10MB.</p>
            <button className={`mt-6 ${theme.accent} text-white px-6 py-2 rounded-full text-sm font-bold hover:opacity-90 transition`}>
              Seleccionar Archivo
            </button>
         </div>
      </div>

      {/* Tabla de Archivos */}
      <div className="p-6 flex-1">
        <h3 className="text-lg font-serif font-bold text-gray-800 mb-4">Archivos Disponibles para Descarga</h3>
        <div className="overflow-x-auto">
          <table className="w-full text-left border-collapse">
            <thead>
              <tr className="border-b-2 border-gray-100 text-xs uppercase tracking-wider text-gray-500">
                <th className="pb-3 pl-2">Nombre del Archivo</th>
                <th className="pb-3">Tipo</th>
                <th className="pb-3">Tamaño</th>
                <th className="pb-3 text-right">Acciones</th>
              </tr>
            </thead>
            <tbody className="text-sm text-gray-600">
              {files.map(file => (
                <tr key={file.id} className="border-b border-gray-50 hover:bg-blue-50 transition-colors">
                  <td className="py-4 pl-2 font-medium text-[#1B3A57] flex items-center gap-2">
                    <FileText size={16} className="text-red-500"/>
                    {file.name}
                  </td>
                  <td className="py-4">{file.type}</td>
                  <td className="py-4">{file.size}</td>
                  <td className="py-4 text-right">
                    <button className="text-red-500 hover:text-red-700 font-bold text-xs bg-red-50 px-3 py-1 rounded-full">
                      Eliminar
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      </div>
    </div>
  );
};

// Componente auxiliar de Sidebar
const SidebarItem = ({ icon, text, active, onClick }) => (
  <button 
    onClick={onClick}
    className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg transition-all duration-200 mb-1
      ${active 
        ? "bg-white/10 text-white font-bold border-l-4 border-[#C62828]" 
        : "text-blue-100 hover:bg-white/5 hover:text-white"
      }
    `}
  >
    {icon}
    <span className="tracking-wide text-sm">{text}</span>
  </button>
);

export default SchoolAdmin;