import React from "react";
import Nav from "./Nav";

function Header(props){
    return (
        <header className="container">
            <div>
                <div className="logo-heading" style={{margin:'0'}}>
                    <img  src="img/logo.png" alt="logo" width="40" height="40"/>
                    <h1 style={{marginLeft:'.5rem'}}>Stonka</h1>
                </div>
                <Nav logged={props.logged} handleLogout={props.handleLogout}/>
            </div>
            
            
        </header>
    )
}


export default Header