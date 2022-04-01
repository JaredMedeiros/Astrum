import React , {useState} from 'react'
import axios from "axios";

const SignUpPage = () => {
    const [user,setUser] = useState({
        username:"",
        email:"",
        password: "",
        confirmpswd: ""
    })
    const handleChange = e => {
    const {name,value} = e.target
    setUser({
    ...user, 
    [name]:value
    })
    }
    //register function 
   const signUp = (e) => {
        e.preventDefault();
        const {username,email,password, confirmpswd} = user
        if (username && email && password && confirmpswd){
        axios.post("http://localhost:6969/signup",user )
        .then(res=>console.log(res))
        }
        else{
            alert("invalid input")
        };


    return (
        <main className = 'signup-page'>
            <h1 className = 'signup-page__title'>Sign Up.</h1>
            <p className = 'signup-page__tagline'>
                Astrum. a <i>simple,</i> intuitive, collaborative project management interface for developers.
            </p>
            <form className = 'signup-page__form'>
                <div className = 'signup-page__form-left'>
                    <input type = 'text' name = 'username' value={user.username} onChange={handleChange} className = 'signup-page__username' placeholder = 'username' />
                    <input type = 'text' name = 'email' value={user.email} onChange={handleChange} className = 'signup-page__email' placeholder = 'email' />
                </div>
                <div className = 'signup-page__form-right'>
                    <input type = 'text' name = 'password' value={user.password} onChange={handleChange} className = 'signup-page__password' placeholder = 'password' />
                    <input type = 'text' name = 'confirmpswd' value={user.confirmpswd} onChange={handleChange} className = 'signup-page__confirmpswd' placeholder = 'confirm pswd' />
                </div>
                <button className = 'signup-page__button' onClick={signUp}>take me there.</button>
            </form>
            <p className = 'signup-page'>Have an account? Log in!</p>
        </main>
    )
}
}
export default SignUpPage