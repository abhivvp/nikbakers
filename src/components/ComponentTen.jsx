import React from "react";
import store from "../assets/store.jpg";

const ComponentTen = () => {
  return (
    <div>
      <div className="w-full h-[450px] mt-6 border-6 bg-[url('../assets/store.jpg')] ">
        {/* <img src={store} alt="" className='w-1/2' /> */}
        <div className="relative w-full top-0 inset-0 h-full flex justify-around items-center bg-red-700 opacity-30 border-4">
          <div className="flex gap-6">
            <div className="">
              <div className="text-4xl text-white font-bold">Locate </div>
              <div className="text-4xl text-white font-bold">Nick Baker's </div>
              <div className="text-4xl text-white font-bold">near you </div>
            </div>
            <div className="text-white ">
              <ul>
                <li>Amritsar</li>
                <li>Amritsar</li>
                <li>Amritsar</li>
                <li>Amritsar</li>
                <li>Amritsar</li>
                <li>Amritsar</li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ComponentTen;
