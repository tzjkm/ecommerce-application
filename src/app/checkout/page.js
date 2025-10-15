// Frontend-only checkout page showing sample shipping & payment fields
export default function CheckoutPage() {
	return (
		<section className="my-12 mx-auto max-w-lg">
			<h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Checkout</h1>
			{/* Pretend checkout form; no backend submission in this demo */}
			<form className="card space-y-5 p-6">
				<div>
					<label className="mb-1 block text-sm font-medium text-gray-700">Shipping Address</label>
					<input type="text" className="input" placeholder="123 Main St" required />
				</div>
				<div>
					<label className="mb-1 block text-sm font-medium text-gray-700">Payment Info</label>
					<input type="text" className="input" placeholder="Card Number" required />
				</div>
				<button type="submit" className="btn btn-primary w-full">
					Place Order
				</button>
			</form>
		</section>
	);
}
