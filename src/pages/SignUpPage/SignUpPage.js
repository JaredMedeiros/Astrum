import { useState, useEffect } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'
import './SignUpPage.scss'


function SignUpPage() {
  const [username, setUsername] = useState("");
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmpswd, setConfirmpswd] = useState("");

  // let passwordChar = password.length >= 6;
  // let passwordLowerChar = /(.*[a-z].*)/.test(password);
  // let passwordUpperChar = /(.*[A-Z].*)/.test(password);
  // let passwordNum = /(.*[0-9].*)/.test(password);
  // let passwordSpecialChar = /(.*[^a-zA-Z0-9].*)/.test(password);

  let emailCheck = /\S+@\S+\.\S+/.test(email);

  const navigate = useNavigate();

  async function registerUser(event) {
    event.preventDefault();

    try {
  
    const response = await axios.post("http://localhost:5500/user/signup", {
      
        username,
        email,
        password,
        confirmpswd,
    });
    console.log(response.data);
    navigate("/login");
    } catch (e){
      console.log(e.stack)
    }

  }


    return (
        <main className = 'signup-page'>
            <h1 className = 'signup-page__title'>Sign Up.</h1>
            <p className = 'signup-page__tagline'>
                Astrum. a <i>simple,</i> intuitive, collaborative project management interface for developers.
            </p>
            <form className = 'signup-page__form' onSubmit={registerUser}>
                <div className = 'signup-page__form-left'>
                    <input type = 'text' name = 'username' id = 'username' value={username} onChange={(e) => setUsername(e.target.value)} className = 'signup-page__username' placeholder = 'username' />
                    <input type = 'text' name = 'email' id = 'email' value={email} onChange={(e) => setEmail(e.target.value)} className = 'signup-page__email' placeholder = 'email' />
                </div>
                <div className = 'signup-page__form-right'>
                    <input type = 'password' name = 'password' id = 'password' value={password} onChange={(e) => setPassword(e.target.value)} className = 'signup-page__password' placeholder = 'password' />
                    <input type = 'password' name = 'confirmpswd' id = 'confirmpswd' value={confirmpswd} onChange={(e) => setConfirmpswd(e.target.value)} className = 'signup-page__confirmpswd' placeholder = 'confirm pswd' />
                </div>
                <button className = 'signup-page__button' type='submit'>take me there.</button>
            </form>
            <Link className = 'link' to='/login'><p className = 'signup-page__to-login'>Have an account? Log in!</p></Link>
        </main>
    )
}
export default SignUpPage