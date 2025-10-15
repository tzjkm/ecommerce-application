// Simple footer shown on every page
export default function Footer() {
	return (
		<footer className="mt-12 border-t border-gray-200 bg-white">
			{/* Container centers content and sets horizontal padding */}
			<div className="container mx-auto px-4 py-8 text-center text-sm text-gray-600">
				{/* Current year is generated dynamically */}© {new Date().getFullYear()} Ecommerce shop.
			</div>
		</footer>
	);
}
