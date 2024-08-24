import { useState, useCallback, useEffect, useRef } from "react"


function App() {
 
  const [length, setLength] = useState(8)
  const [nums, setNums] = useState(false)
  const [chars, setChars] = useState(false)
  const [password, setPassword] = useState('')
  const passowrdRef = useRef(null)



  const passwordGenerator = useCallback(()=>{
    let pass = ''
    let str = 'ABCDEFGHIJKLMNOPQRSTUVWXYZabcdefghijklmnopqrstuvwxyz'
    if (nums) str += '0123456789'
    if (chars) str += '!@#$%&()[]{}'

    for (let index = 1; index <= length; index++) {
      let char = Math.floor(Math.random() * str.length +1)

      pass += str.charAt(char)
      
    }

    setPassword(pass)

  },[length, nums, chars, setPassword])
 
useEffect(()=>{
  passwordGenerator()
}, [length, nums, chars, passwordGenerator])

const copyPassword = useCallback(()=>{
  passowrdRef.current?.select();
  // passowrdRef.current?.setSelectionRange(0, 3) option to select specific text
  window.navigator.clipboard.writeText(password)
}, [password])

  return (
  <>
 <div className="p-5 w-full max-w-md mx-auto shadow-md rounded-lg px-4 my-8 text-orange-500 bg-gray-600 text-center">
  <h1 className="text-white text-center my-3">Password generator</h1>
  <div className="flex shadow-md rounded-lg overflow-hidden mb-4">
    <input type="text"
    value={password} 
    className="outline-none w-full py-1 px-3"
    placeholder="password"
    readOnly
    ref={passowrdRef}
    />
    <button onClick={copyPassword} className="bg-blue-700 outline-none text-white px-3 py-1 shrink-0">Copy</button>
  </div>

    <div className="flex text-sm gap-x-2">
      <div className="flex items-center gap-x-1">
        <input type="range" 
        min={8}
        max={30}
        value={length}
        className="cursor-pointer"
        onChange={(e)=> setLength(e.target.value)}
        />
        <label>Length: {length}</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked = {nums}
        id="numberInput"
        onChange={()=>{
          setNums((prev) => !prev)
        }}
        />
        <label htmlFor="numberInput">Numbers</label>
      </div>
      <div className="flex items-center gap-x-1">
        <input type="checkbox"
        defaultChecked = {chars}
        id="charInput"
        onChange={()=>{
          setChars((prev) => !prev)
        }}
        />
        <label htmlFor="charInput">Characters</label>
      </div>
    </div>

 </div>

  </>
  )
}

export default App
