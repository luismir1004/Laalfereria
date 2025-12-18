const ProductCard = ({ product }) => {
    return (
        <div className="bg-white rounded-lg shadow-xl overflow-hidden group"> {/* Increased shadow */}
            <div className="overflow-hidden h-72 border-b border-gray-200"> {/* Increased height, added bottom border */}
                <img 
                    src={product.image} 
                    alt={product.name} 
                    loading="lazy"
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500 rounded-t-lg" // Added rounded-t-lg
                />
            </div>
            <div className="p-6 text-center">
                <h3 className="text-xl font-semibold font-heading mb-2">{product.name}</h3>
                <p className="text-dark-gray font-body">{product.description}</p>
                <a href="#contacto" className="mt-4 inline-block text-brick-red hover:text-charcoal-black transition-colors duration-300 font-body font-semibold">
                    Más Información &rarr;
                </a>
            </div>
        </div>
    );
};

export default ProductCard;
