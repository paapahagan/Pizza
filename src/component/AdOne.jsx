import React from "react";

function AdOne() {
  return (
    <div className="flex justify-center pt-10 pb-10">
      <div className="flex justify-between">
        <div className="mr-10">
          <div className="pb-5">
            <p className="font-bold pb-2">PIZZA DELIVERY</p>
            <p className="text-5xl">Get Started Today!</p>
          </div>
          <div className="grid items-center pb-5">
            <hr className="border-2 border-yellow-400 w-36" />
          </div>
          <div className="pb-2 text-lg font-bold">
            <p>Everything you need to build an amazing</p>
            <p>food restaurant responsive website.</p>
          </div>
          <div className="pb-10 pt-5">
            <p>
              Hendrerit in vulputate velit esse molestie consequat, vel illum
              dolore
            </p>
            <p>
              eu feugiat nulla facilisis at vero eros et accumsan et iusto odio
            </p>
            <p>
              dignissim qui blandit praesent luptatum zzril delenit augue duis.
            </p>
          </div>
          {/*  */}
          <div className="flex justify-between">
            <div className="">
              <div className="pb-5">
                <img src="./images/bag.svg" />
              </div>
              <div className="">
                <p className="pb-5">Food Order</p>
                <p>Food is the necessity of life. It</p>
                <p>provides nutrition, sustenance</p>
                <p> growth to human body.</p>
              </div>
            </div>
            <div>
              <div className="pb-5">
                <img src="./images/guy.svg" />
              </div>
              <div>
                <p className="pb-5">Promote Restaurant</p>
                <p>Food can be classified into</p>
                <p>cereals, pulses, nuts and </p>
                <p>oilseeds, vegetable</p>
              </div>
            </div>
          </div>
        </div>
        {/* images */}
        <div className="ml-10">
          <div className="grid content-center">
            <img src="./images/girl.svg" />
          </div>
        </div>
      </div>
    </div>
  );
}

export default AdOne;
