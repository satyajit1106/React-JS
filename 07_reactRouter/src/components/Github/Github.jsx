import React, { useEffect, useState } from "react";
import { useLoaderData } from "react-router-dom";

function Github(){
    const data = useLoaderData()

    // we want to render data inside the page so we need a state from here we will get the data
    // const [data, setData] = useState([])
    
    // use effect will get called when your component mount once
    // useEffect(()=>{
        
    //     fetch('https://api.github.com/users/satyajit1106')
    //     .then( response => response.json() )
    //     .then( (data) => setData(data))
    // },[])

    return(
        <div className="text-center m-4 bg-gray-500 text-white p-4 text-3xl"> Github followers:{data.followers} 
        <img src={data.avatar_url} alt="Github picture" width={300} />
        </div>
    )
}

export default Github


export const githubInfoGenerator = async () => {
    const response = await fetch('https://api.github.com/users/satyajit1106')
    return response.json();
}