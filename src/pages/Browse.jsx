import ProductCard from '../components/ProductCard';
import { products } from '../data/products';

export default function Browse() {
    return (
        <div className="py-12">
            <div className="max-w-7xl mx-auto px-6">
                <h1 className="text-4xl font-bold mb-10">Shop Collection</h1>
                <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
                    {products.map((product) => (
                        <ProductCard key={product.id} product={product} />
                    ))}
                </div>
            </div>
        </div>
    );
}
