import { projects } from '../data/content';
import { motion } from 'framer-motion';

const Projects = () => {
    // Definir variantes para la animación escalonada (stagger)
    const containerVariants = {
        hidden: { opacity: 0 },
        visible: {
            opacity: 1,
            transition: {
                staggerChildren: 0.2
            }
        }
    };

    const itemVariants = {
        hidden: { opacity: 0, y: 30 }, // Menos desplazamiento vertical
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 1.2, ease: [0.22, 1, 0.36, 1] } // Curva de Bezier personalizada (muy suave)
        }
    };

    return (
        <section id="proyectos" className="py-32 bg-white text-charcoal-black overflow-hidden">
            <div className="container mx-auto px-6">
                <motion.div 
                    initial={{ opacity: 0, y: 20 }}
                    whileInView={{ opacity: 1, y: 0 }}
                    viewport={{ once: true }}
                    className="flex flex-col md:flex-row justify-between items-baseline mb-20 gap-8"
                >
                    <div className="relative">
                        <h2 className="text-4xl md:text-5xl font-light font-heading text-charcoal-black tracking-tight mb-2">
                            Proyectos Seleccionados
                        </h2>
                        <div className="h-px w-full max-w-[100px] bg-gray-300 mt-6"></div> {/* Línea decorativa minimalista */}
                    </div>
                    <p className="text-gray-400 font-light max-w-sm text-right md:text-left text-lg leading-relaxed">
                        Espacios que narran historias a través de la textura y la luz.
                    </p>
                </motion.div>

                <motion.div 
                    variants={containerVariants}
                    initial="hidden"
                    whileInView="visible"
                    viewport={{ once: true, margin: "-50px" }}
                    className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-10 auto-rows-[450px]"
                >
                    {projects.map((project, index) => (
                        <motion.div 
                            key={index} 
                            variants={itemVariants}
                            className={`group relative overflow-hidden rounded-xl cursor-pointer bg-gray-100 ${
                                index === 0 || index === 3 ? 'md:col-span-2' : ''
                            }`}
                        >
                            <img
                                src={project.image}
                                alt={project.alt}
                                loading="lazy"
                                className="w-full h-full object-cover transition-all duration-[1500ms] ease-out group-hover:scale-105 opacity-90 group-hover:opacity-100 grayscale-[15%] group-hover:grayscale-0"
                            />
                            
                            {/* Overlay ultra-sutil */}
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 via-transparent to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-700 flex flex-col justify-end p-10">
                                <motion.div 
                                    className="transform translate-y-4 group-hover:translate-y-0 transition-transform duration-700"
                                >
                                    <p className="text-white/70 font-medium text-xs tracking-[0.2em] uppercase mb-3">Residencial</p>
                                    <h3 className="text-2xl font-normal text-white mb-4 font-heading tracking-wide">{project.alt}</h3>
                                    <div className="inline-flex items-center text-white text-sm font-light tracking-wider border-b border-white/30 pb-1 hover:border-white transition-colors">
                                        Explorar
                                    </div>
                                </motion.div>
                            </div>
                        </motion.div>
                    ))}
                </motion.div>
            </div>
        </section>
    );
};

export default Projects;
