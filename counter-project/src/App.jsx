import { useState } from 'react'
import './App.css'

function App() {
  
 let [counter, setCounter] = useState(5)

 
  const addvalue = () =>{

    if (counter < 10) {
      
      setCounter(prevCounter => prevCounter +1)
    }
    
    
    
    
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(prevCounter => prevCounter - 1)
    }
    
   
    
  }
  return (
    <>
    <h1>Counter project</h1>
    <h2>Counter value: {counter}</h2>
    <button onClick={addvalue}>Add value</button>
    <br />
    <button onClick={removeValue}>Remove value</button>
    </>
  )
}

export default App
