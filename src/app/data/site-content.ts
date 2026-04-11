import {
  Cable,
  ToggleLeft,
  Lightbulb,
  Fan,
  Droplet,
  GaugeCircle,
  ShieldCheck,
  TrendingDown,
  Package,
  Timer,
  Users,
  Phone,
  MapPin,
  Mail,
  Clock
} from 'lucide-react';

import havellsLogo from '../../assets/havells.png';
import wiproLogo from '../../assets/wipro.png';
import polycabLogo from '../../assets/polycab.png';
import philipsLogo from '../../assets/philips.png';
import trufloLogo from '../../assets/truflo.png';

export const siteConfig = {
  name: 'Signet Electricals',
  tagline: 'Quality & Trust',
  since: '2005',
  contact: {
    address: 'Signet Electricals, Kubera Towers, Arundalpet 15th Line, Guntur, Andhra Pradesh 522002',
    googleMapsUrl: 'https://www.google.com/maps/search/?api=1&query=Kubera+Towers+Arundalpet+15th+Line+Guntur+522002',
    phones: ['+91 9966167111', '+91 9966167111'],
    emails: ['info@signetelectricals.com'],
    whatsapp: '919966167111',
    workingHours: {
      weekdays: 'Mon - Sat: 9:00 AM - 8:00 PM',
      sunday: 'Sunday: 10:00 AM - 6:00 PM'
    }
  }
};

export const navLinks = [
  { name: 'Home', href: 'home' },
  { name: 'About', href: 'about' },
  { name: 'Products', href: 'products' },
  { name: 'Brands', href: 'brands' },
  { name: 'Contact', href: 'contact' }
];

export const products = [
  {
    icon: Cable,
    title: 'Wires & Cables',
    description: 'High-quality copper wiring solutions for residential and industrial applications',
    gradient: 'from-blue-500 to-blue-600'
  },
  {
    icon: ToggleLeft,
    title: 'Switches & Switchgear',
    description: 'Premium switches, MCBs, distribution boards, and protection devices',
    gradient: 'from-indigo-500 to-indigo-600'
  },
  {
    icon: Lightbulb,
    title: 'LED Lighting Solutions',
    description: 'Energy-efficient LED bulbs, tubes, panels, and decorative lighting',
    gradient: 'from-sky-500 to-sky-600'
  },
  {
    icon: Fan,
    title: 'Fans & Electrical Accessories',
    description: 'Ceiling fans, exhaust fans, and electrical fittings and accessories',
    gradient: 'from-cyan-500 to-cyan-600'
  },
  {
    icon: Droplet,
    title: 'PVC Pipes & Plumbing Fittings',
    description: 'Durable pipes, elbows, tees, and complete plumbing solutions',
    gradient: 'from-teal-500 to-teal-600'
  },
  {
    icon: GaugeCircle,
    title: 'Valves & Water Management',
    description: 'Ball valves, gate valves, water tanks, and flow control systems',
    gradient: 'from-blue-600 to-blue-700'
  }
];

export const brands = [
  { name: 'Havells', logoUrl: havellsLogo },
  { name: 'Wipro', logoUrl: wiproLogo },
  { name: 'Polycab', logoUrl: polycabLogo },
  { name: 'Philips', logoUrl: philipsLogo },
  { name: 'Truflo', logoUrl: trufloLogo }
];

export const features = [
  { icon: ShieldCheck, title: 'Genuine Branded Products', description: 'Only authentic products from authorized distributors' },
  { icon: TrendingDown, title: 'Competitive Wholesale Pricing', description: 'Best rates for bulk orders and repeat customers' },
  { icon: Package, title: 'Bulk Supply Support', description: 'Large inventory for commercial and project requirements' },
  { icon: Timer, title: 'Fast Availability', description: 'Quick delivery and immediate stock availability' },
  { icon: Users, title: 'Trusted by Professionals', description: 'Preferred choice of contractors and builders' },
  { icon: Phone, title: 'Expert Assistance', description: 'Technical guidance and product recommendations' }
];

export const contactInfo = [
  {
    icon: MapPin,
    title: 'Address',
    content: siteConfig.contact.address,
    isMap: true
  },
  {
    icon: Phone,
    title: 'Phone',
    content: siteConfig.contact.phones.join('\n')
  },
  {
    icon: Mail,
    title: 'Email',
    content: siteConfig.contact.emails[0]
  },
  {
    icon: Clock,
    title: 'Working Hours',
    content: `${siteConfig.contact.workingHours.weekdays}\n${siteConfig.contact.workingHours.sunday}`
  }
];
