import React from "react";

function StockInfo(props){

    // Display info for the stock
    // Option to add stock to watchlist if logged in

    const localId = window.localStorage.getItem('id')
    const userId = JSON.parse(localId)

    // Add item to the watchlist and update the state of watchlist
    function handleWatchList(){
        for (let i =0; i< props.watchList.length;i++){
            if(props.watchList[i].symbol.toUpperCase() === props.symbol.toUpperCase()){
                return
            }
        }
        fetch(`${process.env.REACT_APP_BASE_URL}watchlist/${userId._id}`, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({symbol: props.symbol.toUpperCase(), open: props.open, low: props.low, high: props.high, close: props.close})
        })
        .then(response => response.json())
        .then(data => {
            props.setWatchList([...props.watchList, {_id:data[data.length -1]._id,symbol:props.symbol.toUpperCase(), open:props.open, low:props.low, high:props.high}])
        })
        .catch(err => console.log(err)) 

    }

    return (
        <div className="stock-info">
            <h3>{props.name} <span>{props.symbol.toUpperCase()}</span></h3>
            <p>Open: {props.open}</p>
            <p>Low: {props.low}</p>
            <p>High: {props.high}</p>
            <p>Closing Price: ${props.price}</p>
            <p>Dividend: {props.dividend}</p>
            <p>Yield: {props.divYield}</p>
            <p>Sector: {props.sector}</p>
            <p>Description: {props.description}</p>
            {props.logged ? <button type="button" onClick={handleWatchList}>Add To WatchList</button>: null}
            
        </div>
    )
}


export default StockInfo