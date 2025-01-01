import React from "react";
import CoinSearch from "../Components/CoinSearch";
import Trending from "../Components/Trending";

const Home = ({ coins }) => {
  return (
    <div>
      <Trending />
      <CoinSearch coins={coins} />
    </div>
  );
};

export default Home;
