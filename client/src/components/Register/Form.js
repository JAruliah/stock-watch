import React, {useState} from "react";

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

    return (
        //The register form
        <div>
            <form onSubmit={submitHandler}>  
                    <label>Email
                    <input type="text" name="email" value={email} maxLength="50" onChange={(e) => {setEmail(e.target.value)}} autoComplete="off" required />
                    </label>
                    <label>First Name
                    <input type="text" name="firstName" value={firstName} maxLength="20" onChange={(e) => {setFirstName(e.target.value)}} autoComplete="off" required />
                    </label>
                    <label>Last Name
                    <input type="text" name="lastName" value={lastName} maxLength="20" onChange={(e) => {setLastName(e.target.value)}} autoComplete="off" required />
                    </label>
                    <label>Password
                    <input type="password" name="password" value={password} minLength="8" maxLength="20" onChange={(e) => {setPassword(e.target.value)}} autoComplete="off" required />
                    </label>
                    <label>Confirm Password
                    <input type="password" name="password" value={passwordConfirm} minLength="8" maxLength="20" onChange={(e) => {setPasswordConfirm(e.target.value)}} autoComplete="off" required />
                    </label>
                    <button>Submit</button>
                    <p>{message}</p>
                 
            </form>
        </div>
    )

}


export default Form