import Image from 'next/image';
import Link from 'next/link';

export default function About() {
  const skills = ['HTML5', 'CSS3', 'JavaScript', 'React', 'Node.js', 'UI/UX'];

  return (
    <section id="sobre-mi" className="w-full bg-[#08080a] text-white py-20 px-6 md:px-16 lg:px-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-12 lg:gap-16 items-center">
        <div className="flex justify-center md:justify-end">
          <div className="relative w-full max-w-[420px] aspect-[4/5] rounded-2xl overflow-hidden bg-[#0c0c10] border border-[#a855f7]/40 p-3 shadow-[0_0_25px_rgba(168,85,247,0.15)] hover:shadow-[0_0_35px_rgba(168,85,247,0.25)] transition-all duration-300">
            <div className="relative w-full h-full rounded-xl overflow-hidden">
              <Image 
                src="/img_portafolio.jpeg" 
                alt="Jeferson Dominguez" 
                fill 
                className="object-cover"
                priority
              />
            </div>
          </div>
        </div>
        <div className="space-y-6">
          <div>
            <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">
              Sobre Mí
            </h2>
            <div className="w-12 h-1 bg-[#a855f7] rounded-full"></div>
          </div>
          <div className="space-y-4 text-gray-300 text-base md:text-lg leading-relaxed font-normal">
            <p>
              Soy un desarrollador web apasionado por crear experiencias digitales atractivas y funcionales. Mi enfoque combina diseño estético con código limpio y eficiente.
            </p>
            <p>
              Con experiencia en la creación de aplicaciones web modernas, me especializo en transformar ideas en soluciones digitales que resuelven problemas reales.
            </p>
          </div>
          <div className="flex flex-wrap gap-2.5 pt-2">
            {skills.map((skill, index) => (
              <span 
                key={index} 
                className="px-4 py-1.5 rounded-full border border-[#a855f7]/60 text-[#c084fc] text-sm font-medium bg-[#12081f]/40 hover:bg-[#a855f7]/10 transition-colors"
              >
                {skill}
              </span>
            ))}
          </div>
          <div className="pt-4">
            <Link
              href="#contacto"
              className="inline-block px-7 py-3 border border-[#a855f7]/80 rounded-lg text-[#c084fc] text-sm md:text-base font-medium bg-black/50 hover:bg-[#a855f7]/10 hover:border-[#a855f7] hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.2)]"
            >
              Contáctame
            </Link>
          </div>

        </div>

      </div>
    </section>
  );
}