import React, {useState} from "react";
import { MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

function Form(props){
    const [email, setEmail] = useState("")
    const [password, setPassword] = useState("")
    const [message, setMessage] = useState("")

    //On submit POST data to api
    function submitHandler(event){
        event.preventDefault()
        let re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;

        if ( re.test(email) ) {
            fetch(`${process.env.REACT_APP_BASE_URL}users/login`, {
                method:'POST',
                headers:{
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify({email:email.toLowerCase(), password: password})
            })
            .then(response => response.json())
            .then(data => {
              window.localStorage.setItem('id',JSON.stringify(data))
              props.handleLogin()
             
            })
            .catch(err => {
                console.log(err)
                setMessage("Invalid credentials")
            })
        }
        else {
            setMessage("Invalid Email")
          }
    }

    //Show password toggle
    function clickHandler(event){
        let x = document.getElementById("password");
        if (x.type === "password") {
          x.type = "text";
        } else {
          x.type = "password";
        }
    }

    return(
        <form onSubmit={submitHandler}>
            <MDBInput  className="mt-3 mb-3" label="Email" type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength="100" autoComplete="off" contrast required/>
            <MDBInput className="mt-3 mb-3" label="Password" type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} maxLength="25" autoComplete="off" contrast required/>
            <MDBCheckbox label="Show password" type="checkbox" onClick={clickHandler} />
            <div className="text-center">
            <MDBBtn className="mt-1" color="secondary">Login</MDBBtn>
            </div>
            <p style={{color:'#f72052'}} className="m-5 text-center" name="message">{message}</p>
        </form>
    )
}

export default Form