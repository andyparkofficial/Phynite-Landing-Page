import { Link, useHistory } from "react-router-dom";
import phyniteLogo from "../assets/phynite-logo-white.png";
import useWindowSize from "../hooks/useWindowSize.js";
import {useState, useEffect, useRef, useInsertionEffect} from "react"


function Navbar(props) {

  const windowSize = useWindowSize();
  const isClicked = [false, false, false, false]; // array that allows us to indicate which page is selected
  props.isClicked && (isClicked[props.isClicked] = true); // if on a page that is one of Navbar categories, indicate that it is clicked
  

  return (
    <div className="fixed top-0 z-40 w-screen blur-navbar">
      <header className="h-20 bg-mainGray bg-opacity-75 w-full flex justify-center" >
        <div className="w-[1370px]">
            <div className="flex p-5 pl-5 pr-7">
            <Link exact to={"/"}>
                <img
                src={phyniteLogo}
                alt="phynite logo"
                className="w-40 cursor-pointer"
                />
            </Link>
            
            {windowSize.width > 1070 && (
                <nav className="flex flex-grow">
                <div className="flex flex-grow justify-end">
                    <ul className="font-poppins flex justify-center">
                    <Link to={"/about"}>
                        <li
                        className={`p-2 pl-10 px-5 cursor-pointer transition ease-in-out duration-200 hover:text-phyniteBlue overflow-hidden ${
                            isClicked[0] ? "text-phyniteBlue" : "text-white"
                        }`}
                        >
                        About
                        </li>
                    </Link>
                    <Link to={"/blog"}>
                        <li
                        className={`p-2 px-5 cursor-pointer transition ease-in-out duration-200 hover:text-phyniteBlue overflow-hidden ${
                            isClicked[1] ? "text-phyniteBlue" : "text-white"
                        }`}
                        >
                        Blog
                        </li>
                    </Link>
                    <Link to={"/phyniteProtocol"}>
                        <li
                        className={`p-2 px-5 cursor-pointer transition ease-in-out duration-200 hover:text-phyniteBlue overflow-hidden ${
                            isClicked[2] ? "text-phyniteBlue" : "text-white"
                        }`}
                        >
                        Protocol
                        </li>
                    </Link>
                    <Link to={"/faq"}>
                        <li
                        className={`p-2 px-5 cursor-pointer transition ease-in-out duration-200 hover:text-phyniteBlue overflow-hidden ${
                            isClicked[3] ? "text-phyniteBlue" : "text-white"
                        }`}
                        >
                        Get Started
                        </li>
                    </Link>

                    </ul>
                    
                </div>
                    
                </nav>
            )}          
            </div>
        </div>
        
      </header>
    </div>
  );
}

export default Navbar;
