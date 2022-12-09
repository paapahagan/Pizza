import React from "react";

function Ship() {
  return (
    <div className="  bg-yellow-500 pt-10 pb-10">
      <div className="flex justify-center">
        {/* shipping */}
        <div className="">
          <div className="flex justify-center p-4">
            <img src="./images/truck.svg" />
          </div>
          <div className="grid content-center">
            <div className="flex justify-center mb-2">
              <p className="font-bold">Free shipping on</p>
            </div>
            <div className="flex justify-center mb-4">
              <p className="font-bold">First Order</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <p> Lorem ipsum dolor sit amet, consectetur </p>
            </div>
            <div className="flex justify-center">
              <p> adipisicing elit, sed doeiusmod </p>
            </div>
          </div>
        </div>
        {/* Varieties */}
        <div className="mr-5 ml-5">
          <div className="flex justify-center p-4">
            <img src="./images/dish.svg" />
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <p className="font-bold">Variety of</p>
            </div>
            <div className="flex justify-center mb-4">
              <p className="font-bold">Dishes</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <p> Lorem ipsum dolor sit amet, consectetur </p>
            </div>
            <div className="flex justify-center">
              <p> adipisicing elit, sed doeiusmod </p>
            </div>
          </div>
        </div>
        {/* Time */}
        <div className="">
          <div className="flex justify-center p-4">
            <img src="./images/time.png" />
          </div>
          <div>
            <div className="flex justify-center mb-2">
              <p className="font-bold">Thirty Minutes</p>
            </div>
            <div className="flex justify-center mb-4">
              <p className="font-bold">Delivery</p>
            </div>
          </div>
          <div>
            <div className="flex justify-center">
              <p> Lorem ipsum dolor sit amet, consectetur </p>
            </div>
            <div className="flex justify-center">
              <p> adipisicing elit, sed doeiusmod </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Ship;
