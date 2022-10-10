import React, { useContext } from "react";
import { Link, NavLink } from "react-router-dom";
import { Mycard } from "../Layout/Layout";

const Header = () => {
 
  return (
    <div>
      <header className="p-4 dark:bg-gray-800 dark:text-gray-100">
        <div className="container flex justify-between h-16 mx-auto">
          <Link
           to='/home'
            aria-label="Back to homepage"
            className="flex items-center p-2">
            <h1>sooooo</h1>
          </Link>
          <ul className="items-stretch hidden space-x-3 md:flex">
            <li className="flex">
              <p className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">
              <NavLink
               to='/home'
                className={({isActive})=> isActive ? 'bg-slate-600 p-5' : undefined}
              >
                Home
              </NavLink>
              </p>
            </li>


            <li className="flex">
            <p className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">
              <NavLink
               to='/cart'
                className={({isActive})=> isActive ? 'bg-slate-600 p-5 ' : undefined}
              >
                Cart
              </NavLink>
              </p>
            </li>

            <li className="flex">
            <p className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">
              <NavLink
               to='/addedproduct'
                className={({isActive})=> isActive ? 'bg-slate-600 p-5' : undefined}
              >
                Added product
              </NavLink>
              </p>
            </li>

            <li className="flex">
            <p className="flex items-center px-4 -mb-1 border-b-2 dark:border-transparent">
              <NavLink
               to='/about'
                className={({isActive})=> isActive ? 'bg-slate-600 p-5' : undefined}
              >
                About
              </NavLink>
              </p>
            </li>
               
          </ul>
         
        </div>
      </header>
    </div>
  );
};

export default Header;
