import HeroBanner from "../components/HeroBanner";
import ProductList from "../components/ProductList";
import products from "../data/products";

export default function Home() {
	// For demo, show first 4 as featured
	const featured = products.slice(0, 4);
	return (
		<>
			<HeroBanner />
			<section className="my-8">
				<h2 className="text-2xl font-bold mb-4">Featured Products</h2>
				<ProductList products={featured} />
			</section>
		</>
	);
}
