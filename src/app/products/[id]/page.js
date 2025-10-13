import ProductCard from "../../../components/ProductCard";
import products from "../../../data/products";
import { notFound } from "next/navigation";

export default function ProductDetailPage({ params }) {
	const product = products.find((p) => p.id.toString() === params.id);
	if (!product) return notFound();
	return (
		<div className="my-8">
			<ProductCard product={product} detailed />
		</div>
	);
}
