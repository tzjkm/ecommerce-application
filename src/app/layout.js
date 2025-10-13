// import "../styles/globals.css";
import Header from "../components/Header";

import { CartProvider } from "../context/CartContext";

export const metadata = {
	title: "Next.js eCommerce Store",
	description: "A modern eCommerce frontend built with Next.js, TailwindCSS, and React Context API.",
};

export default function RootLayout({ children }) {
	return (
		<html lang="en">
			<body className="bg-gray-50 min-h-screen flex flex-col">
				<CartProvider>
					<Header />
					<main className="flex-1 container mx-auto px-4">{children}</main>
					{/* <Footer /> */}
				</CartProvider>
			</body>
		</html>
	);
}
