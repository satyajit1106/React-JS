import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { createBrowserRouter, createRoutesFromElements, Route, RouterProvider } from 'react-router-dom'
import Layout from './Layout.jsx'
import About from './components/About/About.jsx'
import Home from './components/Home/Home.jsx'
import Contactus from './components/Contactus/Contactus.jsx'
import User from './components/User/User.jsx'
import Github,{githubInfoGenerator} from './components/Github/Github.jsx'

// Router can only be made from the createBrowserRouter, we can directly pass the objects and each route in itself could be nested by just not making then self closing

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
// we have given Layout in the top level so that we can nest using outlet, thus these outlet can come here.

const router = createBrowserRouter(
  createRoutesFromElements(
    <Route path='/' element={<Layout />} >
    <Route path='' element={<Home />} />
    <Route path='/About' element={<About />} /> 
    <Route path='/Contactus' element={<Contactus />} />
    <Route path='User/:userid' element={<User/>}/> 
    <Route
      loader={githubInfoGenerator}
      path='Github' 
      element={<Github />} 
    />

    </Route>
  )
)
// we saw how to take the dynamic value from the url using the userid, where the element is loading there we should fill the same userid 

// we can optimize the api call using the loader, made the method and passed the element using the path

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router}/>
  </React.StrictMode>,
)

// RouterProvider is a wrapper which is use to bundle the element and only req the router