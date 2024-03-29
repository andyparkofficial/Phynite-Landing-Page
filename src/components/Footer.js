import { useEffect, useState } from "react"
import phyniteLogo from "../assets/phynite-logo-white.png"
import { Link } from "react-router-dom"
import twitterIcon from "../assets/twitter-icon.png"
import discordIcon from "../assets/discord-icon.png"
import instagramIcon from "../assets/instagram-icon.png"
import copyrightIcon from "../assets/copyright-icon-gray.png"
import useWindowSize from "../hooks/useWindowSize"


export default function Footer() {

    const [displayType, setDisplayType] = useState('computer')

  
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
    
    return (
        <div className="bg-gray2 flex justify-center">
            {displayType === 'mobile' && (
                <div className="flex flex-col items-center font-poppins w-full px-6 pt-6">
                    <img className="w-48 mb-2 " src={phyniteLogo}></img>
                    <h1 className="text-sm text-gray-400 font-[500] mb-6">Trade Physical Finite Items.</h1>
                    <hr className="h-[1px] bg-gray0 border-0 dark:bg-gray0 w-full mb-4" />
                    <div className=" w-[80%]">
                        <div className=" flex justify-center gap-x-12 mb-6">
                            <div className="pt-2 flex flex-col gap-y-4 w-1/2">
                                <h1 className="text-xs text-gray-400 font-[500] tracking-[.2em] ">PRODUCT</h1>
                                <Link to="/getStarted">
                                    <h2 className="text-sm text-white font-semibold">Get Started</h2>
                                </Link>
                                <a href={"https://docs.phynite.io/"} target="_blank">
                                    <h2 className="text-sm text-white font-semibold">Phynite Protocol</h2>
                                </a>
                            </div>
                            <div className="pt-2 flex flex-col gap-y-4 w-1/2">
                                <h1 className="text-xs text-gray-400 font-[500] tracking-[.2em]">COMPANY </h1>
                                <Link to="/">
                                    <h2 className="text-sm text-white font-semibold">Home</h2>
                                </Link>
                                <Link to="/about">
                                    <h2 className="text-sm text-white font-semibold">About</h2>
                                </Link>
                                <Link to="/blogs">
                                    <h2 className="text-sm text-white font-semibold">Blog</h2>
                                </Link>
                            </div>
                            
                        </div>

                        <div className="w-full flex flex-col mb-10 items-start">
                            <h1 className="text-xs text-gray-400 font-[500] tracking-[.2em] mb-4">SOCIAL </h1>
                            <div className="flex gap-x-6 mb-8">
                                <a target="_blank" href="https://twitter.com/Phynite_io">
                                    <img className="w-7 h-7 translate-y-1" src={twitterIcon}></img>
                                </a>
                                
                                <a target="_blank" href="https://discord.gg/AF2anxfj5F">
                                    <img className="w-9 h-9" src={discordIcon}></img>
                                </a>

                                <a target="_blank" href="https://www.instagram.com/phynite.io/">
                                    <img className="w-[26px] h-[26px] translate-y-1" src={instagramIcon}></img>
                                </a>
                            </div>
                            <h1 className="text-xs text-gray-400 font-[500] tracking-[.2em] mb-4">CONTACT US </h1>
                            <h2 className="text-sm text-white font-semibold">Email: hello@phynite.io</h2>
                        </div>
                    </div>

                    
                    <div className="w-full flex flex-col items-center">
                        <div className="flex items-center">
                            <h2 className="text-gray-400 font-[500] text-[8pt] mr-1">Copyright</h2>

                            <img className="w-[10px] h-[10px] -translate-y-[1px]" src={copyrightIcon}></img>
                            <h2 className="text-gray-400 font-[500] text-[8pt] ml-1">2023 Phynite, LLC. All rights reserved.</h2>
                        </div>
                        <div className="flex mb-10 mt-4">
                            <Link to={"/termsOfService"} className="text-gray-400 font-[500] text-[8pt] underline mr-4">Terms of Service</Link>
                            <Link to={"/privacyPolicy"} className="text-gray-400 font-[500] text-[8pt] underline">Privacy Policy</Link>
                        </div>

                    </div>
                </div>
            )}
            {displayType === "tablet" && (
                <div className="flex flex-col items-center font-poppins w-full px-6 pt-6">
                    <img className="w-56 mb-2 " src={phyniteLogo}></img>
                    <h1 className=" text-gray-400 font-[500] mb-6">Trade Physical Finite Items.</h1>
                    <hr className="h-[1px] bg-gray0 border-0 dark:bg-gray0 w-full mb-4" />
                    <div className=" w-[80%]">
                        <div className=" flex justify-center gap-x-12 mb-6">
                            <div className="pt-2 flex flex-col gap-y-4 w-1/2">
                                <h1 className="text-sm text-gray-400 font-[500] tracking-[.2em] ">PRODUCT</h1>
                                <Link to="/getStarted">
                                    <h2 className=" text-white font-semibold">Get Started</h2>
                                </Link>
                                <a href={"https://docs.phynite.io/"} target="_blank">
                                    <h2 className=" text-white font-semibold">Phynite Protocol</h2>
                                </a>
                            </div>
                            <div className="pt-2 flex flex-col gap-y-4 w-1/2">
                                <h1 className="text-sm text-gray-400 font-[500] tracking-[.2em]">COMPANY </h1>
                                <Link to="/">
                                    <h2 className=" text-white font-semibold">Home</h2>
                                </Link>
                                <Link to="/about">
                                    <h2 className=" text-white font-semibold">About</h2>
                                </Link>
                                <Link to="/blogs">
                                    <h2 className=" text-white font-semibold">Blog</h2>
                                </Link>
                            </div>
                            
                        </div>

                        <div className="w-full flex flex-col mb-10 items-start">
                            <h1 className="text-sm text-gray-400 font-[500] tracking-[.2em] mb-4">SOCIAL </h1>
                            <div className="flex gap-x-6 mb-8">
                                <a target="_blank" href="https://twitter.com/Phynite_io">
                                    <img className="w-7 h-7 translate-y-1" src={twitterIcon}></img>
                                </a>
                                <a target="_blank" href="https://discord.gg/AF2anxfj5F">
                                    <img className="w-9 h-9" src={discordIcon}></img>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/phynite.io/">
                                    <img className="w-[26px] h-[26px] translate-y-1" src={instagramIcon}></img>
                                </a>
                            </div>
                            <h1 className="text-sm text-gray-400 font-[500] tracking-[.2em] mb-4">CONTACT US </h1>
                            <h2 className="text-white font-semibold">Email: hello@phynite.io</h2>
                        </div>
                    </div>

                    
                    <div className="w-full flex flex-col items-center">
                        <div className="flex items-center">
                            <h2 className="text-gray-400 font-[500] text-xs mr-1">Copyright</h2>

                            <img className="w-[12px] h-[12px] -translate-y-[1px]" src={copyrightIcon}></img>
                            <h2 className="text-gray-400 font-[500] text-xs ml-1">2023 Phynite, LLC. All rights reserved.</h2>
                        </div>
                        <div className="flex mb-10 mt-4">
                            <Link to={"/termsOfService"} className="text-gray-400 font-[500] text-xs underline mr-4">Terms of Service</Link>
                            <Link to={"/privacyPolicy"} className="text-gray-400 font-[500] text-xs underline">Privacy Policy</Link>
                        </div>

                    </div>
                </div>
            )}
            {displayType === "smallComputer" && (
                <div className=" h-[300px] pt-12 pb-5 font-poppins flex flex-col w-full px-8">
                    <div className="w-full flex">
                        <div className="w-[30%] h-full">
                            <img className="w-48 mb-2 -translate-x-2" src={phyniteLogo}></img>
                            <h1 className="text-sm text-gray-400 font-[500] ">Trade Physical Finite Items.</h1>
                        </div>
                        <div className="w-[25%] h-full pt-2 flex flex-col gap-y-4">
                            <h1 className="text-xs text-gray-400 font-[500] tracking-[.2em] ">PRODUCT</h1>
                            <Link to="/getStarted">
                                <h2 className="text-sm text-white font-semibold">Get Started</h2>
                            </Link>
                            <a href={"https://docs.phynite.io/"} target="_blank">
                                <h2 className="text-sm text-white font-semibold">Phynite Protocol</h2>
                            </a>
                        </div>
                        <div className="w-[25%] h-full pt-2 flex flex-col gap-y-4">
                            <h1 className="text-xs text-gray-400 font-[500] tracking-[.2em]">COMPANY </h1>
                            <Link to="/">
                                <h2 className="text-sm text-white font-semibold">Home</h2>
                            </Link>
                            <Link to="/about">
                                <h2 className="text-sm text-white font-semibold">About</h2>
                            </Link>
                            <Link to="/blogs">
                                <h2 className="text-sm text-white font-semibold">Blog</h2>
                            </Link>
                        </div>
                        <div className="w-[20%] h-full pt-2 flex flex-col">
                            <h1 className="text-xs text-gray-400 font-[500] tracking-[.2em] mb-4">SOCIAL </h1>
                            <div className="flex gap-x-6 mb-8">
                                <a target="_blank" href="https://twitter.com/Phynite_io">
                                    <img className="w-7 h-7 translate-y-1" src={twitterIcon}></img>
                                </a>    
                                <a target="_blank" href="https://discord.gg/AF2anxfj5F">
                                    <img className="w-9 h-9" src={discordIcon}></img>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/phynite.io/">
                                    <img className="w-[26px] h-[26px] translate-y-1" src={instagramIcon}></img>
                                </a>
                                
                            </div>
                            <h1 className="text-xs text-gray-400 font-[500] tracking-[.2em] mb-4">CONTACT US </h1>
                            <h2 className="text-sm text-white font-semibold">Email: hello@phynite.io</h2>
                        </div>
                    </div>
                    <div className="w-full flex flex-grow items-end">
                        <h2 className="text-gray-400 font-[500] text-[8pt] mr-1">Copyright</h2>
                        <img className="w-[10px] h-[10px] -translate-y-[2px]" src={copyrightIcon}></img>
                        <h2 className="text-gray-400 font-[500] text-[8pt] ml-1">2023 Phynite, LLC. All rights reserved.</h2>
                        <Link to={"/termsOfService"} className="text-gray-400 font-[500] text-[8pt] underline mx-4">Terms of Service</Link>
                        <Link to={"/privacyPolicy"} className="text-gray-400 font-[500] text-[8pt] underline">Privacy Policy</Link>
                    </div>
                </div>
            )}
            {displayType === 'computer' && (
                <div className="w-[1300px] h-[300px] pt-12 pb-5 font-poppins flex flex-col ">
                    <div className="w-full flex">
                        <div className="w-[30%] h-full">
                            <img className="w-48 mb-2 -translate-x-2" src={phyniteLogo}></img>
                            <h1 className="text-sm text-gray-400 font-[500] ">Trade Physical Finite Items.</h1>
                        </div>
                        <div className="w-[25%] h-full pt-2 flex flex-col gap-y-4">
                            <h1 className="text-xs text-gray-400 font-[500] tracking-[.2em] ">PRODUCT</h1>
                            <Link to="/getStarted">
                                <h2 className="text-sm text-white font-semibold">Get Started</h2>
                            </Link>
                            <a href={"https://docs.phynite.io/"} target="_blank">
                                <h2 className="text-sm text-white font-semibold">Phynite Protocol</h2>
                            </a>
                        </div>
                        <div className="w-[25%] h-full pt-2 flex flex-col gap-y-4">
                            <h1 className="text-xs text-gray-400 font-[500] tracking-[.2em]">COMPANY </h1>
                            <Link to="/">
                                <h2 className="text-sm text-white font-semibold">Home</h2>
                            </Link>
                            <Link to="/about">
                                <h2 className="text-sm text-white font-semibold">About</h2>
                            </Link>
                            <Link to="/blogs">
                                <h2 className="text-sm text-white font-semibold">Blog</h2>
                            </Link>
                        </div>
                        <div className="w-[20%] h-full pt-2 flex flex-col">
                            <h1 className="text-xs text-gray-400 font-[500] tracking-[.2em] mb-4">SOCIAL </h1>
                            <div className="flex gap-x-6 mb-8">
                                <a target="_blank" href="https://twitter.com/Phynite_io">
                                    <img className="w-7 h-7 translate-y-1" src={twitterIcon}></img>
                                </a>
                                <a target="_blank" href="https://discord.gg/AF2anxfj5F">
                                    <img className="w-9 h-9" src={discordIcon}></img>
                                </a>
                                <a target="_blank" href="https://www.instagram.com/phynite.io/">
                                    <img className="w-[26px] h-[26px] translate-y-1" src={instagramIcon}></img>
                                </a>
                                
                            </div>
                            <h1 className="text-xs text-gray-400 font-[500] tracking-[.2em] mb-4">CONTACT US </h1>
                            <h2 className="text-sm text-white font-semibold">Email: hello@phynite.io</h2>
                        </div>
                    </div>
                    <div className="w-full flex flex-grow items-end">
                        <h2 className="text-gray-400 font-[500] text-[8pt] mr-1">Copyright</h2>
                        <img className="w-[10px] h-[10px] -translate-y-[2px]" src={copyrightIcon}></img>
                        <h2 className="text-gray-400 font-[500] text-[8pt] ml-1">2023 Phynite, LLC. All rights reserved.</h2>
                        <Link to={"/termsOfService"} className="text-gray-400 font-[500] text-[8pt] underline mx-4">Terms of Service</Link>
                        <Link to={"/privacyPolicy"} className="text-gray-400 font-[500] text-[8pt] underline">Privacy Policy</Link>
                    </div>
                </div>
            )}


        </div>
    )
}