import { BrowserRouter } from "react-router-dom"
import { createRoot } from 'react-dom/client'
import './App.css'

import "bootstrap/dist/css/bootstrap.min.css"
import "bootstrap/dist/js/bootstrap.bundle.js"
import App from "./App"

createRoot(document.getElementById('root')).render(
  <BrowserRouter>
    <App />
  </BrowserRouter>
) 
