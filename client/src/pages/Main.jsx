import React, {useState, useEffect} from "react";
import Header from '../components/Main/Header'
import Search from "../components/Main/Search";
import WatchList from "../components/Main/WatchList";

function Main(props){
    
    const [watchList, setWatchList] = useState([])

    //Get the watch list of the logged in user
    function getWatchList(){
        const localId = window.localStorage.getItem('id')
        const userId = JSON.parse(localId)
        fetch(`${process.env.REACT_APP_BASE_URL}watchlist/${userId._id}`)
        .then(response => response.json())
        .then(data => {
            setWatchList(data.watchlist)
        })
        .catch(err => console.log(err))
    }

    //Get watch list if the user is logged in 
    useEffect(() =>{
        if (props.logged){
            getWatchList()
        }
    }, [props.logged])

    return (
        <div className="main"> 
            <Header logged={props.logged} handleLogout={props.handleLogout}/>
            <Search setWatchList={setWatchList} watchList={watchList} logged={props.logged}/>
            {props.logged ? <WatchList watchList={watchList} setWatchList={setWatchList} logged={props.logged}/>: <p style={{textAlign:'center'}}>Please Login to add to watchlist</p>}

        </div>
    )
}


export default Main