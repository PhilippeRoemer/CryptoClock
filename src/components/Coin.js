import React from 'react';
import { Sparklines, SparklinesLine } from 'react-sparklines';

const Coin = ({
  name,
  price,
  marketcap,
  image,
  priceChange_1h,
  priceChange_24h,
  priceChange_7d,
  ath,
  chart
}) => {
  return (
            <tr>
              <td ><img src={image} className='coin-img'/></td>
              <td><h3>{name}</h3></td>
              <td><p>${price.toFixed(2).replace(/(\d)(?=(\d{3})+(?!\d))/g, '$1,')}</p></td>
              <td>
                      {priceChange_1h < 0 && priceChange_1h > -10 ? (
                            <p className='red'>{priceChange_1h.toFixed(2)}%</p> 
                        ) : priceChange_1h < -10  ? (
                            <p className='redBold'>{priceChange_1h.toFixed(2)}%</p>   
                        ) : priceChange_1h < 10 && priceChange_1h > 0 ? (
                            <p className='green'>{priceChange_1h.toFixed(2)}%</p>
                        ) : priceChange_1h > 10 (
                            <p className='greenBold'>{priceChange_1h.toFixed(2)}%</p>
                        )}
              </td>
              <td>
                      {priceChange_24h < 0 && priceChange_24h > -10 ? (
                            <p className='red'>{priceChange_24h.toFixed(2)}%</p> 
                        ) : priceChange_24h < -10  ? (
                            <p className='redBold'>{priceChange_24h.toFixed(2)}%</p>   
                        ) : priceChange_24h < 10 && priceChange_24h > 0 ? (
                            <p className='green'>{priceChange_24h.toFixed(2)}%</p>
                        ) : (
                            <p className='greenBold'>{priceChange_24h.toFixed(2)}%</p>
                        )}
              </td>
              <td>
                      {priceChange_7d < 0 && priceChange_7d > -10 ? (
                            <p className='red'>{priceChange_7d.toFixed(2)}%</p> 
                        ) : priceChange_7d < -10  ? (
                            <p className='redBold'>{priceChange_7d.toFixed(2)}%</p>   
                        ) : priceChange_7d < 10 && priceChange_7d > 0 ? (
                            <p className='green'>{priceChange_7d.toFixed(2)}%</p>
                        ) : (
                            <p className='greenBold'>{priceChange_7d.toFixed(2)}%</p>
                        )}                  
              </td>
              <td>${ath.toLocaleString()}</td>    
              <td>${marketcap.toLocaleString()}</td>
              <td className='sparklineGraph'>
                    <Sparklines data={chart}>
                        <SparklinesLine color="#66fcf1" />
                    </Sparklines>
              </td>
            </tr>
  );
};

export default Coin;