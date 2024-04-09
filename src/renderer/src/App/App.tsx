import './App.css'

import { FluentProvider } from '@fluentui/react-components'

import { Router } from './Router.js'
import { gitRulesTheme } from './theme/theme.js'

export const App = function App() {
  return (
    <FluentProvider theme={gitRulesTheme} id="fluent-provider">
      <Router />
    </FluentProvider>
  )
}
