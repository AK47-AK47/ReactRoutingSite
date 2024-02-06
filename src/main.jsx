import 'bootstrap/dist/css/bootstrap.min.css';
/**I import bootstrap as dependency via git bash: npm install bootstrap 
 * and use with: import "bootstrap/dist/css/bootstrap.min.css";
 * 
 * Put any other imports below so that 
 * CSS from your components takes precedence over default styles.
 * 
 * so some <h1> <h2>.. tag has changed (Header and footer area)
 */ 
import React from 'react'
import ReactDOM from 'react-dom/client'
import { BrowserRouter } from 'react-router-dom';
import App from './App.jsx'
import './index.css'

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    {/*<BrowserRouter >*/}
      <App />
    {/*</BrowserRouter >*/}
  </React.StrictMode>,
)
