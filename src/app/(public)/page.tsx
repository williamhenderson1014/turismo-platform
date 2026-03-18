'use client';

import Image from 'next/image';
import Link from 'next/link';
import {
  MapPinIcon,
  CalendarIcon,
  StarIcon,
  ChevronRightIcon,
  CheckIcon,
  PlaneIcon,
  UsersIcon,
  ClockIcon,
} from '@/components/icons';
import { getFeaturedPackages, formatPrice } from '@/data/mockData';

export default function HomePage() {
  const featuredPackages = getFeaturedPackages();

  return (
    <>
      {/* Hero Section */}
      <section className="relative h-[80vh] min-h-[600px] flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1531761535209-180857e963b9?w=1920"
            alt="Torres del Paine"
            fill
            className="object-cover"
            priority
            unoptimized
          />
          <div className="absolute inset-0 bg-gradient-to-r from-dark-900/80 via-dark-900/50 to-transparent"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="max-w-2xl">
            <span className="inline-block px-4 py-1.5 bg-secondary-500 text-white text-sm font-medium rounded-full mb-6">
              Descubre Chile con nosotros
            </span>
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold text-white mb-6 leading-tight">
              Vive experiencias <span className="text-primary-400">inolvidables</span>
            </h1>
            <p className="text-lg text-gray-200 mb-8">
              Desde la Patagonia hasta el desierto de Atacama, te llevamos a los destinos más
              espectaculares de Chile con la mejor atención y servicio personalizado.
            </p>
            <div className="flex flex-col sm:flex-row gap-4">
              <Link
                href="/paquetes"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary-500/30"
              >
                Ver Paquetes
                <ChevronRightIcon className="w-5 h-5" />
              </Link>
              <Link
                href="/contacto"
                className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white/10 backdrop-blur-sm text-white font-medium rounded-lg border border-white/20 hover:bg-white/20 transition-colors"
              >
                Contactar
              </Link>
            </div>
          </div>
        </div>
      </section>

      {/* Features */}
      <section className="py-16 bg-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
            <div className="flex items-start gap-4 p-6 bg-primary-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-primary rounded-lg flex items-center justify-center flex-shrink-0">
                <PlaneIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-900 mb-2">Tours Exclusivos</h3>
                <p className="text-dark-500 text-sm">Paquetes diseñados para experiencias únicas en cada destino.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-secondary-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-secondary rounded-lg flex items-center justify-center flex-shrink-0">
                <UsersIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-900 mb-2">Guías Expertos</h3>
                <p className="text-dark-500 text-sm">Profesionales locales que conocen cada rincón de Chile.</p>
              </div>
            </div>
            <div className="flex items-start gap-4 p-6 bg-accent-50 rounded-xl">
              <div className="w-12 h-12 bg-gradient-accent rounded-lg flex items-center justify-center flex-shrink-0">
                <CheckIcon className="w-6 h-6 text-white" />
              </div>
              <div>
                <h3 className="font-semibold text-dark-900 mb-2">Reserva Segura</h3>
                <p className="text-dark-500 text-sm">Pagos protegidos y confirmación inmediata de reservas.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Featured Packages */}
      <section className="py-16 lg:py-24 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center mb-12">
            <span className="text-primary-600 font-medium">Nuestros Tours</span>
            <h2 className="text-3xl lg:text-4xl font-bold text-dark-900 mt-2">
              Paquetes Destacados
            </h2>
            <p className="text-dark-500 mt-4 max-w-2xl mx-auto">
              Descubre nuestras experiencias más populares, diseñadas para que vivas Chile de manera auténtica.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {featuredPackages.map((pkg) => (
              <Link
                key={pkg.id}
                href={`/paquetes/${pkg.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-shadow"
              >
                <div className="relative h-56">
                  <Image
                    src={pkg.image}
                    alt={pkg.name}
                    fill
                    className="object-cover group-hover:scale-105 transition-transform duration-300"
                    unoptimized
                  />
                  {pkg.originalPrice && (
                    <span className="absolute top-4 left-4 px-3 py-1 bg-secondary-500 text-white text-xs font-medium rounded-full">
                      Oferta
                    </span>
                  )}
                  <span className="absolute top-4 right-4 px-3 py-1 bg-white/90 backdrop-blur-sm text-dark-700 text-xs font-medium rounded-full">
                    {pkg.category}
                  </span>
                </div>
                <div className="p-5">
                  <div className="flex items-center gap-2 text-sm text-dark-500 mb-2">
                    <MapPinIcon className="w-4 h-4" />
                    {pkg.destination}, {pkg.country}
                  </div>
                  <h3 className="font-semibold text-dark-900 text-lg mb-2 group-hover:text-primary-600 transition-colors">
                    {pkg.name}
                  </h3>
                  <p className="text-dark-500 text-sm line-clamp-2 mb-4">{pkg.shortDescription}</p>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div className="flex items-center gap-3 text-sm text-dark-500">
                      <span className="flex items-center gap-1">
                        <ClockIcon className="w-4 h-4" />
                        {pkg.duration}
                      </span>
                      <span className="flex items-center gap-1">
                        <StarIcon className="w-4 h-4 text-yellow-400" />
                        {pkg.rating}
                      </span>
                    </div>
                    <div className="text-right">
                      {pkg.originalPrice && (
                        <span className="text-sm text-dark-400 line-through">
                          {formatPrice(pkg.originalPrice)}
                        </span>
                      )}
                      <p className="text-lg font-bold text-primary-600">{formatPrice(pkg.price)}</p>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          <div className="text-center mt-10">
            <Link
              href="/paquetes"
              className="inline-flex items-center gap-2 px-6 py-3 bg-gradient-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
            >
              Ver Todos los Paquetes
              <ChevronRightIcon className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="py-16 lg:py-24 bg-gradient-to-r from-primary-600 to-primary-800 text-white">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h2 className="text-3xl lg:text-4xl font-bold mb-4">
            ¿Listo para tu próxima aventura?
          </h2>
          <p className="text-primary-100 max-w-2xl mx-auto mb-8">
            Contáctanos hoy y diseñamos el viaje perfecto para ti.
            Nuestro equipo está listo para ayudarte a crear recuerdos inolvidables.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center">
            <Link
              href="/contacto"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-white text-primary-600 font-medium rounded-lg hover:bg-primary-50 transition-colors"
            >
              Solicitar Cotización
            </Link>
            <a
              href="https://wa.me/56912345678"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center justify-center gap-2 px-6 py-3 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-colors"
            >
              WhatsApp
            </a>
          </div>
        </div>
      </section>
    </>
  );
}
