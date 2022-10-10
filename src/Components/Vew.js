import React, { useContext } from "react";
import { Mycard } from "../Layout/Layout";
import Favarit from "./Favarit";
const Vew = () => {
  const [card, setCard] = useContext(Mycard);
  console.log( 'vew' , card )
  // const getStoredCart = () =>{
  //   let shoppingCart = {};
  //   //get the shopping cart from local storage
  //   const storedCart = localStorage.getItem('book');
  //   if(storedCart){
  //       shoppingCart = JSON.parse(storedCart);
  //   }
  // setCard(shoppingCart);
  // }


 

  return (
    <div>

     
      <div className="flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 dark:bg-gray-900 dark:text-gray-100">
        <h2 className="text-xl font-semibold">Your cart</h2>
        {card.map((lc) => (
          <Favarit local={lc} key={lc.idDrink}></Favarit>
        ))}
      </div>
    </div>
  );
};

export default Vew;
