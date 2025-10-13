"use client";
import React, { useContext } from "react";
import Link from "next/link";
import { useCart } from "../context/CartContext";

const Header = () => {
	const { cartItems } = useCart();

	return (
		<header className="bg-gray-800 text-white p-4">
			<div className="container mx-auto flex justify-between items-center">
				<Link href="/" className="text-2xl font-bold">
					Logo
				</Link>
				<nav className="space-x-4">
					<Link href="/" className="hover:text-gray-400">
						Home
					</Link>
					<Link href="/products" className="hover:text-gray-400">
						Products
					</Link>
					<Link href="/cart" className="hover:text-gray-400">
						Cart ({cartItems.length})
					</Link>
				</nav>
			</div>
		</header>
	);
};

export default Header;
