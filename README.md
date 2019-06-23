# Nextjs with Preact X!
A starter template for using Next.js with Preact X!

## This starter is ready to be here:
```bash
git clone https://github.com/aomkirby123/nextjs-preactX
```

## To migrate from existed project
We need to add next.js and preact

```bash
yarn add next preact@10 preact-render-to-string preact-ssr-prepass module-alias
yarn add react react-dom --dev
  
// or using npm
npm install next preact@10 preact-render-to-string preact-ssr-prepass module-alias
npm-install react react-dom --save-dev
```

### Wait, why do we add React here?
Next.js require `React` and `React DOM` to run, so we'll use a little trick.
  
### Alias React to Preact
First, we need `module-alias` to 'alias' `React` and `React DOM` to `Preact`, this will trick Next.js to import Preact instead of React since Next.js required React (but we don't actually use them).  
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

##### That's it, You're done!

### Wait, what is the meaning of this?
On `Preact X`, `preact-compat` come with `Preact` in `preact/compat` directory, so we defined `preact-compat` to `preact/compat`.  
You might notice that we also alias `react-ssr-prepass` to `preact-ssr-prepass`.
  
The `_moduleAliases` trick an import from react to preact.
  
Although, this is enough for running a `dev server` and `production server`, but it couldn't be built since Next.js does require React.
Now we add React and React DOM to `dev-dependencies`, this will trick Next.js that we use React (but we actually doesn't use it), since Next.js required React and React DOM, but can only be alias on a custom server.
  
The reason we need to use custom server is: to ensure that module does alias to Preact correctly otherwise, we are just using React.
