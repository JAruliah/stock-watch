import React from "react";
import {Link} from 'react-router-dom'

function NotFound(){
    return (
        <div style={{textAlign:'center'}} className="not-found container">
            <h1>Yikes, Page Not Found</h1>
            <Link to="/">Take me back</Link>
        </div>
    )
}


export default NotFound