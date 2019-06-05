# Víctor Navarro

This repo holds my [dev portfolio](https://vicnala.github.io/portfolio).

## Dev notes

Unbox drizzle
```bash
truffle unbox drizzle
# update packages
npm install react react-dom
npm audit  # Run  npm install react-scripts@3.0.1  to resolve 68 vulnerabilities
npm install react-scripts@3.0.1
```

SASS
```bash
npm install node-sass
npm install @fortawesome/react-fontawesome @fortawesome/fontawesome-svg-core \
  @fortawesome/free-solid-svg-icons @fortawesome/free-brands-svg-icons
touch .env
```
.env
```
SASS_PATH=node_modules:src
```

## Use Web3 drizzle context

Init the context using the React Context API:
https://github.com/trufflesuite/drizzle-react#using-the-react-context-api-for-react-v163

Make use of the "loading" recipe to show network connection and accounts:
https://github.com/trufflesuite/drizzle-react#recipe-loading-component

## Publish to github pages

Add homepage and deploy scripts to package.json:
```json
{
  "homepage": "https://vicnala.github.io/portfolio",
  "scripts":{
   "predeploy": "npm run build",
   "deploy": "gh-pages -d build",
  }
}
```

Install gh-pages:
```
npm install --save gh-pages
```

## License

MIT © Víctor Navarro.
