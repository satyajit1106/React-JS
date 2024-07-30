import { useEffect, useState } from "react";

// useEffect hook is used for the api calling, we want a hook that can call when its life cycle event is triggered i.e; useEffect it will automatically call the api, and we need not to make an another function to call api

// useEffect takes two things one is callbackFunction and another is dependency array which invokes the function when changed
function useCurrencyInfo (currency){

    const [data, setData] = useState({}) // state change hone pe, i.e; value of currency change hone pe hum data me value store kar rahe hai
    
    // when someone call this hook then the api get called, useEffect directly return the value from the useState
    useEffect( ()=> {
        fetch(`https://cdn.jsdelivr.net/npm/@fawazahmed0/currency-api@2024-03-06/v1/currencies/usd.json`)
        .then( (res)=> res.json )
        .then( (res)=> setData(res[currency]))  // now we req api to give some response and take currency value out of it
        console.log(data);
    }, [currency, data])  
    console.log(data);
    return data
}

export default useCurrencyInfo;