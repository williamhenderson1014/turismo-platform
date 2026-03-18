'use client';

import Link from 'next/link';
import {
  PackageIcon,
  UsersIcon,
  CalendarIcon,
  CreditCardIcon,
  TrendUpIcon,
  ChevronRightIcon,
} from '@/components/icons';
import { getDashboardStats, getRecentReservations, formatPrice } from '@/data/mockData';

export default function AdminDashboard() {
  const stats = getDashboardStats();
  const recentReservations = getRecentReservations();

  const statCards = [
    {
      title: 'Reservas del Mes',
      value: stats.monthlyReservations,
      change: '+12%',
      icon: CalendarIcon,
      color: 'primary',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600',
    },
    {
      title: 'Ingresos del Mes',
      value: formatPrice(stats.monthlyRevenue),
      change: '+8%',
      icon: CreditCardIcon,
      color: 'secondary',
      bgColor: 'bg-secondary-50',
      iconColor: 'text-secondary-600',
    },
    {
      title: 'Paquetes Activos',
      value: stats.activePackages,
      change: '+2',
      icon: PackageIcon,
      color: 'accent',
      bgColor: 'bg-accent-50',
      iconColor: 'text-accent-600',
    },
    {
      title: 'Clientes Totales',
      value: stats.totalClients,
      change: '+15',
      icon: UsersIcon,
      color: 'primary',
      bgColor: 'bg-primary-50',
      iconColor: 'text-primary-600',
    },
  ];

  const getStatusBadge = (status: string) => {
    const styles: Record<string, string> = {
      confirmada: 'bg-accent-100 text-accent-700',
      pendiente: 'bg-yellow-100 text-yellow-700',
      cancelada: 'bg-red-100 text-red-700',
    };
    return styles[status] || 'bg-gray-100 text-gray-700';
  };

  return (
    <div className="space-y-8">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-dark-900">Dashboard</h1>
        <p className="text-dark-500 mt-1">Bienvenido al panel de administración</p>
      </div>

      {/* Stats Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        {statCards.map((stat, index) => (
          <div key={index} className="bg-white rounded-xl p-6 shadow-sm">
            <div className="flex items-start justify-between">
              <div>
                <p className="text-dark-500 text-sm">{stat.title}</p>
                <p className="text-2xl font-bold text-dark-900 mt-1">{stat.value}</p>
                <div className="flex items-center gap-1 mt-2">
                  <TrendUpIcon className="w-4 h-4 text-accent-600" />
                  <span className="text-accent-600 text-sm font-medium">{stat.change}</span>
                  <span className="text-dark-400 text-sm">vs mes anterior</span>
                </div>
              </div>
              <div className={`w-12 h-12 ${stat.bgColor} rounded-xl flex items-center justify-center`}>
                <stat.icon className={`w-6 h-6 ${stat.iconColor}`} />
              </div>
            </div>
          </div>
        ))}
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-3 gap-6">
        {/* Recent Reservations */}
        <div className="lg:col-span-2 bg-white rounded-xl shadow-sm">
          <div className="flex items-center justify-between p-6 border-b border-gray-100">
            <h2 className="text-lg font-semibold text-dark-900">Reservas Recientes</h2>
            <Link
              href="/admin/reservas"
              className="text-primary-600 text-sm font-medium hover:underline flex items-center gap-1"
            >
              Ver todas <ChevronRightIcon className="w-4 h-4" />
            </Link>
          </div>
          <div className="overflow-x-auto">
            <table className="w-full">
              <thead>
                <tr className="text-left text-sm text-dark-500 border-b border-gray-100">
                  <th className="px-6 py-3 font-medium">Cliente</th>
                  <th className="px-6 py-3 font-medium">Paquete</th>
                  <th className="px-6 py-3 font-medium">Fecha</th>
                  <th className="px-6 py-3 font-medium">Total</th>
                  <th className="px-6 py-3 font-medium">Estado</th>
                </tr>
              </thead>
              <tbody>
                {recentReservations.slice(0, 5).map((reservation) => (
                  <tr key={reservation.id} className="border-b border-gray-50 hover:bg-gray-50">
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-dark-900">{reservation.clientName}</p>
                      <p className="text-xs text-dark-500">{reservation.clientEmail}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-dark-700">{reservation.packageName}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm text-dark-700">{reservation.startDate}</p>
                    </td>
                    <td className="px-6 py-4">
                      <p className="text-sm font-medium text-dark-900">{formatPrice(reservation.totalPrice)}</p>
                    </td>
                    <td className="px-6 py-4">
                      <span className={`px-2 py-1 text-xs font-medium rounded-full ${getStatusBadge(reservation.status)}`}>
                        {reservation.status.charAt(0).toUpperCase() + reservation.status.slice(1)}
                      </span>
                    </td>
                  </tr>
                ))}
              </tbody>
            </table>
          </div>
        </div>

        {/* Quick Actions & Stats */}
        <div className="space-y-6">
          {/* Pending Quotations */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-dark-900 mb-4">Cotizaciones Pendientes</h3>
            <div className="text-center py-4">
              <p className="text-4xl font-bold text-secondary-600">{stats.pendingQuotations}</p>
              <p className="text-dark-500 text-sm mt-1">esperando respuesta</p>
            </div>
            <Link
              href="/admin/cotizaciones"
              className="block w-full mt-4 py-2.5 bg-secondary-50 text-secondary-600 text-sm font-medium rounded-lg text-center hover:bg-secondary-100 transition-colors"
            >
              Ver Cotizaciones
            </Link>
          </div>

          {/* Quick Actions */}
          <div className="bg-white rounded-xl p-6 shadow-sm">
            <h3 className="text-lg font-semibold text-dark-900 mb-4">Acciones Rápidas</h3>
            <div className="space-y-3">
              <Link
                href="/admin/paquetes/nuevo"
                className="block w-full py-2.5 bg-gradient-primary text-white text-sm font-medium rounded-lg text-center hover:opacity-90 transition-opacity"
              >
                Crear Nuevo Paquete
              </Link>
              <Link
                href="/admin/clientes/nuevo"
                className="block w-full py-2.5 bg-gray-100 text-dark-700 text-sm font-medium rounded-lg text-center hover:bg-gray-200 transition-colors"
              >
                Agregar Cliente
              </Link>
              <Link
                href="/admin/cotizaciones/nueva"
                className="block w-full py-2.5 bg-gray-100 text-dark-700 text-sm font-medium rounded-lg text-center hover:bg-gray-200 transition-colors"
              >
                Nueva Cotización
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
