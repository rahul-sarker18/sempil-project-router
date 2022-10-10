import React, { createContext, useState } from "react";
import { Outlet, useLoaderData } from "react-router-dom";
import Footer from "../Components/Footer";
import Header from "../Components/Header";

export const Myapi = createContext([]);
export const Mycard = createContext([]);

const Layout = () => {
  const prd = useLoaderData();

  const product = prd.drinks;
  const [card, setCard] = useState([]);

  return (
    <div>
      <Myapi.Provider value={product}>
        <Mycard.Provider value={[card, setCard]}>
          <Header></Header>
          <Outlet></Outlet>
          
          <Footer></Footer>
        </Mycard.Provider>
      </Myapi.Provider>
    </div>
  );
};

export default Layout;
