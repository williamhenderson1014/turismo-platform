export interface TourPackage {
  id: string;
  name: string;
  destination: string;
  country: string;
  description: string;
  shortDescription: string;
  price: number;
  originalPrice?: number;
  duration: string;
  startDate: string;
  endDate?: string;
  availableSpots: number;
  totalSpots: number;
  image: string;
  gallery?: string[];
  itinerary: ItineraryDay[];
  includes: string[];
  excludes: string[];
  highlights: string[];
  category: string;
  featured: boolean;
  rating: number;
  reviews: number;
}

export interface ItineraryDay {
  day: number;
  title: string;
  description: string;
  activities: string[];
}

export interface Client {
  id: string;
  name: string;
  email: string;
  phone: string;
  country?: string;
  createdAt: string;
  totalReservations: number;
  totalSpent: number;
  status: 'active' | 'inactive' | 'prospect';
}

export interface Reservation {
  id: string;
  packageId: string;
  packageName: string;
  clientId: string;
  clientName: string;
  clientEmail: string;
  startDate: string;
  travelers: number;
  totalPrice: number;
  status: 'pendiente' | 'confirmada' | 'cancelada';
  paymentStatus: 'pendiente' | 'parcial' | 'pagado';
  paymentMethod?: string;
  notes?: string;
}

export interface Quotation {
  id: string;
  clientId: string;
  clientName: string;
  clientEmail: string;
  clientPhone?: string;
  destination: string;
  travelers: number;
  travelDate: string;
  notes?: string;
  createdAt: string;
  status: 'pendiente' | 'enviada' | 'aceptada' | 'rechazada';
  quotedPrice?: number;
}

export interface DashboardStats {
  totalPackages: number;
  activePackages: number;
  totalClients: number;
  totalReservations: number;
  monthlyReservations: number;
  pendingQuotations: number;
  monthlyRevenue: number;
}
