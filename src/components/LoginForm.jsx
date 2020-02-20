import React, { useState } from 'react';
import InputLabelControl from './InputLabelControl';

const LoginForm = (props) => {



    const [username, setUsername] = useState('');
    const [password, setPassword] = useState('');


    return (
        <div>
            <InputLabelControl
                type="text"
                placeholder="Username"
                onChange={value => setUsername(value)}
                value={username}>
                <strong>Username</strong>
            </InputLabelControl>

            <InputLabelControl
                type="password"
                placeholder="Password"
                onChange={value => setPassword(value)}
                value={password}>
                <strong>Password</strong>
            </InputLabelControl>

            
        </div>


    )
}

export default LoginForm;