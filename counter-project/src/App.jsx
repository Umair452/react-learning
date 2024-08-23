import { useState } from 'react'
import './App.css'

function App() {
  
 const [counter, setCounter] = useState(5)

 
  const addvalue = () =>{

    if (counter < 10) {
      
      setCounter(counter => counter+1)
      setCounter(counter => counter+1)
      
    }
    
    
    
    
  }

  const removeValue = () => {
    if (counter > 0) {
      setCounter(counter - 1)
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
