import React from "react";
import {Link} from 'react-router-dom'

function Nav(props){
    return (
        <nav>
            <ul>
                {props.logged ? <button onClick={props.handleLogout}>Logout</button>: <button><Link to="/login">Login</Link></button>}
            </ul>
        </nav>
    )
}


export default Nav