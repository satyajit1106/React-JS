import React from 'react';
import { useParams } from "react-router-dom";

// we can't directly use the userId from the main.jsx we need to fetch it from the usePrams method and then pass in to the function
function User(){
    const {userid} = useParams()
    return(
        <div className='bg-gray-200 flex justify-center text-3xl p-4'> User:{userid} </div>
    )
}

export default User