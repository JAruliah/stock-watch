import React from "react";
import WatchItem from "./WatchItem";
function WatchList(props){
    //Displays all watchlist items 
    console.log(props)
    return (
        <div className="watchlist">
            <h3 className="mb-4">WatchList</h3>
            
           {props.watchList.map(item => {return <WatchItem watchList={props.watchList} setWatchList={props.setWatchList} key={item._id} itemId={item._id} symbol={item.symbol} open={item.open} high={item.high} low={item.low} close={item.close} change={item.change}   />})}
        </div>
    )
}


export default WatchList