import React from "react";
import Paw from '../assets/paw.png'
import { useState } from "react";

const API = () =>{

    const [cat, setCat] = useState({});

    const fetchData = async () =>{
        

        try {
            //FETCH API CAT FACT
            const response = await fetch("https://catfact.ninja/fact");
            //STORE DATA
            const data = await response.json();
            setCat(data);

        } catch (error) {
            //DISPLAY ERROR IF ANY
            console.error("Error fetching data", error);
        }

    }//END OF FETCHDATA

    return <>
    <div className="flex">
    <img className=" hidden md:block rotate-180 -mt-50" src={Paw} />
        <div className="flex flex-col items-center">
        <h1 className="mb-2 ml-2 md:ml-6">Random Cat Facts!</h1>
        <p className="overflow-auto bg-white rounded-lg p-2 w-96 h-2/4 flex justify-center items-center">{cat.fact}</p>
        <button className="mt-2" onClick={fetchData}>New Fact?</button>
        </div>
    </div>

    </>
};

export default API;