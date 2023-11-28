import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { useLogin } from '../hooks/useLogin';
import { useNavigate } from 'react-router-dom';


function Login() {
  const [username, setUsername] = useState();
  const [password,setPassword] = useState();
  const {login, error, isLoading} = useLogin()
  const navigate = useNavigate()



const handleSubmit= async (e) => {
    e.preventDefault()
    await login(username, password)
    navigate('/')
    
  }


  return (
    
    <div className="login-container">
      <form className="login-form" onSubmit={handleSubmit}>
        <h2>LOGIN</h2>
        <label htmlFor="username">Username</label>
        <input type="text" id="username" name="username" required onChange={(e)=> setUsername(e.target.value)}></input>
        <label htmlFor="password">Password</label>
        <input type="password" id="password" name="password" required onChange={(e)=>setPassword(e.target.value)}></input>
        <button disabled={isLoading} type="submit">Login</button>
        {error && <div className='error'>{error}</div>}
      </form>
      <div className="register-link">
        <p>
          Don't have an account? <Link to="/register">Register here</Link>
        </p>
      </div>
    </div> 
  );
}

export default Login;