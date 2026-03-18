'use client';

import {
  ChartIcon,
  TrendUpIcon,
  CalendarIcon,
  UsersIcon,
  CreditCardIcon,
} from '@/components/icons';
import { formatPrice, reservations, clients, tourPackages } from '@/data/mockData';

export default function AdminReportsPage() {
  const totalRevenue = reservations.reduce((sum, r) => sum + r.totalPrice, 0);
  const paidRevenue = reservations.filter(r => r.paymentStatus === 'pagado').reduce((sum, r) => sum + r.totalPrice, 0);
  const avgTicket = totalRevenue / reservations.length;

  const packageStats = tourPackages.map(pkg => {
    const pkgReservations = reservations.filter(r => r.packageId === pkg.id);
    const pkgRevenue = pkgReservations.reduce((sum, r) => sum + r.totalPrice, 0);
    return {
      name: pkg.name,
      reservations: pkgReservations.length,
      revenue: pkgRevenue,
    };
  }).sort((a, b) => b.revenue - a.revenue);

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-dark-900">Reportes</h1>
        <p className="text-dark-500 mt-1">Análisis y estadísticas del negocio</p>
      </div>

      {/* KPIs */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
              <CreditCardIcon className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <p className="text-dark-500 text-sm">Ingresos Totales</p>
              <p className="text-xl font-bold text-dark-900">{formatPrice(totalRevenue)}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-accent-100 rounded-xl flex items-center justify-center">
              <TrendUpIcon className="w-6 h-6 text-accent-600" />
            </div>
            <div>
              <p className="text-dark-500 text-sm">Ingresos Cobrados</p>
              <p className="text-xl font-bold text-accent-600">{formatPrice(paidRevenue)}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-secondary-100 rounded-xl flex items-center justify-center">
              <CalendarIcon className="w-6 h-6 text-secondary-600" />
            </div>
            <div>
              <p className="text-dark-500 text-sm">Total Reservas</p>
              <p className="text-xl font-bold text-dark-900">{reservations.length}</p>
            </div>
          </div>
        </div>
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <div className="flex items-center gap-4">
            <div className="w-12 h-12 bg-primary-100 rounded-xl flex items-center justify-center">
              <UsersIcon className="w-6 h-6 text-primary-600" />
            </div>
            <div>
              <p className="text-dark-500 text-sm">Ticket Promedio</p>
              <p className="text-xl font-bold text-dark-900">{formatPrice(avgTicket)}</p>
            </div>
          </div>
        </div>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        {/* Revenue by Package */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-dark-900 mb-6">Ingresos por Paquete</h2>
          <div className="space-y-4">
            {packageStats.map((stat, index) => (
              <div key={index} className="flex items-center justify-between">
                <div className="flex-1 mr-4">
                  <p className="text-sm font-medium text-dark-900">{stat.name}</p>
                  <div className="mt-1 h-2 bg-gray-100 rounded-full overflow-hidden">
                    <div
                      className="h-full bg-gradient-primary rounded-full"
                      style={{ width: `${(stat.revenue / totalRevenue) * 100}%` }}
                    />
                  </div>
                </div>
                <div className="text-right">
                  <p className="text-sm font-medium text-dark-900">{formatPrice(stat.revenue)}</p>
                  <p className="text-xs text-dark-500">{stat.reservations} reservas</p>
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Client Stats */}
        <div className="bg-white rounded-xl p-6 shadow-sm">
          <h2 className="text-lg font-semibold text-dark-900 mb-6">Top Clientes</h2>
          <div className="space-y-4">
            {clients
              .sort((a, b) => b.totalSpent - a.totalSpent)
              .slice(0, 5)
              .map((client, index) => (
                <div key={client.id} className="flex items-center gap-4">
                  <div className="w-10 h-10 bg-gradient-primary rounded-full flex items-center justify-center flex-shrink-0">
                    <span className="text-white font-medium">{index + 1}</span>
                  </div>
                  <div className="flex-1">
                    <p className="text-sm font-medium text-dark-900">{client.name}</p>
                    <p className="text-xs text-dark-500">{client.totalReservations} reservas</p>
                  </div>
                  <div className="text-right">
                    <p className="text-sm font-bold text-primary-600">{formatPrice(client.totalSpent)}</p>
                  </div>
                </div>
              ))}
          </div>
        </div>
      </div>

      {/* Monthly Summary */}
      <div className="bg-white rounded-xl p-6 shadow-sm">
        <h2 className="text-lg font-semibold text-dark-900 mb-6">Resumen del Período</h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          <div className="p-4 bg-primary-50 rounded-xl">
            <ChartIcon className="w-8 h-8 text-primary-600 mb-2" />
            <p className="text-2xl font-bold text-dark-900">{Math.round((paidRevenue / totalRevenue) * 100)}%</p>
            <p className="text-sm text-dark-500">Tasa de conversión de pagos</p>
          </div>
          <div className="p-4 bg-secondary-50 rounded-xl">
            <UsersIcon className="w-8 h-8 text-secondary-600 mb-2" />
            <p className="text-2xl font-bold text-dark-900">{clients.filter(c => c.status === 'active').length}</p>
            <p className="text-sm text-dark-500">Clientes activos</p>
          </div>
          <div className="p-4 bg-accent-50 rounded-xl">
            <CalendarIcon className="w-8 h-8 text-accent-600 mb-2" />
            <p className="text-2xl font-bold text-dark-900">{tourPackages.reduce((sum, p) => sum + p.availableSpots, 0)}</p>
            <p className="text-sm text-dark-500">Cupos disponibles</p>
          </div>
        </div>
      </div>
    </div>
  );
}
