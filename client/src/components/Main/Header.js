import React from "react";
import Nav from "./Nav";
import Markets from "./Markets";

function Header(props){
    return (
        <header>
            <h1>Main Page</h1>
            <Nav logged={props.logged} handleLogout={props.handleLogout}/>
            <Markets />
            

        </header>
    )
}


export default Header