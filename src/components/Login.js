import React from 'react'
import { Link } from 'react-router-dom'
import "../css/Login.css";

const Login = () => {

  return (
    <div className='container border-4 shadow-lg p-4 rounded-1 w-50'>
            <form>
                <h3>Login</h3>
                <div className="mb-3 my-3">
                    <input type="email" placeholder='Email' className="form-control"  id="email" name='email' aria-describedby="emailHelp" />

                </div>
                <div className="mb-3">
                    <input type="password" placeholder='Password' className="form-control" name='password'  id="password" />
                </div>
                <div className="d-flex justify-content-center">
                    <button type="submit" className="btn btn-dark" >Login</button>
                </div>
                <div className="cond my-2">
                    Not registered yet?{" "}
                    <Link to="/signup">Create an account</Link>
                </div>
            </form>
        </div>
  )
}

export default Login
