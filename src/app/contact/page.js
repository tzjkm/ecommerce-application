export default function ContactPage() {
	return (
		<section className="my-8 max-w-2xl mx-auto">
			<h1 className="text-2xl font-bold mb-4">Contact Us</h1>
			<form className="space-y-4">
				<div>
					<label className="block mb-1 font-medium">Your Name</label>
					<input type="text" className="input input-bordered w-full" required />
				</div>
				<div>
					<label className="block mb-1 font-medium">Email</label>
					<input type="email" className="input input-bordered w-full" required />
				</div>
				<div>
					<label className="block mb-1 font-medium">Message</label>
					<textarea className="input input-bordered w-full" rows="4" required></textarea>
				</div>
				<button type="submit" className="btn btn-primary w-full">
					Send Message
				</button>
			</form>
		</section>
	);
}
