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
})