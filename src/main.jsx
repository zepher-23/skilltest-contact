import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import Add from './components/Add.jsx'
import Update from './components/Update.jsx'
import { BrowserRouter,Route,Routes } from 'react-router-dom'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
{/* Routing section for different operations */}
    <BrowserRouter>
    <Routes>
      <Route path='/' Component={App}/>
      <Route path='/add' Component={Add}/>
      <Route path='/update' Component={Update}/>


    </Routes>
    
    
    </BrowserRouter>
    
  </React.StrictMode>,
)
