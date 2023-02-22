import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import CrystalPhyniteLogo from "../assets/crystal-phynite-logo.png"

export default function About (props) {
    return (
        <div>
            <Navbar isClicked={"0"} />
            <div className="w-full bg-mainGray flex flex-col items-center">
                <div className="w-[1300px] h-[700px] flex justify-center mt-16">

                    <div className="w-[40%]  h-full flex justify-center items-center">
                        <img className="w-[500px] h-[500px]" src={CrystalPhyniteLogo}></img>
                    </div>
                    <div className="w-[60%] h-full flex flex-col justify-center items-end">
                        <div className="w-[600px]">
                            <h1 className="text-5xl font-semibold text-phyniteBlue leading-tight font-poppins">Who We Are, Our Vision, and More.</h1>
                            <h2 className="text-xl mt-8 text-white font-light font-poppins">Learn more about our proprietary technology, timeline, and meet the team!</h2>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="w-[1300px] h-[600px] font-[500] font-poppins">
                    <h1 className="text-3xl text-white">What is Phynite?</h1>
                    <p className="text-md text-gray-400 w-[60%] mt-8" >All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT.</p>
                </div>
            </div>
            <Footer />
        </div>
    )
}