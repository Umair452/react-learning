
import { createRoot } from 'react-dom/client'
import App from './App.jsx'
import React from 'react'


// let anotherUser = "Talha is another user"


// const reactElement = React.createElement(
//     'h1',
//     {className: 'myHeading', id: 'headingId'},
//     'I am the injected heading',
//     anotherUser
//   )

createRoot(document.getElementById('root')).render(
  
  <App />
 
)
