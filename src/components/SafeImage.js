"use client";
import React, { useState } from "react";

export default function SafeImage({ src, alt, className = "", fallback = "/images/product-placeholder.png" }) {
	const [currentSrc, setCurrentSrc] = useState(src);
	return (
		<img
			src={currentSrc}
			alt={alt}
			className={className}
			onError={() => {
				if (currentSrc !== fallback) setCurrentSrc(fallback);
			}}
		/>
	);
}
