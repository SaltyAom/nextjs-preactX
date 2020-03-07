module.exports = {
	webpack(config){
		config.resolve.alias = {
			...config.resolve.alias,
			react: 'preact/compat',
			'react-dom': 'preact/compat',
			'react-render-to-string': 'preact-render-to-string',
			'react-ssr-prepass': 'preact-ssr-prepass'
		}

		return config
	}
}