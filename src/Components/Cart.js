import { stringify } from "postcss";
import React, { useContext, useEffect } from "react";
import { json } from "react-router-dom";
import { Myapi, Mycard } from "../Layout/Layout";
import Products from "./Products";


const Cart = () => {

  
    const prdc =useContext(Myapi)
    const [card, setCard] = useContext(Mycard)
    console.log('card' , card);

    //get the shopping cart from local storage
    const getStoredCart = () =>{
      let shoppingCart = {};
      const storedCart = localStorage.getItem('book');
      if(storedCart){
          shoppingCart = JSON.parse(storedCart);
      }
    setCard(shoppingCart);
    }

    const addtoCaet =product =>{
     
      const getl =localStorage.getItem('book');
      const bookmar =JSON.parse(getl);
      
      if(bookmar){

          const rp =bookmar.find(p => p.idDrink === product.idDrink);
          if(rp){
            alert('amar kopal karap')
            return;
          }
          else{

            localStorage.setItem('book', JSON.stringify([...bookmar , product]))
           
          }

      }
      else{
        localStorage.setItem('book' ,JSON.stringify([product]))
       
      }
      setCard(bookmar);
      getStoredCart()  
    }

    // const lg =localStorage.getItem('book');
    // console.log(JSON.parse(lg));

  return (
    <div className="grid md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-5 m-10">
     
     {
        prdc.map(peoduct => <Products addtoCaet={addtoCaet} products ={peoduct} key={peoduct.idDrink}  ></Products>)
     }
    </div>
  );
};

export default Cart;
