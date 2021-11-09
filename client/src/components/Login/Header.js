import React from "react";
import {Link} from 'react-router-dom'

function Header(){
    return (
        <header>
            <div className="logo mt-3"><img  src="img/logo.png" alt="logo" width="80" height="80"/></div>
            <h1 className="text-center mb-3">Login</h1>
            <nav>
                <ul>
                <li className="home-link"> <Link to='/'>Home</Link></li>
                    <li className="login-link"> <Link to='/login'>Login</Link></li>
                    <li className="register-link"> <Link to='/register'>Register</Link></li>
                </ul>
            </nav>
           
        </header>
    )
}


export default Header