import React, { useState, useEffect } from 'react';
import { products } from '../data/content';
import ProductCard from './ProductCard';
import { motion, AnimatePresence } from 'framer-motion';

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

    // Extract unique types and resistances for filter options
    const uniqueTypes = ['all', ...new Set(products.map(p => p.type))];
    const uniqueResistances = ['all', ...new Set(products.map(p => p.resistance))];

    const FilterGroup = ({ label, options, selected, onSelect, labelMap }) => (
        <div className="flex flex-col gap-4">
            <span className="text-xs font-bold text-gray-400 uppercase tracking-[0.2em] ml-2">{label}</span>
            <div className="flex flex-wrap gap-2 bg-gray-100/50 p-1.5 rounded-full border border-gray-200/50 backdrop-blur-sm">
                {options.map((option) => {
                    const isActive = selected === option;
                    return (
                        <button
                            key={option}
                            onClick={() => onSelect(option)}
                            className={`relative px-5 py-2 rounded-full text-sm font-medium transition-colors duration-300 z-10 ${
                                isActive ? 'text-brick-red' : 'text-gray-500 hover:text-charcoal-black'
                            }`}
                        >
                            {isActive && (
                                <motion.div
                                    layoutId={`active-pill-${label}`}
                                    className="absolute inset-0 bg-white rounded-full shadow-sm border border-gray-100"
                                    transition={{ type: "spring", stiffness: 300, damping: 30 }}
                                    style={{ zIndex: -1 }}
                                />
                            )}
                            {option === 'all' 
                                ? 'Todos' 
                                : (labelMap ? labelMap(option) : option.charAt(0).toUpperCase() + option.slice(1))}
                        </button>
                    );
                })}
            </div>
        </div>
    );

    return (
        <section id="productos" className="py-24 bg-gradient-to-b from-light-gray to-white text-charcoal-black">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="text-center mb-16"
                >
                    <h2 className="text-5xl font-bold font-heading mb-4 text-wood tracking-tight">
                        Colección Exclusiva
                    </h2>
                    <p className="text-gray-500 max-w-2xl mx-auto font-body text-lg">
                        Descubre nuestra selección de materiales artesanales, diseñados para perdurar.
                    </p>
                </motion.div>

                {/* Filtros Premium */}
                <div className="flex justify-center mb-16">
                    <motion.div 
                        initial={{ opacity: 0, y: 20 }}
                        whileInView={{ opacity: 1, y: 0 }}
                        viewport={{ once: true }}
                        transition={{ delay: 0.1 }}
                        className="bg-white/80 backdrop-blur-xl p-8 rounded-3xl shadow-[0_8px_30px_rgb(0,0,0,0.04)] border border-white/20 flex flex-col md:flex-row gap-8 md:gap-16 items-center md:items-start max-w-5xl mx-auto"
                    >
                        <FilterGroup 
                            label="Categoría" 
                            options={uniqueTypes} 
                            selected={selectedType} 
                            onSelect={setSelectedType}
                        />
                        
                        <div className="hidden md:block w-px bg-gradient-to-b from-transparent via-gray-200 to-transparent self-stretch"></div>
                        
                        <FilterGroup 
                            label="Resistencia" 
                            options={uniqueResistances} 
                            selected={selectedResistance} 
                            onSelect={setSelectedResistance}
                        />
                    </motion.div>
                </div>

                {/* Grid Animado */}
                <motion.div 
                    layout
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-x-8 gap-y-12"
                >
                    <AnimatePresence mode='popLayout'>
                        {filteredProducts.length > 0 ? (
                            filteredProducts.map((product) => (
                                <motion.div
                                    layout
                                    key={product.name}
                                    initial={{ opacity: 0, scale: 0.95 }}
                                    animate={{ opacity: 1, scale: 1 }}
                                    exit={{ opacity: 0, scale: 0.95 }}
                                    transition={{ duration: 0.4, type: "spring" }}
                                >
                                    <ProductCard product={product} />
                                </motion.div>
                            ))
                        ) : (
                            <motion.div 
                                initial={{ opacity: 0 }} 
                                animate={{ opacity: 1 }}
                                className="col-span-full flex flex-col items-center justify-center py-20 text-center"
                            >
                                <div className="text-6xl mb-4">🔍</div>
                                <h3 className="text-2xl font-bold text-gray-400">Sin resultados</h3>
                                <p className="text-gray-400">Intenta ajustar los filtros para encontrar lo que buscas.</p>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </motion.div>
            </div>
        </section>
    );
};

export default ProductGallery;
