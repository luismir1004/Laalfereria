import React from 'react';
import { partners } from '../data/content';

const Partners = () => {
    return (
        <section id="alianzas" className="py-20 bg-gray-100 text-charcoal-black">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center font-heading mb-12">
                    Nuestras Alianzas Estratégicas
                </h2>
                <p className="text-dark-gray text-center mb-10 font-body max-w-2xl mx-auto">
                    La confianza de grandes constructoras y arquitectos nos respalda. Trabajamos de la mano con los mejores para construir proyectos que marcan la diferencia.
                </p>

                <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 items-center justify-items-center">
                    {partners.map((partner, index) => (
                        <div key={index} className="p-4 bg-white rounded-lg shadow-md flex items-center justify-center h-32 w-full max-w-[200px]">
                            <img
                                src={partner.logo}
                                alt={`Logo de ${partner.name}`}
                                className="max-h-full max-w-full object-contain"
                                loading="lazy"
                            />
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Partners;
