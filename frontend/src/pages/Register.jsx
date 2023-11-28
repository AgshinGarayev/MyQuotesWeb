import { useState } from 'react'
import { Link } from 'react-router-dom'
import { useRegister } from '../hooks/useRegister';
import { useNavigate } from 'react-router-dom';

function Register() {
    const [username, setUsername] = useState('');
    const [email, setEmail] = useState('');
    const [password, setPassword] = useState('');
    const  {register, error, isLoading} = useRegister()
    const navigate = useNavigate()
    

  const handleSubmit = async (e) => {
    e.preventDefault()
    await register(username,email,password)
    navigate('/')
  }

  return (
   
    <div className="register-container">
        <form className="register-form" onSubmit={handleSubmit}>
            <h2>REGISTER</h2>
            <input type="text" 
            placeholder="Username" 
            id="username" 
            name="username"
            required 
            onChange={(e)=> setUsername(e.target.value)}></input>
            <input type="email" 
            placeholder="Email"
            id="email"
            name="email"
            required 
            onChange={(e)=> setEmail(e.target.value)}></input>
            <input type="password"
            placeholder="******"
            id="password"
            name="password"
            required
            onChange={(e)=> setPassword(e.target.value)} ></input>
           
            <button disabled={isLoading} type="submit">Register</button> 

            {error && <div className='error'>{error}</div>}
            
        </form>
        <div className="login-link">
            <p>Already have an account? <Link to={"/login"}>Login here</Link></p>
        </div>
    </div>

      
   
    
  )
}

export default Register