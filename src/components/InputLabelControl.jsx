import React from 'react';
import './InputLabelControl.css'
import { useState } from 'react';

const InputLabelControl = (props) => {
    const {children, ...attr} = props;

    return (

        <div>
            <label >{children}</label>
            <input className="inputBasic" {...attr} onChange={e => props.onChange && props.onChange(e.target.value)}  />
        </div>

    )
}

export default InputLabelControl;