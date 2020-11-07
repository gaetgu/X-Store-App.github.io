const withPlugins = require('next-compose-plugins');
const optimizedImages = require('next-optimized-images');

module.exports = withPlugins([
	[optimizedImages,{
		handleImages: ['jpeg', 'png', 'svg', 'webp', 'gif', 'ico'],
		optimizeImagesInDev: true
	}]
],{
	target: 'serverless',
	webpack: (config, { buildId, dev, isServer, defaultLoaders, webpack }) => {
		config.node = {
			fs: 'empty'
		}
		return config
	},
	async redirects() {
		return [
			{
				source: '/blog/xstore_changes/xstore_changes',
				destination: '/blog/xstore_changes',
				permanent: true,
			},
			{
				source: '/blog/blog/xstore_remake/remake/',
				destination: '/blog/xstore_remake',
				permanent: true,
			},
			{
				source: '/blog/blog/website_revamp/website_revamp/',
				destination: '/blog/website_revamp',
				permanent: true,
			},
			{
				source: '/app',
				destination: '/graviton/index.html',
				permanent: true,
			},
		]
	},
})