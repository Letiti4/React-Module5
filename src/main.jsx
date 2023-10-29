import '../src/styleGlobal.css'
import React from 'react'
import ReactDOM from 'react-dom/client'
import Rotas from './Rotas'
import { Flip, ToastContainer } from 'react-toastify'
import 'react-toastify/dist/ReactToastify.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <ToastContainer
      position="top-center" theme="dark" transition={Flip} style={{ width: "auto" }} />
    <Rotas />
  </React.StrictMode>,
)
