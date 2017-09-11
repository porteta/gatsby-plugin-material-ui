# gatsby-plugin-material-ui

Provide drop-in support for SSR using the material-ui library (v1-beta)

## Install

`npm install --save gatsby-plugin-material-ui`

## How to use
Define your material-ui theme.

```javascript
import createMuiTheme from 'material-ui/styles/createMuiTheme'

import purple from 'material-ui/colors/purple'
import green from 'material-ui/colors/green'
import red from 'material-ui/colors/red'

export default createMuiTheme({
  palette: {
    primary: purple,
    secondary: green,
    error: red,
  },
})

```

And add the plugin to your `gatsby-config.js`.

```javascript
{
  resolve: 'gatsby-plugin-material-ui',
  options: {
    pathToTheme: 'src/themes/default',
  },
},
```
