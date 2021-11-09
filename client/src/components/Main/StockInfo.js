import React, {useState, useEffect} from "react";
import {MDBBtn} from 'mdb-react-ui-kit'
// Display info for the stock
function StockInfo(props){
    // Get most recent stock prices
    const [close,setClose] = useState('')
    const [prevClose, setPrevClose] = useState('')
    const [open, setOpen] = useState('')
    const [low, setLow] = useState('')
    const [high, setHigh] = useState('') 
    const [change, setChange] = useState('')

    // Option to add stock to watchlist if logged in
    const localId = window.localStorage.getItem('id')
    const userId = JSON.parse(localId)

    // Set state of prices everytime props change
    useEffect(() => {
        setClose(props.stockPrices["Time Series (Daily)"][Object.keys(props.stockPrices["Time Series (Daily)"])[0]]['4. close'])
        setPrevClose(props.stockPrices["Time Series (Daily)"][Object.keys(props.stockPrices["Time Series (Daily)"])[1]]['4. close'])
        setOpen(props.stockPrices["Time Series (Daily)"][Object.keys(props.stockPrices["Time Series (Daily)"])[0]]['1. open'])
        setLow(props.stockPrices["Time Series (Daily)"][Object.keys(props.stockPrices["Time Series (Daily)"])[0]]['3. low'])
        setHigh(props.stockPrices["Time Series (Daily)"][Object.keys(props.stockPrices["Time Series (Daily)"])[0]]['2. high'])
        setChange(percentChange(prevClose, close))
    }, [props, prevClose, close])

    // Add item to the watchlist and update the state of watchlist
    function handleWatchList(){
        for (let i =0; i< props.watchList.length;i++){
            if(props.watchList[i].symbol.toUpperCase() === props.stockInfo.Symbol.toUpperCase()){
                return
            }
        }
        fetch(`${process.env.REACT_APP_BASE_URL}watchlist/${userId._id}`, {
            method:'POST',
            headers:{
                'Content-Type': 'application/json'
            },
            body: JSON.stringify({symbol: props.stockInfo.Symbol.toUpperCase(), open: open, low: low, high: high, close: close, change:change})
        })
        .then(response => response.json())
        .then(data => {
            props.setWatchList([...props.watchList, {_id:data[data.length -1]._id,symbol:props.stockInfo.Symbol.toUpperCase(), open:open, low:low, high:high, close:close, change:change}])
        })
        .catch(err => console.log(err)) 

    }

    // Add k,m,b,t to large numbers 
    function numberFormat(num) {
        if (num >= 1000000000) {
           return (num / 1000000000).toFixed(1).replace(/\.0$/, '') + 'B';
        }
        if (num >= 1000000) {
           return (num / 1000000).toFixed(1).replace(/\.0$/, '') + 'M';
        }
        if (num >= 1000) {
           return (num / 1000).toFixed(1).replace(/\.0$/, '') + 'K';
        }
        return num;
   }

    // Calculate the percent change of the current and previous close prices
   function percentChange(a, b) {
    let percent;
    if(b !== 0) {
        if(a !== 0) {
            percent = (b - a) / a * 100;
        } else {
            percent = b * 100;
        }
    } else {
        percent = - a * 100;            
    }       
    return Math.round(percent * 100) / 100
}

    return (
        
        <div className="stock-info mb-5">
            <h3 className="text-center pb-3">{props.stockInfo.Name} {`(${props.stockInfo.Symbol}) `}{change>0? <span style={{color:'green'}}>
            <svg xmlns="http://www.w3.org/2000/svg" className="filter-green" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M18.655 10.405a.75.75 0 000-1.06l-6.25-6.25a.75.75 0 00-1.06 0l-6.25 6.25a.75.75 0 101.06 1.06l4.97-4.97v14.44a.75.75 0 001.5 0V5.435l4.97 4.97a.75.75 0 001.06 0z"></path></svg>{`${change}%`}
                </span>:
                <span style={{color:'red'}}>
                    <svg xmlns="http://www.w3.org/2000/svg" className="filter-red" viewBox="0 0 24 24" width="24" height="24"><path fill-rule="evenodd" d="M4.97 13.22a.75.75 0 000 1.06l6.25 6.25a.75.75 0 001.06 0l6.25-6.25a.75.75 0 10-1.06-1.06l-4.97 4.97V3.75a.75.75 0 00-1.5 0v14.44l-4.97-4.97a.75.75 0 00-1.06 0z"></path></svg>{`${change}%`}
                </span>}
                </h3>
            <div className="data d-flex justify-content-around pb-3">
                <div>
                    <p><span>Close:</span> ${close}</p>
                    <p><span>Open:</span> ${open}</p>
                    <p><span>Low:</span> ${low}</p>
                    <p><span>High:</span> ${high}</p>
                    {parseFloat(props.stockInfo.DividendYield) === 0 ? <p><span>Dividend:</span> -</p>:<p><span>Dividend:</span> {(Math.round(props.stockInfo.DividendYield*100 * 100) / 100).toFixed(2)}%</p>}
                    <p><span>Exchange:</span> {props.stockInfo.Exchange}</p>
                </div>
                <div>
                    <p><span>Sector:</span> {props.stockInfo.Sector}</p>
                    <p><span>Mkt cap:</span> ${numberFormat(props.stockInfo.MarketCapitalization)}</p>
                    {isNaN(parseFloat(props.stockInfo.PERatio)) ? <p><span>P/E:</span> -</p> : <p><span>P/E:</span> {props.stockInfo.PERatio}</p>}
                    <p><span>52W high:</span> ${props.stockInfo['52WeekHigh']}</p>
                    <p><span>52W low:</span> ${props.stockInfo['52WeekLow']}</p>
                    {props.stockInfo.EPS === undefined ? <p><span>EPS:</span> -</p>:<p><span>EPS:</span> ${props.stockInfo.EPS}</p>}
                </div>
            </div>
            <div className="text-center">
            {props.logged ? <MDBBtn color="success" type="button" onClick={handleWatchList}>Add To WatchList</MDBBtn>: null}
            </div>
            
        </div>
    )
}


export default StockInfo