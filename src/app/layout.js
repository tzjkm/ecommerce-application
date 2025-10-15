// Import the global Tailwind CSS file so styles are available application-wide
import "../styles/globals.css"; // Includes Tailwind directives and any global styles

// Import shared layout components that appear on every page
import Header from "../components/Header"; // Top navigation bar with links and cart badge
import Footer from "../components/Footer"; // Footer with site credits

// Load a Google font using Next.js font optimization (reduces layout shift and optimizes loading)
import { Inter } from "next/font/google";

// Provide a global cart state using React Context so any component can access cart data
import { CartProvider } from "../context/CartContext";

// Configure default metadata for the entire app (title/description)
export const metadata = {
	// Default document title for the site
	title: "Ecommerce shop eCommerce Store",
	// Description used by search engines and social media previews
	description: "A modern eCommerce frontend built with Ecommerce shop, TailwindCSS, and React Context API.",
};

// Initialize the Inter font and expose a CSS variable we can apply on the <body>
const inter = Inter({ subsets: ["latin"], variable: "--font-inter" });

// Root layout wraps every page in shared UI and providers
export default function RootLayout({ children }) {
	// The App Router requires this component to return the HTML structure
	return (
		<html lang="en">
			{/* Sets the document language for accessibility and SEO */}
			<body className={`${inter.variable} font-sans bg-gray-50 min-h-screen flex flex-col`}>
				{/* CartProvider exposes cart state/actions to all nested components */}
				<CartProvider>
					{/* Persistent site header (logo, nav links, cart badge) */}
					<Header />
					{/* Main content area grows to fill vertical space between header and footer */}
					<main className="flex-1 container mx-auto px-4 py-6">{children}</main>
					{/* Persistent site footer */}
					<Footer />
				</CartProvider>
			</body>
		</html>
	);
}
