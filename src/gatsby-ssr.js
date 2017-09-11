import React from 'react'
import { renderToString } from 'react-dom/server'
import { JssProvider, SheetsRegistry } from 'react-jss'
import { create } from 'jss'
import preset from 'jss-preset-default'
import { MuiThemeProvider } from 'material-ui/styles'
import createGenerateClassName from 'material-ui/styles/createGenerateClassName'
import theme from './.cache/theme' // eslint-disable-line

exports.replaceRenderer = ({
  bodyComponent,
  replaceBodyHTMLString,
  setHeadComponents,
}) => {
  const sheets = new SheetsRegistry()
  const jss = create(preset())
  jss.options.createGenerateClassName = createGenerateClassName
  const bodyHTML = renderToString(
    <JssProvider registry={sheets} jss={jss}>
      <MuiThemeProvider theme={theme} sheetsManager={new Map()}>
        {bodyComponent}
      </MuiThemeProvider>
    </JssProvider>
  )

  replaceBodyHTMLString(bodyHTML)
  setHeadComponents([
    <style
      type="text/css"
      id="server-side-jss"
      key="server-side-jss"
      dangerouslySetInnerHTML={{ __html: sheets.toString() }}
    />,
  ])
}
