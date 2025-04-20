import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from "./pages/Home";
import Checkout from "./pages/Checkout";
import Cart from "./components/Cart";
import { useNavigate } from "react-router-dom";
import PokemonList from "./components/PokemonList";
import Clock from "./components/Clock";
import LimtedTime from "./components/LimtedTime";
import WindowWidth from "./components/WindowWidth";
import { IoSettings } from "react-icons/io5";
import { MdOutlineShoppingCartCheckout } from "react-icons/md";

function App() {
  let navigate = useNavigate();
  return (
    <div className="p-4">
      <div className=" flex flex-row-reverse ">
              {" "}
             <div className="bg-red-100 px-4 mx-4 mb-4 text-black-900 text-bold rounded"><Clock /></div> 
            </div>
      <nav>
        <div className="flex justify-between items-center mb-4">
          <h1 className="text-2xl font-bold">🛒 ShopZone</h1>

          <div className="flex items-center">
            <button
              className="bg-green-500 mx-4 px-4 py-2 text-white rounded"
              onClick={() => {
                navigate("/");
              }}
            >
              {" "}
              Home
            </button>

            <button
              className="bg-green-500 mr-4 px-4 py-2 text-white rounded"
              onClick={() => {
                navigate("/pokemonlist");
              }}
            >
              {" "}
              Purchase Your Pokemon
            </button>

            <button
              className="bg-red-500 px-4 py-2 text-white rounded  flex items-center gap-1"
              onClick={() => {
                navigate("/checkout");
              }}
            >
              {" "}
              < MdOutlineShoppingCartCheckout/> Checkout
            </button>
            
            <button 

             className="bg-blue-500 mx-4 px-4 py-2 text-white rounded flex items-center gap-1"
              onClick={() => {
                navigate("/settingandhelp");
              }}
            >
              <IoSettings/> Setting and Help
            </button>

          </div>
        </div>
        <div>
          <Cart />
        </div>
      </nav>
      <div className="bg-green-900 mx-4 my-4 px-4 py-2 text-white rounded">
        <LimtedTime />
      </div>
      

      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/checkout" element={<Checkout />} />
        <Route path="/pokemonlist" element={<PokemonList />} />
        <Route path="/settingandhelp" element={ <WindowWidth /> } />
      </Routes>
    </div>
  );
}

export default App;
