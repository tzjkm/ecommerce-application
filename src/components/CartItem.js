"use client";
import React from "react";
import { useCart } from "../context/CartContext";
import { formatPrice } from "../utils/formatPrice";

const CartItem = ({ item, onRemove }) => {
	const { updateItem } = useCart();

	const handleQuantityChange = (e) => {
		updateItem(item.id, parseInt(e.target.value));
	};

	return (
		<div className="flex items-center justify-between p-4 border-b">
			<img src={item.image} alt={item.title} className="w-20 h-20 object-cover" />
			<div className="flex-1 mx-4">
				<h2 className="text-lg font-semibold">{item.title}</h2>
				<p className="text-gray-600">{formatPrice(item.price)}</p>
				<input
					type="number"
					value={item.quantity}
					min="1"
					onChange={handleQuantityChange}
					className="w-16 border rounded"
				/>
			</div>
			<button onClick={() => onRemove(item.id)} className="text-red-500 hover:text-red-700">
				Remove
			</button>
		</div>
	);
};

export default CartItem;
