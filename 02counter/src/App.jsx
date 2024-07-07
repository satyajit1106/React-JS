import { useState } from 'react'
import './App.css'

function App() {

  // useState Hook contain the default value and and we get values in the form of array, array contain variable and function, function is used to set the variable, counter and setCounter are just the names and can be kept diff
  // Range [0,20]
  let [counter, setCounter] = useState(1)

  const OnclickAdd = ()=>{

    if(counter >= 20 ){
      alert("value can't be greater than 20")
    }
    else{
      counter = counter + 1
      setCounter(counter)     //setCounter(counter + 1)
      console.log(counter);
    }
  }
  // setCounter function updates the default value of the counter


  let OnclickSub = ()=>{

    if(counter <= 0){
      alert("value can't be less than 0")
    }else{
      counter = counter - 1
      setCounter(counter)
      console.log(counter);
    }
    
  }

  return (
    <>
      <h1>React App</h1>
      <h2>Counter Value : {counter} </h2>

      <button onClick={OnclickAdd}> Add value </button>
      <br />
      <button onClick={OnclickSub}> Sub value </button>
      
      <footer> current value { counter }</footer>
    </>
  )
}

export default App
