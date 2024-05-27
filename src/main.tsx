import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'
import "./App.css"
import { GlobalStyle } from './app/components/Global/globalStyle.ts'

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <GlobalStyle/>
    <App/>
  </React.StrictMode>,
)
