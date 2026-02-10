import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import {
  MapPin,
  Phone,
  Mail,
  Facebook,
  Menu,
  X,
  GraduationCap,
  Calendar,
  ArrowRight,
} from "lucide-react";

const SchoolHomePage = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);

  // Datos simulados
  const newsPosts = [
    {
      id: 1,
      title: "Inicio del Proceso de Inscripción 2024-2025",
      date: "05 Feb 2024",
      category: "Administrativo",
      excerpt:
        "Se informa a la comunidad educativa que el proceso de inscripción para nuevos ingresos comienza este lunes...",
      image:
        "https://images.unsplash.com/photo-1503676260728-1c00da094a0b?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 2,
      title: "Suspensión de Actividades por Mantenimiento",
      date: "01 Feb 2024",
      category: "Aviso Urgente",
      excerpt:
        "Debido a reparaciones en el sistema eléctrico de la institución, no habrá actividades académicas el día viernes.",
      image:
        "https://images.unsplash.com/photo-1588072432836-e10032774350?auto=format&fit=crop&q=80&w=800",
    },
    {
      id: 3,
      title: "Jornada de Vacunación Escolar",
      date: "28 Ene 2024",
      category: "Salud",
      excerpt:
        "El equipo de salud del Distrito Capital estará realizando una jornada de vacunación para estudiantes de 1ero a 3er año.",
      image:
        "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?auto=format&fit=crop&q=80&w=800",
    },
  ];

  useEffect(() => {
    const handleScroll = () => {
      setIsScrolled(window.scrollY > 50);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const handleNavClick = (e, targetId) => {
    // Si es un enlace interno (scroll), previene comportamiento por defecto
    if (
      targetId === "top" ||
      targetId === "nosotros" ||
      targetId === "contacto"
    ) {
      e.preventDefault();
      if (targetId === "top") {
        window.scrollTo({ top: 0, behavior: "smooth" });
      } else {
        const element = document.getElementById(targetId);
        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
      setIsMobileMenuOpen(false);
    }
    // Si es "tramites", dejamos que React Router maneje la navegación (no hacemos preventDefault)
  };

  // URLs
  const heroImage =
    "https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEhvWQvxPU954VDKsmiMJhyphenhyphenYzYsgn-TS9vnijsNtzl2aKbl5vXBvwX1gYk7cZM5Ep-Whiqm6UB20VeDDnG7zr3Jv5XK8ZTwOppb90EQvmMS2HeL-FZFHxP5ifebeadLULhY90Qka9GH7h-ou/s1600/IMG00200.jpg";
  const logoUrl = "https://i.imgur.com/1tbjjyM.png";

  // Tema
  const theme = {
    primary: "bg-[#1B3A57]",
    primaryText: "text-[#1B3A57]",
    accent: "bg-[#C62828]",
    accentHover: "hover:bg-[#B71C1C]",
    accentText: "text-[#C62828]",
  };

  return (
    <div className="min-h-screen bg-[#FDFBF7] font-sans text-gray-800">
      {/* NAVBAR */}
      <nav
        className={`fixed w-full z-50 transition-all duration-300 ${
          isScrolled ? `${theme.primary} shadow-lg py-2` : "bg-transparent py-4"
        }`}
      >
        <div className="max-w-7xl mx-auto px-6 flex justify-between items-center">
          <div className="flex items-center gap-3">
            <div
              className={`rounded-full bg-white transition-all duration-300 shadow-md ${isScrolled ? "w-10 h-10 p-1" : "w-16 h-16 p-2"}`}
            >
              <img
                src={logoUrl}
                alt="Logo"
                className="w-full h-full object-contain mix-blend-multiply"
              />
            </div>
            <span
              className={`font-serif font-bold text-white tracking-wide transition-all duration-300 ${isScrolled ? "text-lg" : "text-xl"}`}
            >
              U.E.N José Ángel Álamo
            </span>
          </div>

          {/* Menú Desktop */}
          <div className="hidden md:flex gap-8 text-white text-sm font-medium tracking-wider items-center">
            <a
              href="#"
              onClick={(e) => handleNavClick(e, "top")}
              className="hover:text-red-300 transition"
            >
              INICIO
            </a>
            <a
              href="#nosotros"
              onClick={(e) => handleNavClick(e, "nosotros")}
              className="hover:text-red-300 transition"
            >
              NOSOTROS
            </a>

            {/* ENLACE A PÁGINA DE TRÁMITES (React Router) */}
            <Link to="/tramites" className="hover:text-red-300 transition">
              TRÁMITES Y DESCARGAS
            </Link>

            <a
              href="#contacto"
              onClick={(e) => handleNavClick(e, "contacto")}
              className="hover:text-red-300 transition"
            >
              CONTACTO
            </a>

            <Link
              to="/login"
              className="bg-red-700 hover:bg-red-800 px-4 py-2 rounded transition shadow-md"
            >
              Admin / Docentes
            </Link>
          </div>

          {/* Botón Móvil */}
          <button
            className="md:hidden text-white"
            onClick={() => setIsMobileMenuOpen(!isMobileMenuOpen)}
          >
            {isMobileMenuOpen ? <X size={28} /> : <Menu size={28} />}
          </button>
        </div>

        {/* Menú Móvil */}
        {isMobileMenuOpen && (
          <div
            className={`md:hidden ${theme.primary} absolute top-full left-0 w-full border-t border-blue-800 shadow-xl`}
          >
            <div className="flex flex-col p-6 space-y-4 text-white text-center">
              <a
                href="#"
                onClick={(e) => handleNavClick(e, "top")}
                className="py-2 hover:bg-blue-800 rounded"
              >
                INICIO
              </a>
              <a
                href="#nosotros"
                onClick={(e) => handleNavClick(e, "nosotros")}
                className="py-2 hover:bg-blue-800 rounded"
              >
                NOSOTROS
              </a>
              <Link
                to="/tramites"
                className="py-2 hover:bg-blue-800 rounded"
                onClick={() => setIsMobileMenuOpen(false)}
              >
                TRÁMITES
              </Link>
              <a
                href="#contacto"
                onClick={(e) => handleNavClick(e, "contacto")}
                className="py-2 hover:bg-blue-800 rounded"
              >
                CONTACTO
              </a>
              <Link to="/login" className="py-2 bg-red-700 rounded mx-4">
                Iniciar Sesión
              </Link>
            </div>
          </div>
        )}
      </nav>

      {/* HERO (Sin cambios mayores) */}
      <header
        className="relative h-[600px] flex items-center justify-center overflow-hidden"
        id="top"
      >
        <div className="absolute inset-0 z-0">
          <img
            src={heroImage}
            alt="Fachada del colegio"
            className="w-full h-full object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-b from-black/80 via-black/40 to-black/90"></div>
        </div>
        <div className="relative z-10 text-center text-white px-4 max-w-4xl mx-auto animate-fade-in-up">
          <div className="flex justify-center mb-4">
            <GraduationCap size={48} className="text-white opacity-90" />
          </div>
          <p className="text-sm md:text-base tracking-widest mb-4 font-serif text-gray-200 uppercase opacity-90">
            Desde 1967, educando para la vida
          </p>
          <h1 className="text-4xl md:text-6xl font-serif font-bold mb-10 tracking-wide drop-shadow-lg">
            U.E.N José Ángel Álamo
          </h1>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link to="/tramites">
              <button
                className={`${theme.accent} ${theme.accentHover} text-white font-bold py-3 px-8 rounded transition duration-300 text-sm uppercase tracking-wider shadow-lg transform hover:-translate-y-1`}
              >
                Gestión de Trámites
              </button>
            </Link>
          </div>
        </div>
      </header>

      {/* QUIENES SOMOS (Sin cambios) */}
      <section
        id="nosotros"
        className="py-20 px-6 md:px-20 max-w-6xl mx-auto text-center relative"
      >
        <div
          className={`absolute top-0 left-1/2 transform -translate-x-1/2 -translate-y-1/2 w-24 h-1 ${theme.accent}`}
        ></div>
        <h2
          className={`text-4xl md:text-5xl font-serif ${theme.primaryText} mb-8 relative inline-block`}
        >
          ¿Quienes Somos?
        </h2>
        <p className="text-lg md:text-xl leading-relaxed text-gray-600 font-serif max-w-4xl mx-auto">
          La Unidad Educativa Nacional José Ángel Álamo es una institución
          baluarte de la educación pública en Manduca a Ferrenquín, en la
          parroquia La Candelaria, antigua sede del liceo "Rafael Urdaneta".
          Desde nuestra fundación en 1967, hemos asumido ininterrumpidamente el
          compromiso de formar a los jóvenes del futuro bajo los principios de
          excelencia, ética y responsabilidad social. Más que un centro de
          estudios, somos un espacio de encuentro donde se fomenta el
          pensamiento crítico, la disciplina y el amor por el conocimiento,
          preparando a nuestros bachilleres no solo para la universidad, sino
          para los desafíos de la vida.
        </p>
        <div className="mt-8 flex justify-center gap-2">
          <span className="h-2 w-2 bg-[#C62828] rounded-full"></span>
          <span className="h-2 w-2 bg-[#C62828] rounded-full"></span>
          <span className="h-2 w-2 bg-[#C62828] rounded-full"></span>
        </div>
      </section>

      {/* VALORES / CARACTERÍSTICAS*/}
      <section className="py-12 px-6 md:px-12 bg-white">
        <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-6">
          <FeatureCard
            title="Trayectoria Histórica"
            content="Con más de cinco décadas de servicio ininterrumpido, somos referencia educativa en la parroquia, graduando generaciones de bachilleres desde 1967."
            theme={theme}
          />
          <FeatureCard
            title="Formación Integral"
            content="Nuestro modelo educativo trasciende las aulas; cultivamos valores ciudadanos, deportivos y culturales para el desarrollo pleno del estudiante."
            theme={theme}
          />
          <FeatureCard
            title="Calidad Docente"
            content="Contamos con un cuerpo de profesores y personal administrativo comprometido con la pedagogía y el bienestar de nuestra comunidad estudiantil."
            theme={theme}
          />
          <FeatureCard
            title="Identidad Nacional"
            content="Promovemos el sentido de pertenencia y el respeto por nuestros símbolos patrios, educando ciudadanos conscientes de su rol en Venezuela."
            theme={theme}
          />
        </div>
      </section>

      {/* NUEVA SECCIÓN: NOTICIAS Y ANUNCIOS */}
      <section className="py-16 px-6 md:px-12 bg-white border-t border-gray-100">
        <div className="max-w-7xl mx-auto">
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-4">
            <div>
              <h4 className="text-red-700 font-bold uppercase tracking-widest text-sm mb-2">
                Cartelera Digital
              </h4>
              <h2
                className={`text-3xl md:text-4xl font-serif ${theme.primaryText}`}
              >
                Noticias & Anuncios
              </h2>
            </div>
            <Link
              to="/noticias"
              className="group flex items-center gap-2 text-[#1B3A57] font-semibold hover:text-red-700 transition"
            >
              Ver todas las noticias{" "}
              <ArrowRight
                size={20}
                className="group-hover:translate-x-1 transition-transform"
              />
            </Link>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            {newsPosts.map((post) => (
              <article
                key={post.id}
                className="flex flex-col bg-[#FDFBF7] rounded-lg overflow-hidden shadow-sm hover:shadow-xl transition-all duration-300 border border-gray-100 hover:border-red-200 group"
              >
                <div className="h-48 overflow-hidden relative">
                  <div className="absolute top-4 left-4 bg-red-600 text-white text-xs font-bold px-3 py-1 rounded z-10 uppercase">
                    {post.category}
                  </div>
                  <img
                    src={post.image}
                    alt={post.title}
                    className="w-full h-full object-cover transform group-hover:scale-110 transition duration-500"
                  />
                </div>
                <div className="p-6 flex-1 flex flex-col">
                  <div className="flex items-center gap-2 text-gray-400 text-xs font-bold uppercase tracking-wider mb-3">
                    <Calendar size={14} />
                    {post.date}
                  </div>
                  <h3 className="text-xl font-serif font-bold text-gray-800 mb-3 group-hover:text-red-700 transition-colors">
                    {post.title}
                  </h3>
                  <p className="text-gray-600 text-sm leading-relaxed mb-4 flex-1">
                    {post.excerpt}
                  </p>
                  <Link
                    to={`/noticia/${post.id}`}
                    className="text-[#1B3A57] font-bold text-sm hover:underline mt-auto"
                  >
                    Leer más →
                  </Link>
                </div>
              </article>
            ))}
          </div>
        </div>
      </section>

      {/*UBICACIÓN Y MAPA */}
      <section id="contacto" className="py-0 relative">
        <div className="grid grid-cols-1 lg:grid-cols-2 h-auto lg:h-[500px]">
          {/* Info Panel */}
          <div
            className={`${theme.primary} text-white p-12 flex flex-col justify-center`}
          >
            <h2 className="text-3xl font-serif mb-8 border-l-4 border-red-500 pl-4">
              Ubicación & Contacto
            </h2>

            <div className="space-y-6 text-lg font-light">
              <div className="flex items-start gap-4">
                <MapPin className="text-red-400 mt-1 flex-shrink-0" />
                <p>
                  G34R+3W7, Avenida Oeste,
                  <br />
                  La Candelaria, Caracas 1011,
                  <br />
                  Distrito Capital.
                </p>
              </div>
              <div className="flex items-center gap-4">
                <Phone className="text-red-400 flex-shrink-0" />
                <p>(212) 561-96-10 / (412) 555</p>
              </div>
              <div className="flex items-center gap-4">
                <Mail className="text-red-400 flex-shrink-0" />
                <p>gradoedu@gmail.com</p>
              </div>
            </div>
          </div>

          {/* Mapa (Google Maps) */}
          <div className="w-full h-96 lg:h-full bg-gray-200">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3922.942810049931!2d-66.90769399999999!3d10.5051708!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x8c2a5ed24b90a799%3A0xeab7ed0c0f2fb882!2zTGljZW8gSm9zw6kgw4FuZ2VsIMOBbGFtbw!5e0!3m2!1ses-419!2sve!4v1768359475770!5m2!1ses-419!2sve"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
              title="Mapa de Ubicación"
            ></iframe>
          </div>
        </div>
      </section>

      {/*FOOTER*/}
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
            {/* enlace a Facebook */}
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
            &copy; {new Date().getFullYear()} U.E.N José Ángel Álamo. Todos los
            derechos reservados.
          </p>
        </div>
      </footer>
    </div>
  );
};

/* COMPONENTES AUXILIARES */
const FeatureCard = ({ title, content, theme }) => (
  <div
    className={`group bg-white p-8 rounded-lg border border-gray-100 shadow-sm hover:shadow-xl hover:-translate-y-2 hover:border-red-300 transition-all duration-300`}
  >
    <h3
      className={`text-2xl font-serif font-bold text-gray-800 mb-3 group-hover:${theme.accentText} transition-colors`}
    >
      {title}
    </h3>
    <p className="text-gray-600 font-serif leading-relaxed text-sm">
      {content}
    </p>
  </div>
);

export default SchoolHomePage;
