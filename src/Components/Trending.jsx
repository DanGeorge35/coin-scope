import React from "react";

import { useEffect, useState } from "react";
import axios from "axios";

const Trending = () => {
  const [trending, setTrending] = useState([]);

  const url = "https://api.coingecko.com/api/v3/search/trending";

  useEffect(() => {
    axios.get(url).then((response) => {
      const trendingCoins = response.data.coins.slice(0, 9);
      setTrending(trendingCoins);
      console.log(trendingCoins);
    });
  }, []);

  return (
    <div className="rounded-div my-12 py-8 text-primary">
      <h1 className="text-l font-semibold py-4 px-8 text-white">
        TRENDING COINS
      </h1>
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 px-8">
        {trending.map((coin, id) => (
          <div
            key={id}
            className="coin-div flex justify-between p-4 hover:scale-105  hover:animate-pulse cursor-pointer  ease-in-out duration-300 animate__animated animate__fadeIn "
          >
            <div className="flex w-full items-center justify-between">
              <div className="flex">
                <img
                  className="mr-4 rounded-full"
                  src={coin.item.small}
                  alt="/"
                  srcset=""
                />
                <div>
                  <p>{coin.item.name}</p>
                  <p>{coin.item.symbol}</p>
                </div>
              </div>

              <div className="flex items-center">
                <img
                  className="w-4 mr-2"
                  src="https://assets.coingecko.com/coins/images/1/large/bitcoin.png?1668148663"
                  alt=""
                  srcset=""
                />
                <p>{coin.item.price_btc.toFixed(7)}</p>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Trending;
