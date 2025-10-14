"use client";
import React from "react";
import { useCart } from "../context/CartContext";

export default function AddToCartButton({ product, className = "" }) {
	const { addItem } = useCart();
	return (
		<button className={`btn btn-primary ${className}`} onClick={() => addItem(product)}>
			Add to Cart
		</button>
	);
}
