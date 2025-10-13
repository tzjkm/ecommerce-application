const isProd = process.env.NODE_ENV === "production";

/** @type {import('next').NextConfig} */
const nextConfig = {
	output: "export",
	basePath: isProd ? "/ecommerce-application" : "",
	assetPrefix: isProd ? "/ecommerce-applicaton/" : "",
};

module.exports = nextConfig;
