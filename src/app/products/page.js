import ProductList from "../../components/ProductList"; // Grid of product cards
import products from "../../data/products"; // Mock data source (can replace with API)

// Products index page displays all products
export default function ProductsPage() {
	return (
		<section className="my-12">
			<h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">All Products</h1>
			{/* Render the full product list */}
			<ProductList products={products} />
		</section>
	);
}
