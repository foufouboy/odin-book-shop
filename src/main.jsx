import React from 'react'
import ReactDOM from 'react-dom/client'
import Router from './Routes'
import GlobalStyles from './styles/Global'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <GlobalStyles/>
    <Router/>
  </React.StrictMode>,
)
