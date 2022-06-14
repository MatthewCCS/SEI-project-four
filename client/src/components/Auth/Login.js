import React, { useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import axios from 'axios'

const Login = () => {

  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    email: '',
    password: '',
  })

  const [errors, setErrors] = useState(false)

  const setTokenToLocalStorage = (token) => {
    window.localStorage.setItem('mMusic-app', token)
  }
  //handle submit
  const handleSubmit = async (e) => {
    e.preventDefault()
    try {
      const { data } = await axios.post('api/auth/login/', formData)
      setTokenToLocalStorage(data.token)
      navigate('/')
    } catch (error) {
      console.log(error)
      setErrors(true)
    }
  }
  // handle change
  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors(false)
  }

  return (

    <section className='form-page'>
      <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
          <h1>Login</h1>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' className='input' placeholder='Email' required value={formData.email} onChange={handleChange}></input>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' className='input' placeholder='Password' required value={formData.password} onChange={handleChange}></input>
          <Link to='/'><button type='button' className='form-submit-btn'>Cancel</button></Link>
          <button type='submit' className='form-submit-btn'>Login</button>
        </form>
      </div>
    </section>
  )
}

export default Login