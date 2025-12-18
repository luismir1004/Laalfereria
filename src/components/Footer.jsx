import { Instagram, Facebook, Twitter, MapPin, Phone, MessageSquare } from 'lucide-react';
import { socialLinks, contactInfo } from '../data/content';

const iconComponents = {
    Instagram,
    Facebook,
    Twitter
};

const Footer = () => {
    const whatsappUrl = `https://wa.me/${contactInfo.whatsappNumber}`;

    return (
        <footer id="contacto" className="bg-charcoal-black text-light-gray py-12">
            <div className="container mx-auto px-6">
                <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-center md:text-left">
                    <div>
                        <h3 className="text-xl font-bold font-heading mb-4">La Margarita</h3>
                        <p className="text-cement-gray font-body">Tu socio en construcción duradera.</p>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-heading mb-4">Contacto</h3>
                        <ul className="space-y-2">
                            <li className="flex items-center justify-center md:justify-start gap-2 text-cement-gray hover:text-light-gray transition-colors">
                                <MapPin size={18} />
                                <span itemProp="address" itemType="http://schema.org/PostalAddress">
                                    <span itemProp="streetAddress">{contactInfo.plantLocation.split(',')[0]}</span>,
                                    <span itemProp="addressLocality">{contactInfo.plantLocation.split(',')[1]}</span>,
                                    <span itemProp="addressRegion">{contactInfo.plantLocation.split(',')[2]}</span>
                                </span>
                            </li>
                            <li className="flex items-center justify-center md:justify-start gap-2 text-cement-gray hover:text-light-gray transition-colors">
                                <Phone size={18} />
                                <span>Ventas al por mayor: <span itemProp="telephone">{contactInfo.wholesalePhone}</span></span>
                            </li>
                            <li>
                                <a 
                                    href={whatsappUrl} 
                                    target="_blank" 
                                    rel="noopener noreferrer" 
                                    className="inline-flex items-center justify-center md:justify-start gap-2 bg-green-500 hover:bg-green-600 text-white font-bold font-body py-2 px-4 rounded-lg mt-4 transition-all duration-300 transform hover:scale-105 shadow-md"
                                >
                                    <MessageSquare size={20} />
                                    <span>WhatsApp Ventas</span>
                                </a>
                            </li>
                        </ul>
                    </div>
                    <div>
                        <h3 className="text-xl font-bold font-heading mb-4">Síguenos</h3>
                        <div className="flex justify-center md:justify-start space-x-6">
                            {socialLinks.map(social => {
                                const Icon = iconComponents[social.icon];
                                return (
                                    <a 
                                        key={social.name} 
                                        href={social.href} 
                                        target="_blank" 
                                        rel="noopener noreferrer" 
                                        className="text-cement-gray hover:text-light-gray transition-colors"
                                    >
                                        <Icon size={24} />
                                        <span className="sr-only">{social.name}</span>
                                    </a>
                                );
                            })}
                        </div>
                    </div>
                </div>
                <div className="mt-10 border-t border-cement-gray/30 pt-6 text-center text-cement-gray/70 font-body">
                    <p>&copy; {new Date().getFullYear()} Alfarería La Margarita. Todos los derechos reservados.</p>
                </div>
            </div>
            {/* Schema.org JSON-LD for Local Business */}
            <script type="application/ld+json">
                {`{
                    "@context": "http://schema.org",
                    "@type": "LocalBusiness",
                    "name": "Alfarería La Margarita",
                    "address": {
                        "@type": "PostalAddress",
                        "streetAddress": "${contactInfo.plantLocation.split(',')[0].trim()}",
                        "addressLocality": "${contactInfo.plantLocation.split(',')[1].trim()}",
                        "addressRegion": "${contactInfo.plantLocation.split(',')[2] ? contactInfo.plantLocation.split(',')[2].trim() : ''}",
                        "addressCountry": "AR"
                    },
                    "url": "https://www.alfarerialamargarita.com",
                    "telephone": "${contactInfo.wholesalePhone}",
                    "openingHours": "Mo-Fr 08:00-17:00",
                    "image": "https://www.alfarerialamargarita.com/logo.png",
                    "priceRange": "$$"
                }`}
            </script>
        </footer>
    );
};

export default Footer;