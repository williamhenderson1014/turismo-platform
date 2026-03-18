'use client';

import { useState } from 'react';
import {
  SearchIcon,
  PlusIcon,
  EyeIcon,
  EditIcon,
  MailIcon,
  WhatsAppIcon,
  CheckIcon,
} from '@/components/icons';
import { quotations, formatPrice } from '@/data/mockData';

export default function AdminQuotationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredQuotations = quotations.filter((quote) => {
    const matchesSearch =
      quote.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      quote.clientEmail.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || quote.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      pendiente: 'bg-yellow-100 text-yellow-700',
      enviada: 'bg-blue-100 text-blue-700',
      aceptada: 'bg-accent-100 text-accent-700',
      rechazada: 'bg-red-100 text-red-700',
    };
    return styles[status] || 'bg-gray-100 text-gray-700';
  };

  const stats = {
    total: quotations.length,
    pendientes: quotations.filter(q => q.status === 'pendiente').length,
    enviadas: quotations.filter(q => q.status === 'enviada').length,
    aceptadas: quotations.filter(q => q.status === 'aceptada').length,
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4">
        <div>
          <h1 className="text-2xl font-bold text-dark-900">Cotizaciones</h1>
          <p className="text-dark-500 mt-1">Gestiona las solicitudes de cotización</p>
        </div>
        <button className="inline-flex items-center justify-center gap-2 px-4 py-2.5 bg-gradient-primary text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity shadow-lg shadow-primary-500/20">
          <PlusIcon className="w-5 h-5" />
          Nueva Cotización
        </button>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-dark-500 text-sm">Total</p>
          <p className="text-2xl font-bold text-dark-900">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-dark-500 text-sm">Pendientes</p>
          <p className="text-2xl font-bold text-yellow-600">{stats.pendientes}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-dark-500 text-sm">Enviadas</p>
          <p className="text-2xl font-bold text-blue-600">{stats.enviadas}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-dark-500 text-sm">Aceptadas</p>
          <p className="text-2xl font-bold text-accent-600">{stats.aceptadas}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="text"
              placeholder="Buscar por cliente..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
            />
          </div>
          <select
            value={statusFilter}
            onChange={(e) => setStatusFilter(e.target.value)}
            className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
          >
            <option value="all">Todos los estados</option>
            <option value="pendiente">Pendiente</option>
            <option value="enviada">Enviada</option>
            <option value="aceptada">Aceptada</option>
            <option value="rechazada">Rechazada</option>
          </select>
        </div>
      </div>

      {/* Quotations List */}
      <div className="space-y-4">
        {filteredQuotations.map((quote) => (
          <div key={quote.id} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex flex-col lg:flex-row lg:items-center justify-between gap-4">
              <div className="flex-1">
                <div className="flex items-center gap-3 mb-2">
                  <h3 className="font-semibold text-dark-900">{quote.clientName}</h3>
                  <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(quote.status)}`}>
                    {quote.status.charAt(0).toUpperCase() + quote.status.slice(1)}
                  </span>
                </div>
                <div className="flex flex-wrap items-center gap-4 text-sm text-dark-500">
                  <span className="flex items-center gap-1">
                    <MailIcon className="w-4 h-4" />
                    {quote.clientEmail}
                  </span>
                  <span>Destino: {quote.destination}</span>
                  <span>Viajeros: {quote.travelers}</span>
                  <span>Fecha: {quote.travelDate}</span>
                </div>
                {quote.notes && (
                  <p className="text-sm text-dark-600 mt-2 bg-gray-50 p-3 rounded-lg">
                    {quote.notes}
                  </p>
                )}
              </div>
              <div className="flex flex-col items-end gap-2">
                {quote.quotedPrice && (
                  <p className="text-xl font-bold text-primary-600">{formatPrice(quote.quotedPrice)}</p>
                )}
                <div className="flex items-center gap-2">
                  <button className="p-2 text-dark-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                    <EyeIcon className="w-5 h-5" />
                  </button>
                  <button className="p-2 text-dark-400 hover:text-secondary-600 hover:bg-secondary-50 rounded-lg transition-colors">
                    <EditIcon className="w-5 h-5" />
                  </button>
                  <a
                    href={`https://wa.me/${quote.clientPhone?.replace(/\D/g, '')}?text=Hola ${quote.clientName}! Te enviamos la cotización...`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="p-2 text-white bg-accent-500 hover:bg-accent-600 rounded-lg transition-colors"
                  >
                    <WhatsAppIcon className="w-5 h-5" />
                  </a>
                  {quote.status === 'pendiente' && (
                    <button className="px-4 py-2 bg-gradient-primary text-white text-sm font-medium rounded-lg hover:opacity-90 transition-opacity flex items-center gap-1">
                      <CheckIcon className="w-4 h-4" />
                      Responder
                    </button>
                  )}
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>

      {filteredQuotations.length === 0 && (
        <div className="bg-white rounded-xl p-12 text-center shadow-sm">
          <p className="text-dark-500">No se encontraron cotizaciones</p>
        </div>
      )}
    </div>
  );
}
