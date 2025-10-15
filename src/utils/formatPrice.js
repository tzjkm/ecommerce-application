// Format a numeric price into a localized currency string (USD)
export const formatPrice = (price) => {
	return new Intl.NumberFormat("en-US", {
		style: "currency",
		currency: "USD",
	}).format(price);
};
