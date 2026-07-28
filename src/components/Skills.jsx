import React from 'react';
// Asegúrate de instalar react-icons si aún no lo tienes: npm i react-icons
import { 
  FaHtml5, 
  FaCss3Alt, 
  FaBootstrap, 
  FaJsSquare, 
  FaPhp, 
  FaReact, 
  FaNodeJs, 
  FaLaravel, 
  FaCode, 
  FaDatabase 
} from 'react-icons/fa';
import { SiTailwindcss, SiPrisma } from 'react-icons/si';

const skills = [
  { name: 'HTML', icon: FaHtml5 },
  { name: 'CSS', icon: FaCss3Alt },
  { name: 'Tailwind CSS', icon: SiTailwindcss },
  { name: 'Bootstrap', icon: FaBootstrap },
  { name: 'JavaScript', icon: FaJsSquare },
  { name: 'PHP', icon: FaPhp },
  { name: 'React', icon: FaReact },
  { name: 'Node.js', icon: FaNodeJs },
  { name: 'Prisma', icon: SiPrisma },
  { name: 'Laravel', icon: FaLaravel },
  { name: 'Express', icon: FaCode },
  { name: 'MySQL', icon: FaDatabase },
];

export default function Skills() {
  return (
    <section className="bg-[#0e0e11] py-16 px-4 flex justify-center items-center min-h-screen">
      <div className="max-w-6xl w-full">
        <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-6 gap-4">
          {skills.map((skill, index) => {
            const Icon = skill.icon;
            return (
              <div
                key={index}
                className="bg-[#18181b] hover:bg-[#202025] transition-colors duration-300 rounded-xl p-6 flex flex-col items-center justify-center border border-zinc-800/50 shadow-md cursor-pointer group"
              >
                <Icon className="text-4xl text-[#a855f7] mb-3 group-hover:scale-110 transition-transform duration-300" />
                <span className="text-white font-semibold text-sm tracking-wide text-center">
                  {skill.name}
                </span>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
}