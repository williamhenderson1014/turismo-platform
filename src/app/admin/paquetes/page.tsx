'use client';

import { useState } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import {
  SearchIcon,
  PlusIcon,
  EditIcon,
  EyeIcon,
  TrashIcon,
  FilterIcon,
} from '@/components/icons';
import { tourPackages, formatPrice } from '@/data/mockData';

export default function AdminPackagesPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [selectedCategory, setSelectedCategory] = useState('all');

  const categories = ['all', 'Aventura', 'Naturaleza', 'Cultural'];

  const filteredPackages = tourPackages.filter((pkg) => {
    const matchesSearch = pkg.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      pkg.destination.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesCategory = selectedCategory === 'all' || pkg.category === selectedCategory;
    return matchesSearch && matchesCategory;
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-900">Paquetes Turísticos</h1>
          <p className="text-dark-500 mt-1">Gestiona los paquetes disponibles</p>
        </div>
        <Link
          href="/admin/paquetes/nuevo"
          className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-primary text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary-500/20"
        >
          <PlusIcon className="w-5 h-5" />
          Nuevo Paquete
        </Link>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="text"
              placeholder="Buscar paquetes..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <FilterIcon className="w-5 h-5 text-dark-400" />
            <select
              value={selectedCategory}
              onChange={(e) => setSelectedCategory(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
            >
              <option value="all">Todas las categorías</option>
              {categories.slice(1).map((cat) => (
                <option key={cat} value={cat}>{cat}</option>
              ))}
            </select>
          </div>
        </div>
      </div>

      {/* Packages Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-dark-500 bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 font-medium">Paquete</th>
                <th className="px-6 py-4 font-medium">Destino</th>
                <th className="px-6 py-4 font-medium">Categoría</th>
                <th className="px-6 py-4 font-medium">Duración</th>
                <th className="px-6 py-4 font-medium">Precio</th>
                <th className="px-6 py-4 font-medium">Cupos</th>
                <th className="px-6 py-4 font-medium">Estado</th>
                <th className="px-6 py-4 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredPackages.map((pkg) => (
                <tr key={pkg.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-3">
                      <div className="relative w-16 h-12 rounded-lg overflow-hidden flex-shrink-0">
                        <Image
                          src={pkg.image}
                          alt={pkg.name}
                          fill
                          className="object-cover"
                          unoptimized
                        />
                      </div>
                      <div>
                        <p className="text-sm font-medium text-dark-900">{pkg.name}</p>
                        <p className="text-xs text-dark-500">ID: {pkg.id}</p>
                      </div>
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-dark-700">{pkg.destination}</p>
                    <p className="text-xs text-dark-500">{pkg.country}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-primary-50 text-primary-700 text-xs font-medium rounded-full">
                      {pkg.category}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-dark-700">{pkg.duration}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-dark-900">{formatPrice(pkg.price)}</p>
                    {pkg.originalPrice && (
                      <p className="text-xs text-dark-400 line-through">{formatPrice(pkg.originalPrice)}</p>
                    )}
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-dark-700">{pkg.availableSpots}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className="px-2 py-1 bg-accent-100 text-accent-700 text-xs font-medium rounded-full">
                      Activo
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <Link
                        href={`/paquetes/${pkg.id}`}
                        target="_blank"
                        className="p-2 text-dark-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors"
                        title="Ver en sitio"
                      >
                        <EyeIcon className="w-4 h-4" />
                      </Link>
                      <button
                        className="p-2 text-dark-400 hover:text-secondary-600 hover:bg-secondary-50 rounded-lg transition-colors"
                        title="Editar"
                      >
                        <EditIcon className="w-4 h-4" />
                      </button>
                      <button
                        className="p-2 text-dark-400 hover:text-red-600 hover:bg-red-50 rounded-lg transition-colors"
                        title="Eliminar"
                      >
                        <TrashIcon className="w-4 h-4" />
                      </button>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-100">
          <p className="text-sm text-dark-500">
            Mostrando {filteredPackages.length} de {tourPackages.length} paquetes
          </p>
        </div>
      </div>
    </div>
  );
}
