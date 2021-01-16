import React, { useState, useEffect, useContext } from "react";
import "./App.css";
import Clock from "react-digital-clock";
import Coin from "./components/Coin";
import axios from "axios";
import Moment from "react-moment";

function App() {
    const [coins, setCoins] = useState([]);

    useEffect(() => {
        axios
            .get(
                "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&ids=bitcoin%2Cethereum%2Clitecoin%2Ciota%2Cmonero&order=market_cap_desc&per_page=100&page=1&sparkline=true&price_change_percentage=1h%2C24h%2C7d"
            )
            .then((res) => {
                setCoins(res.data);
                console.log(res.data);
            })
            .catch((error) => console.log(error));
    }, [coins]);

    return (
        <div className="container">
            <div className="date">
                <Moment format="MMMM D, YYYY" withTitle />
            </div>
            <div className="clock">
                <Clock format={"hh-mm"} />
            </div>
            <table>
                <tr>
                    <th></th>
                    <th>Coin</th>
                    <th>Current Price</th>
                    <th>1h</th>
                    <th>24h</th>
                    <th>7d</th>
                    <th>ATH</th>
                    <th>Market Cap</th>
                    <th>7d Chart</th>
                </tr>
                {coins.map((coin) => {
                    return (
                        <Coin
                            name={coin.name}
                            price={coin.current_price}
                            marketcap={coin.market_cap}
                            image={coin.image}
                            priceChange_1h={coin.price_change_percentage_1h_in_currency}
                            priceChange_24h={coin.price_change_percentage_24h}
                            priceChange_7d={coin.price_change_percentage_7d_in_currency}
                            ath={coin.ath}
                            chart={coin.sparkline_in_7d.price}
                        />
                    );
                })}
            </table>
        </div>
    );
}

export default App;
