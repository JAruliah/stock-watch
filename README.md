# Stonka
![stock-watch](https://user-images.githubusercontent.com/71105258/140875388-99cfcebe-c342-4500-8311-faa58317ec73.png)
### Live Site: https://stonka.jaruliah.me/
This is a stock, returns data about a given stock when a valid stock ticker symbol is presented. Logged in users can add to watchlist.

## Description

This project utilizes an external API to fetch the data https://www.alphavantage.co/. Users can search up stocks by their ticker symbols and be given information about that stock. Users have an option to create a profile so that they can use the watchlist. The user is able to add and remove items from their watchlist. Currently a free api key is being used, with a limit of 2 requests a minute and 500 requests daily.

## Built With
- React
- Nodejs
- Express
- MongoDB
- SCSS
- Material Design Bootstrap
- Hosted on NGINX VPS

## Getting Started

### Installing/Setup
#### Server 
* Inside of server folder .env file must be created with contents as follows: 

    DB_CONNECTION="your database connection"

* to install all server dependencies run:

```
cd server
npm install
```
#### Client
* Inside of client folder .env file must be created with content as follows: 

    REACT_APP_BASE_URL= "your base api url" 

    REACT_APP_API_KEY= "your api key here"`

* SCSS files need to be compiled, you can run:

```
cd /client
npm run scss
```

* To install all dependencies run:

```
cd client
npm install
```

### Executing program
#### Server

* To start the server run:

```
cd ../server
npm run start
```

#### Client
* To start react run:

```
cd ../client
npm start
```
* To create a production ready build:
```
cd ../client
npm run build
```

## Things to do
- [x] ~Setup project~
- [x] ~Initialize and connect database~
- [x] ~Create register route~
- [x] ~Create register front end~
- [x] ~Create login route~
- [x] ~Create login front end~
- [x] ~Create front page, with api fetches~
- [x] ~Create GET watchlist route~
- [x] ~Create POST watchlist route~
- [x] ~Create DELETE watchlist route~
- [x] ~Bug testing~
- [x] ~Style register page~
- [x] ~Style login page~
- [x] ~Style front page~
- [x] ~Style 404 page~
- [x] ~Bug testing~
- [x] ~Deploy project :)~

## Possible new features?
 - [ ] Purchase premium key for more data?
 - [ ] Live stock ticker price?
 - [ ] Crypto?
 - [ ] ???
  





