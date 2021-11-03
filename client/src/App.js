import React, {useState} from "react";
import {BrowserRouter as Router, Route, Switch, Redirect} from 'react-router-dom'
import Register from './pages/Register'
import Main from "./pages/Main";
import NotFound from "./pages/NotFound";
import Login from './pages/Login'


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
                    <Router>
                        <Route path="/register" render={props => 
                        (<Register handleLogin={handleLogin} setLogged={setLogged}/>)
                        }/>
                        </Router>

                        <Router>
                        <Route path="/login" render={props => 
                        (<Login handleLogin={handleLogin} setLogged={setLogged}/>)
                        }/>
                        </Router>

                        <Router>
                        <Route path="/" render={props => 
                        (<Main logged={logged} setLogged={setLogged}/>)
                        }/>
                        </Router>
                        
                        <Route eact path="/404" component={NotFound} />
                        <Redirect to="/404"/>
                </Switch>
            </Router>
        </div>
    )
}


export default App