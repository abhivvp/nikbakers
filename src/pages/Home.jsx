import React from "react";
import { Link } from "react-router-dom";
import homebg from "../assets/homebg.jpg";
import fleximage from "../assets/flemimage.jpg";
import Feature from "../components/Feature";
import ComponentTen from "../components/ComponentTen";
import ComponentNine from "../components/ComponentNine";

const Home = () => {
  const homelinks = [
    {
      name: "Electronics",
      link: "/",
    },
    {
      name: "Mobile",
      link: "/",
    },
    {
      name: "Groceries",
      link: "/",
    },
    {
      name: "Pantery",
      link: "/",
    },
    {
      name: "Esssentials",
      link: "/",
    },
    {
      name: "Trending",
      link: "/",
    },
  ];
  const homelinks_right = [
    {
      name: "E-Menu",
      link: "/",
    },
    {
      name: "E-Gift",
      link: "/",
    },
    {
      name: "Cake Album",
      link: "/",
    },
  ];
  const hometextcenter = "Loafs You Are Sure To Love";
  const hometextparagraph =
    "Freshly baked in the variety of breads we bring for you to savour . Prepared with the finest ingridients come our wholesome sliced & toast bread , including Sour Dough , Whole Wheat , Atta ,Garlic, Multigrains & Brain Bread";
  const carddatacenter = [
    {
      image: "",
      text: "Masal Bread ",
    },
    {
      image: "",
      text: "Garlic Bread",
    },
    {
      image: "",
      text: "MultiGrain Bread",
    },
  ];
  const centerparagraph =
    "Good Food is the Ingredient of making the life happy";

  const featurepara1 = `With Our Premier gift baskests and boxes hampers , we have absoluetly sploit for choice when selecting the perfect present for your loved ones `;
  const featureheading1 = "Gift Happiness";
  const featureheading2 = "Let's set the Bar High for our CHOCLATES";
  const featurepara2 = `Our Choclates are made with the finest white , milk and dark Belgiuem choclate `;
  return (
    <div className="">
      <div className="w-full h-16 flex items-center justify-evenly mt-4 bg-lbg">
      <div className="border-4 flex justify-between w-[68%]">
          {/* home navklinks */}
          <div className="w-[60%] flex items-center gap-6">
          {homelinks.map((link, index) => {
            return (
              <Link
                to={link.link}
                key={index}
                className=" w-16 text-sm text-dbg  font-homeLinks rounded-md hover:text-red-700  text-center py-[1px] px-[4px]"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
        {/* home hover links  */}
        <div className="">
          {homelinks_right.map((link, index) => {
            return (
              <Link
                to={link.link}
                key={index}
                className=" w-16 text-sm text-lbg border rounded-full bg-dbg  text-center py-[1px] px-[4px]"
              >
                {link.name}
              </Link>
            );
          })}
        </div>
      </div>
      </div>
      {/* home bg image goes here  */}
      <div className="bg-[url('../assets/store.jpg')] bg-cover bg-center h-screen"></div>
      {/* image text */}
      <div className="w-full  h-64 flex flex-col items-center bg-lbg text-dbg border-b-2">
        <div className="text-4xl text-center mt-10">{hometextcenter}</div>
        <div className="w-full flex justify-around">
          <p className="text-[12px] py-2  w-[44%]">{hometextparagraph}</p>
        </div>
        <div className="">
          <button className="mt-6">
            <span>Explore Now</span>
            <svg
              width="34"
              height="34"
              viewBox="0 0 74 74"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <circle
                cx="37"
                cy="37"
                r="35.5"
                stroke="black"
                stroke-width="3"
              ></circle>
              <path
                d="M25 35.5C24.1716 35.5 23.5 36.1716 23.5 37C23.5 37.8284 24.1716 38.5 25 38.5V35.5ZM49.0607 38.0607C49.6464 37.4749 49.6464 36.5251 49.0607 35.9393L39.5147 26.3934C38.9289 25.8076 37.9792 25.8076 37.3934 26.3934C36.8076 26.9792 36.8076 27.9289 37.3934 28.5147L45.8787 37L37.3934 45.4853C36.8076 46.0711 36.8076 47.0208 37.3934 47.6066C37.9792 48.1924 38.9289 48.1924 39.5147 47.6066L49.0607 38.0607ZM25 38.5L48 38.5V35.5L25 35.5V38.5Z"
                fill="black"
              ></path>
            </svg>
          </button>
        </div>
      </div>
      {/* card section one starts here  */}
      <section className="text-gray-600 body-font border-b-2">
        <div className="container px-5 mx-auto">
          <div className="flex flex-wrap -m-4">
            {/* start point  */}
            {carddatacenter.map(({ image, text }) => {
              return (
                <div className="p-4 lg:w-1/3">
                  <div className="h-full bg-white bg-opacity-75 px-8 pt-8 pb-24 rounded-lg overflow-hidden text-center relative">
                    <img src={homebg} alt="" />
                    <p className="mt-10 text-xl text-dbg">{text}</p>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </section>
      {/* center paragraph */}
      <div className="w-full flex justify-around mt-4">
        <span className="text-4xl text-dtext">{centerparagraph}</span>
      </div>
      {/* card section two start here  */}
      <section class="text-dbg text-2xl body-font">
        <div class="container px-5 py-24 mx-auto">
          <div class="flex flex-wrap -m-4">
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-auto bg-lbg p-16 rounded">
                <div className="text-4xl text-dbg mb-4">{featureheading1}</div>
                <p class="leading-relaxed mb-6">{featurepara1}</p>
              </div>
            </div>
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full p-8 rounded">
                <img src={fleximage} alt="" />
              </div>
            </div>
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-full p-8 rounded">
                <img src={fleximage} alt="" />
              </div>
            </div>
            <div class="p-4 md:w-1/2 w-full">
              <div class="h-[350px] bg-lbg p-16 rounded">
                <div className="text-4xl text-dbg mb-4">{featureheading2}</div>
                <p class="leading-relaxed mb-6">{featurepara2}</p>
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* feature sections starts here  */}
      <Feature />
      {/* chef banner container */}
      <ComponentNine/>
      {/* location container */}
      <ComponentTen />
    </div>
  );
};

export default Home;

// {/* <div className="w-full h-screen border-8">
// <div className="flex gap-10 mt-6 px-28">
//   {/* card container */}
//   <div className="h-[300px] border-2 w-[700px] border-dbg  bg-lbg"></div>
//   {/* image container */}
//   <div className="w-64">
//     <img src={homebg} alt="" />
//   </div>
// </div>
// <div className="flex gap-10 mt-6 px-28">
//   {/* image container */}
//   <div className="w-64">
//     <img src={homebg} alt="" />
//   </div>
//   {/* card container */}
//   <div className="h-[300px] border-2 w-[700px] border-dbg  bg-lbg"></div>
// </div> */}
// </div>
