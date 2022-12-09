import React from "react";

function Categories() {
  return (
    <div className="pb-5">
      {/* hEADER */}
      <div className="container flex justify-center pt-11">
        <div className="">
          <div className="flex justify-center">
            <p className="font-bold text-yellow-400 mb-4">TOP FOODS</p>
          </div>
          <div>
            <p className="text-5xl font-bold">Our Categories</p>
          </div>
        </div>
      </div>
      {/* MENU */}
      <div className="container">
        <div className="flex justify-center">
          <div className="grid">
            <div>
              <img src="./images/pizza.svg" />
            </div>
            <div className="grid content-center">
              <div className="flex justify-center">
                <p className="font-bold text-xl mb-4">Pizza</p>
              </div>
              <div className="flex justify-center">
                <p className="font-bold">20 Restaurants Foods</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img src="./images/pasta.png" />
            </div>
            <div className="grid content-center">
              <div className="flex justify-center">
                <p className="font-bold text-xl mb-4">Pasta</p>
              </div>
              <div className="flex justify-center">
                <p className="font-bold">15 Restaurants Foods</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img src="./images/shakes.png" />
            </div>
            <div className="grid content-center">
              <div className="flex justify-center">
                <p className="font-bold text-xl mb-4">Shakes</p>
              </div>
              <div className="flex justify-center">
                <p className="font-bold">20 Restaurants Foods</p>
              </div>
            </div>
          </div>

          <div className="">
            <div>
              <img src="./images/burger.png" />
            </div>
            <div className="grid content-center">
              <div className="flex justify-center ">
                <p className="font-bold text-xl mb-4">Burger</p>
              </div>
              <div className="flex justify-center">
                <p className="font-bold">25 Restaurants Foods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
