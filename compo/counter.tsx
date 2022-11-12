
import React from "react";
import {useState} from "react";
import 'bootstrap/dist/css/bootstrap.css'
import Buttons from "./button";


const Counter = () => {


    const [counts, setcountes] = useState(1)

    const decHandle = ()=>{
           
        setcountes(counts - 1)
    }
    const incHandle = ()=>{
        setcountes(counts + 1)
    }

    
  return (
    <div>
    <Buttons Hanldefunc={incHandle} buttonN="+"/> {counts} <Buttons counavlue={counts} disablecount={counts} Hanldefunc={decHandle} buttonN="-"/>
    
    </div>
  )
}

export default Counter



