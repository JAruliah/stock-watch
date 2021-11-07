import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Register from './pages/Register'
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Login from './pages/Login'
import './styles/css/Main.css'


// Main App
function App() {
    const auth = window.localStorage.getItem('auth')
    let setAuth = (auth === 'true')
    const [logged, setLogged] = useState(setAuth)
    //function to handle login
    const handleLogin = e => {
      setLogged(true)
      window.localStorage.setItem('auth',JSON.stringify(true));
    }
    //function to handle logout
    const handleLogout = e => {
      setLogged(false);
      localStorage.removeItem('id');
      window.localStorage.setItem('auth',JSON.stringify(false));
      window.location.href="/"
      }
    // React Router Dom for all other pages
    return(
        <div className="container">
            <Router>
                <Switch>
                        
                        <Route exact path="/" render={props => 
                        (<Main handleLogin={handleLogin} setLogged={setLogged} logged={logged} handleLogout={handleLogout}/>)
                        }/>

                        <Route exact path="/register">
                            {logged ? <Redirect to="/" /> :  <Route exact path ="/register" handleLogin={handleLogin} render={props => <Register {...props} handleLogin={handleLogin}/>}/> }
                        </Route>

                        <Route exact path="/login">
                            {logged ? <Redirect to="/" /> :  <Route exact path ="/login" handleLogin={handleLogin} render={props => <Login {...props} handleLogin={handleLogin}/>}/> }
                        </Route>

                        <Route exact path="/404" component={NotFound} />
                        <Redirect to="/404"/>
                       

                </Switch>

            </Router>
        </div>
    )
}


export default App