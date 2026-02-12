import React, { useEffect } from "react";
import { Link } from "react-router-dom";

import Navbar from "../components/Navbar";
import {
  Facebook,
  FileText,
  CheckCircle,
  CreditCard,
  Bell,
  Download,
  ArrowRight,
  ChevronRight
} from "lucide-react";

const AdmissionsPage = () => {

  useEffect(() => {
    window.scrollTo(0, 0);
  }, []);

  const logoUrl = "https://i.imgur.com/1tbjjyM.png";
  const headerBg = "https://images.unsplash.com/photo-1454165804606-c3d57bc86b40?auto=format&fit=crop&q=80&w=1600";

  const theme = {
    primary: "bg-[#1B3A57]",
    primaryText: "text-[#1B3A57]",
    accent: "bg-[#C62828]",
    accentHover: "hover:bg-[#B71C1C]",
    accentText: "text-[#C62828]",
    lightBg: "bg-[#FDFBF7]",
  };

  return (
    <div className={`min-h-screen ${theme.lightBg} font-sans text-gray-800`}>
      

      <Navbar />

      {/* HEADER */}
      <header className="relative h-[350px] flex items-center justify-center overflow-hidden">
        <div className="absolute inset-0 z-0">
          <img
            src={headerBg}
            alt="Oficina administrativa"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-[#1B3A57]/90"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto mt-16">
          <h1 className="text-3xl md:text-5xl font-serif font-bold mb-4 tracking-wide">
            Gestión de Trámites e Inscripción
          </h1>
          <p className="text-gray-300 font-serif text-lg md:text-xl max-w-2xl mx-auto">
            Guía paso a paso para formar parte de nuestra comunidad educativa
          </p>
        </div>
      </header>

      {/* CONTENIDO PRINCIPAL */}
      <main className="max-w-5xl mx-auto px-6 py-16">
        
        {/* Introducción */}
        <section className="mb-16 text-center">
          <p className="text-lg text-gray-700 leading-relaxed font-serif max-w-3xl mx-auto">
            Estamos encantados de recibir a nuestros estudiantes nuevos y
            regulares en la gran familia de la Unidad Educativa Nacional José
            Ángel Álamo. Sabemos que el proceso de inscripción puede parecer
            abrumador en ocasiones, pero estamos aquí para hacerlo lo más
            sencillo y eficiente posible. A continuación, le presentamos una
            guía para que pueda inscribirse con éxito y facilidad.
          </p>
          <div className="mt-8 flex justify-center gap-2">
            <span className="h-2 w-16 bg-[#C62828] rounded-full"></span>
          </div>
        </section>

        {/* Pasos */}
        <div className="relative border-l-4 border-gray-200 ml-4 md:ml-8 space-y-12">
          
          {/* PASO 1 */}
          <div className="relative pl-8 md:pl-12 group">
            <div className={`absolute -left-[22px] md:-left-[24px] top-0 w-10 h-10 md:w-12 md:h-12 rounded-full ${theme.primary} flex items-center justify-center text-white shadow-lg border-4 border-[#FDFBF7]`}>
              <Download size={20} />
            </div>
            <div>
              <h3 className={`text-2xl font-serif font-bold ${theme.primaryText} mb-3 flex items-center gap-2`}>
                Paso 1: Descargue la Planilla
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
                <p className="text-gray-600 leading-relaxed mb-4">
                  El primer paso es descargar la planilla de inscripción desde
                  nuestro sitio web oficial. Una vez descargada, imprímala para
                  llenar una copia. Asegúrese de completar todos los campos de
                  manera precisa y legible. Una vez llena, debe entregar la copia a
                  nuestra Oficina de Dirección.
                </p>
                <div className="bg-blue-50 p-4 rounded border-l-4 border-blue-800 text-sm text-blue-900 italic">
                  <strong>Nota:</strong> Puede encontrar los botones de descarga al final de esta página.
                </div>
              </div>
            </div>
          </div>

          {/* PASO 2 */}
          <div className="relative pl-8 md:pl-12 group">
             <div className={`absolute -left-[22px] md:-left-[24px] top-0 w-10 h-10 md:w-12 md:h-12 rounded-full ${theme.primary} flex items-center justify-center text-white shadow-lg border-4 border-[#FDFBF7]`}>
              <FileText size={20} />
            </div>
            <div>
              <h3 className={`text-2xl font-serif font-bold ${theme.primaryText} mb-3`}>
                Paso 2: Revisión y Entrega de Documentos
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
                <p className="text-gray-600 leading-relaxed mb-4">
                  Diríjase a la coordinación correspondiente al nivel de estudios.
                  Nuestro equipo le ayudará a revisar sus documentos y garantizar
                  que estén en orden. Asegúrese de llevar todos los recaudos.
                </p>
                
                {/* Enlace a documentación */}
                <Link 
                  to="requisitos" 
                  className="inline-flex items-center gap-2 text-red-700 font-bold hover:underline transition-all"
                >
                  <ChevronRight size={18} />
                  Ver Documentación necesaria para la Inscripción
                </Link>
              </div>
            </div>
          </div>

          {/* PASO 3 */}
          <div className="relative pl-8 md:pl-12 group">
             <div className={`absolute -left-[22px] md:-left-[24px] top-0 w-10 h-10 md:w-12 md:h-12 rounded-full ${theme.primary} flex items-center justify-center text-white shadow-lg border-4 border-[#FDFBF7]`}>
              <CreditCard size={20} />
            </div>
            <div>
              <h3 className={`text-2xl font-serif font-bold ${theme.primaryText} mb-3`}>
                Paso 3: Realice el Pago
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
                <p className="text-gray-600 leading-relaxed">
                  Después de la revisión de documentos, proceda a realizar el pago
                  de la inscripción en nuestra caja designada. Si optó por
                  transferencia bancaria, pase por la sección de cobranzas para
                  confirmar el pago.
                </p>
              </div>
            </div>
          </div>

          {/* PASO 4 */}
          <div className="relative pl-8 md:pl-12 group">
            <div className={`absolute -left-[22px] md:-left-[24px] top-0 w-10 h-10 md:w-12 md:h-12 rounded-full ${theme.accent} flex items-center justify-center text-white shadow-lg border-4 border-[#FDFBF7]`}>
              <CheckCircle size={20} />
            </div>
            <div>
              <h3 className={`text-2xl font-serif font-bold ${theme.accentText} mb-3`}>
                Paso 4: Notifique en Coordinación
              </h3>
              <div className="bg-white p-6 rounded-lg shadow-sm border border-gray-100 group-hover:shadow-md transition-shadow">
                <p className="text-gray-600 leading-relaxed">
                  Finalmente, notifique a la coordinación sobre el pago realizado.
                  Esto es esencial para asegurarnos de que su proceso de
                  inscripción esté completo y registrado en nuestro sistema.
                </p>
              </div>
            </div>
          </div>

        </div>

        {/* Mensaje de Cierre */}
        <div className="mt-16 bg-[#1B3A57] text-white p-8 rounded-lg text-center shadow-lg">
          <Bell className="mx-auto mb-4 text-yellow-400" size={32} />
          <p className="font-serif text-lg mb-4">
            En la U.E.N José Ángel Álamo, estamos comprometidos a proporcionarle
            una educación de calidad. Si tiene alguna pregunta, no dude en
            comunicarse con nuestro equipo.
          </p>
          <p className="font-bold text-yellow-400 uppercase tracking-widest text-sm">
            ¡Esperamos verle pronto!
          </p>
        </div>

        {/* SECCIÓN DE DESCARGAS */}
        <section className="mt-20 border-t border-gray-200 pt-16">
          <div className="text-center mb-10">
            <h2 className="text-3xl font-serif font-bold text-[#1B3A57] mb-4">
              Zona de Descargas
            </h2>
            <p className="text-gray-600">
              Seleccione la opción correspondiente para acceder a las planillas digitales.
            </p>
          </div>

          <div className="flex flex-col md:flex-row justify-center gap-6 md:gap-8">
            {/* Botón 1 */}
            <Link to="/descargas-planillas?tipo=nuevo" className="flex-1 max-w-sm">
              <button className="group w-full bg-white border-2 border-[#1B3A57] p-6 rounded-lg hover:bg-[#1B3A57] transition-all duration-300 text-left shadow-sm hover:shadow-xl relative overflow-hidden">
                <div className="flex justify-between items-start mb-4">
                  <FileText size={32} className="text-[#1B3A57] group-hover:text-white transition-colors" />
                  <ArrowRight className="text-[#1B3A57] group-hover:text-white transform group-hover:translate-x-2 transition-all" />
                </div>
                <h4 className="text-xl font-bold text-[#1B3A57] group-hover:text-white mb-2 font-serif">
                  Descargar Planillas
                </h4>
                <p className="text-sm text-gray-500 group-hover:text-gray-300">
                  Para Estudiantes de <br/>Nuevo Ingreso
                </p>
              </button>
            </Link>

            {/* Botón 2 */}
            <Link to="/descargas-planillas?tipo=regular" className="flex-1 max-w-sm">
              <button className="group w-full bg-[#C62828] border-2 border-[#C62828] p-6 rounded-lg hover:bg-[#B71C1C] transition-all duration-300 text-left shadow-lg hover:shadow-xl relative overflow-hidden">
                <div className="flex justify-between items-start mb-4">
                  <FileText size={32} className="text-white" />
                  <ArrowRight className="text-white transform group-hover:translate-x-2 transition-all" />
                </div>
                <h4 className="text-xl font-bold text-white mb-2 font-serif">
                  Descargar Planillas
                </h4>
                <p className="text-sm text-red-100">
                  Para Estudiantes <br/>Regulares
                </p>
              </button>
            </Link>
          </div>
        </section>

      </main>

      {/* FOOTER */}
      <footer className="bg-[#112233] text-gray-400 py-12 border-t border-red-900">
        <div className="max-w-7xl mx-auto px-6 md:px-12 flex flex-col md:flex-row justify-between items-center gap-8">
          <div className="flex items-center gap-4">
            <div className="bg-white p-2 rounded-lg shadow-md h-16 w-16 flex items-center justify-center">
              <img
                src={logoUrl}
                alt="Escudo"
                className="w-full h-auto object-contain"
              />
            </div>
            <div className="text-left">
              <h4 className="text-white font-serif font-bold text-lg">
                U.E.N José Ángel Álamo
              </h4>
              <p className="text-xs uppercase tracking-widest text-gray-500">
                Desde 1967, educando para la vida.
              </p>
            </div>
          </div>

          <div className="flex gap-6">
            <a
              href="https://www.facebook.com/groups/11153488515/"
              target="_blank"
              rel="noopener noreferrer"
              className="text-white hover:text-red-500 transition transform hover:scale-110"
              title="Grupo de Facebook"
            >
              <Facebook size={24} />
            </a>
          </div>
        </div>

        <div className="max-w-7xl mx-auto px-6 mt-8 pt-8 border-t border-gray-800 text-center text-xs text-gray-600">
          <p>
            © {new Date().getFullYear()} U.E.N José Ángel Álamo. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

export default AdmissionsPage;