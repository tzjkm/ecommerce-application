"use client";
import React, { useContext } from "react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";
import SafeImage from "./SafeImage";

const ProductCard = ({ product }) => {
	const { addItem } = useCart();

	const handleAddToCart = () => {
		addItem(product);
	};

	return (
		<div className="card group overflow-hidden transition-shadow hover:shadow-lg">
			<div className="aspect-[4/3] overflow-hidden bg-gray-50">
				<SafeImage
					src={product.image}
					alt={product.title}
					className="h-full w-full object-cover transition-transform duration-300 group-hover:scale-[1.03]"
					fallback="/images/product-placeholder.png"
				/>
			</div>
			<div className="p-4">
				<h2 className="line-clamp-2 text-base font-semibold text-gray-900">{product.title}</h2>
				<p className="mt-1 text-brand-700 font-bold">{formatPrice(product.price)}</p>
				<button onClick={handleAddToCart} className="btn btn-primary mt-4 w-full">
					Add to Cart
				</button>
			</div>
		</div>
	);
};

export default ProductCard;
