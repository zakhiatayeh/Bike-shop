import React, { useState } from 'react'
import Axios from 'axios'
import '../css/signin.css'

export const Register = (props) => {
  const [email, setEmail] = useState('')
  const [pass, setPass] = useState('')
  const [first_name, setfirst_Name] = useState('')
  const [last_name, setlast_Name] = useState('')
  const [userName, setuserName] = useState('')
  const [Phone, setPhone] = useState('')
  const handleSubmit = (e) => {
    e.preventDefault()
    console.log(email)
  }
  const register = () => {
    Axios.post('http://localhost:3001/register', {
      email: email,
      pass: pass,
      first_name: first_name,
      last_name: last_name,
      Phone: Phone,
      userName: userName,
    }).then((response) => {
      console.log(response)
    })
  }

  return (
    <div clasName='auth-form-container'>
      <h2>Register</h2>
      <form className='register-form' onSubmit={handleSubmit}>
        <label className='signlbl' htmlfor='name'>
          UserName:
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setuserName(e.target.value)
          }}
          value={userName}
          type='text'
          id='name'
        />
        <label className='signlbl' htmlfor='email'>
          email:
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setEmail(e.target.value)
          }}
          value={email}
          type='email'
          id='email'
        />
        <label className='signlbl' htmlfor='pass'>
          password:
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setPass(e.target.value)
          }}
          value={pass}
          id='password'
        />

        <label className='signlbl' htmlfor='name'>
          First Name:
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setfirst_Name(e.target.value)
          }}
          value={first_name}
          type='text'
          id='name'
        />

        <label className='signlbl' htmlfor='name'>
          Last Name:
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setlast_Name(e.target.value)
          }}
          value={last_name}
          type='text'
          id='name'
        />
        <label className='signlbl' htmlfor='name'>
          Phone Number:
        </label>
        <input
          className='signinput'
          onChange={(e) => {
            setPhone(e.target.value)
          }}
          value={Phone}
          type='text'
          id='name'
        />
        <button className='sign-btn' onClick={register} type='submit'>
          Register
        </button>
      </form>

      <button
        className='link-btn sign-btn'
        onClick={() => props.onFormSwitch('Login')}
      >
        Already have an accoount? Login here
      </button>
    </div>
  )
}
export default Register
