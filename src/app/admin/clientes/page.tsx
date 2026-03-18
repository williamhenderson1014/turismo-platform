'use client';

import { useState } from 'react';
import {
  SearchIcon,
  PlusIcon,
  EditIcon,
  EyeIcon,
  MailIcon,
  PhoneIcon,
  WhatsAppIcon,
} from '@/components/icons';
import { clients, formatPrice } from '@/data/mockData';

export default function AdminClientsPage() {
  const [searchTerm, setSearchTerm] = useState('');

  const filteredClients = clients.filter((client) => {
    return (
      client.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.email.toLowerCase().includes(searchTerm.toLowerCase()) ||
      client.phone.includes(searchTerm)
    );
  });

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-900">Clientes (CRM)</h1>
          <p className="text-dark-500 mt-1">Gestiona tu base de clientes</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-primary text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary-500/20">
          <PlusIcon className="w-5 h-5" />
          Nuevo Cliente
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-dark-500 text-sm">Total Clientes</p>
          <p className="text-2xl font-bold text-dark-900">{clients.length}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-dark-500 text-sm">Clientes VIP</p>
          <p className="text-2xl font-bold text-secondary-600">
            {clients.filter(c => c.totalSpent > 2000000).length}
          </p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-dark-500 text-sm">Ingresos Totales</p>
          <p className="text-2xl font-bold text-accent-600">
            {formatPrice(clients.reduce((sum, c) => sum + c.totalSpent, 0))}
          </p>
        </div>
      </div>

      {/* Search */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="relative max-w-md">
          <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
          <input
            type="text"
            placeholder="Buscar por nombre, email o teléfono..."
            value={searchTerm}
            onChange={(e) => setSearchTerm(e.target.value)}
            className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
          />
        </div>
      </div>

      {/* Clients Grid */}
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
        {filteredClients.map((client) => (
          <div key={client.id} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between mb-4">
              <div className="flex items-center gap-3">
                <div className="w-12 h-12 bg-gradient-primary rounded-full flex items-center justify-center">
                  <span className="text-white font-semibold text-lg">
                    {client.name.charAt(0)}
                  </span>
                </div>
                <div>
                  <h3 className="font-semibold text-dark-900">{client.name}</h3>
                  <p className="text-xs text-dark-500">Cliente desde {client.createdAt}</p>
                </div>
              </div>
              {client.totalSpent > 2000000 && (
                <span className="px-2 py-1 bg-secondary-100 text-secondary-700 text-xs font-medium rounded-full">
                  VIP
                </span>
              )}
            </div>

            <div className="space-y-2 mb-4">
              <div className="flex items-center gap-2 text-sm text-dark-600">
                <MailIcon className="w-4 h-4 text-dark-400" />
                {client.email}
              </div>
              <div className="flex items-center gap-2 text-sm text-dark-600">
                <PhoneIcon className="w-4 h-4 text-dark-400" />
                {client.phone}
              </div>
            </div>

            <div className="grid grid-cols-2 gap-4 py-4 border-t border-gray-100">
              <div>
                <p className="text-xs text-dark-500">Reservas</p>
                <p className="text-lg font-semibold text-dark-900">{client.totalReservations}</p>
              </div>
              <div>
                <p className="text-xs text-dark-500">Total Gastado</p>
                <p className="text-lg font-semibold text-primary-600">{formatPrice(client.totalSpent)}</p>
              </div>
            </div>

            <div className="flex items-center gap-2 pt-4 border-t border-gray-100">
              <button className="flex-1 py-2 bg-gray-100 text-dark-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-1">
                <EyeIcon className="w-4 h-4" />
                Ver
              </button>
              <button className="flex-1 py-2 bg-gray-100 text-dark-700 text-sm font-medium rounded-lg hover:bg-gray-200 transition-colors flex items-center justify-center gap-1">
                <EditIcon className="w-4 h-4" />
                Editar
              </button>
              <a
                href={`https://wa.me/${client.phone.replace(/\D/g, '')}`}
                target="_blank"
                rel="noopener noreferrer"
                className="p-2 bg-accent-500 text-white rounded-lg hover:bg-accent-600 transition-colors"
              >
                <WhatsAppIcon className="w-4 h-4" />
              </a>
            </div>
          </div>
        ))}
      </div>

      {filteredClients.length === 0 && (
        <div className="bg-white rounded-xl p-12 text-center shadow-sm">
          <p className="text-dark-500">No se encontraron clientes</p>
        </div>
      )}
    </div>
  );
}
