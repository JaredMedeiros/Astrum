import './LogInPage.scss'
import { useState, useEffect } from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { toast } from 'react-toastify'
import { login, reset } from '../../features/auth/authSlice'


function LogInPage() {
  const [formData, setFormData] = useState({
    username: '',
    password: '',
  })

  const { username, password } = formData

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

    const userData = {
      username,
      password,
    }

    dispatch(login(userData))
  }


    return (
        <main className = 'login-page'>
            <h1 className = 'login-page__title'>Log In.</h1>
            <form onSubmit={onSubmit} className = 'login-page__form'>
                <input type = 'text' name = 'username' id = 'username' value = {username}className = 'login-page__username'  placeholder = 'username' onChange={onChange}/>
                <input type = 'text' name = 'password' id = 'password' value = {password} className = 'login-page__password'  placeholder = 'password' onChange={onChange}/>
                <button className = 'login-page__button'>enter.</button>
            </form>
            <p className = 'login-page__to-signup'>Don't have an Astrum account? Sign up here.</p>
        </main>
    )
}

export default LogInPage