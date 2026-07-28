import Link from 'next/link';

export default function Hero() {
  return (
    <section className="min-h-screen w-full bg-[#050508] bg-gradient-to-tr from-[#050508] via-[#090812] to-[#1a0b2e] text-white flex items-center pt-24 px-6 md:px-20 lg:px-32">
      <div className=" space-y-6 center max-w-6xl mx-auto text-center md:text-left">

        {/* TITULAR PRINCIPAL */}
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-extrabold tracking-tight leading-tight">
          Hola! Mi nombre es Jeferson, y soy{' '}
          <span className="block mt-2 text-[#a855f7] drop-shadow-[0_0_25px_rgba(168,85,247,0.85)] filter brightness-125">
            Desarrollador Full-Stack
          </span>
        </h1>

        {/* DESCRIPCIÓN */}
        <p className="text-gray-300 text-lg md:text-2xl  font-normal leading-relaxed pt-2">
          Desarrollador creativo enfocado en construir experiencias digitales excepcionales con soluciones innovadoras.
        </p>

        {/* BOTÓN CON BORDE Y TEXTO MORADO */}
        <div className="pt-4">
          <Link
            href="#proyectos"
            className="inline-block px-7 py-3.5 border border-[#8b5cf6] rounded-md text-[#c084fc] font-medium text-sm md:text-base bg-black/40 hover:bg-[#8b5cf6]/10 hover:border-[#a855f7] hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(139,92,246,0.2)] hover:shadow-[0_0_20px_rgba(168,85,247,0.4)]"
          >
            Ver mis proyectos
          </Link>
        </div>

      </div>
    </section>
  );
}