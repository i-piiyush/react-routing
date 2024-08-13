import React from "react";
import { Link } from "react-router-dom";

function About(){
    return(
        
        <div className="p-10 flex justify-center w-[100%] h-[50vh] items-start flex-col">
            <h1 className="text-5xl bg-grey-800 text-red-600 mb-5">Users</h1>
            <Link className="text-white bg-black px-9 py-2 mb-2  text-xl rounded-md" to="/About/Rohan">Rohan</Link>
            <Link className="text-white bg-black px-9 py-2 mb-2  text-xl rounded-md" to="/About/Sohan">Sohan</Link>
            <Link className="text-white bg-black px-9 py-2 mb-2  text-xl rounded-md" to="/About/Mohan">Mohan</Link>
        </div>
    )
}
export default About;