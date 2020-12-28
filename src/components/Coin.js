import React from 'react';

const Coin = ({
  name,
  price,
  marketcap,
  image,
  priceChange,
  hpriceChange,
  ath
}) => {
  return (
            <tr>
              <td ><img src={image} className='coin-img'/></td>
              <td><h3>{name}</h3></td>
              <td><p>${price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p></td>
              <td>
                      {hpriceChange < 0 && hpriceChange > -10 ? (
                            <p className='red'>{hpriceChange.toFixed(2)}%</p> 
                        ) : hpriceChange < -10  ? (
                            <p className='redBold'>{hpriceChange.toFixed(2)}%</p>   
                        ) : hpriceChange < 10 && hpriceChange > 0 ? (
                            <p className='green'>{hpriceChange.toFixed(2)}%</p>
                        ) : hpriceChange > 10 (
                            <p className='greenBold'>{hpriceChange.toFixed(2)}%</p>
                        )}
              </td>
              <td>
                      {priceChange < 0 && priceChange > -10 ? (
                            <p className='red'>{priceChange.toFixed(2)}%</p> 
                        ) : priceChange < -10  ? (
                            <p className='redBold'>{priceChange.toFixed(2)}%</p>   
                        ) : priceChange < 10 && priceChange > 0 ? (
                            <p className='green'>{priceChange.toFixed(2)}%</p>
                        ) : (
                            <p className='greenBold'>{priceChange.toFixed(2)}%</p>
                        )}
              </td>
              <td>${ath.toLocaleString()}</td>    
              <td>${marketcap.toLocaleString()}</td>
            </tr>
  );
};

export default Coin;