'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  MapPinIcon,
  ClockIcon,
  StarIcon,
  SearchIcon,
  FilterIcon,
  UsersIcon,
} from '@/components/icons';
import { tourPackages, formatPrice } from '@/data/mockData';

const categories = ['Todos', 'Aventura', 'Naturaleza', 'Cultural'];

export default function PackagesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('Todos');

  const filteredPackages = tourPackages.filter((pkg) => {
    const matchesSearch =
      pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'Todos' || pkg.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <>
      {/* Hero */}
      <section className="relative h-64 lg:h-80 flex items-center">
        <div className="absolute inset-0 z-0">
          <Image
            src="https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=1920"
            alt="Paquetes Turísticos"
            fill
            className="object-cover"
            unoptimized
          />
          <div className="absolute inset-0 bg-dark-900/60"></div>
        </div>
        <div className="relative z-10 max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 text-center">
          <h1 className="text-3xl lg:text-5xl font-bold text-white mb-4">
            Paquetes Turísticos
          </h1>
          <p className="text-gray-200 max-w-2xl mx-auto">
            Explora nuestra selección de tours y experiencias únicas en Chile
          </p>
        </div>
      </section>

      {/* Filters */}
      <section className="py-8 bg-white border-b border-gray-100 sticky top-16 lg:top-20 z-40">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-4 lg:items-center lg:justify-between">
            <div className="relative flex-1 max-w-md">
              <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
              <input
                type="text"
                placeholder="Buscar destino o paquete..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
                className="w-full pl-10 pr-4 py-2.5 bg-gray-50 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
              />
            </div>
            <div className="flex items-center gap-2 overflow-x-auto pb-2 lg:pb-0">
              {categories.map((cat) => (
                <button
                  key={cat}
                  onClick={() => setSelectedCategory(cat)}
                  className={`px-4 py-2 rounded-lg text-sm font-medium whitespace-nowrap transition-colors ${
                    selectedCategory === cat
                      ? 'bg-gradient-primary text-white'
                      : 'bg-gray-100 text-dark-600 hover:bg-gray-200'
                  }`}
                >
                  {cat}
                </button>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Packages Grid */}
      <section className="py-12 bg-gray-50">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <p className="text-dark-500 mb-6">{filteredPackages.length} paquetes encontrados</p>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
            {filteredPackages.map((pkg) => (
              <Link
                key={pkg.id}
                href={`/paquetes/${pkg.id}`}
                className="group bg-white rounded-2xl overflow-hidden shadow-sm hover:shadow-xl transition-all"
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
                      -{Math.round((1 - pkg.price / pkg.originalPrice) * 100)}% OFF
                    </span>
                  )}
                  <div className="absolute bottom-4 left-4 right-4 flex items-center justify-between">
                    <span className="px-3 py-1 bg-white/90 backdrop-blur-sm text-dark-700 text-xs font-medium rounded-full">
                      {pkg.category}
                    </span>
                    <span className="flex items-center gap-1 px-3 py-1 bg-white/90 backdrop-blur-sm text-dark-700 text-xs font-medium rounded-full">
                      <UsersIcon className="w-3 h-3" />
                      {pkg.availableSpots} cupos
                    </span>
                  </div>
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
                  <div className="flex items-center gap-4 text-sm text-dark-500 mb-4">
                    <span className="flex items-center gap-1">
                      <ClockIcon className="w-4 h-4" />
                      {pkg.duration}
                    </span>
                    <span className="flex items-center gap-1">
                      <StarIcon className="w-4 h-4 text-yellow-400" />
                      {pkg.rating} ({pkg.reviews})
                    </span>
                  </div>
                  <div className="flex items-center justify-between pt-4 border-t border-gray-100">
                    <div>
                      <p className="text-xs text-dark-400">Desde</p>
                      <div className="flex items-center gap-2">
                        {pkg.originalPrice && (
                          <span className="text-sm text-dark-400 line-through">
                            {formatPrice(pkg.originalPrice)}
                          </span>
                        )}
                        <span className="text-xl font-bold text-primary-600">{formatPrice(pkg.price)}</span>
                      </div>
                    </div>
                    <span className="px-4 py-2 bg-primary-50 text-primary-600 text-sm font-medium rounded-lg group-hover:bg-gradient-primary group-hover:text-white transition-all">
                      Ver Detalles
                    </span>
                  </div>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
