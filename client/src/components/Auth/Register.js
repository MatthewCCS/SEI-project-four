import React, { useState } from 'react'
import axios from 'axios'
import { Link, useNavigate } from 'react-router-dom'


const Register = () => {
  const navigate = useNavigate()

  const [formData, setFormData] = useState({
    username: '',
    email: '',
    password: '',
    passwordConfirmation: '',
  })

  const [errors, setErrors] = useState({})

  const handleChange = (e) => {
    setFormData({ ...formData, [e.target.name]: e.target.value })
    setErrors({ ...errors, [e.target.name]: '' })
  }

  const handleSubmit = async (event) => {
    event.preventDefault()
    try {
      await axios.post('/api/auth/register/', formData)
      navigate('/login')
    } catch (error) {
      console.log(error)
      console.log(error.response)
      console.log(error.response.data)
      setErrors(error.response.data)
    }

  }

  return (
    <section className='form-page'>
      <div className='login-container'>
        <form className='login-form' onSubmit={handleSubmit}>
          <h1>Register</h1>
          <label htmlFor='email'>Email</label>
          <input type='email' name='email' className='input' placeholder='Email' required value={formData.email} onChange={handleChange}></input>
          <label htmlFor='username'>Username</label>
          <input type='text' name='username' className='input' placeholder='Username' required value={formData.username} onChange={handleChange}></input>
          <label htmlFor='password'>Password</label>
          <input type='password' name='password' className='input' placeholder='Password' required value={formData.password} onChange={handleChange}></input>
          <label htmlFor='passwordConfirmation'>Password Confimration</label>
          <input type='password' name='passwordConfirmation' className='input' placeholder='Confirm password' required value={formData.passwordConfirmation} onChange={handleChange}></input>
          <Link to='/'><button type='button' className='form-submit-btn'>Cancel</button></Link>
          <button type='submit' className='form-submit-btn'>Submit</button>
        </form>
      </div>
    </section>
  )
}

export default Register