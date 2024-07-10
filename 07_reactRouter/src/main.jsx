import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contactus from './components/Contactus/Contactus.jsx'
import User from './components/User/User.jsx'
import Github from './components/Github/Github.jsx'

// const router = createBrowserRouter([
//   {
//     path: '/',
//     element : <Layout/>,
//     children : [
//       {
//         path: "",
//         element : <Home/>
//       },
//       {
//         path: "About",
//         element: <About/>
//       },
//       {
//         path: "Contactus",
//         element: <Contactus/>
//       }
//     ]
//   }
// ])

// more easier syntax for the router element, here we used createRoutesFromElements which is used to create the elements 

// main motive of User is to understand how we take the parameters in the Router
const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
    <Route path='' element={<Home />} />
    <Route path='/About' element={<About />} />
    <Route path='/Contactus' element={<Contactus />} />
    <Route path='User/:userid' element={<User/>}/> 
    <Route path='Github' element={<Github />} />
    </Route>
  )
)

// 
ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)
