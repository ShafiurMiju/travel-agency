// Type definitions for the application

export interface Service {
  id: string;
  title: string;
  description: string;
  icon: string;
  features: string[];
  image?: string;
}

export interface Country {
  id: string;
  name: string;
  code: string;
  visaTypes: string[];
  processingTime: string;
  requirements: string[];
  popular?: boolean;
}

export interface Testimonial {
  id: string;
  name: string;
  role: string;
  content: string;
  rating: number;
  image?: string;
}

export interface ContactInfo {
  email: string;
  phone: string;
  whatsapp: string;
  address: string;
}

export interface NavLink {
  label: string;
  href: string;
}
