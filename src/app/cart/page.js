"use client"; // Client component because it uses hooks and browser APIs

import CartItem from "../../components/CartItem"; // Displays individual cart item row
import { useCart } from "../../context/CartContext"; // Access cart state/actions
import Link from "next/link"; // Client-side navigation
import { formatPrice } from "../../utils/formatPrice"; // Format subtotal as currency

export default function CartPage() {
	// Pull current cart items and remove action from context
	const { cartItems, removeItem } = useCart();
	// Calculate subtotal of all items (price * quantity)
	const subtotal = cartItems.reduce((sum, item) => sum + item.price * (item.quantity || 1), 0);
	return (
		<section className="my-12">
			<h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Shopping Cart</h1>
			{cartItems.length === 0 ? (
				// Empty state when there are no items in the cart
				<p className="text-gray-600">Your cart is empty.</p>
			) : (
				<div className="card p-6">
					{/* List of cart items */}
					<div className="space-y-4">
						{cartItems.map((item) => (
							<CartItem key={item.id} item={item} onRemove={removeItem} />
						))}
					</div>
					{/* Subtotal and checkout action */}
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
