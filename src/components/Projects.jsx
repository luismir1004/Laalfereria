import { projects } from '../data/content';

const Projects = () => {
    return (
        <section id="proyectos" className="py-20 bg-light-gray text-charcoal-black">
            <div className="container mx-auto px-6">
                <h2 className="text-4xl font-bold text-center font-heading mb-12">
                    Proyectos Destacados
                </h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {projects.map((project, index) => (
                        <div key={index} className="bg-white rounded-lg shadow-lg overflow-hidden group">
                            <img
                                src={project.image}
                                alt={project.alt}
                                loading="lazy"
                                className="w-full h-64 object-cover group-hover:scale-105 transition-transform duration-500"
                            />
                            <div className="p-4 text-center">
                                <p className="text-lg font-body text-charcoal-black">{project.alt}</p>
                            </div>
                        </div>
                    ))}
                </div>
            </div>
        </section>
    );
};

export default Projects;
