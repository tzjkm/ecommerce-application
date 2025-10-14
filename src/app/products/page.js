import ProductList from "../../components/ProductList";
import products from "../../data/products";

export default function ProductsPage() {
	return (
		<section className="my-12">
			<h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">All Products</h1>
			<ProductList products={products} />
		</section>
	);
}
