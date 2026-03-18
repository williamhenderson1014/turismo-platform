import { TourPackage, Client, Reservation, Quotation, DashboardStats } from '@/types';

export const tourPackages: TourPackage[] = [
  {
    id: 'pkg-1',
    name: 'Torres del Paine Aventura',
    destination: 'Torres del Paine',
    country: 'Chile',
    description: 'Descubre la majestuosidad de la Patagonia chilena en este increíble tour por el Parque Nacional Torres del Paine. Glaciares, lagos turquesa y las famosas torres de granito te esperan.',
    shortDescription: 'Explora la Patagonia chilena y sus impresionantes paisajes naturales.',
    price: 1299000,
    originalPrice: 1499000,
    duration: '5 días / 4 noches',
    startDate: '2026-04-15',
    endDate: '2026-04-19',
    availableSpots: 8,
    totalSpots: 15,
    image: 'https://images.unsplash.com/photo-1531761535209-180857e963b9?w=800',
    itinerary: [
      { day: 1, title: 'Llegada a Punta Arenas', description: 'Recepción en aeropuerto y traslado al hotel.', activities: ['Traslado aeropuerto-hotel', 'Cena de bienvenida', 'Briefing del tour'] },
      { day: 2, title: 'Torres del Paine', description: 'Día completo en el parque nacional.', activities: ['Trekking base Torres', 'Almuerzo picnic', 'Mirador Cuernos'] },
      { day: 3, title: 'Glaciar Grey', description: 'Navegación al Glaciar Grey.', activities: ['Navegación glaciar', 'Caminata costanera', 'Avistamiento fauna'] },
      { day: 4, title: 'Laguna Azul', description: 'Exploración zona norte del parque.', activities: ['Safari fotográfico', 'Laguna Azul', 'Cascada Paine'] },
      { day: 5, title: 'Regreso', description: 'Traslado al aeropuerto.', activities: ['Desayuno', 'Traslado aeropuerto'] },
    ],
    includes: ['Alojamiento 4 noches', 'Transporte privado', 'Guía especializado', 'Entradas al parque', 'Desayunos y almuerzos', 'Equipo de trekking'],
    excludes: ['Vuelos', 'Seguro de viaje', 'Propinas', 'Gastos personales'],
    highlights: ['Trekking a la base de las Torres', 'Navegación al Glaciar Grey', 'Safari fotográfico de fauna patagónica', 'Alojamiento en refugios de montaña'],
    category: 'Aventura',
    featured: true,
    rating: 4.9,
    reviews: 127,
  },
  {
    id: 'pkg-2',
    name: 'Desierto de Atacama',
    destination: 'San Pedro de Atacama',
    country: 'Chile',
    description: 'Vive la experiencia del desierto más árido del mundo. Géiseres del Tatio, Valle de la Luna, lagunas altiplánicas y cielos estrellados incomparables.',
    shortDescription: 'El desierto más árido del mundo te espera con paisajes únicos.',
    price: 899000,
    duration: '4 días / 3 noches',
    startDate: '2026-05-10',
    endDate: '2026-05-13',
    availableSpots: 12,
    totalSpots: 20,
    image: 'https://images.unsplash.com/photo-1509316785289-025f5b846b35?w=800',
    itinerary: [
      { day: 1, title: 'Llegada a Calama', description: 'Traslado a San Pedro de Atacama.', activities: ['Traslado', 'Check-in hotel', 'Tour Valle de la Luna'] },
      { day: 2, title: 'Géiseres del Tatio', description: 'Madrugada en los géiseres.', activities: ['Géiseres 4:30am', 'Desayuno en altura', 'Pueblo de Machuca'] },
      { day: 3, title: 'Lagunas Altiplánicas', description: 'Tour a las lagunas de altura.', activities: ['Laguna Miscanti', 'Laguna Miñiques', 'Salar de Atacama'] },
      { day: 4, title: 'Regreso', description: 'Tiempo libre y traslado.', activities: ['Desayuno', 'Tiempo libre', 'Traslado aeropuerto'] },
    ],
    includes: ['Alojamiento 3 noches', 'Transporte compartido', 'Guía bilingüe', 'Desayunos', 'Entradas a parques'],
    excludes: ['Vuelos', 'Almuerzos y cenas', 'Seguro de viaje', 'Propinas'],
    highlights: ['Géiseres del Tatio al amanecer', 'Valle de la Luna al atardecer', 'Lagunas altiplánicas', 'Cielos estrellados'],
    category: 'Naturaleza',
    featured: true,
    rating: 4.8,
    reviews: 89,
  },
  {
    id: 'pkg-3',
    name: 'Isla de Pascua Mágica',
    destination: 'Isla de Pascua',
    country: 'Chile',
    description: 'Sumérgete en el misterio de Rapa Nui. Moáis milenarios, volcanes, playas paradisíacas y una cultura ancestral que te cautivará.',
    shortDescription: 'Descubre el misterio de los Moáis en la Isla de Pascua.',
    price: 1850000,
    originalPrice: 2100000,
    duration: '6 días / 5 noches',
    startDate: '2026-06-01',
    endDate: '2026-06-06',
    availableSpots: 6,
    totalSpots: 12,
    image: 'https://images.unsplash.com/photo-1558981403-c5f9899a28bc?w=800',
    itinerary: [
      { day: 1, title: 'Llegada a Rapa Nui', description: 'Bienvenida con collar de flores.', activities: ['Recepción tradicional', 'Traslado hotel', 'Orientación'] },
      { day: 2, title: 'Rano Raraku', description: 'La cantera de los Moáis.', activities: ['Rano Raraku', 'Tongariki', 'Playa Anakena'] },
      { day: 3, title: 'Orongo', description: 'Centro ceremonial.', activities: ['Volcán Rano Kau', 'Aldea Orongo', 'Museo'] },
      { day: 4, title: 'Norte de la isla', description: 'Exploración zona norte.', activities: ['Ahu Akivi', 'Te Pahu', 'Atardecer Tahai'] },
      { day: 5, title: 'Día libre', description: 'Actividades opcionales.', activities: ['Buceo opcional', 'Cabalgata', 'Relax playa'] },
      { day: 6, title: 'Despedida', description: 'Traslado aeropuerto.', activities: ['Desayuno', 'Traslado'] },
    ],
    includes: ['Vuelos desde Santiago', 'Alojamiento 5 noches', 'Tours completos', 'Guía Rapa Nui', 'Desayunos y almuerzos', 'Entrada parque nacional'],
    excludes: ['Actividades opcionales', 'Cenas', 'Propinas'],
    highlights: ['Amanecer en Tongariki', 'Cantera de Rano Raraku', 'Playa de Anakena', 'Cultura Rapa Nui'],
    category: 'Cultural',
    featured: true,
    rating: 4.95,
    reviews: 156,
  },
  {
    id: 'pkg-4',
    name: 'Carretera Austral',
    destination: 'Carretera Austral',
    country: 'Chile',
    description: 'Recorre una de las rutas más espectaculares del mundo. Fiordos, glaciares colgantes, bosques milenarios y pueblos con encanto patagónico.',
    shortDescription: 'La ruta escénica más impresionante de Sudamérica.',
    price: 2150000,
    duration: '8 días / 7 noches',
    startDate: '2026-03-20',
    endDate: '2026-03-27',
    availableSpots: 4,
    totalSpots: 10,
    image: 'https://images.unsplash.com/photo-1469474968028-56623f02e42e?w=800',
    itinerary: [
      { day: 1, title: 'Puerto Montt', description: 'Inicio de la aventura.', activities: ['Recepción', 'Briefing', 'Cena'] },
      { day: 2, title: 'Chaitén', description: 'Cruce en ferry.', activities: ['Ferry', 'Volcán Chaitén', 'Termas'] },
      { day: 3, title: 'Futaleufú', description: 'Paraíso del rafting.', activities: ['Trekking', 'Río Futaleufú', 'Fotografía'] },
      { day: 4, title: 'La Junta', description: 'Cascadas y naturaleza.', activities: ['Cascadas', 'Senderos', 'Fauna local'] },
      { day: 5, title: 'Puyuhuapi', description: 'Termas y fiordos.', activities: ['Termas', 'Navegación', 'Relax'] },
      { day: 6, title: 'Puerto Aysén', description: 'Centro de la Patagonia.', activities: ['Río Simpson', 'Cañadón', 'Cultura local'] },
      { day: 7, title: 'Coyhaique', description: 'Capital regional.', activities: ['Reserva Cerro Castillo', 'Ciudad', 'Cena despedida'] },
      { day: 8, title: 'Fin del viaje', description: 'Traslado aeropuerto.', activities: ['Desayuno', 'Traslado'] },
    ],
    includes: ['Transporte 4x4', 'Alojamiento mixto', 'Comidas completas', 'Ferrys', 'Guía experto', 'Actividades'],
    excludes: ['Vuelos', 'Bebidas alcohólicas', 'Seguro', 'Propinas'],
    highlights: ['Volcán Chaitén', 'Río Futaleufú', 'Termas de Puyuhuapi', 'Cerro Castillo'],
    category: 'Aventura',
    featured: false,
    rating: 4.85,
    reviews: 67,
  },
  {
    id: 'pkg-5',
    name: 'Valparaíso y Viña del Mar',
    destination: 'Valparaíso',
    country: 'Chile',
    description: 'Descubre el colorido puerto de Valparaíso, Patrimonio de la Humanidad, y disfruta de las playas de Viña del Mar. Arte, cultura y gastronomía.',
    shortDescription: 'Cultura, arte callejero y playas en la costa central.',
    price: 450000,
    duration: '3 días / 2 noches',
    startDate: '2026-04-05',
    endDate: '2026-04-07',
    availableSpots: 15,
    totalSpots: 20,
    image: 'https://images.unsplash.com/photo-1594736797933-d0501ba2fe65?w=800',
    itinerary: [
      { day: 1, title: 'Llegada a Valparaíso', description: 'City tour por los cerros.', activities: ['Cerro Alegre', 'Cerro Concepción', 'Ascensores', 'Arte callejero'] },
      { day: 2, title: 'Viña del Mar', description: 'Día de playa y jardines.', activities: ['Jardín Botánico', 'Reloj de Flores', 'Playas', 'Casino'] },
      { day: 3, title: 'Ruta del Vino', description: 'Viñedos del Valle de Casablanca.', activities: ['Degustación vinos', 'Almuerzo gourmet', 'Regreso Santiago'] },
    ],
    includes: ['Transporte', 'Alojamiento boutique', 'Desayunos', 'Tours guiados', 'Degustación vinos'],
    excludes: ['Almuerzos y cenas', 'Entradas casino', 'Propinas'],
    highlights: ['Cerros coloridos de Valparaíso', 'Ascensores patrimoniales', 'Playas de Viña del Mar', 'Ruta del vino Casablanca'],
    category: 'Cultural',
    featured: false,
    rating: 4.7,
    reviews: 203,
  },
  {
    id: 'pkg-6',
    name: 'Chiloé Tradicional',
    destination: 'Isla de Chiloé',
    country: 'Chile',
    description: 'Sumérgete en la magia de Chiloé. Iglesias patrimoniales, palafitos, mitología única, curanto y la hospitalidad de su gente.',
    shortDescription: 'Mitología, iglesias patrimonio y gastronomía única.',
    price: 680000,
    duration: '4 días / 3 noches',
    startDate: '2026-05-20',
    endDate: '2026-05-23',
    availableSpots: 10,
    totalSpots: 16,
    image: 'https://images.unsplash.com/photo-1516483638261-f4dbaf036963?w=800',
    itinerary: [
      { day: 1, title: 'Castro', description: 'Capital de Chiloé.', activities: ['Palafitos', 'Iglesia San Francisco', 'Mercado'] },
      { day: 2, title: 'Iglesias Patrimonio', description: 'Ruta de iglesias UNESCO.', activities: ['Dalcahue', 'Achao', 'Quinchao'] },
      { day: 3, title: 'Parque Tantauco', description: 'Naturaleza prístina.', activities: ['Trekking', 'Flora nativa', 'Curanto tradicional'] },
      { day: 4, title: 'Ancud', description: 'Norte de la isla.', activities: ['Pingüinera', 'Fuerte', 'Regreso'] },
    ],
    includes: ['Ferry ida y vuelta', 'Alojamiento', 'Comidas típicas', 'Tours', 'Curanto incluido'],
    excludes: ['Transporte a Puerto Montt', 'Bebidas', 'Propinas'],
    highlights: ['Palafitos de Castro', 'Iglesias UNESCO', 'Curanto tradicional', 'Pingüinera de Puñihuil'],
    category: 'Cultural',
    featured: false,
    rating: 4.75,
    reviews: 92,
  },
];

export const clients: Client[] = [
  { id: 'cli-1', name: 'María González', email: 'maria.gonzalez@email.com', phone: '+56 9 8765 4321', country: 'Chile', createdAt: '2025-06-15', totalReservations: 3, totalSpent: 3500000, status: 'active' },
  { id: 'cli-2', name: 'Carlos Rodríguez', email: 'carlos.rodriguez@email.com', phone: '+56 9 7654 3210', country: 'Chile', createdAt: '2025-08-20', totalReservations: 1, totalSpent: 899000, status: 'active' },
  { id: 'cli-3', name: 'Ana Martínez', email: 'ana.martinez@email.com', phone: '+56 9 6543 2109', country: 'Chile', createdAt: '2026-01-10', totalReservations: 2, totalSpent: 2750000, status: 'active' },
  { id: 'cli-4', name: 'Pedro Sánchez', email: 'pedro.sanchez@email.com', phone: '+56 9 5432 1098', country: 'Argentina', createdAt: '2026-02-05', totalReservations: 0, totalSpent: 0, status: 'prospect' },
  { id: 'cli-5', name: 'Laura Torres', email: 'laura.torres@email.com', phone: '+56 9 4321 0987', country: 'Chile', createdAt: '2025-11-30', totalReservations: 4, totalSpent: 5200000, status: 'active' },
  { id: 'cli-6', name: 'Diego Vargas', email: 'diego.vargas@email.com', phone: '+56 9 3210 9876', country: 'Chile', createdAt: '2026-03-01', totalReservations: 0, totalSpent: 0, status: 'prospect' },
];

export const reservations: Reservation[] = [
  { id: 'res-1', packageId: 'pkg-1', packageName: 'Torres del Paine Aventura', clientId: 'cli-1', clientName: 'María González', clientEmail: 'maria.gonzalez@email.com', startDate: '2026-04-15', travelers: 2, totalPrice: 2598000, status: 'confirmada', paymentStatus: 'pagado', paymentMethod: 'Transbank' },
  { id: 'res-2', packageId: 'pkg-3', packageName: 'Isla de Pascua Mágica', clientId: 'cli-3', clientName: 'Ana Martínez', clientEmail: 'ana.martinez@email.com', startDate: '2026-06-01', travelers: 2, totalPrice: 3700000, status: 'confirmada', paymentStatus: 'pagado', paymentMethod: 'Transbank' },
  { id: 'res-3', packageId: 'pkg-2', packageName: 'Desierto de Atacama', clientId: 'cli-5', clientName: 'Laura Torres', clientEmail: 'laura.torres@email.com', startDate: '2026-05-10', travelers: 4, totalPrice: 3596000, status: 'pendiente', paymentStatus: 'pendiente' },
  { id: 'res-4', packageId: 'pkg-5', packageName: 'Valparaíso y Viña del Mar', clientId: 'cli-1', clientName: 'María González', clientEmail: 'maria.gonzalez@email.com', startDate: '2026-04-05', travelers: 2, totalPrice: 900000, status: 'confirmada', paymentStatus: 'pagado', paymentMethod: 'Transferencia' },
  { id: 'res-5', packageId: 'pkg-4', packageName: 'Carretera Austral', clientId: 'cli-2', clientName: 'Carlos Rodríguez', clientEmail: 'carlos.rodriguez@email.com', startDate: '2026-03-20', travelers: 1, totalPrice: 2150000, status: 'confirmada', paymentStatus: 'parcial', paymentMethod: 'Transbank' },
];

export const quotations: Quotation[] = [
  { id: 'quo-1', clientId: 'cli-4', clientName: 'Pedro Sánchez', clientEmail: 'pedro.sanchez@email.com', clientPhone: '+56 9 5432 1098', destination: 'Torres del Paine', travelers: 4, travelDate: '2026-05-15', notes: 'Me interesa el tour para 4 personas en mayo. ¿Tienen disponibilidad?', createdAt: '2026-03-15', status: 'pendiente' },
  { id: 'quo-2', clientId: 'cli-6', clientName: 'Diego Vargas', clientEmail: 'diego.vargas@email.com', clientPhone: '+56 9 3210 9876', destination: 'Isla de Pascua', travelers: 2, travelDate: '2026-07-10', notes: 'Quisiera cotizar para luna de miel en julio.', createdAt: '2026-03-16', status: 'enviada', quotedPrice: 3900000 },
  { id: 'quo-3', clientId: 'cli-4', clientName: 'Pedro Sánchez', clientEmail: 'pedro.sanchez@email.com', clientPhone: '+56 9 5432 1098', destination: 'Patagonia', travelers: 6, travelDate: '2026-08-01', notes: 'Busco un tour de aventura en la Patagonia para agosto.', createdAt: '2026-03-17', status: 'pendiente' },
  { id: 'quo-4', clientId: 'cli-6', clientName: 'Diego Vargas', clientEmail: 'diego.vargas@email.com', clientPhone: '+56 9 3210 9876', destination: 'Chiloé', travelers: 2, travelDate: '2026-04-10', notes: 'Información sobre el tour a Chiloé para semana santa.', createdAt: '2026-03-10', status: 'aceptada', quotedPrice: 1360000 },
];

// Helper functions
export const getFeaturedPackages = (): TourPackage[] => {
  return tourPackages.filter(p => p.featured);
};

export const getPackageById = (id: string): TourPackage | undefined => {
  return tourPackages.find(p => p.id === id);
};

export const getPackagesByCategory = (category: string): TourPackage[] => {
  return tourPackages.filter(p => p.category === category);
};

export const formatPrice = (price: number): string => {
  return new Intl.NumberFormat('es-CL', { style: 'currency', currency: 'CLP', maximumFractionDigits: 0 }).format(price);
};

export const getDashboardStats = (): DashboardStats => {
  return {
    totalPackages: tourPackages.length,
    activePackages: tourPackages.length,
    totalClients: clients.length,
    totalReservations: reservations.length,
    monthlyReservations: reservations.filter(r => r.status === 'confirmada').length,
    pendingQuotations: quotations.filter(q => q.status === 'pendiente').length,
    monthlyRevenue: reservations.filter(r => r.paymentStatus === 'pagado').reduce((sum, r) => sum + r.totalPrice, 0),
  };
};

export const getRecentReservations = (): Reservation[] => {
  return reservations.slice(0, 5);
};
