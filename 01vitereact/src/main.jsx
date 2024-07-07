// import React from 'react'
// import { StrictMode } from 'react';

// import {jsx as _jsx} from 'react/jsx-runtime.js' 
// we could use the evaluated expression using jsx rather than using the .createlement

import ReactDOM from 'react-dom/client'
import App from './App.jsx';

/*
function Modular(){
  // fast refresh when function moved to the different pages and this is called the jsx, writting the html code using render

  return(
    <div>
      <h1>Modular function </h1>
    </div>
  )
}
*/


/*
const anotherElement = (
  <a href="https://google.com">click to visit google</a>
)
*/


/*
const reactElement = React.createElement(
  // we should enter the key values without entering the keyName
  // babble transpiler inject this method .createElement in React
  'a',
  {href:'https://google.com', target:'_blank'}, // if you have an attribute the give or leave it empty but you should give it
  'click me'
)
*/

ReactDOM.createRoot(document.getElementById('root')).render(

  <App/>

)
