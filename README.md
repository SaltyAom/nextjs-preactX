# Nextjs with Preact X!
A starter template for using Next.js with Preact X!

## This starter is ready to be here:
```bash
git clone https://github.com/aomkirby123/nextjs-preactX
```

## To migrate from existed project
We need to add next.js and preact

```bash
yarn add next preact@10 preact-render-to-string@next preact-ssr-prepass module-alias
yarn add react react-dom --dev

// or using npm
npm install next preact@10 preact-render-to-string@next preact-ssr-prepass module-alias
npm-install react react-dom --save-dev
```
###### Note: The lastest preact-render-to-string is version 4 which doesn't support Preact X while preact-render-to-string version 5 supports Preact X but is on the tags of 'next', so we specifiy the version here.
###### Otherwise, SSR result will be `undefined`.

### Wait, why do we add React here?
Next.js require `React` and `React DOM` to run, so we'll use a little trick.

Now create next.config.js as same level as package.json and add:
```javascript
// next.config.js
const withPreact = (nextConfig = {}) => {
	return Object.assign({}, nextConfig, {
		webpack(config, options) {
			if (!options.defaultLoaders) {
				throw new Error(
				"This plugin is not compatible with Next.js versions below 5.0.0 https://err.sh/next-plugins/upgrade"
				)
			}

			if (options.isServer) {
				config.externals = ["react", "react-dom", ...config.externals]
			}

			config.resolve.alias = Object.assign({}, config.resolve.alias, {
				react: "preact/compat",
				react$: "preact/compat",
				"react-dom": "preact/compat",
				"react-dom$": "preact/compat"
			})

			if (typeof nextConfig.webpack === "function") {
				return nextConfig.webpack(config, options)
			}

			return config
		}
	})
}

module.exports = withPreact()
```
    
## That's it, You're done!

### Wait, what is happening here?
  
#### Aliasing React to Preact
Next.js require `React` and `React DOM` to be installed to run `Next` but since we want to use Preact instead, we add `Preact` then we add `React` and `React DOM` as `dev dependencies`.
This make sure that the build process will NOT bundle React and React DOM.
  
Now we need to alias `React` and `React DOM` to `Preact` instead.
  
#### next.config.js
Nextjs provided `next.config.js` to customize the environment and loader which we can alias React and React DOM to Preact here.
  
The previous code will alias `React` and `React DOM` to `Preact` and since Preact X, `preact-compat` is now moved to core as `preact/compat`.
  
### Custom server with Preact
##### Note: This is require if you want to use a custom server with Next.js. With default with next.js next.config.js is enough.
We need `module-alias` to 'alias' `React` and `React DOM` to `Preact`, this will trick Next.js to import Preact instead of React on server since Next.js required React (but we don't actually use them).
Now, to alias we need to add this to package.json:
```bash
"_moduleAliases": {
    "react": "node_modules/preact/compat",
    "react-dom": "node_modules/preact/compat",
    "react-ssr-prepass": "node_modules/preact-ssr-prepass"
  }
```
and we also need to alias a custom server. Add this to top of server.js:
```javascript
require('module-alias/register')
```

### Wait, what is the meaning of this?
On `Preact X`, `preact-compat` come with `Preact` in `preact/compat` directory, so we defined `preact-compat` to `preact/compat`.
You might notice that we also alias `react-ssr-prepass` to `preact-ssr-prepass`.

The `_moduleAliases` trick an import from react to preact.

Although, this is enough for running a `dev server` and `production server`, but it couldn't be built since Next.js does require React.
Now we add React and React DOM to `dev-dependencies`, this will trick Next.js that we use React (but we actually doesn't use it), since Next.js required React and React DOM, but can only be alias on a custom server.

The reason we need to use custom server is: to ensure that module does alias to Preact correctly otherwise, we are just using React.