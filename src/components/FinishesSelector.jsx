import React, { useState } from 'react';
import { products } from '../data/content';

const FinishesSelector = () => {
    // Filter out products that are not primarily for walls or don't have a clear "finish"
    const wallProducts = products.filter(p => p.type !== 'teja');

    const [selectedProduct, setSelectedProduct] = useState(wallProducts[0] || null);

    const handleProductChange = (e) => {
        const productName = e.target.value;
        const product = wallProducts.find(p => p.name === productName);
        setSelectedProduct(product);
    };

    return (
        <section id="selector-acabados" className="py-20 bg-gray-100 text-charcoal-black">
            <div className="container mx-auto px-6 max-w-4xl">
                <h2 className="text-4xl font-bold text-center font-heading mb-12">
                    Visualizador de Acabados
                </h2>
                <p className="text-dark-gray text-center mb-10 font-body">
                    Descubre cómo se verían nuestros ladrillos en tu proyecto. Selecciona un tipo de ladrillo para ver el acabado.
                </p>

                <div className="bg-white p-8 rounded-lg shadow-lg flex flex-col md:flex-row items-center gap-8">
                    {/* Selector */}
                    <div className="w-full md:w-1/3 flex flex-col items-center">
                        <label htmlFor="product-selector" className="block text-xl font-semibold font-body text-charcoal-black mb-4">
                            Selecciona un Ladrillo:
                        </label>
                        <select
                            id="product-selector"
                            className="w-full p-3 border border-cement-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-brick-red font-body text-lg bg-white"
                            value={selectedProduct ? selectedProduct.name : ''}
                            onChange={handleProductChange}
                        >
                            {wallProducts.map((product) => (
                                <option key={product.name} value={product.name}>
                                    {product.name}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Visualizer */}
                    <div className="w-full md:w-2/3 relative">
                        {selectedProduct ? (
                            <div className="relative w-full h-80 md:h-96 bg-gray-200 rounded-lg overflow-hidden shadow-inner">
                                <img
                                    src={selectedProduct.image}
                                    alt={`Acabado de ${selectedProduct.name}`}
                                    className="w-full h-full object-cover transition-opacity duration-500 ease-in-out"
                                    loading="lazy"
                                />
                                <div className="absolute inset-0 bg-black/30 flex items-center justify-center">
                                    <p className="text-white text-3xl font-bold font-heading text-shadow-md">
                                        {selectedProduct.name}
                                    </p>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full h-80 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center text-dark-gray text-xl font-body">
                                Selecciona un ladrillo para ver el acabado
                            </div>
                        )}
                        <p className="text-sm text-gray-600 mt-4 text-center font-body">
                            *Imagen representativa del acabado. Las tonalidades pueden variar ligeramente.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default FinishesSelector;
