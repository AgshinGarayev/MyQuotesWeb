import React from 'react';
import { Link } from 'react-router-dom';
import { useLogout } from '../hooks/useLogout';
import { useAuthContext } from '../hooks/useAuthContext';


function NavBar() {

    const {logout} = useLogout()
    const {user} = useAuthContext()

    const handleClick = () =>{
        logout()
    }

    return (
        <header>
           <nav>
            <div className="Logo">
                <Link to="/"><img src="MyLogoo.png" alt="Logo" /></Link>
            </div>
            <ul className="nav-links">
                <li> <Link to="/">Home</Link> </li>
                <li> <Link to="/recents">Recents</Link> </li>
                <li> <Link to="/post">My Quotes</Link></li>
            </ul>

            

            {user && (
                <div>
                    <span>{user.username}</span>
                    <button onClick={handleClick}>LOGOUT</button>
                </div>    
            )}



            {!user && (

            <div className="LoginAndRegister">
                <div className="Login">
                    <Link to="/login">Login</Link>
                </div>
                <div className="Register">
                    <Link to="/register">Register</Link>
                </div>
            </div>
            )}
            
           </nav>
        </header>
    );
}

export default NavBar;