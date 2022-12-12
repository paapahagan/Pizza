import React from "react";

function AdTwo() {
  return (
    <div className="pt-10 pb-20 bg-yellow-400">
      <div className=" container flex justify-center">
        <div className="grid content-center mr-10">
          <div className="gird ">
            <div className="grid ">
              <div className="text-5xl font-bold mb-10 text-white">
                <p>Get 20% Discount</p>
              </div>
              <div className="text-3xl  text-white">
                <p>Get flat 20% off on your first order though</p>
                <p> The Foodmood App!</p>
              </div>
            </div>
            <div className="flex mt-20">
              <div className="mr-5">
                <img src="./images/google.svg" />
              </div>
              <div>
                <img src="./images/apple.svg" />
              </div>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="flex justify-end">
          <img src="./images/mobile.svg" />
        </div>
      </div>
    </div>
  );
}

export default AdTwo;
