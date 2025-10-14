export default function ContactPage() {
	return (
		<section className="my-12 mx-auto max-w-2xl">
			<h1 className="mb-6 text-3xl font-bold tracking-tight text-gray-900">Contact Us</h1>
			<form className="card space-y-5 p-6">
				<div>
					<label className="mb-1 block text-sm font-medium text-gray-700">Your Name</label>
					<input type="text" className="input" required />
				</div>
				<div>
					<label className="mb-1 block text-sm font-medium text-gray-700">Email</label>
					<input type="email" className="input" required />
				</div>
				<div>
					<label className="mb-1 block text-sm font-medium text-gray-700">Message</label>
					<textarea className="input" rows="4" required></textarea>
				</div>
				<button type="submit" className="btn btn-primary w-full">
					Send Message
				</button>
			</form>
		</section>
	);
}
