export default function Footer() {
	return (
		<footer className="mt-12 border-t border-gray-200 bg-white">
			<div className="container mx-auto px-4 py-8 text-center text-sm text-gray-600">
				© {new Date().getFullYear()} NextShop. All rights reserved.
			</div>
		</footer>
	);
}
