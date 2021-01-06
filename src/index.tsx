import React from 'react'
import ReactDOM from 'react-dom'
import './index.scss'
import Header from './layout/Header/Header'
import * as serviceWorker from './serviceWorker'
import App from './App'

ReactDOM.render(
  <React.StrictMode>
    <Header />
    <App />
  </React.StrictMode>,
  document.getElementById('root')
)


// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister()
