import './App.css'
import Card from './components/card';

// let myobj={
//   userName:"satyajit",
//   age:21
// }

// let newArr = [1,2,4,5]


function App() {
// we can update names in different cards using the props, when called differnt times and passing the argument that should be edited
  return (
    <>
      <h1 className='bg-green-400 text-black p-4 rounded-xl mb-4'>Hello </h1>
      <Card userName="Satyajit" btntext='click Satyajit profile' />
      <Card userName="Sachin"  btntext='click sachin profile' />
      <Card userName="Parth" btntext='click parth profile' />
      <Card  />
    </>
  ) 
}

export default App
