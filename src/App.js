import React, { useState, useEffect, useContext } from 'react';
import './App.css';
import Clock from 'react-digital-clock';
import Coin from './components/Coin'
import axios from 'axios';

function App() {
  const [coins, setCoins] = useState([]);  

  useEffect(() => {
    axios
      .get(
        'https://api.coingecko.com/api/v3/coins/markets?vs_currency=USD&ids=bitcoin%2C%20ethereum%2C%20iota%2C%20xrp%2C%20litecoin%2C%20monero%2C%20stellar%2C%20nano%2C%20chainlink&order=market_cap_desc&per_page=50&page=1&sparkline=false'
      )
      .then(res => {
        setCoins(res.data);
        console.log(res.data);
      })
      .catch(error => console.log(error));
  }, []);

  return (
    <div className="container">
        <div className="clock">
          <Clock format= {'hh-mm'} />
        </div>

        <table>
          <tr>
            <th></th>
            <th>Coin</th>
            <th>Current Price</th>
            <th>24H Change</th>
            <th>ATH</th>    
            <th>Market Cap</th>
          </tr>
          {coins.map(coin => {
                return (
                  <Coin
                    name={coin.name}
                    price={coin.current_price}
                    marketcap={coin.market_cap}
                    image={coin.image}
                    priceChange={coin.price_change_percentage_24h}
                    ath={coin.ath}
                  />
                );
              })}
        </table>

    </div>
  );
}

export default App;
