import './LogInPage.scss'

import React,{useState} from 'react'
import axios from 'axios';
import {useNavigate} from 'react-router-dom'

const LogInPage = ({setLoginUser}) => {
const navigate = useNavigate()
    const [user,setUser] = useState({
        username:"",
        password: ""
    })
    const handleChange = e =>{
    const {name,value} = e.target
    setUser({
    ...user,//spread operator 
    [name]:value
    })
    }

    const login =()=>{
        axios.post("http://localhost:6969/Login",user)
        .then(res=>{alert(res.data.message)
        setLoginUser(res.data.user)
    navigate.push("/")})
    }

    return (
        <main className = 'login-page'>
            <h1 className = 'login-page__title'>Log In.</h1>
            <form className = 'login-page__form'>
                <input type = 'text' name = 'username' className = 'login-page__username' value={user.username}  onChange={handleChange} placeholder = 'username' />
                <input type = 'text' name = 'password' className = 'login-page__password' value={user.password}  onChange={handleChange} placeholder = 'password' />
                <button className = 'login-page__button' onClick={login}>enter.</button>
            </form>
            <p className = 'login-page__to-signup'>Don't have an Astrum account? Sign up here.</p>
        </main>
    )
}

export default LogInPage