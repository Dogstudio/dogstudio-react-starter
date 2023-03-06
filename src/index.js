import React from 'react'
import ReactDOM from 'react-dom/client'

// Application
import App from './App'

// Locales
import 'locales'

// Utilities
import 'utils/say-hello'

// Global Styles
import 'styles/global'

// Resize
const onResize = () => {
  // prettier-ignore
  document.documentElement.setAttribute('style', `--real-height: ${window.innerHeight}px`)
}

window.addEventListener('load', onResize)
window.addEventListener('resize', onResize)

// Root Element
const root = ReactDOM.createRoot(document.getElementById('root'))

// Render
root.render(<App />)
