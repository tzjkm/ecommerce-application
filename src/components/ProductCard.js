"use client"; // Client component: interactive button uses hooks
import React from "react";
import { useCart } from "../context/CartContext"; // Add to cart action
import { formatPrice } from "../utils/formatPrice"; // Format price neatly
import SafeImage from "./SafeImage"; // Image with graceful fallback

const ProductCard = ({ product }) => {
	const { addItem } = useCart(); // Access cart action from context

	// Add the product to the cart with default quantity of 1
	const handleAddToCart = () => {
		addItem(product);
	};

	return (
		// Card container with hover elevation
		<div className="card group overflow-hidden transition-shadow hover:shadow-lg">
			{/* Image area with 4:3 aspect ratio */}
			<div className="aspect-[4/3] overflow-hidden bg-gray-50">
				<SafeImage
					src={product.image}
					alt={product.title}
					className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
					fallback="/images/product-placeholder.png"
				/>
			</div>
			{/* Details and add-to-cart action */}
			<div className="p-4">
				<h2 className="line-clamp-2 text-base font-semibold text-gray-900">{product.title}</h2>
				<p className="mt-1 font-bold text-brand-700">{formatPrice(product.price)}</p>
				<button onClick={handleAddToCart} className="btn btn-primary mt-4 w-full">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard; // Named default export for straightforward imports
