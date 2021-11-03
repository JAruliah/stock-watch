import React, {useState} from "react";

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
            <label>Email
            <input  type="text" name="email" value={email} onChange={(e) => setEmail(e.target.value)} maxLength="100" autoComplete="off" required/>
            </label>
            <label>Password
            <input  type="password" name="password" id="password" value={password} onChange={(e) => setPassword(e.target.value)} maxLength="25" autoComplete="off" required/>
            </label>
            <label><input type="checkbox" onClick={clickHandler} />Show Password</label>
            <button>Login</button>
            <p name="message">{message}</p>
        </form>
    )
}

export default Form