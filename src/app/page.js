import HeroBanner from "../components/HeroBanner";
import ProductList from "../components/ProductList";
import products from "../data/products";

export default function Home() {
	// For demo, show first 4 as featured
	const featured = products.slice(0, 4);
	return (
		<>
			<HeroBanner />
			<section className="my-12">
				<h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">Featured Products</h2>
				<div className="card p-4">
					<ProductList products={featured} />
				</div>
			</section>
		</>
	);
}
