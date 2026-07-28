import React from 'react';
import { FaFacebookF, FaTwitter, FaInstagram, FaLinkedinIn, FaWhatsapp } from 'react-icons/fa';

export default function Footer() {
  const currentYear = new Date().getFullYear();

  const socialLinks = [
    { 
      icon: FaWhatsapp, 
      href: 'https://wa.me/51944755979', 
      label: 'WhatsApp' 
    },
    { 
      icon: FaFacebookF, 
      href: 'https://www.facebook.com/share/1FutbroHSP/', 
      label: 'Facebook' 
    },
    { 
      icon: FaInstagram, 
      href: 'https://www.instagram.com/jeferson_dominguez1?igsh=djdqdXRlZHRncmF3', 
      label: 'Instagram' 
    },
    { 
      icon: FaLinkedinIn, 
      href: 'https://www.linkedin.com/in/jeferson-dominguez-flores-303151287', 
      label: 'LinkedIn' 
    },
  ];

  const navLinks = [
    { name: 'Inicio', href: '#inicio' },
    { name: 'Sobre mí', href: '#sobre-mi' },
    { name: 'Proyectos', href: '#proyectos' },
    { name: 'Habilidades', href: '#habilidades' },
    { name: 'Contacto', href: '#contacto' },
  ];

  return (
    <footer className="bg-[#0e0e11] text-white py-12 px-4 border-t border-zinc-900 mt-16">
      <div className="max-w-4xl mx-auto flex flex-col items-center text-center">
        
        {/* Logo / Título */}
        <a href="#inicio" className="text-2xl font-bold tracking-wide mb-6 group inline-block">
          <span className="border-b-2 border-[#a855f7] pb-1">Portafolio</span>
          <span className="text-[#a855f7]">.</span>
        </a>

        {/* Subtítulo redes sociales */}
        <p className="text-zinc-300 font-medium text-sm mb-4">
          Encuentrame tambien en:
        </p>

        {/* Iconos de redes sociales */}
        <div className="flex space-x-3 mb-8">
          {socialLinks.map((social, index) => {
            const Icon = social.icon;
            return (
              <a
                key={index}
                href={social.href}
                aria-label={social.label}
                // target="_blank" abre en una nueva pestaña
                target="_blank" 
                // rel="noopener noreferrer" es por seguridad al usar target="_blank"
                rel="noopener noreferrer" 
                className="w-10 h-10 rounded-full bg-[#18181b] flex items-center justify-center text-[#a855f7] hover:bg-[#a855f7] hover:text-white transition-all duration-300 border border-zinc-800/60"
              >
                <Icon className="text-base" />
              </a>
            );
          })}
        </div>

        {/* Links de navegación interna */}
        <nav className="flex flex-wrap justify-center gap-6 mb-8 text-sm text-zinc-300">
          {navLinks.map((link, index) => (
            <a
              key={index}
              href={link.href}
              className="hover:text-[#a855f7] transition-colors duration-200"
            >
              {link.name}
            </a>
          ))}
        </nav>

        {/* Línea divisora */}
        <div className="w-full max-w-xl border-t border-zinc-800/70 mb-6"></div>

        {/* Sección Copyright */}
        <p className="text-xs text-zinc-400">
          © {currentYear} Portfolio. Todos los derechos reservados. Diseñado por{' '}
          <span className="text-[#a855f7] font-medium">Jeferson Dominguez Flores</span>
        </p>

      </div>
    </footer>
  );
}