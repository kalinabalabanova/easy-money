import React from 'react';
import './InputLabelControl.css'

const InputLabelControl = (props) => {
    const {children, ...attr} = props;
  
    return (

        <div>
            <label >{children}</label>
            <input className="inputBasic" {...attr} />
        </div>

    )
}

export default InputLabelControl;