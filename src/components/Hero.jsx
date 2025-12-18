const Hero = () => {
    return (
        <section id="inicio" className="relative h-[90vh] min-h-[500px] flex items-center justify-center text-center text-light-gray overflow-hidden">
            {/* Background Image with Overlay */}
            <div className="absolute inset-0 bg-charcoal-black/60 z-10"></div>
            <img 
                src="/img/Reforma urbana con elementos de ladrillo.jpg" 
                alt="Reforma urbana con elementos de ladrillo" 
                className="absolute inset-0 w-full h-full object-cover"
                loading="eager" // Eager load for LCP
            />
            
            {/* Content */}
            <div className="relative z-20 px-6 max-w-4xl mx-auto">
                <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold font-heading leading-tight mb-4 animate-fade-in-up">
                    Ladrillos de alta resistencia para obras que trascienden
                </h1>
                <p className="text-lg md:text-xl lg:text-2xl font-body mb-8 animate-fade-in-up delay-200">
                    Construye con confianza. Calidad y durabilidad garantizadas para cada proyecto.
                </p>
                <a href="#contacto" className="inline-block bg-brick-red hover:bg-brick-red/90 text-white font-bold font-body py-3 px-8 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-lg animate-fade-in-up delay-400">
                    Presupuesto Rápido
                </a>
            </div>
        </section>
    );
};

export default Hero;