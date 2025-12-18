import React, { useState, useEffect } from 'react';
import { brickTypesForCalculator } from '../data/content';

const Calculator = () => {
    const [area, setArea] = useState('');
    const [selectedBrickType, setSelectedBrickType] = useState(brickTypesForCalculator[0]?.name || '');
    const [wasteFactor, setWasteFactor] = useState(5); // Default 5% waste
    const [baseBricksNeeded, setBaseBricksNeeded] = useState(0);
    const [finalBricksNeeded, setFinalBricksNeeded] = useState(0);
    const [estimatedWeight, setEstimatedWeight] = useState(0);
    const [selectedBrickImage, setSelectedBrickImage] = useState(brickTypesForCalculator[0]?.image || '');
    const [bgPosition, setBgPosition] = useState(0); // State for parallax effect

    const getBrickDetails = (brickTypeName) => {
        const brick = brickTypesForCalculator.find(b => b.name === brickTypeName);
        return brick || { bricksPerSqm: 0, weightPerBrickKg: 0, image: '' };
    };

    // Initialize selectedBrickType and selectedBrickImage on component mount
    useEffect(() => {
        if (brickTypesForCalculator.length > 0) {
            const initialBrick = brickTypesForCalculator.find(b => b.name === selectedBrickType);
            if (initialBrick) {
                setSelectedBrickImage(initialBrick.image);
            } else {
                // Fallback if selectedBrickType is not found (e.g., initial load with empty state)
                setSelectedBrickType(brickTypesForCalculator[0].name);
                setSelectedBrickImage(brickTypesForCalculator[0].image);
            }
        }
    }, [selectedBrickType]);

    // Parallax effect
    useEffect(() => {
        const handleScroll = () => {
            const scrollY = window.scrollY;
            const parallaxSpeed = 0.2; // Adjust this value for faster/slower parallax
            setBgPosition(scrollY * parallaxSpeed);
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []); // Empty dependency array means this effect runs once on mount and cleans up on unmount

    const handleCalculate = (e) => {
        e.preventDefault();
        const parsedArea = parseFloat(area);
        const parsedWasteFactor = parseFloat(wasteFactor);

        if (!isNaN(parsedArea) && parsedArea > 0) {
            const brickDetails = getBrickDetails(selectedBrickType);
            const bricksPerSqm = brickDetails.bricksPerSqm;
            const weightPerBrickKg = brickDetails.weightPerBrickKg;

            const base = parsedArea * bricksPerSqm;
            setBaseBricksNeeded(Math.ceil(base));

            let final = base;
            if (!isNaN(parsedWasteFactor) && parsedWasteFactor >= 0) {
                final = base * (1 + parsedWasteFactor / 100);
            }
            setFinalBricksNeeded(Math.ceil(final));

            // Calculate estimated weight
            if (weightPerBrickKg > 0) {
                setEstimatedWeight(final * weightPerBrickKg);
            } else {
                setEstimatedWeight(0);
            }

        } else {
            setBaseBricksNeeded(0);
            setFinalBricksNeeded(0);
            setEstimatedWeight(0);
        }
    };

    const handleReset = () => {
        setArea('');
        setSelectedBrickType(brickTypesForCalculator[0]?.name || '');
        setWasteFactor(5);
        setBaseBricksNeeded(0);
        setFinalBricksNeeded(0);
        setEstimatedWeight(0);
        setSelectedBrickImage(brickTypesForCalculator[0]?.image || '');
    };

    return (
        <section 
            id="calculadora" 
            className="py-20 bg-fixed bg-cover text-charcoal-black relative overflow-hidden" 
            style={{ 
                backgroundImage: "url('/img/Detalle de pared de ladrillo con texturas.jpg')",
                backgroundPositionY: `-${bgPosition}px` // Apply parallax effect
            }}
        >
            <div className="absolute inset-0 bg-white bg-opacity-60"></div> {/* Overlay for readability */}
            <div className="container mx-auto px-6 py-12 max-w-4xl relative z-10"> {/* Added py-12 for more vertical padding */}
                <h2 className="text-4xl font-bold text-center font-heading mb-12 text-brick-red">
                    Calculadora de Ladrillos
                </h2>
                <div className="bg-white p-8 rounded-lg shadow-xl border-t-4 border-brick-red">
                    <p className="text-dark-gray text-center mb-8 font-body leading-relaxed">
                        Estima la cantidad de ladrillos que necesitarás para tu proyecto. <br /> Selecciona el tipo de ladrillo y el factor de desperdicio para obtener una estimación precisa.
                    </p>
                    <div className="flex flex-col md:flex-row gap-8">
                        <div className="md:w-1/2 flex justify-center items-center p-4 bg-light-gray rounded-lg shadow-inner">
                            {selectedBrickImage ? (
                                <img
                                    src={selectedBrickImage}
                                    alt={selectedBrickType}
                                    className="max-w-full h-auto rounded-lg shadow-md transition-transform duration-300 ease-in-out transform hover:scale-105"
                                />
                            ) : (
                                <div className="text-cement-gray text-center font-body">Imagen no disponible</div>
                            )}
                        </div>
                        <form onSubmit={handleCalculate} className="md:w-1/2 flex flex-col gap-6">
                            <div>
                                <label htmlFor="area" className="block text-xl font-semibold font-body text-charcoal-black mb-2">
                                    Superficie en m²:
                                </label>
                                <input
                                    type="number"
                                    id="area"
                                    value={area}
                                    onChange={(e) => setArea(e.target.value)}
                                    placeholder="Ej: 100"
                                    className="w-full p-3 border border-cement-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-brick-red font-body text-lg transition-all duration-200"
                                    required
                                    min="1"
                                />
                            </div>

                            <div>
                                <label htmlFor="brickType" className="block text-xl font-semibold font-body text-charcoal-black mb-2">
                                    Tipo de Ladrillo:
                                </label>
                                <select
                                    id="brickType"
                                    value={selectedBrickType}
                                    onChange={(e) => {
                                        setSelectedBrickType(e.target.value);
                                        const brick = getBrickDetails(e.target.value);
                                        setSelectedBrickImage(brick.image);
                                    }}
                                    className="w-full p-3 border border-cement-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-brick-red font-body text-lg bg-white appearance-none pr-8 cursor-pointer transition-all duration-200"
                                >
                                    {brickTypesForCalculator.map((type) => (
                                        <option key={type.name} value={type.name}>
                                            {type.name} (aprox. {type.bricksPerSqm} uds/m²)
                                        </option>
                                    ))}
                                </select>
                            </div>

                            <div>
                                <label htmlFor="wasteFactor" className="block text-xl font-semibold font-body text-charcoal-black mb-2">
                                    Factor de Desperdicio (%):
                                </label>
                                <input
                                    type="number"
                                    id="wasteFactor"
                                    value={wasteFactor}
                                    onChange={(e) => setWasteFactor(e.target.value)}
                                    placeholder="Ej: 5"
                                    className="w-full p-3 border border-cement-gray rounded-lg focus:outline-none focus:ring-2 focus:ring-brick-red font-body text-lg transition-all duration-200"
                                    min="0"
                                    max="100"
                                />
                            </div>

                            <div className="flex flex-col sm:flex-row gap-4 mt-4">
                                <button
                                    type="submit"
                                    className="w-full bg-brick-red hover:bg-brick-red/90 text-white font-bold font-body py-3 px-6 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-md"
                                >
                                    Calcular Ladrillos
                                </button>
                                <button
                                    type="button"
                                    onClick={handleReset}
                                    className="w-full bg-cement-gray hover:bg-dark-gray text-charcoal-black font-bold font-body py-3 px-6 rounded-lg text-xl transition-all duration-300 transform hover:scale-105 shadow-md"
                                >
                                    Reiniciar
                                </button>
                            </div>
                        </form>
                    </div>
                    {finalBricksNeeded > 0 && (
                        <div className="mt-8 p-6 bg-light-gray rounded-lg text-center border-l-4 border-brick-red shadow-inner">
                            <p className="text-xl font-body text-dark-gray mb-2">
                                Para una superficie de <span className="font-bold">{area} m²</span> usando <span className="font-bold">{selectedBrickType}</span>:
                            </p>
                            <p className="text-3xl font-bold font-heading text-charcoal-black mb-2">
                                Ladrillos base: <span className="text-brick-red">{baseBricksNeeded}</span>
                            </p>
                            <p className="text-3xl font-bold font-heading text-charcoal-black mb-2">
                                Ladrillos estimados (con {wasteFactor}% de desperdicio): <span className="text-brick-red">{finalBricksNeeded}</span>
                            </p>
                            {estimatedWeight > 0 && (
                                <p className="text-3xl font-bold font-heading text-charcoal-black">
                                    Peso estimado: <span className="text-brick-red">{estimatedWeight.toFixed(2)} kg</span>
                                </p>
                            )}
                            <p className="text-dark-gray font-body mt-4 text-sm italic">
                                Esta es una estimación. Consulta siempre con un profesional para obtener cantidades exactas y considera las particularidades de tu proyecto.
                            </p>
                        </div>
                    )}
                </div>
            </div>
        </section>
    );
};

export default Calculator;