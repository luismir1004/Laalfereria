import { products } from '../data/content';
import ProductCard from './ProductCard';

const ProductGrid = () => {
    return (
        <section id="catalogo" className="py-20">
            <div className="container mx-auto px-6">
                <h2 className="text-3xl md:text-4xl font-bold text-center text-wood mb-12">Nuestro Catálogo</h2>
                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.name} product={product} />
                    ))}
                </div>
            </div>
        </section>
    );
};

export default ProductGrid;
