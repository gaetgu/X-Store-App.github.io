module.exports = {
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
				source: '/blog/graviton2_changes/graviton2_changes',
				destination: '/blog/graviton2_changes',
				permanent: true,
			},
			{
				source: '/blog/blog/graviton_remake/remake/',
				destination: '/blog/graviton_remake',
				permanent: true,
			},
			{
				source: '/blog/blog/website_revamp/website_revamp/',
				destination: '/blog/website_revamp',
				permanent: true,
			},
		]
	},
}