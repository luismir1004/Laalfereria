import { features } from '../data/content';
import { motion } from 'framer-motion'; // Suggesting framer-motion as requested, but using basic CSS transitions for animation

const Features = () => {
    // For more advanced animations, uncomment the motion.div and motion.h2 wrappers
    // and ensure framer-motion is installed and configured.
    // For this implementation, we rely on basic Tailwind transitions.

    return (
        <section id="especificaciones" className="py-20 bg-cement-gray text-charcoal-black">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center font-heading mb-12">
                    Especificaciones Técnicas Superiores
                </h2>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {features.map((feature, index) => {
                        const Icon = feature.icon; // Lucide icon component
                        return (
                            <div 
                                key={index} 
                                className="bg-light-gray p-8 rounded-lg shadow-lg text-center flex flex-col items-center hover:shadow-xl transition-all duration-300"
                            >
                                <div className="p-4 bg-brick-red rounded-full text-white mb-6">
                                    <Icon size={48} />
                                </div>
                                <h3 className="text-xl font-semibold font-heading mb-3">{feature.title}</h3>
                                <p className="text-dark-gray font-body">{feature.description}</p>
                            </div>
                        );
                    })}
                </div>
            </div>
        </section>
    );
};

export default Features;
