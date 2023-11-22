import React from 'react'
import ReactDOM from 'react-dom/client'
import { PrimerComponente } from './PrimerComponente'
import './styles.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <PrimerComponente titulo='Esta sección es de Props:' subtitulo= 'Sección Props 123'/>
  </React.StrictMode>,
)
