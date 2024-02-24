import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import FirebaseContextProvider from './context/Firebase.jsx'
import {BrowserRouter} from "react-router-dom"

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <BrowserRouter>
      <FirebaseContextProvider>
        <App />
      </FirebaseContextProvider>
    </BrowserRouter>
  </React.StrictMode>,
)
