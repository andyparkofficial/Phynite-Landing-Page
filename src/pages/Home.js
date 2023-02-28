import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import CrystalPhyniteLogo from "../assets/crystal-phynite-logo.png"
import CrystalGlobe from "../assets/crystal-globe.png"
import CrystalHand from "../assets/crystal-hand.png"
import CrystalVault from "../assets/crystal-vault.png"
import { Link, useHistory } from "react-router-dom"
import Arrow from "../assets/right-arrow.png"


export default function Home(props) {


    const history = useHistory()

    function redirectToPage(pageURL){
        history.push(`/${pageURL}`);
      }

    return (
        <div className="">
            <Navbar isClicked={"0"} />
            {props.displayType === "mobile" && (
                <div className="w-full pt-20 px-[14px] font-poppins">
                    <div className="w-full mb-16">
                        <h1 className="font-semibold text-3xl text-phyniteBlue leading-tight pt-8 px-1 mb-2">
                            The Web3 Marketplace for Physical Collectibles
                        </h1>
                        <h2 className="text-white font-light text-sm pl-1">The fastest, safest, most forward-thinking way to trade physical collectibles. Only on Phynite.</h2>
                        <div className="w-full flex justify-center pt-10 mb-6">
                            <img alt="" className="w-[90%] -translate-x-3" src={CrystalPhyniteLogo}></img>
                        </div>
                        <div className="w-full px-3">
                            <button onClick={()=>redirectToPage("getStarted")} className="w-full py-2 rounded-2xl text-3xl text-gray1 font-semibold bg-phyniteBlue">Get Started</button>
                        </div>
                    </div>
                    <div className="w-full mb-16 px-1">
                        <h1 className="font-[500] text-2xl text-white mb-4">Phynite Marketplace</h1>
                        <div className="w-full h-56 rounded-xl bg-gray2 mb-6"></div>
                        <div className="w-full">
                            <h1 className="font-[500] text-white mb-2">
                                Invest in the Physical, Digitally
                            </h1>
                            <h2 className="text-[11px] text-gray-400 font-light mb-5">
                            All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.
                            </h2>
                            <h1 className="font-[500] text-white mb-2">
                            Trade Legal Ownership, not just IOUs
                            </h1>
                            <h2 className="text-[11px] text-gray-400 font-light mb-5">
                            The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT.
                            </h2>
                            <h1 className="font-[500] text-white mb-2">
                            Supporting Collectors, New and Old
                            </h1>
                            <h2 className="text-[11px] text-gray-400 font-light mb-5">
                            All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.
                            </h2>
                        </div>
                    </div>
                    <div className="w-full mb-16">
                        <h1 className="text-white font-semibold text-3xl text-center mb-2">Our Services</h1>
                        <h2 className="w-full text-gray-400 font-light text-xs text-center mb-6">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h2>
                        <div className="rounded-2xl bg-gradient-to-l from-gray3 to-gray1 p-5 border border-gray1 flex gap-x-2 mb-5">
                            <div className="w-[45%]">
                                <h1 className="text-white font-[500] text-2xl">Mint</h1>
                                <img alt="" className="w-full" src={CrystalVault}></img>
                            </div>
                            <div className="w-[65%]">
                                <h2 className="text-white font-[500] mb-3 text-sm pt-11">Earn Royalties on Your NFTs Every Transaction</h2>
                                <h3 className="text-gray-400 text-[11px]">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h3>
                                <div className="flex w-full items-end justify-end pt-3 flex-grow">
                                    <Link to="phyniteProtocol" className="text-gray-300 py-[2px] px-2 flex items-center">
                                        <h1 className="text-gray-300 text-xs mr-1">Read More</h1>
                                        <img alt="" className="w-3 h-3 brightness-90" src={Arrow}></img>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gradient-to-r from-gray3 to-gray1 p-5 border border-gray1 flex gap-x-2 mb-5">
                            <div className="w-[45%]">
                                <h1 className="text-white font-[500] text-2xl">Trade</h1>
                                <img alt="" className="w-[90%] translate-y-2 translate-x-2" src={CrystalGlobe}></img>
                            </div>
                            <div className="w-[65%]">
                                <h2 className="text-white font-[500] mb-3 text-sm pt-11">Buy or Sell Collectibles from Anywhere, Anytime</h2>
                                <h3 className="text-gray-400 text-[11px]">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h3>
                                <div className="flex w-full items-end justify-end pt-3 flex-grow">
                                    <Link to="phyniteProtocol" className="text-gray-300 py-[2px] px-2 flex items-center">
                                        <h1 className="text-gray-300 text-xs mr-1">Read More</h1>
                                        <img alt="" className="w-3 h-3 brightness-90" src={Arrow}></img>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gradient-to-l from-gray3 to-gray1 p-5 border border-gray1 flex gap-x-2 mb-5">
                            <div className="w-[45%]">
                                <h1 className="text-white font-[500] text-2xl">Redeem</h1>
                                <img alt="" className="w-[90%] translate-y-2 translate-x-2" src={CrystalHand}></img>
                            </div>
                            <div className="w-[65%]">
                                <h2 className="text-white font-[500] mb-3 text-sm pt-11">Claim your Collectible at the Ease of a Touch</h2>
                                <h3 className="text-gray-400 text-[11px]">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h3>
                                <div className="flex w-full items-end justify-end pt-3 flex-grow">
                                    <Link to="phyniteProtocol" className="text-gray-300  py-[2px] px-2 flex items-center">
                                        <h1 className="text-gray-300 text-xs mr-1">Read More</h1>
                                        <img alt="" className="w-3 h-3 brightness-90" src={Arrow}></img>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-16">
                        <h1 className="text-white font-semibold text-3xl mb-3 pl-1">Learn More</h1>
                        <div className="w-full h-48 rounded-xl bg-gray3 border-gray1 border mb-[18px]"></div>
                        <div className="flex w-full gap-x-3 mb-[18px]">
                            <div className="rounded-xl h-56 bg-gray3 border border-gray1 w-1/2"></div>
                            <div className="rounded-xl h-56 bg-gray3 border border-gray1 w-1/2"></div>
                        </div>
                        <div className="flex w-full gap-x-3">
                            <div className="rounded-xl h-56 bg-gray3 border border-gray1 w-1/2"></div>
                            <div className="rounded-xl h-56 bg-gray3 border border-gray1 w-1/2"></div>
                        </div>
                    </div>
                </div>
            )}
            {props.displayType === "tablet" && (
                <div className="w-full pt-20 px-[18px] font-poppins">
                    <div className="w-full flex justify-center pt-20 items-center mb-24">
                        <div className="w-[60%] h-full flex flex-col justify-center pl-1">
                            <h1 className="text-4xl font-semibold text-phyniteBlue leading-tight font-poppins">The Web3 Marketplace for Physical Collectibles</h1>
                            <h2 className="text-lg mt-6 mb-8 text-white font-light font-poppins">The fastest, safest, most forward-thinking way to trade physical collectibles. Only on Phynite.</h2>
                            <Link to="/getStarted" className="text-3xl font-semibold font-poppins text-gray1 bg-gradient-to-br from-phyniteBlue to-phyniteBlue rounded-xl w-[300px] py-2 text-center">Get Started</Link>
                        </div>
                        <div className="w-[40%]  h-full flex justify-center items-center overflow-hidden">
                            <img alt="" className="w-full translate-x-4 scale-110" src={CrystalPhyniteLogo}></img>
                        </div>
                    </div>

                    <div className="w-full mb-24">
                        <h1 className="text-white text-[27px] font-semibold font-poppins pl-1 mb-4">Phynite Marketplace</h1>
                       
                        <div className="h-[400px] flex-col flex font-poppins bg-gray1 rounded-2xl mb-6">
                        </div>
                        <div className="font-poppins px-1">
                            <div className="w-full">
                                <h2 className="text-lg font-semibold mb-2 text-white">Invest in the Physical, Digitally</h2>
                                <h3 className="text-[13px] text-gray-400">
                                All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.
                                </h3>
                            </div>
                            <div className="w-full my-8">
                                <h2 className="text-lg font-semibold mb-2 text-white">Trade Legal Ownership, not just IOUs</h2>
                                <h3 className="text-[13px] text-gray-400">
                                The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT.
                                </h3>
                            </div>
                            <div className="w-full">
                                <h2 className="text-lg font-semibold mb-2 text-white">Supporting Collectors, New and Old</h2>
                                <h3 className="text-[13px] text-gray-400">
                                All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.
                                </h3>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-24">
                        <h1 className="text-white font-semibold text-3xl text-center mb-2">Our Services</h1>
                        <h2 className="w-full text-gray-400 font-light text-sm text-center mb-6">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h2>
                        <div className="rounded-2xl bg-gradient-to-l from-gray3 to-gray1 p-7 border border-gray1 flex gap-x-2 mb-5">
                            <div className="w-[45%]">
                                <h1 className="text-white font-[500] text-[26px]">Mint</h1>
                                <img alt="" className="w-full" src={CrystalVault}></img>
                            </div>
                            <div className="w-[65%] flex flex-col justify-center pt-8">
                                <h2 className="text-white font-[500] mb-3 text-xl pt-11">Earn Royalties on Your NFTs Every Transaction</h2>
                                <h3 className="text-gray-400 text-sm">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h3>
                                <div className="flex w-full items-end justify-end pt-3 flex-grow">
                                    <Link to="phyniteProtocol" className="text-gray-300 py-[2px] px-2 flex items-center">
                                        <h1 className="text-gray-300 text-sm mr-1">Read More</h1>
                                        <img alt="" className="w-4 h-4 brightness-90" src={Arrow}></img>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gradient-to-r from-gray3 to-gray1 p-7 border border-gray1 flex gap-x-2 mb-5">
                            <div className="w-[45%]">
                                <h1 className="text-white font-[500] text-[26px]">Trade</h1>
                                <img alt="" className="w-[90%] translate-y-2 translate-x-2" src={CrystalGlobe}></img>
                            </div>
                            <div className="w-[65%] flex flex-col justify-center pt-8">
                                <h2 className="text-white font-[500] mb-3 text-xl pt-11">Buy or Sell Collectibles from Anywhere, Anytime</h2>
                                <h3 className="text-gray-400 text-sm">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h3>
                                <div className="flex w-full items-end justify-end pt-3 flex-grow">
                                    <Link to="phyniteProtocol" className="text-gray-300 py-[2px] px-2 flex items-center">
                                        <h1 className="text-gray-300 text-sm mr-1">Read More</h1>
                                        <img alt="" className="w-4 h-4 brightness-90" src={Arrow}></img>
                                    </Link>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gradient-to-l from-gray3 to-gray1 p-7 border border-gray1 flex gap-x-2 mb-5">
                            <div className="w-[45%]">
                                <h1 className="text-white font-[500] text-[26px]">Redeem</h1>
                                <img alt="" className="w-[90%] translate-y-2 translate-x-2" src={CrystalHand}></img>
                            </div>
                            <div className="w-[65%] flex flex-col justify-center pt-8">
                                <h2 className="text-white font-[500] mb-3 text-xl pt-11">Claim your Collectible at the Ease of a Touch</h2>
                                <h3 className="text-gray-400 text-sm">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h3>
                                <div className="flex w-full items-end justify-end pt-3 flex-grow">
                                    <Link to="phyniteProtocol" className="text-gray-300  py-[2px] px-2 flex items-center">
                                        <h1 className="text-gray-300 text-sm mr-1">Read More</h1>
                                        <img alt="" className="w-4 h-4 brightness-90" src={Arrow}></img>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-24">
                        <h1 className="text-white font-semibold text-3xl mb-5 pl-1">Learn More</h1>
                        <div className="w-full h-80 rounded-xl bg-gray3 border-gray1 border mb-5"></div>
                        <div className="flex w-full gap-x-4 mb-5">
                            <div className="rounded-xl h-56 bg-gray3 border border-gray1 w-1/2"></div>
                            <div className="rounded-xl h-56 bg-gray3 border border-gray1 w-1/2"></div>
                        </div>
                        <div className="flex w-full gap-x-4">
                            <div className="rounded-xl h-56 bg-gray3 border border-gray1 w-1/2"></div>
                            <div className="rounded-xl h-56 bg-gray3 border border-gray1 w-1/2"></div>
                        </div>
                    </div>
                </div>
            )}
            {props.displayType === "smallComputer" && (
                <div className="w-full px-8 font-poppins pt-20">
                    <div className="w-full flex justify-center pt-20 items-center mb-20 h-screen min-h-[500px] max-h-[600px] gap-x-6">
                        <div className="w-[60%] h-full flex flex-col justify-center pl-1">
                            <h1 className="text-5xl font-semibold text-phyniteBlue leading-tight font-poppins w-[600px]">The Web3 Marketplace for Physical Collectibles</h1>
                            <h2 className="text-lg mt-6 mb-8 text-white font-light font-poppins w-[600px]">The fastest, safest, most forward-thinking way to trade physical collectibles. Only on Phynite.</h2>
                            <Link to="/getStarted" className="text-3xl font-semibold font-poppins text-gray1 bg-gradient-to-br from-phyniteBlue to-phyniteBlue rounded-xl w-[300px] py-2 text-center hover:brightness-125 hover:from-mango hover:to-salmon duration-300">Get Started</Link>
                        </div>
                        <div className="w-[40%]  h-full flex justify-center items-center overflow-hidden">
                            <img alt="" className="w-full translate-x-4" src={CrystalPhyniteLogo}></img>
                        </div>
                    </div>
                    <div className="w-full mb-24">
                        <h1 className="text-white text-3xl font-semibold font-poppins">Phynite Marketplace</h1>
                        <div className="flex justify-center">
                            <div className="w-[50%] h-full flex-col flex font-poppins bg-gray0">
                            </div>
                            <div className="w-[50%]  h-full font-poppins">
                                <div className="w-full  p-5 ">
                                    <h2 className="text-xl font-semibold mb-2 text-white">Invest in the Physical, Digitally</h2>
                                    <h3 className="text-[13px] text-gray-400">
                                    All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.
                                    </h3>
                                </div>
                                <div className="w-full my-5 p-5">
                                    <h2 className="text-xl font-semibold mb-2 text-white">Trade Legal Ownership, not just IOUs</h2>
                                    <h3 className="text-[13px] text-gray-400">
                                    The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT.
                                    </h3>
                                </div>
                                <div className="w-full p-5">
                                    <h2 className="text-xl font-semibold mb-2 text-white">Supporting Collectors, New and Old</h2>
                                    <h3 className="text-[13px] text-gray-400">
                                    All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-24">
                        <h1 className="text-white font-poppins text-4xl font-semibold mb-2 w-full text-center">Our Services</h1>
                        <h2 className="w-full text-gray-400 font-light text-center mb-10">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h2>
                        <div className="w-full font-poppins flex gap-x-6 h-full">
                            <div className="w-1/3 h-full flex flex-col items-center bg-gradient-to-b from-gray3 to-gray1 rounded-2xl p-8 border border-gray1 hover:border-gray0 duration-200">
                                <h1 className="text-white text-3xl font-[500] w-full text-left mb-3">
                                    Mint
                                </h1>
                                <div className="flex justify-center items-center w-full mb-5">
                                    <img alt="" src={CrystalVault} className="w-[70%]"></img>
                                </div>
                                <h1 className="text-white text-xl font-[500] text-left w-full mb-3">
                                    Earn Royalties on Your NFTs Every Transaction
                                </h1>
                                <h2 className="w-full text-gray-300 font-light text-left text-[13px] mb-5">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h2>
                                <div className="flex flex-grow items-end justify-end w-full ">
                                    <Link to="/phyniteProtocol"  className="flex items-center hover:brightness-125 px-3 border border-gray0 rounded-lg h-7">
                                        <div className="text-gray-300 text-[13px]">Read More</div>
                                        <img alt="" src={Arrow} className="w-4 h-4 ml-1 brightness-90"></img>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-1/3 h-full flex flex-col items-center bg-gradient-to-b from-gray3 to-gray1 rounded-2xl p-8 border border-gray1 hover:border-gray0 duration-200">
                                <h1 className="text-white text-3xl font-[500] w-full text-left mb-3">
                                    Trade
                                </h1>
                                <div className="flex justify-center items-center w-full mb-5">
                                    <img alt="" src={CrystalGlobe} className="w-[70%]"></img>
                                </div>
                                <h1 className="text-white text-xl font-[500] text-left w-full mb-3">
                                    Buy or Sell Collectibles from Anywhere, Anytime
                                </h1>
                                <h2 className="w-full text-gray-300 font-light text-left text-[13px] mb-5">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h2>
                                <div className="flex flex-grow items-end justify-end w-full ">
                                    <Link to="/phyniteProtocol"  className="flex items-center hover:brightness-125 px-3 border border-gray0 rounded-lg h-7">
                                        <div className="text-gray-300 text-[13px]">Read More</div>
                                        <img alt="" src={Arrow} className="w-4 h-4 ml-1 brightness-90"></img>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-1/3 h-full flex flex-col items-center bg-gradient-to-b from-gray3 to-gray1 rounded-2xl p-8 border border-gray1 hover:border-gray0 duration-200">
                                <h1 className="text-white text-3xl font-[500] w-full text-left mb-3">
                                    Redeem
                                </h1>
                                <div className="flex justify-center items-center w-full mb-5">
                                    <img alt="" src={CrystalHand} className="w-[70%]"></img>
                                </div>
                                <h1 className="text-white text-xl font-[500] text-left w-full mb-3">
                                    Claim your Collectible at the Ease of a Touch
                                </h1>
                                <h2 className="w-full text-gray-300 font-light text-left text-[13px] mb-5">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h2>
                                <div className="flex flex-grow items-end justify-end w-full ">
                                    <Link to="/phyniteProtocol"  className="flex items-center hover:brightness-125 px-3 border border-gray0 rounded-lg h-7">
                                        <div className="text-gray-300 text-[13px]">Read More</div>
                                        <img alt="" src={Arrow} className="w-4 h-4 ml-1 brightness-90"></img>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-24">
                        <div className="w-full flex flex-col">
                            <h1 className="text-white text-semibold text-3xl font-semibold mb-5">Learn More</h1>
                            <div className="flex w-full h-[500px] mb-7">
                                <div className="bg-gray3 border border-gray1 rounded-xl h-full w-full"></div>
                                
                            </div>
                            <div className="h-[200px] w-full flex gap-x-5">
                                <div className="w-[25%] bg-gray3 p-5 border border-gray1 rounded-xl">

                                </div>
                                <div className="w-[25%] bg-gray3 p-5 border border-gray1 rounded-xl">

                                </div>
                                <div className="w-[25%] bg-gray3 p-5 border border-gray1 rounded-xl">

                                </div>
                                <div className="w-[25%] bg-gray3 p-5 border border-gray1 rounded-xl">

                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {props.displayType === "computer" && (
                <div className="w-full">
                    <div className="w-full bg-mainGray max-h-[900px] h-screen min-h-[700px] flex justify-center">
                        <div className="w-[1300px]  h-full flex justify-center">
                            <div className="w-[60%] h-full flex flex-col justify-center">
                                <h1 className="text-[54px] font-semibold text-phyniteBlue leading-tight font-poppins">The Web3 Marketplace<br/>for Physical Collectibles</h1>
                                <h2 className="text-xl mt-6 mb-8 text-white font-light font-poppins">The fastest, safest, most forward-thinking way to trade physical<br/>collectibles. Only on Phynite.</h2>
                                <Link to="/getStarted" className="text-3xl font-semibold font-poppins text-gray1 bg-gradient-to-br from-phyniteBlue to-phyniteBlue hover:brightness-125 hover:from-mango hover:to-salmon duration-300 rounded-xl w-[300px] py-2 text-center">Get Started</Link>
                            </div>
                            <div className="w-[40%]  h-full flex justify-center items-center">
                                <img alt="" className="w-[550px] h-[550px] translate-x-4" src={CrystalPhyniteLogo}></img>
                            </div>
                        </div>
                    </div>
                    <div className="w-full min-h-[500px] flex justify-center mb-32">
                        <div className="w-[1300px]  h-full flex flex-col">
                            <h1 className="text-white text-3xl font-semibold font-poppins">Phynite Marketplace</h1>
                            <div className="flex justify-center">
                                <div className="w-[50%] h-full flex-col flex font-poppins bg-gray0">
                                </div>
                                <div className="w-[50%]  h-full font-poppins p-4">
                                    <div className="w-full  p-5 ">
                                        <h2 className="text-xl font-semibold mb-2 text-white">Invest in the Physical, Digitally</h2>
                                        <h3 className="text-sm text-gray-400">
                                        All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.
                                        </h3>
                                    </div>
                                    <div className="w-full my-5 p-5">
                                        <h2 className="text-xl font-semibold mb-2 text-white">Trade Legal Ownership, not just IOUs</h2>
                                        <h3 className="text-sm text-gray-400">
                                        The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT.
                                        </h3>
                                    </div>
                                    <div className="w-full p-5">
                                        <h2 className="text-xl font-semibold mb-2 text-white">Supporting Collectors, New and Old</h2>
                                        <h3 className="text-sm text-gray-400">
                                        All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.
                                        </h3>
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div> 
                    </div>
                    <div className="w-full flex-col flex items-center mb-32">
                        <h1 className="text-white font-poppins text-[42px] font-semibold mb-2">Our Services</h1>
                        <h2 className="w-full text-gray-400 font-light text-center mb-10">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h2>
                        <div className="w-[1300px] font-poppins flex items-center h-[575px]">
                            <div className="w-1/3 h-full mr-[9px] flex flex-col items-center bg-gradient-to-b from-gray3 to-gray1 rounded-2xl p-10 border border-gray1 hover:border-gray0 duration-200">
                                <h1 className="text-white text-3xl font-[500] w-full text-left mb-3">
                                    Mint
                                </h1>
                                <div className="flex justify-center items-center w-full h-[240px] mb-5">
                                    <img alt="" src={CrystalVault} className="w-[240px] h-[240px]"></img>
                                </div>
                                <h1 className="text-white text-2xl font-[500] text-left w-full mb-3">
                                    Earn Royalties on Your NFTs Every Transaction
                                </h1>
                                <h2 className="w-full text-gray-300 font-light text-left text-[13px]">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h2>
                                <div className="flex flex-grow items-end justify-end w-full ">
                                    <Link to="/phyniteProtocol"  className="flex items-center hover:brightness-125 px-3 border border-gray0 rounded-lg h-7">
                                        <div className="text-gray-300 text-[13px]">Read More</div>
                                        <img alt="" src={Arrow} className="w-4 h-4 ml-1 brightness-90"></img>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-1/3 h-full mx-[27px] flex flex-col items-center bg-gradient-to-b from-gray3 to-gray1 rounded-2xl p-10 border border-gray1 hover:border-gray0 duration-200">
                                <h1 className="text-white text-3xl font-[500] w-full text-left mb-3">
                                    Trade
                                </h1>
                                <div className="flex justify-center items-center w-full h-[240px] mb-5">
                                    <img alt="" src={CrystalGlobe} className="w-[220px] h-[220px]"></img>
                                </div>
                                <h1 className="text-white text-2xl font-[500] text-left w-full mb-3">
                                    Buy or Sell Collectibles from Anywhere, Anytime
                                </h1>
                                <h2 className="w-full text-gray-300 font-light text-left text-[13px]">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h2>
                                <div className="flex flex-grow items-end justify-end w-full ">
                                    <Link to="/phyniteProtocol"  className="flex items-center hover:brightness-125 px-3 border border-gray0 rounded-lg h-7">
                                        <div className="text-gray-300 text-[13px]">Read More</div>
                                        <img alt="" src={Arrow} className="w-4 h-4 ml-1 brightness-90"></img>
                                    </Link>
                                </div>
                            </div>
                            <div className="w-1/3 h-full ml-[9px] flex flex-col items-center bg-gradient-to-b from-gray3 to-gray1 rounded-2xl p-10 border border-gray1 hover:border-gray0 duration-200">
                                <h1 className="text-white text-3xl font-[500] w-full text-left mb-3">
                                    Redeem
                                </h1>
                                <div className="flex justify-center items-center w-full h-[240px] mb-5">
                                    <img alt="" src={CrystalHand} className="w-[230px] h-[230px]"></img>
                                </div>
                                <h1 className="text-white text-2xl font-[500] text-left w-full mb-3">
                                    Claim your Collectible at the Ease of a Touch
                                </h1>
                                <h2 className="w-full text-gray-300 font-light text-left text-[13px]">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h2>
                                <div className="flex flex-grow items-end justify-end w-full ">
                                    <Link to="/phyniteProtocol"  className="flex items-center hover:brightness-125 px-3 border border-gray0 rounded-lg h-7">
                                        <div className="text-gray-300 text-[13px]">Read More</div>
                                        <img alt="" src={Arrow} className="w-4 h-4 ml-1 brightness-90"></img>
                                    </Link>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full flex justify-center mb-32">
                        <div className="w-[1300px] font-poppins flex flex-col">
                            <h1 className="text-white text-semibold text-4xl font-semibold mb-6">Learn More</h1>
                            <div className="flex w-full h-[500px] mb-8">
                                <div className="bg-gray3 border border-gray1 rounded-xl h-full w-full"></div>
                                
                            </div>
                            <div className="h-[200px] w-full flex gap-x-6">
                                <div className="w-[25%] bg-gray3 p-5 border border-gray1 rounded-xl">

                                </div>
                                <div className="w-[25%] bg-gray3 p-5 border border-gray1 rounded-xl">

                                </div>
                                <div className="w-[25%] bg-gray3 p-5 border border-gray1 rounded-xl">

                                </div>
                                <div className="w-[25%] bg-gray3 p-5 border border-gray1 rounded-xl">

                                </div>
                            </div>
                        </div>
                    </div>

                </div>
            )}

            <Footer />
        </div>
    )
}