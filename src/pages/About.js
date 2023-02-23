import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import CrystalPhyniteLogo from "../assets/crystal-phynite-logo.png"
import RandomPlaceholder from "../assets/random-placeholder.png"
import Arrow from "../assets/right-arrow.png"
import {Link} from "react-router-dom"

export default function About (props) {
    const [selectedCBNFTSection, setSelectedCBNFTSection] = useState(0)
    const [sectionButtonStyle, setSectionButtonStyle] = useState(["border border-gray0 bg-gray3 rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray-400 text-white hover:brightness-125 duration-150", "border border-gray1 bg-mainGray rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray0 text-gray0 hover:text-gray-400 hover:brightness-125 duration-150", "border border-gray1 bg-mainGray rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray0 text-gray0 hover:text-gray-400 hover:brightness-125 duration-150"])

    useEffect(() => {
        setSectionButtonStyle(() => {
            let newStyle = ["border border-gray1 bg-mainGray rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray0 text-gray0 hover:text-gray-400 hover:brightness-125 duration-150", "border border-gray1 bg-mainGray rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray0 text-gray0 hover:text-gray-400 hover:brightness-125 duration-150", "border border-gray1 bg-mainGray rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray0 text-gray0 hover:text-gray-400 hover:brightness-125 duration-150"]
            newStyle[selectedCBNFTSection] = "border border-gray0 bg-gray3 rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray-400 text-white hover:brightness-125 duration-150"
            return newStyle
            
        })
    }, [selectedCBNFTSection])

    // <button className="h-4 w-4 rounded-full bg-gray1 hover:brightness-150 translate-x-[8px] -translate-y-[7px] bg-opacity-50"></button>

    return (
        <div>
            <Navbar isClicked={"0"} />
            <div className="w-full bg-mainGray flex flex-col items-center">
                <div className="w-[1300px] min-h-[650px] h-screen max-h-[750px] flex justify-center mt-16">

                    <div className="w-[40%]  h-full flex justify-center items-center">
                        <img className="w-[500px] h-[500px]" src={CrystalPhyniteLogo}></img>
                    </div>
                    <div className="w-[60%] h-full flex flex-col justify-center items-end pr-10">
                        <div className="w-[600px]">
                            <h1 className="text-5xl font-semibold text-phyniteBlue leading-tight font-poppins">Who We Are, Our Vision, and More.</h1>
                            <h2 className="text-xl mt-8 text-white font-light font-poppins">Learn more about our proprietary technology, timeline, and meet the team!</h2>
                        </div>
                        
                    </div>
                    
                </div>
                <div className="w-[1300px] font-poppins mb-20">
                    <h1 className="text-3xl text-white font-semibold">What is Phynite?</h1>
                    <p className="text-md text-gray-400 w-[60%] mt-8" >All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT.</p>
                </div>
                <div className="w-[1300px] flex mb-28">
                    <div className="w-[60%]">
                        <img src={RandomPlaceholder} className="border border-gray0 rounded-xl "></img>
                    </div>
                    <div className="w-[40%]">
                        <div className="pl-20 font-poppins">
                            <h1 className="text-3xl text-white font-semibold">The Phynite Protocol</h1>
                            <p className="text-md text-gray-400 w-full mt-8" >All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT.</p>
                            <Link to="/phyniteProtocol"  className="flex justify-end mt-10 items-center pr-4">
                                <div className="text-white text-lg">Learn More</div>
                                <img src={Arrow} className="w-6 h-6 ml-2"></img>
                            </Link>
                        </div>
                    </div>
                    
                </div>
                <div className="w-[1300px] mb-28">
                    <h1 className="font-poppins text-white text-3xl mb-16 w-full border-b border-gray0 pb-10 font-semibold">Contractually Bound Non-Fungible Tokens</h1>
                    <div className="flex h-[300px] w-full">
                        <div className="w-[35%] pr-16 flex flex-col font-poppins font-[500]">
                            <div className="pb-3 h-1/3 w-full">
                                <button onClick={()=>setSelectedCBNFTSection(0)} className={sectionButtonStyle[0]}>
                                    <h1 className="text-xl">CBNFTs: Overview</h1>
                                </button>
                            </div>
                            
                            <div className="py-1 h-1/3 w-full">
                                <button onClick={()=>setSelectedCBNFTSection(1)} className={sectionButtonStyle[1]}>
                                    <h1 className="text-xl">Phase 1: Off-Chain Storage</h1>
                                </button>
                            </div>
                            <div className="pt-3 h-1/3 w-full">
                                <button onClick={()=>setSelectedCBNFTSection(2)} className={sectionButtonStyle[2]}>
                                    <h1 className="text-xl">Phase 2: On-Chain Storage</h1>
                                </button>
                            </div>
                            
                        </div>
                        <div className="w-[65%] h-full">
                            {selectedCBNFTSection === 0 && (
                            <div className="w-full h-full font-poppins pt-2 flex flex-col">
                                <h1 className="text-white text-2xl font-[500]">CBNFTs: Overview</h1>
                                <p className="text-lg text-gray-400 w-full mt-8" >All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT.</p>
                                <div className="flex flex-grow items-end">
                                    <Link to="/phyniteProtocol"  className="flex items-center hover:border-gray0 hover:brightness-125 duration-150 bg-mainGray rounded-2xl border-gray1 border p-2 w-44 justify-center">
                                        <div className="text-white text-lg">Read More</div>
                                        <img src={Arrow} className="w-6 h-6 ml-2"></img>
                                    </Link>
                                </div>
                                

                            </div>
                            )}
                            {selectedCBNFTSection === 1 && (
                            <div className="w-full h-full font-poppins pt-2 flex flex-col">
                                <h1 className="text-white text-2xl font-[500]">Phase 1: Off-Chain Storage</h1>
                                <p className="text-lg text-gray-400 w-full mt-8" >All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT.</p>
                                <div className="flex flex-grow items-end">
                                    <Link to="/phyniteProtocol"  className="flex items-center hover:border-gray0 hover:brightness-125 duration-150 bg-mainGray rounded-2xl border-gray1 border p-2 w-44 justify-center">
                                        <div className="text-white text-lg">Read More</div>
                                        <img src={Arrow} className="w-6 h-6 ml-2"></img>
                                    </Link>
                                </div>
                            </div>
                            )}
                            {selectedCBNFTSection === 2 && (
                            <div className="w-full h-full font-poppins pt-2 flex flex-col">
                                <h1 className="text-white text-2xl font-[500]">Phase 2: On-Chain Storage</h1>
                                <p className="text-lg text-gray-400 w-full mt-8" >All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT.</p>
                                <div className="flex flex-grow items-end">
                                    <Link to="/phyniteProtocol"  className="flex items-center hover:border-gray0 hover:brightness-125 duration-150 bg-mainGray rounded-2xl border-gray1 border p-2 w-44 justify-center">
                                        <div className="text-white text-lg">Read More</div>
                                        <img src={Arrow} className="w-6 h-6 ml-2"></img>
                                    </Link>
                                </div>
                            </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className="w-[1300px] mb-28">
                    <h1 className="text-4xl font-poppins font-semibold text-white mb-10">Timeline</h1>
                    <div className="h-[300px] w-full rounded-xl bg-gray4 border border-gray1 flex flex-col">
                        <div className="h-[140px] w-full"></div>
                        <div className="h-[20px] w-full px-8  ">
                            <div className="bg-gray2 flex-col justify-center flex">
                                <div className="h-2 w-full flex">
                                    <div className="h-full w-1/4 border-x-2 border-l-[3px] border-gray0"></div>
                                    <div className="h-full w-1/4 border-x-2 border-gray0"></div>
                                    <div className="h-full w-1/4 border-x-2 border-gray0"></div>
                                    <div className="h-full w-1/4 border-x-2 border-r-[3px] border-gray0"></div>
                                </div>
                                <div className="h-[2px] w-full bg-gray0 flex">
                                    <div className="w-1/4 flex justify-end">
                                        <button className="h-2 w-2 rounded-full bg-gray0 hover:brightness-150 translate-x-[4.5px] -translate-y-[3px] bg-opacity-50"></button>
                                    </div>
                                    <div className="w-1/4 flex justify-end">
                                        <button className="h-2 w-2 rounded-full bg-gray0 hover:brightness-150 translate-x-[4.5px] -translate-y-[3px] bg-opacity-50"></button>
                                    </div>
                                    <div className="w-1/4 flex justify-end">
                                        <button className="h-2 w-2 rounded-full bg-gray0 hover:brightness-150 translate-x-[3.5px] -translate-y-[3px] bg-opacity-50"></button>
                                    </div>
                                    <div className="w-1/4 flex justify-end">
                                        <button className="h-2 w-2 rounded-full bg-gray0 hover:brightness-150 translate-x-[2px] -translate-y-[3px] bg-opacity-50"></button>
                                    </div>
                                </div>
                                <div className="h-2 w-full flex">
                                    <div className="h-full w-1/4 border-x-2 border-l-[3px] border-gray0"></div>
                                    <div className="h-full w-1/4 border-x-2 border-gray0"></div>
                                    <div className="h-full w-1/4 border-x-2 border-gray0"></div>
                                    <div className="h-full w-1/4 border-x-2 border-r-[3px] border-gray0"></div>
                                </div>
                            </div>

                        </div>
                        <div className="h-[140px] w-full"></div>
                    </div>
                </div>
                <div className="w-[1300px] mb-28">
                    <div className="w-full flex justify-center">
                        <h1 className="text-4xl font-poppins font-semibold text-white mb-10">The Team</h1>
                    </div>
                    <div className="w-full h-[500px] flex">
                        <div className="w-1/3 pr-6 h-full">
                            <div className="w-full rounded-2xl bg-gray4 border border-gray1 h-full"></div>
                        </div>
                        <div className="w-1/3 px-2 h-full">
                            <div className="w-full rounded-2xl bg-gray4 border border-gray1 h-full"></div>
                        </div>
                        <div className="w-1/3 pl-6 h-full">
                            <div className="w-full rounded-2xl bg-gray4 border border-gray1 h-full"></div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}