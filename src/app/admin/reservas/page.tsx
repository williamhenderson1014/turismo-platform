'use client';

import { useState } from 'react';
import {
  SearchIcon,
  FilterIcon,
  EyeIcon,
  EditIcon,
  CalendarIcon,
  WhatsAppIcon,
} from '@/components/icons';
import { reservations, formatPrice } from '@/data/mockData';

export default function AdminReservationsPage() {
  const [searchTerm, setSearchTerm] = useState('');
  const [statusFilter, setStatusFilter] = useState('all');

  const filteredReservations = reservations.filter((res) => {
    const matchesSearch =
      res.clientName.toLowerCase().includes(searchTerm.toLowerCase()) ||
      res.packageName.toLowerCase().includes(searchTerm.toLowerCase());
    const matchesStatus = statusFilter === 'all' || res.status === statusFilter;
    return matchesSearch && matchesStatus;
  });

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      confirmada: 'bg-accent-100 text-accent-700',
      pendiente: 'bg-yellow-100 text-yellow-700',
      cancelada: 'bg-red-100 text-red-700',
    };
    return styles[status] || 'bg-gray-100 text-gray-700';
  };

  const getPaymentBadge = (status: string) => {
    const styles: Record<string, string> = {
      pagado: 'bg-accent-100 text-accent-700',
      pendiente: 'bg-yellow-100 text-yellow-700',
      parcial: 'bg-blue-100 text-blue-700',
    };
    return styles[status] || 'bg-gray-100 text-gray-700';
  };

  const stats = {
    total: reservations.length,
    confirmadas: reservations.filter(r => r.status === 'confirmada').length,
    pendientes: reservations.filter(r => r.status === 'pendiente').length,
    ingresos: reservations.filter(r => r.paymentStatus === 'pagado').reduce((sum, r) => sum + r.totalPrice, 0),
  };

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-dark-900">Reservas</h1>
        <p className="text-dark-500 mt-1">Administra las reservas de tours</p>
      </div>

      {/* Stats */}
      <div className="grid grid-cols-1 sm:grid-cols-4 gap-4">
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-dark-500 text-sm">Total Reservas</p>
          <p className="text-2xl font-bold text-dark-900">{stats.total}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-dark-500 text-sm">Confirmadas</p>
          <p className="text-2xl font-bold text-accent-600">{stats.confirmadas}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-dark-500 text-sm">Pendientes</p>
          <p className="text-2xl font-bold text-yellow-600">{stats.pendientes}</p>
        </div>
        <div className="bg-white rounded-xl p-4 shadow-sm">
          <p className="text-dark-500 text-sm">Ingresos</p>
          <p className="text-2xl font-bold text-primary-600">{formatPrice(stats.ingresos)}</p>
        </div>
      </div>

      {/* Filters */}
      <div className="bg-white rounded-xl p-4 shadow-sm">
        <div className="flex flex-col lg:flex-row gap-4">
          <div className="relative flex-1">
            <SearchIcon className="absolute left-3 top-1/2 -translate-y-1/2 w-5 h-5 text-dark-400" />
            <input
              type="text"
              placeholder="Buscar por cliente o paquete..."
              value={searchTerm}
              onChange={(e) => setSearchTerm(e.target.value)}
              className="w-full pl-10 pr-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
            />
          </div>
          <div className="flex items-center gap-2">
            <FilterIcon className="w-5 h-5 text-dark-400" />
            <select
              value={statusFilter}
              onChange={(e) => setStatusFilter(e.target.value)}
              className="px-4 py-2.5 border border-gray-200 rounded-lg text-sm focus:outline-none focus:border-primary-500"
            >
              <option value="all">Todos los estados</option>
              <option value="confirmada">Confirmada</option>
              <option value="pendiente">Pendiente</option>
              <option value="cancelada">Cancelada</option>
            </select>
          </div>
        </div>
      </div>

      {/* Reservations Table */}
      <div className="bg-white rounded-xl shadow-sm overflow-hidden">
        <div className="overflow-x-auto">
          <table className="w-full">
            <thead>
              <tr className="text-left text-sm text-dark-500 bg-gray-50 border-b border-gray-100">
                <th className="px-6 py-4 font-medium">ID</th>
                <th className="px-6 py-4 font-medium">Cliente</th>
                <th className="px-6 py-4 font-medium">Paquete</th>
                <th className="px-6 py-4 font-medium">Fecha</th>
                <th className="px-6 py-4 font-medium">Viajeros</th>
                <th className="px-6 py-4 font-medium">Total</th>
                <th className="px-6 py-4 font-medium">Estado</th>
                <th className="px-6 py-4 font-medium">Pago</th>
                <th className="px-6 py-4 font-medium">Acciones</th>
              </tr>
            </thead>
            <tbody>
              {filteredReservations.map((res) => (
                <tr key={res.id} className="border-b border-gray-50 hover:bg-gray-50">
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-dark-900">#{res.id}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-dark-900">{res.clientName}</p>
                    <p className="text-xs text-dark-500">{res.clientEmail}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-dark-700">{res.packageName}</p>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2 text-sm text-dark-700">
                      <CalendarIcon className="w-4 h-4 text-dark-400" />
                      {res.startDate}
                    </div>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm text-dark-700">{res.travelers}</p>
                  </td>
                  <td className="px-6 py-4">
                    <p className="text-sm font-medium text-dark-900">{formatPrice(res.totalPrice)}</p>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(res.status)}`}>
                      {res.status.charAt(0).toUpperCase() + res.status.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <span className={`px-2 py-1 text-xs font-medium rounded-full ${getPaymentBadge(res.paymentStatus)}`}>
                      {res.paymentStatus.charAt(0).toUpperCase() + res.paymentStatus.slice(1)}
                    </span>
                  </td>
                  <td className="px-6 py-4">
                    <div className="flex items-center gap-2">
                      <button className="p-2 text-dark-400 hover:text-primary-600 hover:bg-primary-50 rounded-lg transition-colors">
                        <EyeIcon className="w-4 h-4" />
                      </button>
                      <button className="p-2 text-dark-400 hover:text-secondary-600 hover:bg-secondary-50 rounded-lg transition-colors">
                        <EditIcon className="w-4 h-4" />
                      </button>
                      <a
                        href={`https://wa.me/56912345678?text=Hola! Sobre tu reserva #${res.id}`}
                        target="_blank"
                        rel="noopener noreferrer"
                        className="p-2 text-dark-400 hover:text-accent-600 hover:bg-accent-50 rounded-lg transition-colors"
                      >
                        <WhatsAppIcon className="w-4 h-4" />
                      </a>
                    </div>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
        <div className="px-6 py-4 border-t border-gray-100">
          <p className="text-sm text-dark-500">
            Mostrando {filteredReservations.length} de {reservations.length} reservas
          </p>
        </div>
      </div>
    </div>
  );
}
