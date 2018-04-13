'use babel'
import React from 'react'
import ReactDOM from 'react-dom'
import { HashRouter } from 'react-router-dom'

import App from './containers/App'

window.onload = function(){
  ReactDOM.render(
    (
      <HashRouter>
        <App config={Config}/>
      </HashRouter>
    ),
    document.getElementById('app')
  )
}
