import React from "react";
import Header from '../components/Main/Header'
import Search from "../components/Main/Search";
function Main(props){
    return (
        <div>
            <Header logged={props.logged} handleLogout={props.handleLogout}/>
            <Search />
        </div>
    )
}


export default Main