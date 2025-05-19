import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { BrowserRouter as Router } from 'react-router-dom'; 
import App from './App.jsx'
import './index.css'
import { ContextProvider } from './contexts/ContextProvider';

createRoot(document.getElementById('root')).render(
  <StrictMode>
   <ContextProvider>
     <App />
   </ContextProvider>
  

 </StrictMode>
)
