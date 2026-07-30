import Link from 'next/link';

const Navbar = () => {
  const navLinks = [
    { title: 'Inicio', path: '#inicio' },
    { title: 'Sobre mí', path: '#sobre-mi' },
    { title: 'Proyectos', path: '#proyectos' },
    { title: 'Habilidades', path: '#skills' },
    { title: 'Contacto', path: '#contacto' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#030303]/90 backdrop-blur-md text-white border-b border-zinc-900">
      <div className="max-w-[1200px] mx-auto h-20 flex justify-between items-center px-6 md:px-12">

        {/* LOGO SECCIÓN */}
        <Link href="#inicio" className="group flex items-center gap-1.5 focus:outline-none">
          <span className="text-2xl md:text-3xl font-extrabold tracking-tight group-hover:text-gray-200 transition-colors duration-300">
            Mi Portafolio
          </span>
          {/* EL PUNTO PÚRPURA */}
          <div className="w-3.5 h-3.5 bg-[#a855f7] rounded-full mt-2 
                        shadow-[0_0_15px_1px_rgba(168,85,247,0.8)] 
                        transition-all duration-300 group-hover:shadow-[0_0_20px_2px_rgba(168,85,247,0.9)] 
                        group-hover:scale-110"></div>
        </Link>

        {/* ENLACES DE NAVEGACIÓN (Desktop) */}
        <div className="hidden md:flex items-center gap-8">
          {navLinks.map((link, index) => (
            <Link
              key={index}
              href={link.path}
              className="text-base font-medium tracking-tight text-white/90 hover:text-white
                        relative group overflow-hidden px-1 py-1 focus:outline-none transition-colors"
            >
              {/* Texto */}
              <span className="relative z-10">{link.title}</span>

              {/* Subrayado animado */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#a855f7] 
                               transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* BOTÓN DE MENÚ MÓVIL */}
        <button className="md:hidden text-white/80 hover:text-white transition-colors">
          <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth={1.5} stroke="currentColor" className="w-8 h-8">
            <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
        </button>

      </div>
    </nav>
  );
};

export default Navbar;