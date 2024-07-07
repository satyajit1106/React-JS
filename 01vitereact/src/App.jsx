import Proxy from './Proxy'

function App() {

  const variable = 'it is the variable to get injected in js'
  return (
    <>
      <Proxy/> {variable} 
    </>
  )
  // {variable is an evaluated Expression that have the final output value and could not have the intermediate code such as the if and the else or some other conditionals}
}

export default App
