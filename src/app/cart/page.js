"use client";

import CartItem from "../../components/CartItem";
import { useCart } from "../../context/CartContext";
import Link from "next/link";
import { formatPrice } from "../../utils/formatPrice";

export default function CartPage() {
	const { cartItems, removeItem } = useCart();
	// Calculate subtotal
	const subtotal = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
	return (
		<section className="my-12">
			<h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>
			{cartItems.length === 0 ? (
				<p className="text-gray-600">Your cart is empty.</p>
			) : (
				<div className="card p-6">
					<div className="space-y-4">
						{cartItems.map((item) => (
							<CartItem key={item.id} item={item} onRemove={removeItem} />
						))}
					</div>
					<div className="mt-6 flex items-center justify-between">
						<span className="text-lg font-bold">Subtotal: {formatPrice(subtotal)}</span>
						<Link href="/checkout" className="btn btn-primary">
							Checkout
						</Link>
					</div>
				</div>
			)}
		</section>
	);
}
