'use client';

import { useState } from 'react';
import {
  SettingsIcon,
  WhatsAppIcon,
  MailIcon,
  CreditCardIcon,
  GlobeIcon,
  BellIcon,
  CheckIcon,
} from '@/components/icons';

export default function AdminSettingsPage() {
  const [activeTab, setActiveTab] = useState('general');
  const [saved, setSaved] = useState(false);

  const handleSave = () => {
    setSaved(true);
    setTimeout(() => setSaved(false), 3000);
  };

  const tabs = [
    { id: 'general', label: 'General', icon: SettingsIcon },
    { id: 'whatsapp', label: 'WhatsApp', icon: WhatsAppIcon },
    { id: 'pagos', label: 'Pagos', icon: CreditCardIcon },
    { id: 'email', label: 'Email', icon: MailIcon },
    { id: 'notificaciones', label: 'Notificaciones', icon: BellIcon },
  ];

  return (
    <div className="space-y-6">
      {/* Header */}
      <div>
        <h1 className="text-2xl font-bold text-dark-900">Configuración</h1>
        <p className="text-dark-500 mt-1">Administra las configuraciones del sistema</p>
      </div>

      <div className="grid grid-cols-1 lg:grid-cols-4 gap-6">
        {/* Sidebar Tabs */}
        <div className="lg:col-span-1">
          <div className="bg-white rounded-xl shadow-sm p-2">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`w-full flex items-center gap-3 px-4 py-3 rounded-lg text-sm font-medium transition-colors ${
                  activeTab === tab.id
                    ? 'bg-primary-50 text-primary-600'
                    : 'text-dark-600 hover:bg-gray-50'
                }`}
              >
                <tab.icon className="w-5 h-5" />
                {tab.label}
              </button>
            ))}
          </div>
        </div>

        {/* Content */}
        <div className="lg:col-span-3">
          <div className="bg-white rounded-xl shadow-sm p-6">
            {activeTab === 'general' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-dark-900">Información General</h2>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Nombre de la Empresa
                    </label>
                    <input
                      type="text"
                      defaultValue="ViajesChile"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      RUT
                    </label>
                    <input
                      type="text"
                      defaultValue="12.345.678-9"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Teléfono Principal
                    </label>
                    <input
                      type="text"
                      defaultValue="+56 9 1234 5678"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Email Principal
                    </label>
                    <input
                      type="email"
                      defaultValue="info@viajeschile.com"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div className="md:col-span-2">
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Dirección
                    </label>
                    <input
                      type="text"
                      defaultValue="Av. Providencia 1234, Oficina 501, Santiago"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'whatsapp' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-dark-900">Integración WhatsApp</h2>
                <div className="p-4 bg-accent-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <WhatsAppIcon className="w-8 h-8 text-accent-600" />
                    <div>
                      <p className="font-medium text-accent-700">WhatsApp Business API</p>
                      <p className="text-sm text-accent-600">Conecta tu cuenta para automatizar mensajes</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Número de WhatsApp
                    </label>
                    <input
                      type="text"
                      defaultValue="+56912345678"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Token de API
                    </label>
                    <input
                      type="password"
                      defaultValue="••••••••••••••••"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Mensaje de Bienvenida
                    </label>
                    <textarea
                      rows={3}
                      defaultValue="¡Hola! Gracias por contactar a ViajesChile. ¿En qué podemos ayudarte?"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="autoReply" defaultChecked className="w-4 h-4 text-primary-600" />
                    <label htmlFor="autoReply" className="text-sm text-dark-700">
                      Activar respuestas automáticas
                    </label>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="notifications" defaultChecked className="w-4 h-4 text-primary-600" />
                    <label htmlFor="notifications" className="text-sm text-dark-700">
                      Enviar notificaciones de reserva por WhatsApp
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'pagos' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-dark-900">Configuración de Pagos</h2>
                <div className="p-4 bg-blue-50 rounded-lg">
                  <div className="flex items-center gap-3">
                    <CreditCardIcon className="w-8 h-8 text-blue-600" />
                    <div>
                      <p className="font-medium text-blue-700">Transbank Webpay</p>
                      <p className="text-sm text-blue-600">Acepta pagos con tarjetas de crédito y débito</p>
                    </div>
                  </div>
                </div>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Código de Comercio
                    </label>
                    <input
                      type="text"
                      defaultValue="597012345678"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      API Key
                    </label>
                    <input
                      type="password"
                      defaultValue="••••••••••••••••"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Ambiente
                    </label>
                    <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500">
                      <option value="sandbox">Sandbox (Pruebas)</option>
                      <option value="production">Producción</option>
                    </select>
                  </div>
                  <div className="flex items-center gap-3">
                    <input type="checkbox" id="installments" defaultChecked className="w-4 h-4 text-primary-600" />
                    <label htmlFor="installments" className="text-sm text-dark-700">
                      Permitir pago en cuotas
                    </label>
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'email' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-dark-900">Configuración de Email</h2>
                <div className="space-y-4">
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Servidor SMTP
                    </label>
                    <input
                      type="text"
                      defaultValue="smtp.gmail.com"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div className="grid grid-cols-2 gap-4">
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        Puerto
                      </label>
                      <input
                        type="text"
                        defaultValue="587"
                        className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                      />
                    </div>
                    <div>
                      <label className="block text-sm font-medium text-dark-700 mb-2">
                        Seguridad
                      </label>
                      <select className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500">
                        <option value="tls">TLS</option>
                        <option value="ssl">SSL</option>
                      </select>
                    </div>
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Email Remitente
                    </label>
                    <input
                      type="email"
                      defaultValue="noreply@viajeschile.com"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                    />
                  </div>
                  <div>
                    <label className="block text-sm font-medium text-dark-700 mb-2">
                      Contraseña
                    </label>
                    <input
                      type="password"
                      defaultValue="••••••••••••"
                      className="w-full px-4 py-2.5 border border-gray-200 rounded-lg focus:outline-none focus:border-primary-500"
                    />
                  </div>
                </div>
              </div>
            )}

            {activeTab === 'notificaciones' && (
              <div className="space-y-6">
                <h2 className="text-lg font-semibold text-dark-900">Notificaciones</h2>
                <div className="space-y-4">
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-dark-900">Nueva Reserva</p>
                      <p className="text-sm text-dark-500">Recibir notificación al crear una reserva</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-primary-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-dark-900">Nueva Cotización</p>
                      <p className="text-sm text-dark-500">Recibir notificación al solicitar cotización</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-primary-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-dark-900">Pago Recibido</p>
                      <p className="text-sm text-dark-500">Recibir notificación al procesar un pago</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-primary-600" />
                  </div>
                  <div className="flex items-center justify-between p-4 bg-gray-50 rounded-lg">
                    <div>
                      <p className="font-medium text-dark-900">Mensaje WhatsApp</p>
                      <p className="text-sm text-dark-500">Recibir notificación por nuevos mensajes</p>
                    </div>
                    <input type="checkbox" defaultChecked className="w-4 h-4 text-primary-600" />
                  </div>
                </div>
              </div>
            )}

            {/* Save Button */}
            <div className="flex items-center justify-end gap-4 pt-6 mt-6 border-t border-gray-100">
              {saved && (
                <span className="flex items-center gap-2 text-accent-600 text-sm">
                  <CheckIcon className="w-4 h-4" />
                  Cambios guardados
                </span>
              )}
              <button
                onClick={handleSave}
                className="px-6 py-2.5 bg-gradient-primary text-white font-medium rounded-lg hover:opacity-90 transition-opacity"
              >
                Guardar Cambios
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
