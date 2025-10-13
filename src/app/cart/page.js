"use client";

import CartItem from "../../components/CartItem";
import { useCart } from "../../context/CartContext";
import Link from "next/link";

export default function CartPage() {
	const { cartItems, removeItem } = useCart();
	// Calculate subtotal
	const subtotal = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
	return (
		<section className="my-8">
			<h1 className="text-2xl font-bold mb-4">Shopping Cart</h1>
			{cartItems.length === 0 ? (
				<p>Your cart is empty.</p>
			) : (
				<>
					<div className="space-y-4">
						{cartItems.map((item) => (
							<CartItem key={item.id} item={item} onRemove={removeItem} />
						))}
					</div>
					<div className="mt-6 flex justify-between items-center">
						<span className="font-bold">Subtotal: ${subtotal.toFixed(2)}</span>
						<Link href="/checkout" className="btn btn-primary">
							Checkout
						</Link>
					</div>
				</>
			)}
		</section>
	);
}
