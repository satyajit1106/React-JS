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
      // counter = counter + 1
      // setCounter(counter)     //setCounter(counter + 1)

      // setCounter(counter + 1)   
      // setCounter(counter + 1)
      // setCounter(counter + 1)  
      // This will not update the addition value three times because when these kinds of function is called ReactFiber bundles these work and send them in a single  go, which views these work as the same work and then update them once

      //to obtain updation 3 times using the same structure we use the concept of the call back function that is accepted in such case ( ()=>{} )
      setCounter((prevCounter) => prevCounter + 1)
      setCounter((prevCounter) => prevCounter + 1)


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
