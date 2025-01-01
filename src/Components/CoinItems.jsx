import React, { useState } from "react";
import { AiOutlineStar, AiFillStar } from "react-icons/ai";
import { Link } from "react-router-dom";
import { Sparklines, SparklinesLine } from "react-sparklines";
import { UserAuth } from "../context/AuthContext";
import { db } from "../Firebase";
import { arrayUnion, doc, updateDoc } from "firebase/firestore";
import Modal from "./Modal"; // Import the modal component

const CoinItems = ({ coin }) => {
  const [SavedCoin, setSavedCoin] = useState(false);
  const [showModal, setShowModal] = useState(false);
  const [modalMessage, setModalMessage] = useState({
    message: "",
    type: "",
  });
  const { user } = UserAuth();

  const coinPath = doc(db, "users", `${user?.email}`);

  const saveCoin = async () => {
    if (user?.email) {
      setSavedCoin(true);

      console.log(coinPath);
      await updateDoc(coinPath, {
        watchList: arrayUnion({
          id: coin.id,
          name: coin.name,
          image: coin.image,
          rank: coin.market_cap_rank,
          symbol: coin.symbol,
        }),
      });

      setModalMessage({ message: "Coin Saved Successfully", type: "success" });
      setShowModal(true);
    } else {
      // Show custom modal when the user is not signed in
      setModalMessage({
        message: "Please Sign In To Save Your Coin To Your WatchList",
        type: "error",
      });
      setShowModal(true);
    }
  };

  return (
    <>
      {showModal && (
        <Modal
          alat={modalMessage}
          onClose={() => setShowModal(false)} // Close the modal
        />
      )}
      <tr className="h-[80px] border-b coin-list ease-in-out hover:animate-pulse duration-300 cursor-pointer">
        <td onClick={saveCoin}>
          {SavedCoin ? <AiFillStar /> : <AiOutlineStar />}
        </td>
        <td>{coin.market_cap_rank}</td>
        <td className="max-w-[120px]">
          <Link to={`/coin/${coin.id}`}>
            <div className="flex items-center">
              <img
                className="w-6 mr-2 rounded-full"
                src={coin.image}
                alt={coin.id}
              />
              <p className="hidden sm:table-cell text-left">{coin.name}</p>
            </div>
          </Link>
        </td>
        <td>
          <span className="text-gray-400 text-sm font-bold mx-lg-10">
            {coin.symbol.toUpperCase()}
          </span>
        </td>
        <td>${coin.current_price.toLocaleString()}</td>
        <td>
          {coin.price_change_percentage_24h < 0 ? (
            <p className="text-red-600">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          ) : (
            <p className="text-green-600">
              {coin.price_change_percentage_24h.toFixed(2)}%
            </p>
          )}
        </td>
        <td className="w-[180px] hidden md:table-cell">
          {coin.total_volume.toLocaleString()}
        </td>
        <td className="w-[180px] hidden sm:table-cell">
          {coin.market_cap.toLocaleString()}
        </td>
        <td>
          <Sparklines data={coin.sparkline_in_7d.price}>
            <SparklinesLine
              color={coin.price_change_percentage_24h > 0 ? "#329b09" : "red"}
            />
          </Sparklines>
        </td>
      </tr>
    </>
  );
};

export default CoinItems;
