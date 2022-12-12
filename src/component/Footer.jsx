import React from "react";

function Footer() {
  return (
    <div className="w-full mt-20 mb-10 pt-10 pb-10">
      <div className="container flex justify-center">
        {/* food */}
        <div className="mr-20">
          <div>
            <p>FOODMOOD</p>
          </div>
          <div className="mb-10">
            <p>Vivamus convallis fermen sollicitudin et,</p>
            <p>vitae elit in vel ultrices sed in urna ipsum</p>
            <p>ullamcorper auctor.</p>
          </div>
          <div className="flex">
            <p className="mr-10">
              <img src="./images/twitter.svg" />
            </p>
            <p className="mr-10">
              <img src="./images/fb.svg" />
            </p>
            <p>
              <img src="./images/insta.svg" />
            </p>
          </div>
        </div>
        {/* About */}
        <div className="mr-20 ml-10">
          <div>
            <p>ABOUT US</p>
          </div>
          <div className="text-sm">
            <p>Our Story</p>
            <p>Our Location</p>
            <p>Current Details</p>
            <p>Contact us</p>
          </div>
        </div>
        {/* Our menu */}
        <div className="mr-10 ml-10">
          <div>
            <p>OUR MENU</p>
          </div>
          <div>
            <p>Pizza</p>
            <p>Pasta</p>
            <p>Dessert</p>
            <p>Take & Bake</p>
          </div>
        </div>
        {/* location */}
        <div className="ml-20">
          <div>
            <p>OUR LOCATION</p>
          </div>
          <div>
            <p>The FOODMOOD Rome</p>
            <p>The FOODMOOD Madrid</p>
            <p>The FOODMOOD Paris</p>
            <p>The FOODMOOD Miami</p>
          </div>
        </div>
      </div>
      <div className="mt-20">
        <div className="flex justify-around">
          <div>
            <p>Copyright © 2022 The Pizzeria</p>
          </div>
          <div>
            <p>Powered by The FOODMOOD</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Footer;
