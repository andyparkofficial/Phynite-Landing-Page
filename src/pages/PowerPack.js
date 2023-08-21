import {useState, useEffect} from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import powerPackImage from "../assets/power-pack-transparent.png"

export default function PowerPack(props) {
    return (
        <div>
            <Navbar isClicked={"4"} />
            {props.displayType === "mobile" && (
                <div className="min-h-screen pt-20 flex justify-center font-poppins">
                    <div className="mt-12 w-full px-[18px]">
                        
                    </div>
                </div>
            )}
            {props.displayType === "tablet" && (
                <div className="min-h-screen pt-20 flex justify-center font-poppins">
                    <div className="mt-20 w-full px-[18px]">
                        
                    </div>
                </div>
            )}
            {props.displayType === "smallComputer" && (
                <div className="min-h-screen pt-20 flex justify-center font-poppins">
                    <div className="mt-20 w-full px-8">
                        
                    </div>
                </div>
            )}
            {props.displayType === "computer" && (
                <div className="min-h-screen pt-20 flex justify-center font-poppins">
                    <div className="w-[1300px]">
                        <div className="w-full flex justify-center">
                            <div className="flex flex-col items-center">
                                <h1 className="text-[76px] font-bold font-poppins text-white">Phynite</h1>
                                <div
                                className={`rounded-xl flex items-center justify-center h-14 text-[30px] shadow-lg duration-200 brightness-125 text-black w-[350px] tracking-wide font-orbitron font-extrabold bg-gradient-to-r to-[#737373] from-gray-400 border border-gray-400 `}
                                >
                                    POWER PACK
                                </div>
                                <img src={powerPackImage} className="w-full scale-[120%]"/>
                                <div className="bg-gradient-to-r from-salmon to-mango inline-block text-transparent bg-clip-text text-[40px] tracking-wide">GENESIS EDITION</div>
                                    
                                <h2 className="mb-5 text-gray-300 text-2xl">100 NFTs Backed by Real Graded Pokemon Cards</h2>
                                    
                            </div>
                            
                        </div>
                            
                        
                    </div>
                    <div className="min-h-screen"></div>
                </div>
            )}
            <Footer />
        </div>
    )
}