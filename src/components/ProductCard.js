"use client";
import React, { useContext } from "react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";

const ProductCard = ({ product }) => {
	const { addItem } = useCart();

	const handleAddToCart = () => {
		addItem(product);
	};

	return (
		<div className="border rounded-lg overflow-hidden shadow-lg p-4">
			<img src={product.image} alt={product.title} className="w-full h-48 object-cover" />
			<h2 className="text-lg font-semibold mt-2">{product.title}</h2>
			<p className="text-gray-700">{formatPrice(product.price)}</p>
			<button
				onClick={handleAddToCart}
				className="mt-4 bg-blue-500 text-white py-2 px-4 rounded hover:bg-blue-600"
			>
				Add to Cart
			</button>
		</div>
	);
};

export default ProductCard;
