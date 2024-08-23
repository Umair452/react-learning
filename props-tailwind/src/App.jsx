import SwipeCards from './components/SwipeCards'
import './App.css'

function App() {
  
  let myObj = {
    name: "Umair",
    age: 24
  }

  let newArray = [1, 2, 3]

  return (
  <>
  <h1 className=''>Tailwind injected</h1>
  <SwipeCards name = "firstProp" myDetails = {myObj.name} myArray = {newArray}/>
  <SwipeCards myDetails={myObj.age} fullName = "Muhammd Umair"/>
  </>
  )
}

export default App
