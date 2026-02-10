import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'

// 1. BOOTSTRAP VA PRIMERO (Como base)
import 'bootstrap/dist/css/bootstrap.min.css'; 

// 2. TAILWIND (index.css) VA DESPUÉS
import './index.css'

import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)