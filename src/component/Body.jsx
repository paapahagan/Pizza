import React from "react";

function Body() {
  return (
    <div className="w-full pt-20 h-screen max-h-screen bg-custom">
      <section className="container grid content-around min-h-[70%]">
        <div className="">
          <p className="text-2xl text-white font-bold">Only $15.00</p>
        </div>
        <div className="text-7xl text-white font-bold">
          <p className="">AUTHENTIC ITALIAN PIZZA</p>
        </div>
        <div className="flex">
          <div className=" bg-yellow-400 text-white font-bold rounded-full mr-4 p-10 grid place-content-center">
            <p className="text-6xl">20%</p>
            <p className="text-2xl">DISCOUNT</p>
          </div>
          <div className="font-semibold text-white text-4xl">
            <p>On your first</p> order
            <p>if you order </p>
            <p>online through </p>
            <p>our App!</p>
          </div>
        </div>
        <div>
          <button className=" bg-yellow-400 text-white font-bold p-4  hover:text-slate-700">
            ORDER ONLINE
          </button>
        </div>
      </section>
    </div>
  );
}

export default Body;
