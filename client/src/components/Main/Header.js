import React from "react";
import Nav from "./Nav";

function Header(props){
    return (
        <header>
            <h1 className="text-center" >Stock Lookup</h1>
            <Nav logged={props.logged} handleLogout={props.handleLogout}/>
            
        </header>
    )
}


export default Header