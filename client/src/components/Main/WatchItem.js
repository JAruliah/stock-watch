import React from "react";

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
        <div className="watchlist-item" style={{display:'flex', justifyContent:'space-between'}}>
            <p>{props.symbol}</p>
            <p>{props.open}</p>
            <p>{props.low}</p>
            <p>{props.high}</p>
            <p>{props.close}</p>
            <button type="button" onClick={removeItem}>Remove</button>
        </div>
    )
}


export default WatchItem