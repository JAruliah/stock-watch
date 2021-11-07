# Stock Watch

This is a stock watcher, returns data about a given stock when a valid stock ticker symbol is presented

## Description

Project was made using the MERN stack. Users can search up stocks by their ticker symbols and be given information about that stock. Users have an option to create a profile so that they can use the watchlist. The user is able to add and remove items from their watchlist.
## Getting Started

### Installing/Setup
#### Server 
* Inside of server folder .env file must be created with contents as follows: DB_CONNECTION="your database connection"
* to install all server dependencies run:

```
cd server
npm install
```
#### Client
* Inside of client folder .env file must be created with content as follows: 
* REACT_APP_BASE_URL= "your base api url" 
* REACT_APP_API_KEY= "your api key here"

* SCSS files need to be compiled, you can run:

```
cd /client
npm run scss
```

* To instakk all dependencies run:

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
- [x] Style front page
- [ ] Style 404 page
- [ ] Bug testing
- [ ] Deploy project :)





