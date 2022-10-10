import { createBrowserRouter } from "react-router-dom";
import About from "../Components/About";
import Cart from "../Components/Cart";
import Home from "../Components/Home";
import Vew from "../Components/Vew";
import Layout from "../Layout/Layout";

export const router = createBrowserRouter([
    {path:'/' ,
    element: <Layout></Layout> ,
     loader: ()=> fetch('https://www.thecocktaildb.com/api/json/v1/1/search.php?f=a'),

    children: [
        {path:'/home' ,element:<Home></Home>},
        {path:'/cart' , element:<Cart></Cart> },
        {path:'/addedproduct' , element:<Vew></Vew> },
        {path:'/about' ,element:<About></About>},
    ]}
])