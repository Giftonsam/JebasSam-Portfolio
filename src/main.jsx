import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom'
import App from './App'
import './styles/globals.css'
import './styles/layout.css'
import './styles/utils.css'

// ✅ Add basename conditionally
const basename = import.meta.env.MODE === 'production' ? '/JebasSam-Portfolio' : '/'

ReactDOM.createRoot(document.getElementById('root')).render(
  <BrowserRouter basename={basename}>
    <App />
  </BrowserRouter>
)
