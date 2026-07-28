import Link from 'next/link';

const Navbar = () => {
  const navLinks = [
    { title: 'Inicio', path: '/' },
    { title: 'Sobre mí', path: '/src/components/About.jsx' },
    { title: 'Proyectos', path: '/src/components/Projects.jsx' },
    { title: 'Habilidades', path: '/src/components/Skills.jsx' },
    { title: 'Contacto', path: '/src/components/Contact.jsx' },
  ];

  return (
    <nav className="fixed top-0 left-0 w-full z-50 bg-[#030303] text-white">
      <div className="max-w-[1200px] mx-auto h-24 flex justify-between items-center px-6 md:px-12">
        
        {/* LOGO SECCIÓN */}
        <Link href="/" className="group flex items-center gap-1.5 focus:outline-none">
          <span className="text-3xl md:text-4xl font-extrabold tracking-tight group-hover:text-gray-200 transition-colors duration-300">
            Mi Portafolio
          </span>
          {/* EL PUNTO PÚRPURA */}
          <div className="w-4 h-4 bg-[#6A0DAD] rounded-full mt-2.5 
                        shadow-[0_0_15px_1px_rgba(106,13,173,0.8)] 
                        transition-all duration-300 group-hover:shadow-[0_0_20px_2px_rgba(106,13,173,0.9)] 
                        group-hover:scale-110"></div>
        </Link>

        {/* ENLACES DE NAVEGACIÓN (Desktop) */}
        <div className="hidden md:flex items-center gap-10">
          {navLinks.map((link, index) => (
            <Link 
              key={index} 
              href={link.path} 
              className="text-lg font-medium tracking-tight text-white/95
                        relative group overflow-hidden px-1 py-1 focus:outline-none"
            >
              {/* Texto */}
              <span className="relative z-10">{link.title}</span>
              
              {/* Subrayado animado (Opcional, pero se ve genial) */}
              <span className="absolute bottom-0 left-0 w-0 h-0.5 bg-[#6A0DAD] 
                               transition-all duration-300 ease-out group-hover:w-full"></span>
            </Link>
          ))}
        </div>

        {/* BOTÓN DE MENÚ MÓVIL (Simple, puedes agregar funcionalidad luego) */}
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