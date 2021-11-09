import React from "react";
import {Link} from 'react-router-dom'
import {MDBBtn, MDBIcon} from 'mdb-react-ui-kit'

function Nav(props){
    return (
        <nav>
            <ul>
                <li>{props.logged ? <MDBBtn color="secondary" className="mt-1" onClick={props.handleLogout}>Logout</MDBBtn>: <Link to="/login"><MDBBtn className="mt-1" color="secondary">Login</MDBBtn></Link>}</li>
                <li>
                    <MDBBtn className='m-1 github' style={{ backgroundColor: '#333333' }} target="_blank" href='https://github.com/JAruliah/stock-watch'>
                        <MDBIcon fab icon='github' />
                    </MDBBtn>
                </li>
            </ul>
        </nav>
    )
}


export default Nav