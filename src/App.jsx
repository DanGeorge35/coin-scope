import React, { useEffect, useState } from "react";
import { Routes, Route } from "react-router-dom";
import NavBar from "./Components/NavBar";
import { ThemeProvider } from "./context/ThemeContext";
import Home from "./routes/Home";
import SignIn from "./routes/SignIn";
import SignUp from "./routes/SignUp";
import AccountPage from "./routes/AccountPage";
import CoinPage from "./routes/CoinPage";
import axios from "axios";
import Footer from "./Components/Footer";
import { AuthContextProvider } from "./context/AuthContext";

const App = () => {
  const [coins, setCoins] = useState([]);
  const [isLoading, setIsLoading] = useState(true); // Loading state

  const url =
    "https://api.coingecko.com/api/v3/coins/markets?vs_currency=usd&order=market_cap_desc&per_page=100&page=1&sparkline=true";

  useEffect(() => {
    axios
      .get(url)
      .then((response) => {
        setCoins(response.data);
        setIsLoading(false); // Stop loading after data is fetched
      })
      .catch((error) => {
        console.error("Error fetching data:", error);
        setIsLoading(false); // Stop loading in case of an error
      });
  }, [url]);

  return (
    <ThemeProvider>
      <AuthContextProvider>
        {isLoading ? (
          // Preloader component
          <div className="flex items-center justify-center h-screen bg-gray-100">
            <div className="flex flex-col items-center">
              <img
                src="/logo.png"
                alt="Logo"
                className="h-[100px] w-[100px] max-w-[100px] mb-4"
              />
              <div className="">
                <div className="animate-spin inline-block rounded-full h-8 w-8 border-t-4 border-green-500 align-middle"></div>
                <span className="inline-block align-middle mx-5">
                  Loading...
                </span>
              </div>
            </div>
          </div>
        ) : (
          <>
            <NavBar />
            <Routes>
              <Route path="/" element={<Home coins={coins} />} />
              <Route path="/signIn" element={<SignIn />} />
              <Route path="/signUp" element={<SignUp />} />
              <Route path="/account" element={<AccountPage />} />
              <Route path="/coin/:coinId" element={<CoinPage />}>
                <Route path=":coinId" />
              </Route>
            </Routes>
            <Footer />
          </>
        )}
      </AuthContextProvider>
    </ThemeProvider>
  );
};

export default App;
