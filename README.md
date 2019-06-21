# Nextjs with Preact X!
A starter template for using Next.js with Preact X!
  
### How this work
Next.js require `React` and `React DOM` to run, so we'll use a little trick.
  
First, we need `module-alias` to 'alias' `React` and `React DOM` to `Preact`, this will trick Next.js to import Preact instead of React since Next.js required React (but we won't use them).  
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
  
Although, this is enough for running a `dev server` and `production server`, but it couldn't be built since, Next.js does require React.
Now we add React and React DOM to `dev-depencies`, this'll trick Next.js that we use React (but we actually doesn't use it), since Next.js require React and React DOM, but can only be alias on custom server.
  
The reason we need to use custom server is: to ensure that module does alias to Preact correctly otherwise, we are just using React.
  
### Is ready to be here:
```bash
git clone https://github.com/aomkirby123/nextjs-preactX
```
