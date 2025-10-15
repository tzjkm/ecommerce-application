"use client"; // Mark as a Client Component to use hooks and interactivity
import React from "react";
import Link from "next/link"; // Client-side navigation for faster transitions
import { useCart } from "../context/CartContext"; // Access global cart state

const Header = () => {
	// Extract current cart items to show a live item count badge
	const { cartItems } = useCart();

	return (
		// Sticky header with subtle backdrop blur and bottom border
		<header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				{/* Logo linking back to the homepage */}
				<Link href="/" className="text-xl font-extrabold tracking-tight text-gray-900">
					Ecommerce shop
				</Link>
				{/* Primary navigation links */}
				<nav className="flex items-center gap-6 text-sm font-medium">
					<Link href="/" className="text-gray-700 hover:text-gray-900">
						Home
					</Link>
					<Link href="/products" className="text-gray-700 hover:text-gray-900">
						Products
					</Link>
					{/* Cart link with dynamic item count badge */}
					<Link href="/cart" className="relative inline-flex items-center text-gray-700 hover:text-gray-900">
						<span>Cart</span>
						{cartItems.length > 0 && (
							<span className="ml-1 inline-flex h-5 min-w-[1.25rem] items-center justify-center rounded-full bg-brand-600 px-1 text-xs font-bold text-white">
								{cartItems.length}
							</span>
						)}
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
