import React from "react";

function StockInfo(props){
    // Display info for the stock
    // Option to add stock to watch list if signed in
    const localId = window.localStorage.getItem('id')
    const userId = JSON.parse(localId)
    function handleWatchList(){
        fetch(`${process.env.REACT_APP_BASE_URL}watchlist/${userId._id}`, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({symbol: props.symbol, open: props.open, low: props.low, high: props.high, close: props.close})
        })
        .then(response => response.json())
        .then(data => console.log(data))
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
            <button type="button" onClick={handleWatchList}>Add To WatchList</button>
            
        </div>
    )
}


export default StockInfo