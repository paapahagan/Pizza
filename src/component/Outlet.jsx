import React from "react";

function Outlet() {
  return (
    <div className="flex justify-center bg-slate-200 pt-10 pb-10">
      {/* Headers */}
      <div className="grid content-center">
        <div className="flex justify-center">
          <p className="font-bold text-yellow-400">OUR OUTLETS</p>
        </div>
        <div className="flex justify-center mb-5">
          <p className="text-5xl font-bold">Find an Outlet Near You</p>
        </div>
        {/* images */}
        <div className="flex">
          <div>
            <div className="mb-5">
              <img src="./images/loc1.svg" />
            </div>
            <div>
              <div className="flex justify-center pb-2">
                <img src="./images/loc.svg" />
              </div>
              <div className="flex justify-center pb-2">
                <p className="font-bold">762 Fulton St San Francisco, </p>
              </div>
              <div className="flex justify-center">
                <p className="font-bold">California(CA), 94102</p>
              </div>
            </div>
          </div>

          <div>
            <div className="mb-5 ml-5 mr-5">
              <img src="./images/loc2.svg" />
            </div>
            <div>
              <div className="flex justify-center pb-2">
                <img src="./images/loc.svg" />
              </div>
              <div className="flex justify-center pb-2">
                <p className="font-bold">66 Ceres St San Francisco, </p>
              </div>
              <div className="flex justify-center">
                <p className="font-bold">California(CA), 94124</p>
              </div>
            </div>
          </div>
          <div>
            <div className="mb-5">
              <img src="./images/loc3.svg" />
            </div>
            <div>
              <div className="flex justify-center pb-2">
                <img src="./images/loc.svg" />
              </div>
              <div className="flex justify-center pb-2">
                <p className="font-bold">766 Sutter St San Francisco, </p>
              </div>
              <div className="flex justify-center">
                <p className="font-bold">California(CA), 94109</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Outlet;
