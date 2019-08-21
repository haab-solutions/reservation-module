import React from 'react'
import ReactDOM from 'react-dom'
import App from './components/App.jsx'
import { Provider } from 'react-redux'



const AppElement = document.getElementById('App')
ReactDOM.render(
  <App />
, AppElement)