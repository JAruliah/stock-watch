import React from "react";
import Form from '../components/Register/Form'

//Register Page
function Register(props){
    return (
        <div>
            <Form handleLogin={props.handleLogin} setLogged={props.setLogged}/>
        </div>
    )

}


export default Register