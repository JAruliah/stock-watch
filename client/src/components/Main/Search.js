import React, {useState} from "react";
import StockInfo from "./StockInfo";
import {MDBBtn, MDBInput} from 'mdb-react-ui-kit'

// Get the data from API given the ticker symbol
function Search(props){
    const [stockInfo, setStockInfo] = useState('')
    const [stockPrices, setStockPrices] = useState('')
    const [message, setMessage] = useState('')


    // Handle submit, get data and update the state of watchlist
    function submitHandler(e){
        e.preventDefault()
        const stockTicker = e.target.symbol.value

        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY&symbol=${stockTicker}&apikey=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockTicker}&apikey=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setStockInfo(data)
                if (data["Symbol"] === undefined){
                    setMessage("Invalid Stock Ticker or API rate limit exceeded, please wait a minute and try again")
                }
                else{
                    setMessage('')
                }
            })
            .catch(err => console.log(err))
            setStockPrices(data)
        })
        .catch(err => {
            console.log(err)
            
        })
    }
    return(
        <form onSubmit={submitHandler} className="m-auto mt-5">
            <div className="text-center mb-5">
            <MDBInput label="Stock ticker symbol" className="mt-3 mb-3" name="symbol" autoComplete="off" contrast required></MDBInput>
            <MDBBtn className="mt-1" color="secondary" type="submit">Search</MDBBtn>
            <p>{message}</p>
            </div>
  
            {stockInfo['Symbol'] !== undefined && stockPrices["Time Series (Daily)"] !== undefined? <StockInfo logged={props.logged} watchList={props.watchList} setWatchList={props.setWatchList} handleWatchList={props.handleWatchList} stockPrices={stockPrices} stockInfo={stockInfo}/> : null}
        </form>
    )
}


export default Search