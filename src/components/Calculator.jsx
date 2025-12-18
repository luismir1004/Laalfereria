import React, { useState, useEffect } from 'react';
import { brickTypesForCalculator } from '../data/content';
import { motion, AnimatePresence } from 'framer-motion';

const Calculator = () => {
    const [area, setArea] = useState('');
    const [selectedBrickType, setSelectedBrickType] = useState(brickTypesForCalculator[0]?.name || '');
    const [wasteFactor, setWasteFactor] = useState(5);
    const [result, setResult] = useState({ total: 0, weight: 0 });
    const [selectedBrickImage, setSelectedBrickImage] = useState(brickTypesForCalculator[0]?.image || '');
    
    // Auto-calculate effect
    useEffect(() => {
        const parsedArea = parseFloat(area);
        const parsedWaste = parseFloat(wasteFactor);
        const brick = brickTypesForCalculator.find(b => b.name === selectedBrickType);
        
        if (brick && !isNaN(parsedArea) && parsedArea > 0) {
            const base = parsedArea * brick.bricksPerSqm;
            const total = Math.ceil(base * (1 + (parsedWaste / 100)));
            const weight = total * brick.weightPerBrickKg;
            
            setResult({ total, weight });
            setSelectedBrickImage(brick.image);
        } else {
            setResult({ total: 0, weight: 0 });
            if (brick) setSelectedBrickImage(brick.image);
        }
    }, [area, wasteFactor, selectedBrickType]);

    // Counter animation component
    const Counter = ({ value, label, unit }) => (
        <div className="mb-6 last:mb-0">
            <p className="text-gray-400 text-sm font-bold tracking-widest uppercase mb-1">{label}</p>
            <div className="flex items-baseline gap-2">
                <motion.span 
                    key={value}
                    initial={{ opacity: 0, y: 10 }}
                    animate={{ opacity: 1, y: 0 }}
                    className="text-5xl font-bold text-white font-heading"
                >
                    {value.toLocaleString()}
                </motion.span>
                <span className="text-xl text-brick-red font-medium">{unit}</span>
            </div>
        </div>
    );

    return (
        <section id="calculadora" className="py-24 relative overflow-hidden bg-charcoal-black">
            {/* Background Parallax Substitute (Simple Gradient/Pattern for cleaner look) */}
            <div className="absolute inset-0 opacity-20 bg-[url('/img/Detalle de pared de ladrillo con texturas.jpg')] bg-cover bg-fixed bg-center mix-blend-overlay"></div>
            
            <div className="container mx-auto px-6 relative z-10">
                <motion.div 
                    initial={{ opacity: 0, y: 30 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="max-w-5xl mx-auto bg-white rounded-3xl shadow-2xl overflow-hidden grid grid-cols-1 lg:grid-cols-2"
                >
                    {/* Left Panel: Inputs */}
                    <div className="p-8 md:p-12 bg-white">
                        <h2 className="text-3xl font-bold font-heading mb-2 text-charcoal-black">Calculadora de Materiales</h2>
                        <p className="text-gray-500 mb-8">Planifica tu proyecto con precisión.</p>
                        
                        <form className="space-y-8" onSubmit={(e) => e.preventDefault()}>
                            {/* Superficie Input */}
                            <div className="relative group">
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-2">
                                    Superficie a cubrir
                                </label>
                                <div className="relative flex items-center">
                                    <input
                                        type="number"
                                        value={area}
                                        onChange={(e) => setArea(e.target.value)}
                                        placeholder="0"
                                        className="w-full bg-gray-50 border-b-2 border-gray-200 p-4 text-3xl font-bold text-charcoal-black focus:outline-none focus:border-brick-red transition-colors placeholder-gray-300"
                                        min="0"
                                    />
                                    <span className="absolute right-4 text-gray-400 font-bold">m²</span>
                                </div>
                            </div>

                            {/* Tipo de Ladrillo Selector */}
                            <div>
                                <label className="block text-xs font-bold text-gray-400 uppercase tracking-widest mb-3">
                                    Tipo de Material
                                </label>
                                <div className="grid grid-cols-1 sm:grid-cols-2 gap-3">
                                    {brickTypesForCalculator.map((type) => (
                                        <button
                                            key={type.name}
                                            onClick={() => setSelectedBrickType(type.name)}
                                            className={`p-3 rounded-xl border text-left transition-all duration-300 flex items-center gap-3 ${
                                                selectedBrickType === type.name
                                                    ? 'border-brick-red bg-brick-red/5 ring-1 ring-brick-red'
                                                    : 'border-gray-200 hover:border-gray-300'
                                            }`}
                                        >
                                            <div className={`w-3 h-3 rounded-full ${selectedBrickType === type.name ? 'bg-brick-red' : 'bg-gray-300'}`} />
                                            <span className={`text-sm font-medium ${selectedBrickType === type.name ? 'text-brick-red' : 'text-gray-600'}`}>
                                                {type.name}
                                            </span>
                                        </button>
                                    ))}
                                </div>
                            </div>

                            {/* Desperdicio Slider */}
                            <div>
                                <div className="flex justify-between mb-2">
                                    <label className="text-xs font-bold text-gray-400 uppercase tracking-widest">Margen de Desperdicio</label>
                                    <span className="text-sm font-bold text-brick-red">{wasteFactor}%</span>
                                </div>
                                <input
                                    type="range"
                                    min="0"
                                    max="20"
                                    step="1"
                                    value={wasteFactor}
                                    onChange={(e) => setWasteFactor(e.target.value)}
                                    className="w-full h-2 bg-gray-200 rounded-lg appearance-none cursor-pointer accent-brick-red"
                                />
                                <div className="flex justify-between text-xs text-gray-400 mt-2">
                                    <span>0% (Exacto)</span>
                                    <span>20% (Seguro)</span>
                                </div>
                            </div>
                        </form>
                    </div>

                    {/* Right Panel: Results */}
                    <div className="bg-charcoal-black p-8 md:p-12 text-white flex flex-col justify-between relative overflow-hidden">
                        {/* Decorative Background Blob */}
                        <div className="absolute top-0 right-0 -mr-20 -mt-20 w-64 h-64 bg-brick-red rounded-full blur-[100px] opacity-20"></div>
                        
                        <div className="relative z-10">
                            <h3 className="text-xl font-medium text-white/80 mb-8 border-b border-white/10 pb-4">Estimación del Proyecto</h3>
                            
                            <Counter value={result.total} label="Total de Ladrillos" unit="unidades" />
                            <div className="h-8"></div> {/* Spacer */}
                            <Counter value={Math.round(result.weight)} label="Peso Aproximado" unit="kg" />
                        </div>

                        {/* Selected Brick Preview */}
                        <div className="mt-12 relative z-10">
                            <p className="text-xs font-bold text-gray-500 uppercase tracking-widest mb-4">Material Seleccionado</p>
                            <div className="flex items-center gap-4 bg-white/5 p-4 rounded-2xl border border-white/10 backdrop-blur-sm">
                                <img 
                                    src={selectedBrickImage} 
                                    alt="Preview" 
                                    className="w-16 h-16 object-cover rounded-lg shadow-sm"
                                />
                                <div>
                                    <p className="font-bold text-white text-lg">{selectedBrickType}</p>
                                    <p className="text-sm text-gray-400">Excelente elección para tu obra.</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </motion.div>
            </div>
        </section>
    );
};

export default Calculator;