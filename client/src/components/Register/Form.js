import React, {useState} from "react";
import { MDBBtn, MDBInput, MDBCheckbox } from 'mdb-react-ui-kit';

//Register Form
function Form(props){
    //Set state
    const [email, setEmail] = useState("")
    const [firstName, setFirstName] = useState("")
    const [lastName, setLastName] = useState("")
    const [password, setPassword] = useState("")
    const [passwordConfirm, setPasswordConfirm] = useState("")
    const [message, setMessage] = useState("")

    //Handle submit of the form
    function submitHandler(e){
        e.preventDefault()
        if(password === passwordConfirm){
            
            // REGEX email format 
            let re = /^(([^<>()\]\\.,;:\s@"]+(\.[^<>()\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/;
    
            if ( re.test(email) ) {
                fetch(`${process.env.REACT_APP_BASE_URL}users/register`, {
                    method:'POST',
                    headers:{
                        'Content-Type': 'application/json'
                    },
                    body: JSON.stringify({email:email.toLowerCase(), firstName: firstName, lastName: lastName, password: password})
                })
                .then(response => response.json())
                .then(data => {
                    window.localStorage.setItem('id',JSON.stringify(data))
                    props.handleLogin()
                    setMessage("Account Created")
                })
                .catch(err => console.log(err))


                
            }
            else {
                setMessage("Invalid Email")
            }
        }
        else{
            setMessage("Passwords do not match")
        }
    }
    function clickHandler(event){
        let x = document.getElementById("password");
        let i = document.getElementById("passwordConfirm")
        if (x.type === "password") {
          x.type = "text";
          i.type="text"
        } else {
          x.type = "password";
          i.type = "password"
        }
    }

    return (
        //The register form
        <div>
            <form onSubmit={submitHandler}>  
                    
                    <MDBInput className="mt-3 mb-3" label="Email" type="text" name="email" value={email} maxLength="50" onChange={(e) => {setEmail(e.target.value)}} autoComplete="off"  contrast required />
                    <MDBInput className="mt-3 mb-3" label="First Name" type="text" name="firstName" value={firstName} maxLength="20" onChange={(e) => {setFirstName(e.target.value)}} autoComplete="off"  contrast required />
                    <MDBInput className="mt-3 mb-3" label="Last Name" type="text" name="lastName" value={lastName} maxLength="20" onChange={(e) => {setLastName(e.target.value)}} autoComplete="off"  contrast required />
                    <MDBInput className="mt-3 mb-3" label="Password" id="password" type="password" name="password" value={password} minLength="8" maxLength="20" onChange={(e) => {setPassword(e.target.value)}} autoComplete="off"  contrast required />
                    <MDBInput className="mt-3 mb-3" label="Confirm Password" id="passwordConfirm" type="password" name="password" value={passwordConfirm} minLength="8" maxLength="20" onChange={(e) => {setPasswordConfirm(e.target.value)}} autoComplete="off"  contrast required />
                    <MDBCheckbox label="Show passwords" type="checkbox" onClick={clickHandler} />
                    <div className="text-center">
                    <MDBBtn className="mt-1" color="secondary">Sign Up</MDBBtn>
                    </div>
                    <p style={{color:"#f72052"}} className="m-5 text-center" >{message}</p>
                 
            </form>
        </div>
    )

}


export default Form