import React from "react";

function Team() {
  return (
    <div className="pt-10 pb-10">
      <div className="flex justify-center ">
        <div className="grid content-center">
          <div className="flex justify-center font-bold text-yellow-400 mb-2">
            <p>TEAM MEMBERS</p>
          </div>
          <div className="text-5xl font-bold mb-5">
            <p>Meet Our Best Team</p>
          </div>
          <div className="flex justify-center mb-5">
            <hr className="border-2 border-yellow-400 w-48" />
          </div>
        </div>
      </div>
      <div className="flex justify-center">
        <div>
          <div className="pb-5 pt-5 mr-2">
            <img src="./images/chef1.svg" />
          </div>
          <div>
            <p className="font-bold pb-5">Alizeh Anderson</p>
            <p>Senior Chef</p>
          </div>
        </div>
        <div>
          <div className="pb-5 pt-5 mr-2 ml-2">
            <img src="./images/chef2.svg" />
          </div>
          <div>
            <p className="font-bold pb-5">Angelina John</p>
            <p>Master Chef</p>
          </div>
        </div>
        <div>
          <div className="pb-5 pt-5 mr-2 ml-2">
            <img src="./images/chef3.svg" />
          </div>
          <div>
            <p className="font-bold pb-5">Andre Smith</p>
            <p>Professor</p>
          </div>
        </div>
        <div>
          <div className="pb-5 pt-5 ml-2">
            <img src="./images/chef4.svg" />
          </div>
          <div>
            <p className="font-bold pb-5">Christina Chi</p>
            <p>Psychologist</p>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Team;
