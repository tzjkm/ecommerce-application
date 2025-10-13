import ProductList from "../../components/ProductList";
import products from "../../data/products";

export default function ProductsPage() {
	return (
		<section className="my-8">
			<h1 className="text-2xl font-bold mb-4">All Products</h1>
			<ProductList products={products} />
		</section>
	);
}
