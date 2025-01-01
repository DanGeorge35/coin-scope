import React, { useState, useEffect } from "react";
import { AiOutlineClose } from "react-icons/ai";
import { Link } from "react-router-dom";
import { doc, onSnapshot, updateDoc } from "firebase/firestore";
import { db } from "../Firebase";
import { UserAuth } from "../context/AuthContext";
import "animate.css"; // Import animate.css for animations

const SavedCoins = () => {
  const [coins, setCoins] = useState([]);
  const [removingCoinId, setRemovingCoinId] = useState(null); // Track the coin being removed
  const { user } = UserAuth();

  useEffect(() => {
    onSnapshot(doc(db, "users", `${user?.email}`), (doc) => {
      setCoins(doc.data()?.watchList || []);
    });
  }, [user?.email]);

  const coinPath = doc(db, "users", `${user?.email}`);
  const deleteCoin = async (passedId) => {
    setRemovingCoinId(passedId);

    setTimeout(async () => {
      try {
        const updatedCoins = coins.filter((item) => item.id !== passedId);
        await updateDoc(coinPath, { watchList: updatedCoins });
        setCoins(updatedCoins);
      } catch (error) {
        console.log(error.message);
      }
      // Reset the removingCoinId
      setRemovingCoinId(null);
    }, 1000); // Animation duration (matches animate.css duration)
  };

  return (
    <div>
      {coins?.length === 0 ? (
        <p className="text-center text-white">
          You don't have any coin saved. Please add a coin to save it to your
          watchlist. <Link to="/">Click Here to Search Coins</Link>
        </p>
      ) : (
        <div className="p-3">
          <table className="w-full border-collapse text-center">
            <tbody>
              {coins.map((coin) => (
                <tr
                  key={coin.id}
                  className={`h-[60px] bg-secondary shadow-md my-2 mb-2 overflow-hidden animate__faster ${
                    removingCoinId === coin.id
                      ? "animate__animated animate__fadeOutDown"
                      : "animate__animated animate__fadeInUp"
                  }`}
                >
                  <td className="px-4">
                    <Link to={`/coin/${coin.id}`}>
                      <div className="flex items-center">
                        <img src={coin?.image} className="w-8 mr-4" alt="/" />
                        <div>
                          <p className="hidden sm:table-cell">{coin?.name}</p>
                          <p className="text-gray-500 text-sm text-left">
                            {coin?.symbol.toUpperCase()}
                          </p>
                        </div>
                      </div>
                    </Link>
                  </td>
                  <td className="text-right px-4">
                    <button
                      className="bg-gray-600 text-white py-1 px-4 rounded-full shadow-md hover:bg-gray-700 transition-all duration-300"
                      onClick={() => deleteCoin(coin.id)}
                    >
                      <AiOutlineClose className="text-white text-xl inline-block align-text-bottom mt-0" />
                    </button>
                  </td>
                </tr>
              ))}
            </tbody>
          </table>
        </div>
      )}
    </div>
  );
};

export default SavedCoins;
