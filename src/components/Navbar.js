import { Link, useHistory } from "react-router-dom";
import phyniteLogo from "../assets/phynite-logo-white.png";
import useWindowSize from "../hooks/useWindowSize.js";
import {useState, useEffect, useRef, useInsertionEffect} from "react"
import { disableBodyScroll, enableBodyScroll } from "body-scroll-lock"
import closeIcon from "../assets/close-icon.png"
import menuIcon from "../assets/menu-icon.png"
import MobileMenu from "../components/MobileMenu.js"

function Navbar(props) {


    const [displayType, setDisplayType] = useState(null)
    const [mobileMenuOn, setMobileMenuOn] = useState(false)
  
    
    const windowSize = useWindowSize();
  
    useEffect(() => {
      if (windowSize.width <= 600) {
        setDisplayType('mobile')
      } else if (windowSize.width <= 900) {
        setDisplayType('tablet')
      } else if (windowSize.width <= 1350) {
        setDisplayType("smallComputer")
      }
      else {
        setDisplayType('computer')
      }
    }, [windowSize])
    
    const isClicked = [false, false, false, false, false]; // array that allows us to indicate which page is selected
    props.isClicked && (isClicked[props.isClicked] = true); // if on a page that is one of Navbar categories, indicate that it is clicked
    
    
    function toggleMobileMenu() {
        if (mobileMenuOn === false) {
        disableBodyScroll(document.getElementById("root"))
        } else {
        enableBodyScroll(document.getElementById("root"))
        }
        setMobileMenuOn((prev) => (!prev))

    }
    return (
        <div className="fixed top-0 z-40 w-screen blur-navbar">
            <nav className="h-20 bg-mainGray bg-opacity-75 w-full flex justify-center" >
            {displayType === "mobile" && (
                <div className="flex h-full items-center pl-[6px] w-full">
                    <Link exact to={"/"}>
                        <img
                        src={phyniteLogo}
                        alt="phynite logo"
                        className="w-36 cursor-pointer"
                        />
                    </Link>
                    <div className="flex flex-grow justify-end items-center pr-2">
        
                        {mobileMenuOn ? (
                        <button className="mr-[7px] ml-[18px]">
                            <img src={closeIcon} className="w-6 h-6"></img>
                        </button>    
                        ):(
                        <button onClick={() => toggleMobileMenu()} className="mr-2 ml-5">
                            <img src={menuIcon} className="w-[22px] h-[22px]"></img>
                        </button>    
                        )}

                        
                        
                    </div>
                </div>
            )}
            {displayType === "tablet" && (
                <div className="flex h-full items-center pl-[10px] w-full">
                    <Link exact to={"/"}>
                        <img
                        src={phyniteLogo}
                        alt="phynite logo"
                        className="w-36 cursor-pointer"
                        />
                    </Link>
                    <div className="flex flex-grow justify-end items-center pr-3">
        
                        {mobileMenuOn ? (
                        <button className="mr-[7px] ml-[18px]">
                            <img src={closeIcon} className="w-6 h-6"></img>
                        </button>    
                        ):(
                        <button onClick={() => toggleMobileMenu()} className="mr-2 ml-5">
                            <img src={menuIcon} className="w-[22px] h-[22px]"></img>
                        </button>    
                        )}
                    </div>    
                </div>
            )}
            {displayType === "smallComputer" && (
                <div>
                    
                </div>
            )}

            {displayType === "computer" && (
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
                                    isClicked[1] ? "text-phyniteBlue" : "text-white"
                                }`}
                                >
                                About
                                </li>
                            </Link>
                            <Link to={"/blog"}>
                                <li
                                className={`p-2 px-5 cursor-pointer transition ease-in-out duration-200 hover:text-phyniteBlue overflow-hidden ${
                                    isClicked[2] ? "text-phyniteBlue" : "text-white"
                                }`}
                                >
                                Blog
                                </li>
                            </Link>
                            <Link to={"/phyniteProtocol"}>
                                <li
                                className={`p-2 px-5 cursor-pointer transition ease-in-out duration-200 hover:text-phyniteBlue overflow-hidden ${
                                    isClicked[3] ? "text-phyniteBlue" : "text-white"
                                }`}
                                >
                                Protocol
                                </li>
                            </Link>
                            <Link to={"/getStarted"}>
                                <li
                                className={`pt-2 pb-[6px] mx-1 px-4 border bg-gradient-to-br from-[rgb(10,10,13,0.6)] to-[rgb(107,114,128,0.4)] hover:to-[rgb(10,10,13,0.6)] hover:from-[rgb(107,114,128,0.4)] border-gray1 rounded-xl cursor-pointer transition ease-in-out duration-400 hover:brightness-125 hover:text-phyniteBlue overflow-hidden ${
                                    isClicked[4] ? "text-phyniteBlue" : "text-white"
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
            
            )}

            
            </nav>
            {mobileMenuOn && <MobileMenu isClicked={isClicked} exitMenuPopUp={() => toggleMobileMenu()} toggleScrollLock={()=>enableBodyScroll(document.querySelector("root"))} />}
        </div>
    );
    }

    export default Navbar;
