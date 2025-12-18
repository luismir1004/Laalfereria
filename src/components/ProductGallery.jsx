import React, { useState, useEffect } from 'react';
import { products } from '../data/content';
import ProductCard from './ProductCard'; // Assuming ProductCard is a separate component

const ProductGallery = () => {
    const [selectedType, setSelectedType] = useState('all');
    const [selectedResistance, setSelectedResistance] = useState('all');
    const [filteredProducts, setFilteredProducts] = useState(products);

    useEffect(() => {
        let currentFilteredProducts = products;

        if (selectedType !== 'all') {
            currentFilteredProducts = currentFilteredProducts.filter(
                (product) => product.type === selectedType
            );
        }

        if (selectedResistance !== 'all') {
            currentFilteredProducts = currentFilteredProducts.filter(
                (product) => product.resistance === selectedResistance
            );
        }

        setFilteredProducts(currentFilteredProducts);
    }, [selectedType, selectedResistance]);

    const handleTypeChange = (e) => {
        setSelectedType(e.target.value);
    };

    const handleResistanceChange = (e) => {
        setSelectedResistance(e.target.value);
    };

    // Extract unique types and resistances for filter options
    const uniqueTypes = ['all', ...new Set(products.map(p => p.type))];
    const uniqueResistances = ['all', ...new Set(products.map(p => p.resistance))];

    return (
        <section id="productos" className="py-20 bg-light-gray text-charcoal-black">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center font-heading mb-12">
                    Nuestros Productos
                </h2>

                <div className="flex flex-col md:flex-row justify-center gap-4 mb-12">
                    {/* Filter by Type */}
                    <div className="flex items-center gap-2">
                        <label htmlFor="type-filter" className="font-semibold">Tipo:</label>
                        <select
                            id="type-filter"
                            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brick-red"
                            value={selectedType}
                            onChange={handleTypeChange}
                        >
                            {uniqueTypes.map((type) => (
                                <option key={type} value={type}>
                                    {type === 'all' ? 'Todos' : type.charAt(0).toUpperCase() + type.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>

                    {/* Filter by Resistance */}
                    <div className="flex items-center gap-2">
                        <label htmlFor="resistance-filter" className="font-semibold">Resistencia:</label>
                        <select
                            id="resistance-filter"
                            className="p-2 border border-gray-300 rounded-md shadow-sm focus:outline-none focus:ring-2 focus:ring-brick-red"
                            value={selectedResistance}
                            onChange={handleResistanceChange}
                        >
                            {uniqueResistances.map((resistance) => (
                                <option key={resistance} value={resistance}>
                                    {resistance === 'all' ? 'Todas' : resistance.charAt(0).toUpperCase() + resistance.slice(1)}
                                </option>
                            ))}
                        </select>
                    </div>
                </div>

                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {filteredProducts.length > 0 ? (
                        filteredProducts.map((product, index) => (
                            <ProductCard key={index} product={product} />
                        ))
                    ) : (
                        <p className="col-span-full text-center text-xl text-dark-gray">No se encontraron productos con los filtros seleccionados.</p>
                    )}
                </div>
            </div>
        </section>
    );
};

export default ProductGallery;
