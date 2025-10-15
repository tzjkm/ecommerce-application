import SafeImage from "./SafeImage"; // Image component with graceful fallback

// Promotional hero banner with headline, subtext, and call-to-action
export default function HeroBanner() {
	return (
		<section className="relative mb-10 overflow-hidden rounded-2xl bg-gradient-to-r from-brand-600 via-indigo-600 to-purple-600 text-white shadow-card">
			{/* Two-column layout: text on the left, image on the right */}
			<div className="container mx-auto flex items-center justify-between gap-8 px-4 py-16 md:flex-row md:px-8">
				{/* Headline and CTA */}
				<div className="md:w-1/2">
					<h1 className="mb-4 text-4xl font-extrabold leading-tight md:text-5xl">Discover Modern Shopping</h1>
					<p className="mb-8 text-lg/7 opacity-90 md:text-xl/8">
						Shop the latest products with fast delivery and secure checkout. Experience a seamless,
						responsive Ecommerce shop.
					</p>
					<a href="/products" className="btn btn-primary">
						{/* Primary action button */}
						Shop Now
					</a>
				</div>
				{/* Illustrative image with fallback to placeholder */}
				<div className="md:w-1/2">
					<SafeImage
						src="/hero-banner.png"
						alt="Hero Banner"
						className="mx-auto h-64 w-64 object-contain drop-shadow-2xl md:h-80 md:w-80"
						fallback="/images/product-placeholder.png"
					/>
				</div>
			</div>
		</section>
	);
}
