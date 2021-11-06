import React, {useState} from "react";
import StockInfo from "./StockInfo";
import {MDBBtn, MDBInput} from 'mdb-react-ui-kit'

// Get the data from API given the ticker symbol
function Search(props){
    const [symbol, setSymbol] = useState('')
    const [price, setPrice] = useState('') 
    const [dividend, setDividend] = useState('')
    const [open, setOpen] = useState('')
    const [low, setLow] = useState('')
    const [high, setHigh] = useState('')
    const [description, setDescription] = useState('')
    const [sector, setSector] = useState('')
    const [name, setName] = useState('')
    const [message, setMessage] = useState('')
    const [divYield, setDivYield] = useState('')

    // Handle submit, get data and update the state of watchlist
    function submitHandler(e){
        e.preventDefault()
        const stockTicker = e.target.symbol.value
        fetch(`https://www.alphavantage.co/query?function=TIME_SERIES_DAILY_ADJUSTED&symbol=${stockTicker}&apikey=${process.env.REACT_APP_API_KEY}`)
        .then(response => response.json())
        .then(data => {
            fetch(`https://www.alphavantage.co/query?function=OVERVIEW&symbol=${stockTicker}&apikey=${process.env.REACT_APP_API_KEY}`)
            .then(response => response.json())
            .then(data => {
                setDescription(data['Description'])
                setSector(data['Sector'])
                setName(data['Name'])
                setDivYield(data['DividendYield'])
            })
            setSymbol(stockTicker)
            const stockData = data[Object.keys(data)[1]]
            setPrice(stockData[Object.keys(stockData)[0]]["4. close"])
            setDividend(stockData[Object.keys(stockData)[0]]["7. dividend amount"])
            setOpen(stockData[Object.keys(stockData)[0]]["1. open"])
            setLow(stockData[Object.keys(stockData)[0]]["3. low"])
            setHigh(stockData[Object.keys(stockData)[0]]["2. high"])
        
            setMessage('')
        })
        .catch(err => {
            console.log(err)
            setMessage('Invalid Ticker Symbol')
        })
    }
    return(
        <form onSubmit={submitHandler} className="m-auto mt-5">
            <div className="text-center mb-5">
            <MDBInput className="mt-3 mb-3" name="symbol" autoComplete="off" contrast required></MDBInput>
            <MDBBtn className="mt-1" color="secondary" type="submit">Search</MDBBtn>
            </div>
            <p>{message}</p>
            {message === '' && description !=='' ? <StockInfo logged={props.logged} watchList={props.watchList} setWatchList={props.setWatchList} handleWatchList={props.handleWatchList} symbol={symbol} divYield={divYield} name={name} sector={sector} description={description} dividend={dividend} open={open} low={low} high={high} price={price}/> : null}
        </form>
    )
}


export default Search