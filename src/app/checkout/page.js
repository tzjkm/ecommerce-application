export default function CheckoutPage() {
	return (
		<section className="my-8 max-w-lg mx-auto">
			<h1 className="text-2xl font-bold mb-4">Checkout</h1>
			<form className="space-y-4">
				<div>
					<label className="block mb-1 font-medium">Shipping Address</label>
					<input type="text" className="input input-bordered w-full" placeholder="123 Main St" required />
				</div>
				<div>
					<label className="block mb-1 font-medium">Payment Info</label>
					<input type="text" className="input input-bordered w-full" placeholder="Card Number" required />
				</div>
				<button type="submit" className="btn btn-primary w-full">
					Place Order
				</button>
			</form>
		</section>
	);
}
