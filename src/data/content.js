import { Factory, ShieldCheck, Thermometer, Ruler, Sparkle } from 'lucide-react';

export const navLinks = [
    { href: '#inicio', label: 'Inicio' },
    { href: '#especificaciones', label: 'Especificaciones' },
    { href: '#productos', label: 'Productos' },
    { href: '#calculadora', label: 'Calculadora' },
    { href: '#proyectos', label: 'Proyectos' },
    { href: '#contacto', label: 'Contacto' },
];

export const features = [
    {
        icon: Thermometer,
        title: 'Resistencia Térmica',
        description: 'Aislamiento superior que optimiza el consumo energético en cualquier clima.',
    },
    {
        icon: ShieldCheck,
        title: 'Alta Durabilidad',
        description: 'Ladrillos diseñados para resistir el paso del tiempo y las inclemencias del clima.',
    },
    {
        icon: Sparkle,
        title: 'Material 100% Natural',
        description: 'Fabricados con arcilla de la más alta calidad, respetuosos con el medio ambiente.',
    },
    {
        icon: Ruler,
        title: 'Medidas Exactas',
        description: 'Precisión dimensional que facilita la construcción y reduce el desperdicio.',
    },
];

export const products = [
    {
      name: 'Ladrillo Macizo',
      image: '/img/ladrillo-macizo.jpg',
      description: 'Ideal para muros portantes y fachadas, máxima resistencia.',
      bricksPerSqm: 60,
      type: 'macizo',
      resistance: 'alta',
      weightPerBrickKg: 2.5, // Example weight
      waterAbsorption: '12%',
      compressionResistance: '20 MPa',
      thermalInsulation: '0.6 W/mK',
    },
    {
      name: 'Ladrillo Perforado',
      image: '/img/ladrillo-perforado.jpg',
      description: 'Ligero y con excelente agarre para mortero, versátil en construcción.',
      bricksPerSqm: 45,
      type: 'perforado',
      resistance: 'media',
      weightPerBrickKg: 1.8, // Example weight
      waterAbsorption: '15%',
      compressionResistance: '15 MPa',
      thermalInsulation: '0.5 W/mK',
    },
    {
      name: 'Bloque de Arcilla',
      image: '/img/bloque-arcilla.jpg',
      description: 'Grandes formatos para mayor velocidad de obra y aislamiento.',
      bricksPerSqm: 10,
      type: 'bloque',
      resistance: 'media',
      weightPerBrickKg: 5.0, // Example weight
      waterAbsorption: '10%',
      compressionResistance: '10 MPa',
      thermalInsulation: '0.4 W/mK',
    },
    {
        name: 'Teja de Arcilla',
        image: '/img/teja-arcilla.jpg',
        description: 'Tradición y durabilidad para cubiertas con estilo.',
        bricksPerSqm: null,
        type: 'teja',
        resistance: 'baja', // Resistance to impact, not structural
        weightPerBrickKg: 0.8, // Example weight for a tile
        waterAbsorption: '8%',
        compressionResistance: 'NA', // Not applicable for structural resistance
        thermalInsulation: '0.8 W/mK',
    }
];

export const projects = [
    {
        image: '/img/Casa residencial moderna con ladrillos.jpg',
        alt: 'Casa residencial moderna con ladrillos',
    },
    {
        image: '/img/Edificio comercial con fachada de ladrillo.jpg',
        alt: 'Edificio comercial con fachada de ladrillo',
    },
    {
        image: '/img/Reforma urbana con elementos de ladrillo.jpg',
        alt: 'Reforma urbana con elementos de ladrillo',
    },
    {
      image: '/img/Detalle de pared de ladrillo con texturas.jpg',
      alt: 'Detalle de pared de ladrillo con texturas',
    }
];

export const socialLinks = [ // Reusing for consistency, though content might change
    { href: '#', icon: 'Instagram', name: 'Instagram' },
    { href: '#', icon: 'Facebook', name: 'Facebook' },
    { href: '#', icon: 'Twitter', name: 'Twitter' },
];

export const contactInfo = {
    plantLocation: 'Av. Ladrillera 456, Parque Industrial, Ciudad',
    wholesalePhone: '+1 (555) 123-4567',
    whatsappNumber: '5491123456789', // Example WhatsApp number (Argentina format)
};

export const partners = [
    {
        name: 'Constructora A',
        logo: 'https://via.placeholder.com/150x80?text=Constructora+A', // Placeholder image
    },
    {
        name: 'Arquitectos B',
        logo: 'https://via.placeholder.com/150x80?text=Arquitectos+B', // Placeholder image
    },
    {
        name: 'Ingeniería C',
        logo: 'https://via.placeholder.com/150x80?text=Ingenieria+C', // Placeholder image
    },
    {
        name: 'Desarrollos D',
        logo: 'https://via.placeholder.com/150x80?text=Desarrollos+D', // Placeholder image
    },
];

export const brickTypesForCalculator = products
    .filter(p => p.bricksPerSqm !== null) // Filter out tiles or products not for square meter calculation
    .map(p => ({
        name: p.name,
        bricksPerSqm: p.bricksPerSqm,
        weightPerBrickKg: p.weightPerBrickKg,
        image: p.image // Include image path
    }));
