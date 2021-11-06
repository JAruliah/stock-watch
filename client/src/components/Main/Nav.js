import React from "react";
import {Link} from 'react-router-dom'
import {MDBBtn} from 'mdb-react-ui-kit'

function Nav(props){
    return (
        <nav>
            <ul>
                {props.logged ? <MDBBtn className="mt-1" color="secondary" onClick={props.handleLogout}>Logout</MDBBtn>: <Link to="/login"><MDBBtn className="mt-1" color="secondary">Login</MDBBtn></Link>}
            </ul>
        </nav>
    )
}


export default Nav