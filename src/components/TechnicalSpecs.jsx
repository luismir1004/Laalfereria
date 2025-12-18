import React from 'react';
import { products } from '../data/content';
import { Droplets, ArrowDownToLine, Thermometer, Scale, Info } from 'lucide-react';

const TechnicalSpecs = () => {
    // Filtramos productos comparables (excluyendo tejas si se desea comparar solo ladrillos estructurales)
    const comparableProducts = products.filter(p => p.type !== 'teja');

    const specs = [
        {
            key: 'waterAbsorption',
            label: 'Absorción',
            icon: Droplets,
            description: 'Retención de humedad',
        },
        {
            key: 'compressionResistance',
            label: 'Resistencia',
            icon: ArrowDownToLine,
            description: 'Carga estructural',
        },
        {
            key: 'thermalInsulation',
            label: 'Aislamiento',
            icon: Thermometer,
            description: 'Eficiencia (W/mK)',
        },
        {
            key: 'weightPerBrickKg',
            label: 'Peso Unitario',
            icon: Scale,
            description: 'Peso aprox. en kg',
            format: (val) => `${val} kg`,
        },
    ];

    return (
        <section id="especificaciones" className="py-32 bg-gradient-to-b from-stone-50 to-white text-stone-800">
            <div className="container mx-auto px-6 lg:px-12">
                <div className="max-w-3xl mx-auto text-center mb-20">
                    <h2 className="text-4xl md:text-5xl font-light font-heading text-stone-800 mb-6 tracking-wide">
                        Especificaciones <span className="font-medium text-brick-red">Técnicas</span>
                    </h2>
                    <p className="text-lg text-stone-500 font-body leading-relaxed font-light">
                        Precisión en cada detalle. Compara las propiedades fundamentales para garantizar la solidez y eficiencia de tu obra.
                    </p>
                </div>

                <div className="max-w-7xl mx-auto bg-white/60 backdrop-blur-xl rounded-[2rem] shadow-[0_20px_50px_rgba(0,0,0,0.03)] border border-white/20 overflow-hidden">
                    <div className="overflow-x-auto">
                        <table className="w-full text-left border-collapse">
                            <thead>
                                <tr className="border-b border-stone-100/50">
                                    <th className="py-10 px-10 text-left align-bottom min-w-[280px]">
                                        <span className="block text-xs font-bold text-stone-400 uppercase tracking-[0.2em] mb-2">
                                            Propiedades
                                        </span>
                                        <span className="text-3xl font-light text-stone-800 font-heading">
                                            Comparativa
                                        </span>
                                    </th>
                                    {comparableProducts.map((product, index) => (
                                        <th key={index} className="py-10 px-6 text-center align-bottom min-w-[200px]">
                                            <div className="flex flex-col items-center group cursor-default">
                                                <div className="relative w-28 h-28 mb-6 rounded-2xl overflow-hidden shadow-sm transition-transform duration-500 group-hover:-translate-y-2">
                                                    <div className="absolute inset-0 bg-stone-900/0 group-hover:bg-stone-900/5 transition-colors duration-300 z-10" />
                                                    <img 
                                                        src={product.image} 
                                                        alt={product.name} 
                                                        className="w-full h-full object-cover transform scale-105 group-hover:scale-110 transition-transform duration-700"
                                                    />
                                                </div>
                                                <h3 className="text-lg font-medium text-stone-800 font-heading group-hover:text-brick-red transition-colors duration-300">
                                                    {product.name}
                                                </h3>
                                            </div>
                                        </th>
                                    ))}
                                </tr>
                            </thead>
                            <tbody className="divide-y divide-stone-50">
                                {specs.map((spec, index) => {
                                    const Icon = spec.icon;
                                    return (
                                        <tr key={index} className="group hover:bg-stone-50/50 transition-colors duration-500">
                                            <td className="py-8 px-10">
                                                <div className="flex items-center gap-5">
                                                    <div className="text-stone-400 group-hover:text-brick-red transition-colors duration-300">
                                                        <Icon size={22} strokeWidth={1.5} />
                                                    </div>
                                                    <div>
                                                        <span className="block font-medium text-stone-700 text-lg tracking-wide group-hover:text-stone-900 transition-colors duration-300">
                                                            {spec.label}
                                                        </span>
                                                        <span className="text-sm text-stone-400 font-light mt-0.5">
                                                            {spec.description}
                                                        </span>
                                                    </div>
                                                </div>
                                            </td>
                                            {comparableProducts.map((product, pIndex) => (
                                                <td key={pIndex} className="py-8 px-6 text-center">
                                                    <span className="text-xl font-light text-stone-600 font-heading group-hover:text-stone-800 transition-colors duration-300">
                                                        {spec.format 
                                                            ? spec.format(product[spec.key]) 
                                                            : product[spec.key]}
                                                    </span>
                                                </td>
                                            ))}
                                        </tr>
                                    );
                                })}
                            </tbody>
                        </table>
                    </div>
                </div>

                <div className="mt-16 flex flex-col md:flex-row items-center justify-center gap-8 text-stone-400 text-sm font-light">
                    <div className="flex items-center gap-3 px-5 py-2.5 bg-white rounded-full shadow-sm border border-stone-100/50">
                        <Info size={14} className="text-brick-red" />
                        <p>Valores promedio sujetos a variaciones naturales.</p>
                    </div>
                    <p className="italic tracking-wide opacity-80">
                        Certificaciones ISO 9001 disponibles.
                    </p>
                </div>
            </div>
        </section>
    );
};

export default TechnicalSpecs;
