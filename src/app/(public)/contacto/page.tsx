'use client';

import { useState } from 'react';
import Image from 'next/image';
import {
  MapPinIcon,
  PhoneIcon,
  MailIcon,
  ClockIcon,
  WhatsAppIcon,
  CheckIcon,
} from '@/components/icons';

export default function ContactPage() {
  const [formData, setFormData] = useState({
    name: '',
    email: '',
    phone: '',
    subject: '',
    message: '',
  });
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 lg:h-80 flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1423666639041-f56000c27a9a?w=1920"
            alt="Contacto"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-dark-900/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">Contáctanos</h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Estamos aquí para ayudarte a planificar tu próxima aventura
          </p>
        </div>
      </section>

      <section className="py-12 lg:py-20 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
            {/* Contact Info */}
            <div className="space-y-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-dark-900 mb-6">Información de Contacto</h2>
                <div className="space-y-5">
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MapPinIcon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-dark-900 mb-1">Dirección</h3>
                      <p className="text-dark-500 text-sm">Av. Providencia 1234, Oficina 501<br />Providencia, Santiago, Chile</p>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <PhoneIcon className="w-6 h-6 text-secondary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-dark-900 mb-1">Teléfono</h3>
                      <a href="tel:+56912345678" className="text-dark-500 text-sm hover:text-primary-600">+56 9 1234 5678</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <MailIcon className="w-6 h-6 text-accent-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-dark-900 mb-1">Email</h3>
                      <a href="mailto:info@viajeschile.com" className="text-dark-500 text-sm hover:text-primary-600">info@viajeschile.com</a>
                    </div>
                  </div>
                  <div className="flex items-start gap-4">
                    <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center flex-shrink-0">
                      <ClockIcon className="w-6 h-6 text-primary-600" />
                    </div>
                    <div>
                      <h3 className="font-medium text-dark-900 mb-1">Horario</h3>
                      <p className="text-dark-500 text-sm">Lun - Vie: 9:00 - 18:00<br />Sáb: 10:00 - 14:00</p>
                    </div>
                  </div>
                </div>
              </div>

              <a
                href="https://wa.me/56912345678"
                target="_blank"
                rel="noopener noreferrer"
                className="flex items-center justify-center gap-3 w-full py-4 bg-accent-500 text-white font-medium rounded-2xl hover:bg-accent-600 transition-colors"
              >
                <WhatsAppIcon className="w-6 h-6" />
                Chatea con nosotros por WhatsApp
              </a>
            </div>

            {/* Contact Form */}
            <div className="lg:col-span-2">
              <div className="bg-white rounded-2xl p-6 lg:p-8 shadow-sm">
                <h2 className="text-xl font-semibold text-dark-900 mb-6">Envíanos un Mensaje</h2>

                {submitted ? (
                  <div className="text-center py-12">
                    <div className="w-16 h-16 bg-accent-100 rounded-full flex items-center justify-center mx-auto mb-4">
                      <CheckIcon className="w-8 h-8 text-accent-600" />
                    </div>
                    <h3 className="text-xl font-semibold text-dark-900 mb-2">¡Mensaje Enviado!</h3>
                    <p className="text-dark-500 mb-6">
                      Gracias por contactarnos. Te responderemos a la brevedad.
                    </p>
                    <button
                      onClick={() => {
                        setSubmitted(false);
                        setFormData({ name: '', email: '', phone: '', subject: '', message: '' });
                      }}
                      className="px-6 py-2 bg-primary-600 text-white rounded-lg hover:bg-primary-700 transition-colors"
                    >
                      Enviar Otro Mensaje
                    </button>
                  </div>
                ) : (
                  <form onSubmit={handleSubmit} className="space-y-5">
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">
                          Nombre Completo *
                        </label>
                        <input
                          type="text"
                          required
                          value={formData.name}
                          onChange={(e) => setFormData({ ...formData, name: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                          placeholder="Tu nombre"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">
                          Email *
                        </label>
                        <input
                          type="email"
                          required
                          value={formData.email}
                          onChange={(e) => setFormData({ ...formData, email: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                          placeholder="tu@email.com"
                        />
                      </div>
                    </div>
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">
                          Teléfono
                        </label>
                        <input
                          type="tel"
                          value={formData.phone}
                          onChange={(e) => setFormData({ ...formData, phone: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                          placeholder="+56 9 1234 5678"
                        />
                      </div>
                      <div>
                        <label className="block text-sm font-medium text-dark-700 mb-2">
                          Asunto *
                        </label>
                        <select
                          required
                          value={formData.subject}
                          onChange={(e) => setFormData({ ...formData, subject: e.target.value })}
                          className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                        >
                          <option value="">Selecciona un tema</option>
                          <option value="cotizacion">Solicitar Cotización</option>
                          <option value="reserva">Consulta sobre Reserva</option>
                          <option value="paquete">Información de Paquetes</option>
                          <option value="grupo">Viajes Grupales</option>
                          <option value="otro">Otro</option>
                        </select>
                      </div>
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        Mensaje *
                      </label>
                      <textarea
                        required
                        rows={5}
                        value={formData.message}
                        onChange={(e) => setFormData({ ...formData, message: e.target.value })}
                        className="w-full px-4 py-3 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500 resize-none"
                        placeholder="Cuéntanos sobre tu viaje ideal..."
                      />
                    </div>
                    <button
                      type="submit"
                      className="w-full py-3 bg-gradient-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary-500/30"
                    >
                      Enviar Mensaje
                    </button>
                  </form>
                )}
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Map Section */}
      <section className="h-96 bg-gray-200 relative">
        <div className="absolute inset-0 flex items-center justify-center bg-dark-100">
          <div className="text-center">
            <MapPinIcon className="w-12 h-12 text-primary-600 mx-auto mb-3" />
            <p className="text-dark-600">Mapa de ubicación</p>
            <p className="text-dark-400 text-sm">Av. Providencia 1234, Santiago</p>
          </div>
        </div>
      </section>
    </>
  );
}
