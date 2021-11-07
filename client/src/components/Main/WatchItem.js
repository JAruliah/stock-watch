import React from "react"
import {MDBBtn} from 'mdb-react-ui-kit'

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
                <div>
                    <p className="watchlist-heading">Symbol</p>
                    <p>{props.symbol}</p>
                </div> 
                <div>
                    <p className="watchlist-heading">Close</p>
                    <p>{props.close}</p>
                </div> 
                <div>
                    <p className="watchlist-heading">Change</p>
                    <p>{props.change}%</p>
                </div> 
                <div style={{width:'fit-content', margin:'auto 0'}}>
                 <MDBBtn color="danger" type="button" onClick={removeItem}>Remove</MDBBtn>
                </div>
        </div>
    )
}


export default WatchItem