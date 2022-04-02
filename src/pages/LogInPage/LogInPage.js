import './LogInPage.scss'
import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'



function LogInPage() {
  const [username, setUsername] = useState("");
  const [password, setPassword] = useState("");
  // const [showPassword, setShowPassword] = useState(false);

  const navigate = useNavigate();

  async function loginUser(event) {
    event.preventDefault();
    const response = await fetch("http://localhost:5500/user/login", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({
        username,
        password,
      }),
    });
    const data = await response.json();

    if (data.token) {
      localStorage.setItem("user", data.username);
      alert("Login Successful");
      navigate("/");
    } else {
      alert("Please check your username and password");
    }
    console.log(data);
  }

    return (
        <main className = 'login-page'>
            <h1 className = 'login-page__title'>Log In.</h1>
            <form onSubmit={loginUser} className = 'login-page__form'>
                <input type = 'text' name = 'username' id = 'username' value = {username} className = 'login-page__username'  placeholder = 'username' onChange={(e) => setUsername(e.target.value)}/>
                <input type = 'password' name = 'password' id = 'password' value = {password} className = 'login-page__password'  placeholder = 'password' onChange={(e) => setPassword(e.target.value)}/>
                <button className = 'login-page__button'>enter.</button>
            </form>
            <Link className = 'link' to='/signup'><p className = 'login-page__to-signup'>Don't have an Astrum account? Sign up here.</p></Link>
        </main>
    )
}

export default LogInPage