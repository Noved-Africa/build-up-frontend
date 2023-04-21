/** @type {import('next').NextConfig} */
const nextConfig = {
	reactStrictMode: true,
	images: {
		domains: ["images.unsplash.com", "unsplash.com","images.pexels.com","www.pexels.com"],
	},
};

const withVideos = require('next-videos')

module.exports = withVideos()

module.exports = nextConfig