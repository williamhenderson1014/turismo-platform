import Link from 'next/link';
import { LogoIcon, MapPinIcon, PhoneIcon, MailIcon, WhatsAppIcon } from '@/components/icons';

export default function Footer() {
  return (
    <footer className="bg-dark-900 text-white">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-12 lg:py-16">
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {/* Brand */}
          <div>
            <Link href="/" className="flex items-center gap-2 mb-4">
              <LogoIcon className="w-10 h-10" />
              <span className="text-xl font-bold">
                Viajes<span className="text-primary-400">Chile</span>
              </span>
            </Link>
            <p className="text-dark-300 text-sm mb-4">
              Tu agencia de viajes de confianza. Descubre los destinos más increíbles de Chile con nosotros.
            </p>
            <div className="flex items-center gap-3">
              <a href="#" className="w-10 h-10 bg-dark-800 rounded-lg flex items-center justify-center hover:bg-primary-600 transition-colors">
                <WhatsAppIcon className="w-5 h-5" />
              </a>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h3 className="font-semibold mb-4">Enlaces Rápidos</h3>
            <ul className="space-y-2">
              <li><Link href="/paquetes" className="text-dark-300 hover:text-white text-sm">Paquetes Turísticos</Link></li>
              <li><Link href="/destinos" className="text-dark-300 hover:text-white text-sm">Destinos</Link></li>
              <li><Link href="/nosotros" className="text-dark-300 hover:text-white text-sm">Sobre Nosotros</Link></li>
              <li><Link href="/contacto" className="text-dark-300 hover:text-white text-sm">Contacto</Link></li>
            </ul>
          </div>

          {/* Destinations */}
          <div>
            <h3 className="font-semibold mb-4">Destinos Populares</h3>
            <ul className="space-y-2">
              <li><Link href="/paquetes?destino=torres-del-paine" className="text-dark-300 hover:text-white text-sm">Torres del Paine</Link></li>
              <li><Link href="/paquetes?destino=atacama" className="text-dark-300 hover:text-white text-sm">Desierto de Atacama</Link></li>
              <li><Link href="/paquetes?destino=isla-de-pascua" className="text-dark-300 hover:text-white text-sm">Isla de Pascua</Link></li>
              <li><Link href="/paquetes?destino=valparaiso" className="text-dark-300 hover:text-white text-sm">Valparaíso</Link></li>
            </ul>
          </div>

          {/* Contact */}
          <div>
            <h3 className="font-semibold mb-4">Contacto</h3>
            <ul className="space-y-3">
              <li className="flex items-start gap-3">
                <MapPinIcon className="w-5 h-5 text-primary-400 flex-shrink-0 mt-0.5" />
                <span className="text-dark-300 text-sm">Av. Providencia 1234, Santiago, Chile</span>
              </li>
              <li className="flex items-center gap-3">
                <PhoneIcon className="w-5 h-5 text-primary-400" />
                <a href="tel:+56912345678" className="text-dark-300 hover:text-white text-sm">+56 9 1234 5678</a>
              </li>
              <li className="flex items-center gap-3">
                <MailIcon className="w-5 h-5 text-primary-400" />
                <a href="mailto:info@viajeschile.com" className="text-dark-300 hover:text-white text-sm">info@viajeschile.com</a>
              </li>
            </ul>
          </div>
        </div>

        <div className="border-t border-dark-700 mt-10 pt-8 flex flex-col sm:flex-row items-center justify-between gap-4">
          <p className="text-dark-400 text-sm">
            © 2026 ViajesChile. Todos los derechos reservados.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/terminos" className="text-dark-400 hover:text-white text-sm">Términos y Condiciones</Link>
            <Link href="/privacidad" className="text-dark-400 hover:text-white text-sm">Privacidad</Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
