import React from "react";

function Nav() {
  return (
    <nav className="w-full fixed top-0 pt-11 flex items-center justify-center">
      <div className="container mx-auto fixed flex justify-between item pt-10 pb-5 ">
        <div className="font-bold text-white m-2">FOOD MOOD</div>
        <div className="flex">
          <ul className="flex font-bold text-white">
            <li className="mr-10">HOME</li>
            <li className="mr-10">OUR MENU</li>
            <li className="mr-10">OFFER</li>
            <li className="mr-10">ABOUT</li>
            <li className="mr-10">CONTACT</li>
          </ul>
          <button className="p-2 bg-yellow-400 text-white font-bold">
            DOWNLOAD APP
          </button>
        </div>
      </div>
    </nav>
  );
}

export default Nav;
