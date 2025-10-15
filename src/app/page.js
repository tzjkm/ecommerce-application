// Import the hero banner displayed at the top of the homepage
import HeroBanner from "../components/HeroBanner";
// Import a reusable list component that renders a grid of ProductCard components
import ProductList from "../components/ProductList";
// Import mock product data (can be swapped with real API data later)
import products from "../data/products";

// The homepage renders a hero section and a featured products grid
export default function Home() {
	// Select the first 4 products as "featured" for this demo
	const featured = products.slice(0, 4);
	return (
		<>
			{/* Promotional hero section with CTA */}
			<HeroBanner />
			{/* Featured products section */}
			<section className="my-12">
				<h2 className="mb-6 text-2xl font-bold tracking-tight text-gray-900">Featured Products</h2>
				<div className="card p-4">
					{/* Card container with padding */}
					{/* Render the product grid using the shared ProductList component */}
					<ProductList products={featured} />
				</div>
			</section>
		</>
	);
}
