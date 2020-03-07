# Nextjs with Preact X!
A starter template for using Next.js with Preact X!

## This starter is ready to be here:
```bash
git clone https://github.com/aomkirby123/nextjs-preactX
```

# Recommendation
This repo is what I believe to be the very first repo for using Next.js with Preact as a guide.
By the time so far, it works great and still! As one of Preact's creator created a starter repo about using Preact with Next.js himself! I'd recommended considering about using [his starter template](https://github.com/developit/nextjs-preact-demo) instead!

## To migrate from existing project
We need to add next.js and preact

```bash
yarn add next preact preact-render-to-string preact-ssr-prepass
yarn add react react-dom --dev

// or using npm
npm install next preact preact-render-to-string preact-ssr-prepass
npm-install react react-dom --save-dev
```
### Wait, why do we add React here?
Next.js require `React` and `React DOM` to run, so we'll use a little trick.

Create next.config.js at the same level of package.json and add:
```javascript
// next.config.js
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
```
By aliasing React and React DOM to Preact/compat in Preact X does provided all the job.
## That's it, You're done!

Now you can perfectly import anything from 'react' and next will just use Preact instead!