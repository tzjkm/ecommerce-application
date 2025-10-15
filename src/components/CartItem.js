"use client"; // Interactive component (inputs and buttons)
import React from "react";
import { useCart } from "../context/CartContext"; // Update cart quantities
import { formatPrice } from "../utils/formatPrice"; // Currency formatting

const CartItem = ({ item, onRemove }) => {
	const { updateItem } = useCart();

	// Parse and update quantity when input changes
	const handleQuantityChange = (e) => {
		const next = Math.max(1, Number.parseInt(e.target.value || "1", 10));
		updateItem(item.id, next);
	};

	return (
		<div className="flex items-center gap-4 rounded-lg border border-gray-200 bg-white p-4 shadow-sm">
			<img src={item.image} alt={item.title} className="h-20 w-20 rounded object-cover" />
			<div className="flex-1">
				<h2 className="text-base font-semibold text-gray-900">{item.title}</h2>
				<p className="text-sm text-gray-600">{formatPrice(item.price)}</p>
			</div>
			<div className="flex items-center gap-3">
				<label className="text-sm text-gray-700" htmlFor={`qty-${item.id}`}>
					Qty
				</label>
				<input
					id={`qty-${item.id}`}
					type="number"
					value={item.quantity}
					min="1"
					onChange={handleQuantityChange}
					className="h-10 w-20 rounded-md border-gray-300 text-center focus:border-brand-600 focus:ring-brand-600"
				/>
				<button onClick={() => onRemove(item.id)} className="btn btn-secondary">
					Remove
				</button>
			</div>
		</div>
	);
};

export default CartItem; // Default export for convenience
