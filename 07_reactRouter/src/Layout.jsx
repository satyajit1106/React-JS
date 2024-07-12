import React from "react";
import Header from "./components/Header/Header";
import Footer from "./components/Footer/Footer";
import { Outlet } from "react-router-dom";

function Layout (){
    return(
        <>
            <Header/>
            <Outlet/>
            <Footer/>
        </>
    )
}
// we use outlet here, because it gives us the ability to nest the element using the react-router-dom, we have done nesting for the Layout in the main.jsx
export default Layout;