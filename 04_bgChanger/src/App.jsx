import { useState } from 'react'
import './App.css'

// onClick can be set directly by calling the setColor function but we need to pass the value of the color so onClick need function take the argument but in this case we will get the returned value and onClick accepts only the callback function, it will work but not the good practice

function App() {
  const [color, setColor] = useState("pink")

  return (
    <div className="w-full h-screen duration-200"
      style={{ backgroundColor: color }}
    >
      <div className="fixed flex flex-wrap justify-center bottom-12 inset-x-0 px-2">
        <div className="flex flex-wrap justify-center gap-3 shadow-lg bg-white rounded-lg px-3    py-2">
          <button 
            onClick={ ()=> setColor("red") }
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style = {{backgroundColor: "red"}}
          >red</button>


          <button 
            onClick={ ()=> setColor("orange") } 
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style = {{backgroundColor: "orange"}}
          >orange</button>


          <button 
            onClick={ ()=> setColor("yellow") }
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style = {{backgroundColor: "yellow"}}
          >yellow</button>


          <button 
            onClick={ ()=> setColor("blue") }
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style = {{backgroundColor: "blue"}}
          >blue</button>


          <button 
            onClick={ ()=> setColor("green") }
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style = {{backgroundColor: "green"}}
          >green</button>


          <button 
            onClick={ ()=> setColor("violet") }
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style = {{backgroundColor: "violet"}}
          >violet</button>

          
          <button 
            onClick={ ()=> setColor("black") }
            className="outline-none px-4 py-1 rounded-full text-white shadow-lg"
            style = {{backgroundColor: "black"}}
          >black</button>

        </div>
      </div>

    </div>
  )
}

export default App
