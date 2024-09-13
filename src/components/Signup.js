import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Login.css";

const Signup = () => {
  return (
    <div className='container border-4 p-4 shadow-lg rounded-1 w-50'>
      <form >
        <h3>SignUp</h3>
        <div className="mb-3 my-3">
          <input type="text" placeholder='Name' className="form-control" id="name" name='name'  aria-describedby="emailHelp" />
        </div>
        <div className="mb-3">
          <input type="email" placeholder='Email' className="form-control" id="email" name='email' aria-describedby="emailHelp" />

        </div>
        <div className="mb-3">
          <input type="password" placeholder='Password' className="form-control" id="password" name="password"  minLength={5} required />
        </div>
        <div className="mb-3">
          <input type="password" placeholder='Confirm Password' className="form-control" id="cpassword" name='cpassword'  minLength={5} required />
        </div>

        <button type="submit" className="btn btn-dark">Create Account</button>
        <div className="cond my-2">
          Already have an account?{" "}
          <Link to="/login">Login</Link>
        </div>
      </form>
    </div>
  )
}

export default Signup
