import { useState } from 'react'
import Practice from './Practice'


function App() {
 
  let userName = 'Muhammad Umair'

  return (
    <>
    <h1>My user name is: {userName}</h1>
    <Practice />
    </>
  )
}

export default App
