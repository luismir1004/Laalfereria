import React from 'react';
import { products } from '../data/content';

const TechnicalSpecs = () => {
    // Filter products to only include those with relevant technical specs for comparison, e.g., not just tiles
    const comparableProducts = products.filter(p => p.type !== 'teja');

    return (
        <section id="especificaciones" className="py-20 bg-white text-charcoal-black">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center font-heading mb-12">
                    Especificaciones Técnicas
                </h2>
                <p className="text-dark-gray text-center mb-10 font-body max-w-2xl mx-auto">
                    Compara las propiedades clave de nuestros ladrillos para elegir el material perfecto que garantice la calidad y eficiencia de tu construcción.
                </p>

                <div className="overflow-x-auto shadow-lg rounded-lg">
                    <table className="w-full text-left table-auto">
                        <thead className="bg-brick-red text-white">
                            <tr>
                                <th className="py-4 px-6 text-lg font-semibold font-heading">Propiedad</th>
                                {comparableProducts.map((product, index) => (
                                    <th key={index} className="py-4 px-6 text-lg font-semibold font-heading">
                                        {product.name}
                                    </th>
                                ))}
                            </tr>
                        </thead>
                        <tbody className="bg-white divide-y divide-gray-200">
                            <tr>
                                <td className="py-4 px-6 font-semibold text-charcoal-black font-body">Absorción de Agua</td>
                                {comparableProducts.map((product, index) => (
                                    <td key={index} className="py-4 px-6 text-dark-gray font-body">
                                        {product.waterAbsorption}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-semibold text-charcoal-black font-body">Resistencia a la Compresión</td>
                                {comparableProducts.map((product, index) => (
                                    <td key={index} className="py-4 px-6 text-dark-gray font-body">
                                        {product.compressionResistance}
                                    </td>
                                ))}
                            </tr>
                            <tr>
                                <td className="py-4 px-6 font-semibold text-charcoal-black font-body">Aislamiento Térmico</td>
                                {comparableProducts.map((product, index) => (
                                    <td key={index} className="py-4 px-6 text-dark-gray font-body">
                                        {product.thermalInsulation}
                                    </td>
                                ))}
                            </tr>
                            {/* Add more technical specs rows as needed */}
                        </tbody>
                    </table>
                </div>

                <p className="text-sm text-gray-600 mt-8 text-center font-body">
                    *Valores aproximados. Consulta las fichas técnicas completas para obtener datos precisos y certificaciones.
                </p>
            </div>
        </section>
    );
};

export default TechnicalSpecs;
