# Nextjs with Preact X!
A starter template for using Next.js with Preact X!
  
### How this work
Next.js require `React` and `React DOM` to run.
  
First, we need `module-alias` to 'alias' `React` and `React DOM` to `Preact`, this will trick Next.js to import Preact instead of React.  
To Alias we need to add this to package.json:
```bash
    "_moduleAliases": {
    "react": "node_modules/preact/compat",
    "react-dom": "node_modules/preact/compat",
    "react-ssr-prepass": "node_modules/preact-ssr-prepass"
  }
```
and we need to alias a custom server, add this to top of server.js:
```javascript
require('module-alias/register')
```
  
On `Preact X`, `preact-compat` come with `Preact` in `preact/compat` directory, so we defined `preact-compat` to `preact/compat`.  
You might notice that we also alias `react-ssr-prepass` to `preact-ssr-prepass`.
  
Although, this is enought for running `dev server` and `production server`, but it won't build since we only Next.js require React.
Now we add React and React DOM to `dev-depencies`, this'll trick Next.js that have React, since Next.js require React and React DOM.
  
The reason we need to use custom server is: to ensure that module does alias to Preact correctly, otherwise and are just using React.
  
### Is ready to be here:
```bash
git clone https://github.com/aomkirby123/nextjs-preactX
```