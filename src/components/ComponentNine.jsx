import React from "react";
import bgwave from "../assets/wave.svg";
import Button from "./Button";
const ComponentNine = () => {
  return (
    <div className="w-full h-[550px] border-2 border-red-500 mt-6 flex justify-around items-center">
      <div className="w-1/2 border-2 h-1/2 bg-dbg  rounded-3xl">
        <div className="ml-24 py-6 px-4">
          <div className="text-2xl text-white">
            A tasteful tale of Flavour & quality
          </div>
          <div className="mt-2 text-white">
            <p>
              Nik Baker's has reapidly matured into a famous bread known Known
              for its delecatable offerings . cheif nik's passion for
              Freshly-baked delecious and uniquely designed product is what
              contributes to its success Nik Baker's has reapidly matured into a
              famous bread known Nik Baker's has reapidly matured into a famous
              bread known
            </p>
            {/* explore button */}
            <button className="mt-6">Explore Now</button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentNine;
