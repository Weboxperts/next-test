import React from "react";

type clickfunctionstype =
{
    clickit: any
      
}

const Button = (props:clickfunctionstype) => {
  return <button onClick={props.clickit}> Click me! </button>
};



export default Button;
