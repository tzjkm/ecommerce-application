import React from "react";
import ProductCard from "./ProductCard"; // Individual product tile component

// Render a responsive grid of ProductCard components
const ProductList = ({ products = [] }) => {
	return (
		// Define a CSS grid that adapts to screen size (1-4 columns)
		<div className="grid grid-cols-1 gap-6 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4">
			{/* Map through the product array and render a ProductCard for each item */}
			{products.map((product) => (
				<ProductCard key={product.id} product={product} />
			))}
		</div>
	);
};

export default ProductList; // Default export for easy import elsewhere
