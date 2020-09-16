import React, { useState, } from 'react'
import { useHistory } from 'react-router-dom'

import axiosWithAuth from '../utils/axiosWithAuth'


const initialCredentials = {
    username: "",
    password: "",
}



const Login = () => {
    const history = useHistory()
    const [ credentials, setCredentials] = useState(initialCredentials)

    const onFormChange = e => {
        setCredentials({
            ...credentials,
            [e.target.name]: e.target.value
        })
    }

    const onSubmit = e => {
        e.preventDefault()
        axiosWithAuth()
        .post('/api/login', credentials)
        .then(res => {
            localStorage.setItem("token", res.data.payload);
            history.push('/friends')
        })
        .catch(err => {
            console.log(err, "Ah ah ah, you didn't say the magic word.")
        })
        setCredentials(credentials)
    }

    return (
        <section className="form-section">
            <h1 className="form-heading">Login</h1>
            <form  onSubmit={onSubmit} className="friend-form">
                <label className="form-label">Username:&nbsp;
                    <input 
                    name="username"
                    type="text"
                    value={credentials.username}
                    onChange={onFormChange}                    
                    />
                </label>
                <label className="form-label">Password:&nbsp;
                    <input 
                    name="password"
                    type="text"
                    value={credentials.password}
                    onChange={onFormChange}                      
                    />
                </label>
                <button className="submit">Login</button>
            </form>
        </section>
    )
}

export default Login