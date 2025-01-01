import React, { useState } from "react";
import CoinItems from "./CoinItems";
import { HiOutlineSearch } from "react-icons/hi";

const CoinSearch = ({ coins }) => {
  const [searchText, setSearchText] = useState("");
  // console.log(coins)
  return (
    <div className="rounded-div my-4 overflow-hidden">
      <div className="flex flex-col md:flex-row justify-between py-9 px-5 text-center md:text-right">
        <h1 className="text-l font-semibold my-2 text-white">SEARCH CRYPTO</h1>
        <form action="">
          <div className="relative">
            <input
              className="w-full bg-primary  w- search-text border border-input px-5 py-2 rounded-3xl shadow-lg pl-12"
              type="text"
              placeholder="Search a coin"
              onChange={(e) => setSearchText(e.target.value)}
            />
            <HiOutlineSearch className="absolute text-gray-400 left-4 top-1/2 transform -translate-y-1/2  text-xl" />
          </div>
        </form>
      </div>
      <div className="coin-items p-4">
        <table className="w-full border-collapse text-center  ">
          <thead className="h-20">
            <tr className="border-b ">
              <th></th>
              <th className="px-4">#</th>
              <th className="text-left">Coin</th>
              <th></th>
              <th>Price</th>
              <th>24h</th>
              <th className="hidden md:table-cell">24h Volume</th>
              <th className="hidden sm:table-cell">Mkt</th>
              <th>Last 7 Days</th>
            </tr>
          </thead>
          <tbody>
            {coins
              .filter((value) => {
                if (searchText === "") {
                  return value;
                } else if (
                  value.name.toLowerCase().includes(searchText.toLowerCase())
                ) {
                  return value;
                }
              })
              .map((coin) => (
                <CoinItems key={coin.id} coin={coin} />
              ))}
          </tbody>
        </table>
      </div>
    </div>
  );
};

export default CoinSearch;
