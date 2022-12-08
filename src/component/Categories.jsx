import React from "react";

function Categories() {
  return (
    <div className="">
      {/* hEADER */}
      <div className="container flex justify-center">
        <div className="border">
          <div className="flex justify-center">
            <p className="font-bold">TOP FOODS</p>
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
                <p>Pizza</p>
              </div>
              <div className="flex justify-center">
                <p>20 Restaurants Foods</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img src="./images/pasta.png" />
            </div>
            <div className="grid content-center">
              <div className="flex justify-center">
                <p className="">Pasta</p>
              </div>
              <div className="flex justify-center">
                <p>15 Restaurants Foods</p>
              </div>
            </div>
          </div>

          <div>
            <div>
              <img src="./images/shakes.png" />
            </div>
            <div className="grid content-center">
              <div className="flex justify-center">
                <p className="">Shakes</p>
              </div>
              <div className="flex justify-center">
                <p>20 Restaurants Foods</p>
              </div>
            </div>
          </div>

          <div className="">
            <div>
              <img src="./images/burger.png" />
            </div>
            <div className="grid content-center">
              <div className="flex justify-center">
                <p className="">Burger</p>
              </div>
              <div className="flex justify-center">
                <p>25 Restaurants Foods</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Categories;
