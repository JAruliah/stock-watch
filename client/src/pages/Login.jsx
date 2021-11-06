import React from "react";
import Form from '../components/Login/Form'
import Header from "../components/Login/Header";

function Login(props){
    return (
        <div className="login">
            <Header />
            <Form handleLogin={props.handleLogin} />
        </div>
        
    )
}


export default Login