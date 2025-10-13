export default function HeroBanner() {
	return (
		<section className="relative bg-gradient-to-r from-blue-500 to-indigo-600 text-white py-16 rounded-xl shadow-lg overflow-hidden mb-8">
			<div className="container mx-auto px-4 flex flex-col md:flex-row items-center justify-between">
				<div className="mb-8 md:mb-0 md:w-1/2">
					<h1 className="text-4xl md:text-5xl font-extrabold mb-4">Discover Modern Shopping</h1>
					<p className="text-lg md:text-xl mb-6">
						Shop the latest products with fast delivery and secure checkout. Experience a seamless,
						responsive eCommerce demo built with Next.js and TailwindCSS.
					</p>
					<a
						href="/products"
						className="inline-block bg-white text-blue-600 font-semibold px-6 py-3 rounded-lg shadow hover:bg-blue-50 transition"
					>
						Shop Now
					</a>
				</div>
				<div className="md:w-1/2 flex justify-center">
					<img src="/hero-banner.png" alt="Hero Banner" className="w-64 h-64 object-contain drop-shadow-xl" />
				</div>
			</div>
		</section>
	);
}
