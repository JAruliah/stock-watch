import React from "react";
import Form from '../components/Login/Form'
import Header from "../components/Login/Header";

function Login(props){
    return (
        <div className="login">
             <div className="container">
                <Header />
                <Form handleLogin={props.handleLogin} />
            </div>
        </div>
        
    )
}


export default Login