"use client"; // Uses React state, must be a Client Component
import React, { useState } from "react";

// Image component that replaces broken images with a fallback placeholder
export default function SafeImage({ src, alt, className = "", fallback = "/images/product-placeholder.png" }) {
	// Track which src is currently in use (original or fallback)
	const [currentSrc, setCurrentSrc] = useState(src);
	return (
		<img
			src={currentSrc} // Display the active image source
			alt={alt} // Accessible alternative text
			className={className} // Allow caller to pass custom styles
			onError={() => {
				// If the original fails to load, switch to the fallback image
				if (currentSrc !== fallback) setCurrentSrc(fallback);
			}}
		/>
	);
}
