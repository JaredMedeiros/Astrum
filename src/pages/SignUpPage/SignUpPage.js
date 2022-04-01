import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { register, reset } from '../../features/auth/authSlice'


function SignUpPage() {
  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    confirmpswd: '',
  })

  const { username, email, password, confirmpswd } = formData

  const navigate = useNavigate()
  const dispatch = useDispatch()

  const { user, isError, isSuccess, message } = useSelector(
    (state) => state.auth
  )

  useEffect(() => {
    if (isError) {
      toast.error(message)
    }

    if (isSuccess || user) {
      navigate('/')
    }

    dispatch(reset())
  }, [user, isError, isSuccess, message, navigate, dispatch])

  const onChange = (e) => {
    setFormData((prevState) => ({
      ...prevState,
      [e.target.name]: e.target.value,
    }))
  }

  const onSubmit = (e) => {
    e.preventDefault()

    if (password !== confirmpswd) {
      toast.error('Passwords do not match')
    } else {
      const userData = {
        username,
        email,
        password,
      }

      dispatch(register(userData))
    }
  }


    return (
        <main className = 'signup-page'>
            <h1 className = 'signup-page__title'>Sign Up.</h1>
            <p className = 'signup-page__tagline'>
                Astrum. a <i>simple,</i> intuitive, collaborative project management interface for developers.
            </p>
            <form className = 'signup-page__form' onSubmit={onSubmit}>
                <div className = 'signup-page__form-left'>
                    <input type = 'text' name = 'username' id = 'username' value={username} onChange={onChange} className = 'signup-page__username' placeholder = 'username' />
                    <input type = 'text' name = 'email' id = 'email' value={email} onChange={onChange} className = 'signup-page__email' placeholder = 'email' />
                </div>
                <div className = 'signup-page__form-right'>
                    <input type = 'text' name = 'password' id = 'password' value={password} onChange={onChange} className = 'signup-page__password' placeholder = 'password' />
                    <input type = 'text' name = 'confirmpswd' id = 'confirmpswd' value={confirmpswd} onChange={onChange} className = 'signup-page__confirmpswd' placeholder = 'confirm pswd' />
                </div>
                <button className = 'signup-page__button'>take me there.</button>
            </form>
            <p className = 'signup-page'>Have an account? Log in!</p>
        </main>
    )
}
export default SignUpPage