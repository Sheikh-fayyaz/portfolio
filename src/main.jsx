import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import LoadCSS from "./components/LoadCSS.jsx"; // Import dynamically loading CSS
import 'bootstrap/dist/css/bootstrap.min.css';
import 'bootstrap/dist/js/bootstrap.bundle.min.js';
import './index.css'

createRoot(document.getElementById('root')).render(
  <StrictMode>
  <LoadCSS />
    <App />
  </StrictMode>,
)
