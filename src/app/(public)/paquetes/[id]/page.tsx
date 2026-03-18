'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { useParams } from 'next/navigation';
import {
  MapPinIcon,
  ClockIcon,
  StarIcon,
  UsersIcon,
  CheckIcon,
  CalendarIcon,
  ChevronRightIcon,
  PhoneIcon,
  WhatsAppIcon,
} from '@/components/icons';
import { getPackageById, formatPrice } from '@/data/mockData';

export default function PackageDetailPage() {
  const params = useParams();
  const pkg = getPackageById(params.id as string);
  const [selectedDate, setSelectedDate] = useState('');
  const [travelers, setTravelers] = useState(2);

  if (!pkg) {
    return (
      <div className="min-h-screen flex items-center justify-center">
        <div className="text-center">
          <h1 className="text-2xl font-bold text-dark-900 mb-4">Paquete no encontrado</h1>
          <Link href="/paquetes" className="text-primary-600 hover:underline">
            Volver a paquetes
          </Link>
        </div>
      </div>
    );
  }

  const totalPrice = pkg.price * travelers;

  return (
    <>
      {/* Hero */}
      <section className="relative h-[50vh] min-h-[400px]">
        <Image
          src={pkg.image}
          alt={pkg.name}
          fill
          className="object-cover"
          priority
          unoptimized
        />
        <div className="absolute inset-0 bg-gradient-to-t from-dark-900/80 via-dark-900/30 to-transparent"></div>
        <div className="absolute bottom-0 left-0 right-0 p-8">
          <div className="max-w-7xl mx-auto">
            <div className="flex items-center gap-2 text-white/80 text-sm mb-3">
              <Link href="/" className="hover:text-white">Inicio</Link>
              <ChevronRightIcon className="w-4 h-4" />
              <Link href="/paquetes" className="hover:text-white">Paquetes</Link>
              <ChevronRightIcon className="w-4 h-4" />
              <span>{pkg.name}</span>
            </div>
            <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">{pkg.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white/90">
              <span className="flex items-center gap-2">
                <MapPinIcon className="w-5 h-5" />
                {pkg.destination}, {pkg.country}
              </span>
              <span className="flex items-center gap-2">
                <ClockIcon className="w-5 h-5" />
                {pkg.duration}
              </span>
              <span className="flex items-center gap-2">
                <StarIcon className="w-5 h-5 text-yellow-400" />
                {pkg.rating} ({pkg.reviews} reseñas)
              </span>
            </div>
          </div>
        </div>
      </section>

      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12">
        <div className="grid grid-cols-1 lg:grid-cols-3 gap-8">
          {/* Main Content */}
          <div className="lg:col-span-2 space-y-8">
            {/* Description */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-dark-900 mb-4">Descripción</h2>
              <p className="text-dark-600 leading-relaxed">{pkg.description}</p>
            </div>

            {/* Highlights */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-dark-900 mb-4">Destacados del Tour</h2>
              <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                {pkg.highlights.map((highlight, index) => (
                  <div key={index} className="flex items-start gap-3">
                    <div className="w-6 h-6 bg-primary-100 rounded-full flex items-center justify-center flex-shrink-0 mt-0.5">
                      <CheckIcon className="w-4 h-4 text-primary-600" />
                    </div>
                    <span className="text-dark-600">{highlight}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Itinerary */}
            <div className="bg-white rounded-2xl p-6 shadow-sm">
              <h2 className="text-xl font-semibold text-dark-900 mb-6">Itinerario</h2>
              <div className="space-y-6">
                {pkg.itinerary.map((day, index) => (
                  <div key={index} className="relative pl-8 pb-6 border-l-2 border-primary-200 last:border-l-0 last:pb-0">
                    <div className="absolute -left-3 top-0 w-6 h-6 bg-gradient-primary rounded-full flex items-center justify-center">
                      <span className="text-white text-xs font-medium">{day.day}</span>
                    </div>
                    <h3 className="font-semibold text-dark-900 mb-2">{day.title}</h3>
                    <p className="text-dark-500 text-sm mb-3">{day.description}</p>
                    <div className="flex flex-wrap gap-2">
                      {day.activities.map((activity, actIndex) => (
                        <span
                          key={actIndex}
                          className="px-3 py-1 bg-primary-50 text-primary-700 text-xs rounded-full"
                        >
                          {activity}
                        </span>
                      ))}
                    </div>
                  </div>
                ))}
              </div>
            </div>

            {/* Includes / Excludes */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-dark-900 mb-4">Incluye</h2>
                <ul className="space-y-3">
                  {pkg.includes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <CheckIcon className="w-5 h-5 text-accent-500 flex-shrink-0 mt-0.5" />
                      <span className="text-dark-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
              <div className="bg-white rounded-2xl p-6 shadow-sm">
                <h2 className="text-xl font-semibold text-dark-900 mb-4">No Incluye</h2>
                <ul className="space-y-3">
                  {pkg.excludes.map((item, index) => (
                    <li key={index} className="flex items-start gap-3">
                      <span className="w-5 h-5 flex items-center justify-center flex-shrink-0 mt-0.5 text-dark-400">×</span>
                      <span className="text-dark-600 text-sm">{item}</span>
                    </li>
                  ))}
                </ul>
              </div>
            </div>
          </div>

          {/* Booking Sidebar */}
          <div className="lg:col-span-1">
            <div className="bg-white rounded-2xl p-6 shadow-sm sticky top-24">
              <div className="mb-6">
                <div className="flex items-center gap-3 mb-2">
                  {pkg.originalPrice && (
                    <span className="text-lg text-dark-400 line-through">
                      {formatPrice(pkg.originalPrice)}
                    </span>
                  )}
                  <span className="text-3xl font-bold text-primary-600">
                    {formatPrice(pkg.price)}
                  </span>
                </div>
                <p className="text-dark-500 text-sm">por persona</p>
              </div>

              <div className="space-y-4 mb-6">
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    <CalendarIcon className="w-4 h-4 inline mr-2" />
                    Fecha de Inicio
                  </label>
                  <input
                    type="date"
                    value={selectedDate}
                    onChange={(e) => setSelectedDate(e.target.value)}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                  />
                </div>
                <div>
                  <label className="block text-sm font-medium text-dark-700 mb-2">
                    <UsersIcon className="w-4 h-4 inline mr-2" />
                    Viajeros
                  </label>
                  <select
                    value={travelers}
                    onChange={(e) => setTravelers(Number(e.target.value))}
                    className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                  >
                    {[1, 2, 3, 4, 5, 6, 7, 8].map((num) => (
                      <option key={num} value={num}>
                        {num} {num === 1 ? 'persona' : 'personas'}
                      </option>
                    ))}
                  </select>
                </div>
              </div>

              <div className="border-t border-gray-100 pt-4 mb-6">
                <div className="flex items-center justify-between mb-2">
                  <span className="text-dark-500">
                    {formatPrice(pkg.price)} × {travelers} personas
                  </span>
                  <span className="text-dark-700">{formatPrice(totalPrice)}</span>
                </div>
                <div className="flex items-center justify-between font-semibold text-lg">
                  <span className="text-dark-900">Total</span>
                  <span className="text-primary-600">{formatPrice(totalPrice)}</span>
                </div>
              </div>

              <div className="space-y-3">
                <button className="w-full py-3 bg-gradient-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary-500/30">
                  Reservar Ahora
                </button>
                <a
                  href={`https://wa.me/56912345678?text=Hola! Me interesa el paquete: ${pkg.name}`}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="w-full py-3 bg-accent-500 text-white font-medium rounded-lg hover:bg-accent-600 transition-colors flex items-center justify-center gap-2"
                >
                  <WhatsAppIcon className="w-5 h-5" />
                  Consultar por WhatsApp
                </a>
                <a
                  href="tel:+56912345678"
                  className="w-full py-3 bg-gray-100 text-dark-700 font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-2"
                >
                  <PhoneIcon className="w-5 h-5" />
                  Llamar Ahora
                </a>
              </div>

              <div className="mt-6 p-4 bg-primary-50 rounded-lg">
                <p className="text-sm text-primary-700">
                  <strong>¡Cupos limitados!</strong> Solo quedan {pkg.availableSpots} lugares disponibles para este tour.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
}
