import React from "react";

function StockInfo(props){
    return (
        <div className="stock-info">
            <h3>{props.name} <span>{props.symbol.toUpperCase()}</span></h3>
            <p>Open: {props.open}</p>
            <p>Low: {props.low}</p>
            <p>High: {props.high}</p>
            <p>Closing Price: ${props.price}</p>
            <p>Dividend: {props.dividend}</p>
            <p>Sector: {props.sector}</p>
            <p>Description: {props.description}</p>
            
            
        </div>
    )
}


export default StockInfo