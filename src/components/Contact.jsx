'use client';

import { useState } from 'react';
import { FiMapPin, FiMail, FiPhone } from 'react-icons/fi';

export default function Contact() {
  const [formData, setFormData] = useState({
    nombre: '',
    email: '',
    mensaje: '',
  });

  const handleChange = (e) => {
    const { name, value } = e.target;
    setFormData((prev) => ({
      ...prev,
      [name]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    // Aquí puedes agregar la lógica para enviar el formulario (EmailJS, Formspree, etc.)
    console.log('Formulario enviado:', formData);
    alert('¡Mensaje enviado con éxito!');
    setFormData({ nombre: '', email: '', mensaje: '' });
  };

  return (
    <section id="contacto" className="w-full bg-[#050508] text-white py-20 px-6 md:px-16 lg:px-28">
      <div className="max-w-6xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-start">
        
        {/* COLUMNA IZQUIERDA: INFORMACIÓN DE CONTACTO */}
        <div className="space-y-8 pt-4">
          <h2 className="text-3xl md:text-4xl font-extrabold text-[#a855f7] tracking-tight">
            Contacto
          </h2>

          <div className="space-y-6">
            {/* DIRECCIÓN */}
            <div className="flex items-start gap-4">
              <div className="p-1 text-[#a855f7] mt-1">
                <FiMapPin className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white">Dirección</h3>
                <p className="text-gray-300 text-sm mt-0.5">
                  Lima Carabayllo, Perú
                </p>
              </div>
            </div>

            {/* EMAIL */}
            <div className="flex items-start gap-4">
              <div className="p-1 text-[#a855f7] mt-1">
                <FiMail className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white">Email</h3>
                <a 
                  href="mailto:jeffersondominguez082@gmail.com" 
                  className="text-gray-300 text-sm mt-0.5 hover:text-[#c084fc] transition-colors block"
                >
                  jeffersondominguez082@gmail.com
                </a>
              </div>
            </div>

            {/* TELÉFONO */}
            <div className="flex items-start gap-4">
              <div className="p-1 text-[#a855f7] mt-1">
                <FiPhone className="w-6 h-6" />
              </div>
              <div>
                <h3 className="font-bold text-base text-white">Teléfono</h3>
                <a 
                  href="tel:+51932520417" 
                  className="text-gray-300 text-sm mt-0.5 hover:text-[#c084fc] transition-colors block"
                >
                  +51 944 755 979
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* COLUMNA DERECHA: TARJETA DEL FORMULARIO */}
        <div className="bg-[#121216] border border-gray-800/80 rounded-2xl p-8 md:p-10 shadow-xl">
          <form onSubmit={handleSubmit} className="space-y-6">
            
            {/* CAMPO NOMBRE */}
            <div className="space-y-2">
              <label htmlFor="nombre" className="block text-sm font-medium text-gray-200">
                Nombre
              </label>
              <input
                type="text"
                id="nombre"
                name="nombre"
                value={formData.nombre}
                onChange={handleChange}
                required
                className="w-full bg-[#1c1c22] border border-gray-700/60 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#a855f7] transition-colors"
              />
            </div>

            {/* CAMPO EMAIL */}
            <div className="space-y-2">
              <label htmlFor="email" className="block text-sm font-medium text-gray-200">
                Email
              </label>
              <input
                type="email"
                id="email"
                name="email"
                value={formData.email}
                onChange={handleChange}
                required
                className="w-full bg-[#1c1c22] border border-gray-700/60 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#a855f7] transition-colors"
              />
            </div>

            {/* CAMPO MENSAJE */}
            <div className="space-y-2">
              <label htmlFor="mensaje" className="block text-sm font-medium text-gray-200">
                Mensaje
              </label>
              <textarea
                id="mensaje"
                name="mensaje"
                rows={5}
                value={formData.mensaje}
                onChange={handleChange}
                required
                className="w-full bg-[#1c1c22] border border-gray-700/60 rounded-lg px-4 py-3 text-white text-sm focus:outline-none focus:border-[#a855f7] transition-colors resize-none"
              ></textarea>
            </div>

            {/* BOTÓN ENVIAR */}
            <div>
              <button
                type="submit"
                className="px-8 py-3 border border-[#a855f7]/70 rounded-lg text-[#c084fc] font-medium text-sm bg-[#121216] hover:bg-[#a855f7]/10 hover:border-[#a855f7] hover:text-white transition-all duration-300 shadow-[0_0_10px_rgba(168,85,247,0.15)]"
              >
                Enviar
              </button>
            </div>

          </form>
        </div>

      </div>
    </section>
  );
}