import React from 'react'

type buttonType = 
{
  buttonN: any
  Hanldefunc: any
  disablecount?: any
  counavlue?: any
}


const Buttons = (props:buttonType) => {
  return (
    <div>
    <button type="button" className="btn btn-danger" onClick={props.Hanldefunc} disabled={props.disablecount == 0}> {props.buttonN}  </button>
    </div>
  )
}

export default Buttons
