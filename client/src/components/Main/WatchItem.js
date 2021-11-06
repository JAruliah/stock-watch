import React from "react"
import {MDBBtn, MDBTable, MDBTableHead, MDBTableBody } from 'mdb-react-ui-kit'

function WatchItem(props){
    //Remove an item from the watchlist state and the database
    function removeItem(){
        const localId = window.localStorage.getItem('id')
        const userId = JSON.parse(localId)
        fetch(`${process.env.REACT_APP_BASE_URL}watchlist/${userId._id}`, {
            method:'DELETE',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({_id: props.itemId})
        })
        .then(response => response.json())
        .then(data => {
            const newWatchList = props.watchList.filter((item) => item._id !== props.itemId);
            props.setWatchList(newWatchList)
        })
        .catch(err => console.log(err))
    }

    return (
        <div className="watchlist-item mb-3" style={{display:'flex', justifyContent:'space-between'}}>
                <p>{props.symbol}</p> 
                <p>{props.open}</p>
                <p>{props.low}</p>
                <p>{props.high}</p>
                <p>{props.close}</p>
            <MDBBtn color="danger" type="button" onClick={removeItem}>Remove</MDBBtn>
        </div>
    )
}


export default WatchItem