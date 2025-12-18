import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';

const ProductCard = ({ product }) => {
    const ref = useRef(null);
    const { scrollYProgress } = useScroll({
        target: ref,
        offset: ["start end", "end start"]
    });

    // Detectar productos que necesitan verse más "alejados" (menos zoom)
    const isZoomedOutProduct = ['Bloque de Arcilla', 'Teja de Arcilla'].includes(product.name);

    // Ajustar configuración según el producto
    // Productos normales: movimiento suave, requiere 110% de altura (zoom leve)
    // Productos alejados: SIN movimiento vertical extra para maximizar el campo de visión (100% altura)
    const yRange = isZoomedOutProduct ? ["0%", "0%"] : ["-5%", "5%"];
    const containerHeight = isZoomedOutProduct ? "h-[100%]" : "h-[110%]";
    const containerTop = isZoomedOutProduct ? "top-0" : "-top-[5%]";
    
    // Para productos destacados que necesitan verse enteros:
    // - object-contain: asegura que se vea TODA la imagen sin recortes.
    // - p-6: añade espacio alrededor para que no toque los bordes (aire).
    // - bg-gray-50: fondo sutil para rellenar el espacio sobrante.
    const imageClasses = isZoomedOutProduct 
        ? "w-full h-full object-contain p-6 bg-gray-50 transition-transform duration-700 group-hover:scale-110" 
        : "w-full h-full object-cover transition-transform duration-700 group-hover:scale-105";

    const y = useTransform(scrollYProgress, [0, 1], yRange);

    return (
        <motion.div 
            ref={ref}
            initial={{ opacity: 0, y: 50 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: "-50px" }}
            transition={{ duration: 0.5 }}
            className="bg-white rounded-xl shadow-lg overflow-hidden group hover:shadow-2xl transition-shadow duration-300"
        >
            {/* Parallax Image Container */}
            <div className="relative h-72 overflow-hidden"> {/* Altura ajustada ligeramente */}
                <motion.div 
                    style={{ y }} 
                    className={`absolute inset-0 w-full ${containerHeight} ${containerTop}`}
                >
                    <img 
                        src={product.image} 
                        alt={product.name} 
                        loading="lazy"
                        className={imageClasses}
                    />
                </motion.div>
                
                {/* Overlay sutil para mejorar contraste si fuera necesario, o simplemente estético */}
                <div className="absolute inset-0 bg-black/10 group-hover:bg-transparent transition-colors duration-300" />
            </div>

            <div className="p-8 text-center relative z-10 bg-white">
                <h3 className="text-2xl font-bold font-heading mb-3 text-wood">{product.name}</h3>
                <p className="text-dark-gray font-body mb-6 leading-relaxed">{product.description}</p>
                <a 
                    href="#contacto" 
                    className="inline-flex items-center justify-center px-6 py-2 border-2 border-brick-red text-brick-red font-semibold rounded-full hover:bg-brick-red hover:text-white transition-all duration-300 group-hover:shadow-md"
                >
                    Más Información
                    <svg className="w-4 h-4 ml-2 group-hover:translate-x-1 transition-transform" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M14 5l7 7m0 0l-7 7m7-7H3" />
                    </svg>
                </a>
            </div>
        </motion.div>
    );
};

export default ProductCard;
