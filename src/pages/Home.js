import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import CrystalPhyniteLogo from "../assets/crystal-phynite-logo.png"
import CrystalGlobe from "../assets/crystal-globe.png"
import CrystalHand from "../assets/crystal-hand.png"
import CrystalVault from "../assets/crystal-vault.png"
import {Link} from "react-router-dom"


export default function Home(props) {
    


    return (
        <div className="">
            <Navbar />
            <div className="w-full bg-mainGray max-h-[900px] h-screen min-h-[700px] flex justify-center">
                <div className="w-[1300px]  h-full flex justify-center">
                    <div className="w-[60%] h-full flex flex-col justify-center">
                        <h1 className="text-[54px] font-semibold text-phyniteBlue leading-tight font-poppins">The Web3 Marketplace<br/>for Physical Collectibles</h1>
                        <h2 className="text-xl mt-6 mb-8 text-white font-light font-poppins">The fastest, safest, most forward-thinking way to trade physical<br/>collectibles. Only on Phynite.</h2>
                        <Link to="/getStarted" className="text-3xl font-semibold font-poppins text-gray1 bg-gradient-to-br from-phyniteBlue to-phyniteBlue hover:brightness-125 hover:from-mango hover:to-salmon duration-300 rounded-xl w-[300px] py-2 text-center">Get Started</Link>
                    </div>
                    <div className="w-[40%]  h-full flex justify-center items-center">
                        <img className="w-[550px] h-[550px] translate-x-4" src={CrystalPhyniteLogo}></img>
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
                <h1 className="text-white font-poppins text-[42px] font-semibold mb-10">What is Phynite?</h1>
                <div className="w-[1300px] font-poppins flex items-center h-[520px]">
                    <div className="w-1/3 h-full mr-[9px] flex flex-col items-center bg-gradient-to-b from-gray3 to-gray1 rounded-2xl p-10 border border-gray1 hover:border-gray0 duration-200">
                        <h1 className="text-white text-3xl font-[500] w-full text-left mb-2">
                            Mint
                        </h1>
                        <img src={CrystalVault} className="w-[300px] h-[300px]"></img>
                        <h2 className="w-full text-gray-300 font-light text-center border-t border-gray-600 pt-4">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h2>
                    </div>
                    <div className="w-1/3 h-full mx-[27px] flex flex-col items-center bg-gradient-to-b from-gray3 to-gray1 rounded-2xl p-10 border border-gray1 hover:border-gray0 duration-200">
                        <h1 className="text-white text-3xl font-[500] w-full text-left mb-2">
                            Trade
                        </h1>
                        <div className="flex justify-center items-center w-[300px] h-[300px]">
                            <img src={CrystalGlobe} className="w-[280px] h-[280px]"></img>
                        </div>
                        
                        <h2 className="w-full text-gray-300 font-light text-center border-t border-gray-600 pt-4">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h2>
                    </div>
                    <div className="w-1/3 h-full ml-[9px] flex flex-col items-center bg-gradient-to-b from-gray3 to-gray1 rounded-2xl p-10 border border-gray1 hover:border-gray0 duration-200">
                        <h1 className="text-white text-3xl font-[500] w-full text-left mb-2">
                            Redeem
                        </h1>
                        <div className="flex justify-center items-center w-[300px] h-[300px]">
                            <img src={CrystalHand} className="w-[280px] h-[280px]"></img>
                        </div>
                        <h2 className="w-full text-gray-300 font-light text-center border-t border-gray-600 pt-4">Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.</h2>
                    </div>
                </div>
            </div>

            <div className="w-full flex justify-center mb-32">
                <div className="w-[1300px] font-poppins flex flex-col">
                    <h1 className="text-white text-semibold text-4xl font-semibold mb-6">Learn More</h1>
                    <div className="flex w-fullS min-h-[400px] mb-6">
                        <div className="bg-gray3 border border-gray1 rounded-xl flex flex-grow h-full mr-6"></div>
                        <div className="w-[200px] h-full flex flex-col gap-y-6">
                            <div className="h-[50%] bg-gray3 p-5 border border-gray1 rounded-xl">

                            </div>
                            <div className="h-[50%] bg-gray3 p-5 border border-gray1 rounded-xl">

                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}