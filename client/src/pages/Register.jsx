import React from "react";
import Form from '../components/Register/Form'
import Header from "../components/Register/Header";

//Register Page
function Register(props){
    return (
        <div className="register">
            <div className="container">
                <Header />
                <Form handleLogin={props.handleLogin} setLogged={props.setLogged}/>
            </div>
        </div>
    )

}


export default Register