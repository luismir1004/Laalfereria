const About = () => {
    return (
        <section id="nosotros" className="bg-dark-cream py-20">
            <div className="container mx-auto px-6">
                <div className="flex flex-col md:flex-row items-center gap-12">
                    <div className="md:w-1/2">
                        <img 
                            src="https://images.unsplash.com/photo-1578783215-9496f8ce5a16?q=80&w=1974&auto=format&fit=crop" 
                            alt="Manos de alfarero moldeando barro"
                            loading="lazy"
                            className="rounded-lg shadow-xl w-full h-auto object-cover" 
                        />
                    </div>
                    <div className="md:w-1/2">
                        <h2 className="text-3xl md:text-4xl font-bold text-wood mb-6">Sobre La Margarita</h2>
                        <p className="text-lg text-wood/80 mb-4">
                            La Margarita nació de un amor profundo por la artesanía y la belleza de lo imperfecto. Cada pieza que sale de nuestro taller es un reflejo de horas de dedicación, moldeada a mano y cocida con cuidado para llevar calidez y arte a tu hogar.
                        </p>
                        <p className="text-lg text-wood/80">
                            Utilizamos técnicas tradicionales heredadas a través de generaciones, combinándolas con un diseño contemporáneo para crear objetos que son tanto funcionales como decorativos.
                        </p>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default About;
