import React from "react";
import {Link} from 'react-router-dom'

function Header(){
    return (
        <nav>
            <h1>Register</h1>
            <ul>
                <li> <Link to='/login'>Login</Link></li>
                <li> <Link to='/register'>Register</Link></li>
            </ul>
           
        </nav>
    )
}


export default Header