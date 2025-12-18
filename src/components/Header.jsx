import { useState } from 'react';
import { Menu, X, Phone } from 'lucide-react';
import { navLinks } from '../data/content';

const Header = () => {
    const [isMenuOpen, setIsMenuOpen] = useState(false);

    return (
        <header className="bg-charcoal-black/90 backdrop-blur-sm sticky top-0 z-50 shadow-md">
            <div className="container mx-auto px-6 py-4 flex justify-between items-center">
                <a href="#inicio" className="text-2xl font-bold text-light-gray font-heading tracking-wide">La Margarita</a>
                
                {/* Desktop Navigation */}
                <nav className="hidden md:flex items-center space-x-8">
                    {navLinks.map((link) => (
                        <a key={link.href} href={link.href} className="text-light-gray hover:text-brick-red transition-colors duration-300 font-body text-lg">
                            {link.label}
                        </a>
                    ))}
                    <a href={`tel:${navLinks.find(link => link.label === 'Contacto')?.href}`} className="text-brick-red hover:text-light-gray transition-colors duration-300">
                        <Phone size={24} />
                        <span className="sr-only">Llamar a contacto</span>
                    </a>
                </nav>
                
                {/* Mobile Menu Button */}
                <div className="md:hidden">
                    <button 
                        onClick={() => setIsMenuOpen(!isMenuOpen)} 
                        className="text-light-gray"
                        aria-controls="mobile-menu"
                        aria-expanded={isMenuOpen}
                    >
                        {isMenuOpen ? <X size={28} /> : <Menu size={28} />}
                        <span className="sr-only">{isMenuOpen ? 'Cerrar menú' : 'Abrir menú'}</span>
                    </button>
                </div>
            </div>

            {/* Mobile Menu */}
            <div id="mobile-menu" className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'} bg-charcoal-black/95 transition-all duration-300 ease-in-out`}>
                <nav className="px-6 pt-2 pb-4 flex flex-col space-y-4">
                    {navLinks.map((link) => (
                        <a 
                            key={link.href} 
                            href={link.href} 
                            onClick={() => setIsMenuOpen(false)} 
                            className="text-light-gray hover:text-brick-red transition-colors duration-300 text-center py-3 text-lg font-body"
                        >
                            {link.label}
                        </a>
                    ))}
                    <a href={`tel:${navLinks.find(link => link.label === 'Contacto')?.href}`} className="text-brick-red hover:text-light-gray transition-colors duration-300 flex items-center justify-center py-3 text-lg font-body gap-2">
                        <Phone size={24} />
                        <span>Contactar</span>
                    </a>
                </nav>
            </div>
        </header>
    );
};

export default Header;