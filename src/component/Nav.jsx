import React from "react";

function Nav() {
  return (
    <nav className="w-full fixed top-0 pt-11 flex items-center justify-center">
      <div className="container mx-auto fixed flex justify-between item pt-10 pb-5 ">
        <div className="font-bold text-white  hover:text-yellow-300 m-2">
          FOOD MOOD
        </div>
        <div className="flex">
          <ul className="flex font-bold text-white m-2">
            <li className="mr-10 hover:text-yellow-300">
              <a href="">HOME</a>
            </li>
            <li className="mr-10  hover:text-yellow-300">
              <a href="">OUR MENU</a>
            </li>
            <li className="mr-10  hover:text-yellow-300">
              <a href="">OFFER</a>
            </li>
            <li className="mr-10  hover:text-yellow-300">
              <a href="">ABOUT</a>
            </li>
            <li className="mr-10  hover:text-yellow-300">
              <a href="">CONTACT</a>
            </li>
          </ul>
          <button className="p-2 bg-yellow-400 text-white font-bold hover:text-slate-700">
            DOWNLOAD APP
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
