import React from "react";
import logo from "../assets/logo-main.png";

const Feature = () => {
  return (
    <section class="text-gray-600 body-font">
      <div class="container px-5 py-6 mx-auto bg-dtext">
        <div class="flex  -m-4 divide-x-2">
          <div class="p-4 md:w-1/3 ">
            <div class="flex rounded-lg h-full  bg-transparent p-8 flex-col ">
              <div class="flex flex-col items-center mb-3 border-2 justify-around  border-white uppercase px-6 h-52">
                <div className="flex flex-col">
                  <h2 class="text-white  text-lg title-font font-medium ">
                    Made With{" "}
                  </h2>
                  <h2 class="text-white  text-lg title-font font-medium ">
                    Nik orignal{" "}
                  </h2>
                  <h2 class="text-white  text-lg title-font font-medium ml-4 ">
                    recipies{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/2 ">
            <div class="flex rounded-lg h-full  bg-transparent p-8 flex-col ">
              <div class="flex flex-col items-center mb-3 border-2 justify-around  border-white  px-6 h-52">
                <div className="flex flex-col">
                  <h2 class="text-white  text-lg title-font font-medium ">
                    CRUMBLY GOODNESS{" "}
                  </h2>
                  <h2 class="text-white  text-lg title-font font-medium ">
                    Choose from an array of butterly and nutty cookies
                    Fresh-out-of-oven rusk also stand
                  </h2>
                  <h2 class="text-white  text-lg title-font font-medium ">
                    presented to be paired with your hot cup of tea.{" "}
                  </h2>
                </div>
              </div>
            </div>
          </div>
          <div class="p-4 md:w-1/3 ">
            <div class="flex rounded-lg h-full  bg-transparent p-8 flex-col ">
              <div class="flex flex-col items-center mb-3 border-2 justify-around  border-white uppercase px-6 h-52">
                <div className="flex gap-2">
                  <img src={logo} alt="" className="w-12" />
                  <div className="border rounded-full bg-lbg text-dbg flex justify-around px-2 py-1">
                    <div className="flex gap-2 ">
                      <div className="text-sm">Explore Now</div>
                      <div className="text-sm">d</div>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Feature;
