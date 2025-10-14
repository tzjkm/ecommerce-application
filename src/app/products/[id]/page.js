import products from "../../../data/products";
import { notFound } from "next/navigation";
import { formatPrice } from "../../../utils/formatPrice";
import AddToCartButton from "../../../components/AddToCartButton";
import SafeImage from "../../../components/SafeImage";

export default function ProductDetailPage({ params }) {
	const product = products.find((p) => p.id.toString() === params.id);
	if (!product) return notFound();
	return (
		<div className="my-12">
			<div className="card grid grid-cols-1 gap-8 p-6 md:grid-cols-2">
				<div className="aspect-square overflow-hidden rounded-lg bg-gray-50">
					<SafeImage
						src={product.image}
						alt={product.title}
						className="h-full w-full object-cover"
						fallback="/images/product-placeholder.png"
					/>
				</div>
				<div>
					<h1 className="text-3xl font-bold text-gray-900">{product.title}</h1>
					<p className="mt-3 text-lg text-gray-700">{product.description}</p>
					<p className="mt-4 text-2xl font-extrabold text-brand-700">{formatPrice(product.price)}</p>
					<AddToCartButton className="mt-6 w-full md:w-auto" product={product} />
				</div>
			</div>
		</div>
	);
}
