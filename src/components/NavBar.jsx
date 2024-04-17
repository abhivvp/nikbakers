import React from "react";

import logo from "../assets/logo-main.png";
import { Link } from "react-router-dom";
import cart from "../assets/icons/cart.svg"

const NavBar = () => {
  let heading = "Nik Baker's";
  let header_text = "Run by a Professional baker from Australia. "
  const navlinks = [
    {
      name: "Home",
      link: "/",
    },
    {
      name: "Products",
      link: "/",
    },
    {
      name: "Category",
      link: "/",
    },
    {
      name: "Services",
      link: "/",
    },
    {
      name: "About",
      link: "/",
    },
  ];
  return (
    <div className="w-fill mt-6 pv-6 px-14">
        <div className="w-full  flex justify-around items-center border-t-1">
      {/* heading  */}
      <div className=" p-1">
      <div className="text-4xl text-dbg font-semibold text-center uppercase">{heading}</div>
        <div className=" text-[12px] text-gray-600">{header_text}</div>
      </div>
      {/* logo */}
      <div className="w-28 relative top-[-10px] hidden">
        <img src={logo} alt="can't find logo" />
      </div>
      {/* navigation links */}
      <div className=" w-42 h-16 md:block sm:hidden">
        <div className="flex gap-2 ">
        {
          navlinks.map((link, index) => {
            return (
              <Link
                to={link.link}
                key={index}
                className="bg-gray-300 w-16 text-sm text-dbg  rounded-sm hover:bg-lbg text-center py-[1px] px-[4px]"
              >
                {link.name}
                
              </Link>
            );
          })
        }
        </div>
        {/* cart icons goes here */}
        {/* <div className="w-24">
          <img src={cart} alt="" width={30}/>
        </div> */}
      </div>
      
    </div>
    </div>
  );
};

export default NavBar;
