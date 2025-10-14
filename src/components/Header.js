"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const Header = () => {
	const { cartItems } = useCart();

	return (
		<header className="sticky top-0 z-40 border-b border-gray-200 bg-white/80 backdrop-blur">
			<div className="container mx-auto flex h-16 items-center justify-between px-4">
				<Link href="/" className="text-xl font-extrabold tracking-tight text-gray-900">
					NextShop
				</Link>
				<nav className="flex items-center gap-6 text-sm font-medium">
					<Link href="/" className="text-gray-700 hover:text-gray-900">
						Home
					</Link>
					<Link href="/products" className="text-gray-700 hover:text-gray-900">
						Products
					</Link>
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
