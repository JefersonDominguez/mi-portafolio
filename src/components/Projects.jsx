import Image from 'next/image';
import { FiGithub, FiExternalLink } from 'react-icons/fi';

export default function Projects() {
  // Lista de tus proyectos (puedes cambiar imágenes, textos y links)
  const projectsList = [
    {
      id: 1,
      title: 'Aplicación web de Guia para Padres Primerizos',
      description: 'Una plataforma interactiva para guia personal con visualización de datos y seguimiento de vida del bebé.',
      tags: ['React', 'Tailwind css', 'FireBase', 'Express', 'Node.js'],
      image: '/pagina1.png', // Coloca tu imagen en public/
      githubUrl: 'https://github.com/JefersonDominguez/padres_primerizos.git',
      demoUrl: 'https://maikzs.github.io/primerizos/',
    },
    {
      id: 2,
      title: 'Aplicacion Web - Impulsadora de Marca',
      description: 'Plataforma de impulso digital completa servicio de correos electronicos y APIS.',
      tags: ['React', 'Node.js', 'Tailwind css', 'Laravel', 'Node.js'],
      image: '/pagina2.png',
      githubUrl: 'https://github.com/JefersonDominguez/Digimedia.git',
      demoUrl: 'https://digimedia-marketing.com',
    },
    {
      id: 3,
      title: 'Aplicacion Web - Tienda Online',
      description: 'Neon Led Store, dedicada a la creación de diseños personalizados de luces LED que transforman cualquier espacio.',
      tags: ['React', 'Node.js', 'Tailwind css', 'Laravel', 'Prisma'],
      image: '/pagina3.png',
      githubUrl: 'https://github.com/JefersonDominguez/NLS.git',
      demoUrl: 'https://ledneonpublicidad.com',
    },
    {
      id: 4,
      title: 'Aplicacion Web - Gimnasio',
      description: 'Plataforma de impulso digital completa con carrito de compras funcional, panel de admin, CRUD, sistema de Login.',
      tags: ['PHP', 'HTML', 'CSS', 'JavaScript', 'Bootstrap', 'MySQL'],
      image: '/pagina4.png',
      githubUrl: 'https://github.com/JefersonDominguez/GYM.git',
      demoUrl: 'https://github.com/JefersonDominguez/GYM.git',
    },
    {
      id: 5,
      title: 'Aplicacion Web - Restaurante',
      description: 'Aplicativo web de restaurante que tiene la funcion de reserva de mesa, contacto con los meseros e informacion sobre ofertas.',
      tags: ['HTML', 'JavaScript', 'css', 'Bootstrap', 'Express'],
      image: '/pagina5.png',
      githubUrl: 'https://github.com/JefersonDominguez/restaurante.git',
      demoUrl: 'https://jefersondominguez.github.io/restaurante/',
    },
    {
      id: 6,
      title: 'Aplicacion Web - Pagina Educativa',
      description: 'Aplicativo web creado para conectar a compañías, instituciones educativas, y profesionales con contenido de formación de alto nivel.',
      tags: ['JSX', 'JavaScript', 'css', 'Tailwind css', 'Express'],
      image: '/pagina6.png',
      githubUrl: 'https://github.com/JefersonDominguez/Lernymart_calidad.git',
      demoUrl: 'https://lernymart.com/about',
    },
    {
      id: 7,
      title: 'Aplicacion Web - Tienda Online',
      description: 'Aplicativo web para la tienda WIP cartelera de productos tecnologicos con filtros, incluye carrito de compras, pasarela de pagos e informacion sobre ofertas.',
      tags: ['JSX', 'JavaScript', 'css', 'Tailwind css', 'laravel', 'React', 'node.js'],
      image: '/pagina7.png',
      githubUrl: 'https://github.com/JefersonDominguez/Frontwip.git',
      demoUrl: 'https://github.com/JefersonDominguez/Frontwip.git',
    },
  ];

  return (
    <section id="proyectos" className="w-full bg-[#050508] text-white py-20 px-6 md:px-12 lg:px-20">
      <div className="max-w-7xl mx-auto space-y-12">
        
        {/* ENCABEZADO */}
        <div className="text-center space-y-3">
          <h2 className="text-3xl md:text-5xl font-extrabold tracking-tight text-white">
            Mis Proyectos
          </h2>
          <div className="w-16 h-1 bg-[#a855f7] mx-auto rounded-full"></div>
          <p className="text-gray-400 text-sm md:text-base max-w-2xl mx-auto pt-2">
            Una selección de mis trabajos más recientes que demuestran mis habilidades y experiencia.
          </p>
        </div>

        {/* GRID DE PROYECTOS */}
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
          {projectsList.map((project) => (
            <div
              key={project.id}
              className="group bg-[#0f0f14] border border-gray-800/80 rounded-2xl overflow-hidden hover:border-[#a855f7]/50 transition-all duration-300 flex flex-col justify-between shadow-lg hover:shadow-[0_0_25px_rgba(168,85,247,0.15)]"
            >
              <div>
                {/* CONTENEDOR DE IMAGEN CON EFECTO HOVER */}
                <div className="relative w-full h-52 overflow-hidden bg-black/60">
                  <Image
                    src={project.image}
                    alt={project.title}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-500 ease-out"
                  />

                  {/* OVERLAY / CAPA AL PASAR EL MOUSE CON LOS BOTONES */}
                  <div className="absolute inset-0 bg-black/75 opacity-0 group-hover:opacity-100 transition-opacity duration-300 flex items-center justify-center gap-4 backdrop-blur-sm">
                    {/* BOTÓN GITHUB */}
                    <a
                      href={project.githubUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#181820] text-white border border-[#a855f7]/50 rounded-full hover:bg-[#a855f7] hover:scale-110 transition-all duration-300 shadow-md"
                      title="Ver Código en GitHub"
                    >
                      <FiGithub className="w-5 h-5" />
                    </a>

                    {/* BOTÓN SITIO WEB DEMO */}
                    <a
                      href={project.demoUrl}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="p-3 bg-[#181820] text-white border border-[#a855f7]/50 rounded-full hover:bg-[#a855f7] hover:scale-110 transition-all duration-300 shadow-md"
                      title="Ver Demo en Vivo"
                    >
                      <FiExternalLink className="w-5 h-5" />
                    </a>
                  </div>
                </div>

                {/* CONTENIDO Y DETALLES */}
                <div className="p-6 space-y-4">
                  {/* BADGES / ETIQUETAS */}
                  <div className="flex flex-wrap gap-2">
                    {project.tags.map((tag, idx) => (
                      <span
                        key={idx}
                        className="px-2.5 py-0.5 rounded-md text-xs font-semibold bg-[#211138]/60 text-[#c084fc] border border-[#a855f7]/30"
                      >
                        {tag}
                      </span>
                    ))}
                  </div>

                  {/* TÍTULO */}
                  <h3 className="text-xl font-bold text-white group-hover:text-[#c084fc] transition-colors leading-snug">
                    {project.title}
                  </h3>

                  {/* DESCRIPCIÓN */}
                  <p className="text-gray-400 text-sm leading-relaxed line-clamp-3">
                    {project.description}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>

      </div>
    </section>
  );
}