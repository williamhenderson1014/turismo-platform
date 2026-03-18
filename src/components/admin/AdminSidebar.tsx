'use client';

import Link from 'next/link';
import { usePathname } from 'next/navigation';
import {
  LogoIcon,
  DashboardIcon,
  PackageIcon,
  UsersIcon,
  CalendarIcon,
  DocumentIcon,
  SettingsIcon,
  ChartIcon,
  LogoutIcon,
} from '@/components/icons';

const navigation = [
  { name: 'Dashboard', href: '/admin', icon: DashboardIcon },
  { name: 'Paquetes', href: '/admin/paquetes', icon: PackageIcon },
  { name: 'Clientes', href: '/admin/clientes', icon: UsersIcon },
  { name: 'Reservas', href: '/admin/reservas', icon: CalendarIcon },
  { name: 'Cotizaciones', href: '/admin/cotizaciones', icon: DocumentIcon },
  { name: 'Reportes', href: '/admin/reportes', icon: ChartIcon },
  { name: 'Configuración', href: '/admin/configuracion', icon: SettingsIcon },
];

export default function AdminSidebar() {
  const pathname = usePathname();

  return (
    <aside className="fixed left-0 top-0 h-screen w-64 bg-dark-900 text-white flex flex-col z-50">
      {/* Logo */}
      <div className="p-6 border-b border-dark-700">
        <Link href="/admin" className="flex items-center gap-3">
          <LogoIcon className="w-10 h-10" />
          <div>
            <span className="text-lg font-bold">
              Viajes<span className="text-primary-400">Chile</span>
            </span>
            <p className="text-xs text-dark-400">Panel Admin</p>
          </div>
        </Link>
      </div>

      {/* Navigation */}
      <nav className="flex-1 p-4 space-y-1 overflow-y-auto">
        {navigation.map((item) => {
          const isActive = pathname === item.href ||
            (item.href !== '/admin' && pathname.startsWith(item.href));
          return (
            <Link
              key={item.name}
              href={item.href}
              className={`flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                isActive
                  ? 'bg-primary-600 text-white'
                  : 'text-dark-300 hover:bg-dark-800 hover:text-white'
              }`}
            >
              <item.icon className="w-5 h-5" />
              {item.name}
            </Link>
          );
        })}
      </nav>

      {/* Footer */}
      <div className="p-4 border-t border-dark-700">
        <Link
          href="/"
          className="flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium text-dark-300 hover:bg-dark-800 hover:text-white transition-colors"
        >
          <LogoutIcon className="w-5 h-5" />
          Volver al Sitio
        </Link>
      </div>
    </aside>
  );
}
