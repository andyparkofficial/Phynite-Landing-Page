import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import CrystalPhyniteLogo from "../assets/crystal-phynite-logo.png"
import RandomPlaceholder from "../assets/random-placeholder.png"
import Arrow from "../assets/right-arrow.png"
import GrayArrow from "../assets/gray-left-arrow.png"
import { Link } from "react-router-dom"
import AndyProfilePic from "../assets/andy-profile-picture.png"
import BillProfilePic from "../assets/bill-profile-picture.png"
import EsaProfilePic from "../assets/esa-profile-picture.png"
import LinkedInIcon from "../assets/linkedin-icon.png"
import TwitterIcon from "../assets/gray-twitter-icon.png"

export default function About (props) {
    const [selectedCBNFTSection, setSelectedCBNFTSection] = useState(0)
    const [sectionButtonStyle, setSectionButtonStyle] = useState(["border border-gray0 bg-gray3 rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray-400 text-white hover:brightness-125 duration-150", "border border-gray1 bg-mainGray rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray0 text-gray0 hover:text-gray-400 hover:brightness-125 duration-150", "border border-gray1 bg-mainGray rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray0 text-gray0 hover:text-gray-400 hover:brightness-125 duration-150"])
    const [selectedQuarter, setSelectedQuarter] = useState(0)
    const [timelineStyle, setTimelineStyle] = useState([{backgroundColor: "#E1FFFF"}, {backgroundColor: "#2D3038"}, {backgroundColor: "#2D3038"},{backgroundColor: "#2D3038"}])
    const [timelineHLStyle, setTimelineHLStyle] = useState([{backgroundColor: "#E1FFFF"}, {backgroundColor: "#6B7280"}, {backgroundColor: "#6B7280"},{backgroundColor: "#6B7280"}])

    useEffect(() => {
        setTimelineStyle((prevStyle) => {
            let newStyle = { ...prevStyle }
            newStyle = [{ backgroundColor: "#2D3038" }, { backgroundColor: "#2D3038" }, { backgroundColor: "#2D3038" }, { backgroundColor: "#2D3038" }]
            
            for (let i = 0; i < selectedQuarter + 1; i++){
                newStyle[i] = {backgroundColor: "#E1FFFF"}
            }
            return newStyle;
        })
        setTimelineHLStyle((prevStyle) => {
            let newStyle = { ...prevStyle }
            newStyle = [{ backgroundColor: "#6B7280" }, { backgroundColor: "#6B7280" }, { backgroundColor: "#6B7280" }, { backgroundColor: "#6B7280" }]
            
            for (let i = 0; i < selectedQuarter + 1; i++){
                newStyle[i] = {backgroundColor: "#E1FFFF"}
            }
            return newStyle;
        })
    },[selectedQuarter])

    useEffect(() => {
        setSectionButtonStyle(() => {
            let newStyle = ["border border-gray1 bg-mainGray rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray0 text-gray0 hover:text-gray-400 hover:brightness-125 duration-150", "border border-gray1 bg-mainGray rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray0 text-gray0 hover:text-gray-400 hover:brightness-125 duration-150", "border border-gray1 bg-mainGray rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray0 text-gray0 hover:text-gray-400 hover:brightness-125 duration-150"]
            newStyle[selectedCBNFTSection] = "border border-gray0 bg-gray3 rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray-400 text-white hover:brightness-125 duration-150"
            return newStyle
            
        })
    }, [selectedCBNFTSection])

    

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
                                    <h1 className="text-xl">Overview: CBNFTs</h1>
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
                                <h1 className="text-white text-2xl font-[500]">Overview: CBNFTs</h1>
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
                    <h1 className="text-4xl font-poppins font-semibold text-white mb-8">Timeline</h1>
                    <div className="flex h-full rounded-xl border border-gray1 bg-gradient-to-r from-gray4 via-gray3 to-gray1 ">
                        <div className="w-[300px] pr-6 pt-8  pl-8">
                            
                            {selectedQuarter === 0 && (
                                <div className="">
                                    <h1 className="text-white font-poppins text-3xl font-semibold mb-4">Q2 2023</h1>
                                    <div className="pl-4">
                                        <li className="text-gray-400 font-poppins font-light mb-3">
                                            Alpha Marketplace Launch (Few Selected Users)
                                            
                                        </li>
                                        <li className="text-gray-400 font-poppins font-light">
                                            Beta Marketplace Launch (Open to All Users)
                                        </li>
                                    </div>
                                    
                                </div>
                            )}
                            {selectedQuarter === 1 && (
                                <div className="">
                                    <h1 className="text-white font-poppins text-3xl font-semibold mb-4">Q3 2023</h1>
                                    <div className="pl-4">
                                        <li className="text-gray-400 font-poppins font-light mb-3">
                                            Official Marketplace Upgrade
                                            
                                        </li>
                                        <li className="text-gray-400 font-poppins font-light">
                                            Phynite Instagram Launch
                                        </li>
                                    </div>
                                    
                                </div>
                            )}
                            {selectedQuarter === 2 && (
                                <div className="">
                                    <h1 className="text-white font-poppins text-3xl font-semibold mb-4">Q4 2023</h1>
                                    <div className="pl-4">
                                        <li className="text-gray-400 font-poppins font-light mb-3">
                                            New Collectible Categories Added
                                            
                                        </li>
                                        <li className="text-gray-400 font-poppins font-light">
                                            Phynite Rewards System Launch
                                        </li>
                                    </div>
                                    
                                </div>
                            )}
                            {selectedQuarter === 3 && (
                                <div className="">
                                    <h1 className="text-white font-poppins text-3xl font-semibold mb-4">Q1 2024</h1>
                                    <div className="pl-4">
                                        <li className="text-gray-400 font-poppins font-light mb-3">
                                            On-Chain Storage of Legal Signatures Enabled
                                            
                                        </li>
                                        <li className="text-gray-400 font-poppins font-light">
                                            More Coming Soon...
                                        </li>
                                    </div>
                                    
                                </div>
                            )}

                            
                        </div>
                        <div className="w-[1000px]">
                            <div className="h-[300px] w-full flex flex-col">
                                <div className="h-[140px] w-full font-poppins pt-8 flex px-8">
                                    <div className="w-[10%] h-full">
                                        <h1 className="text-white font-semibold text-3xl">2023</h1>
                                    </div>
                                    <div className="w-1/5 h-full justify-center items-end flex">
                                        {selectedQuarter === 0 ? (
                                            <button onClick={()=>setSelectedQuarter(0)} className="text-white font-[500] text-3xl p-2 duration-150">Q2</button>
                                        ):(
                                            <button onClick={()=>setSelectedQuarter(0)} className="text-gray-300 font-[500] text-2xl p-2 hover:text-3xl duration-150">Q2</button>        
                                        )}
                                        
                                    </div>
                                    <div className="w-1/5 h-full justify-center items-end flex">
                                        {selectedQuarter === 1 ? (
                                            <button onClick={() => setSelectedQuarter(1)} className="text-white font-[500] text-3xl p-2 duration-150">Q3</button>
                                        ):(
                                            <button onClick={() => setSelectedQuarter(1)} className="text-gray-300 font-[500] text-2xl p-2 hover:text-3xl duration-150">Q3</button>
                                        )}
                                        
                                    </div>
                                    <div className="w-1/5 h-full justify-center items-end flex">
                                        {selectedQuarter === 2 ? (
                                            <button onClick={() => setSelectedQuarter(2)} className="text-white font-[500] text-3xl p-2 duration-150">Q4</button>
                                        ):(
                                            <button onClick={() => setSelectedQuarter(2)} className="text-gray-300 font-[500] text-2xl p-2 hover:text-3xl duration-150">Q4</button>    
                                        )}
                                        
                                    </div>
                                    <div className="w-1/5 h-full justify-end items-center flex flex-col">
                                        <div className="flex flex-grow">
                                            <h1 className="text-white font-semibold text-3xl">2024</h1>
                                        </div>
                                        
                                        {selectedQuarter === 3 ? (
                                            <button onClick={()=>setSelectedQuarter(3)} className="text-white font-[500] text-3xl p-2 duration-150">Q1</button>
                                        ):(
                                            <button onClick={()=>setSelectedQuarter(3)} className="text-gray-300 font-[500] text-2xl p-2 hover:text-3xl duration-150">Q1</button>
                                        )}
                                        
                                    </div>
                                    <div className="w-[10%] h-full">
                                        
                                    </div>
                                </div>
                                <div className="h-[20px] w-full px-8  ">
                                    <div className="bg-gray1 flex-col justify-center flex  rounded-r-full">
                                        <div className="h-2 w-full flex">
                                            <button onClick={()=>setSelectedQuarter(0)} className="h-full w-1/5 border-x-2 border-l-[3px] border-gray0" style={timelineStyle[0]}></button>
                                            <button onClick={()=>setSelectedQuarter(1)} className="h-full w-1/5 border-x-2 border-gray0" style={timelineStyle[1]}></button>
                                            <button onClick={()=>setSelectedQuarter(2)} className="h-full w-1/5 border-x-2 border-gray0" style={timelineStyle[2]}></button>
                                            <button onClick={()=>setSelectedQuarter(3)} className="h-full w-1/5 border-x-2 border-gray0" style={timelineStyle[3]}></button>
                                            <div className="h-full w-1/5 border-l-2 border-gray0"></div>
                                        </div>
                                        <div className="h-[2px] w-full bg-gray0 flex">
                                            <button onClick={()=>setSelectedQuarter(0)} className="w-1/5 h-full border-x-2 border-l-[3px] border-gray0" style={timelineHLStyle[0]}></button>
                                            <button onClick={()=>setSelectedQuarter(1)} className="w-1/5 h-full border-x-2 border-gray0" style={timelineHLStyle[1]}></button>
                                            <button onClick={()=>setSelectedQuarter(2)} className="w-1/5 h-full border-x-2 border-gray0" style={timelineHLStyle[2]}></button>
                                            <button onClick={()=>setSelectedQuarter(3)} className="w-1/5 h-full border-x-2 border-gray0" style={timelineHLStyle[3]}></button>
                                            <div className="w-1/5 h-full flex justify-end border-l-2 border-gray0">
                                                <img className="w-8 h-8 rotate-180 translate-x-3 -translate-y-[15px]" src={GrayArrow}></img>
                                            </div>
                                            
                                        </div>
                                        <div className="h-2 w-full flex">
                                            <button onClick={()=>setSelectedQuarter(0)} className="h-full w-1/5 border-x-2 border-l-[3px] border-gray0" style={timelineStyle[0]}></button>
                                            <button onClick={()=>setSelectedQuarter(1)} className="h-full w-1/5 border-x-2 border-gray0" style={timelineStyle[1]}></button>
                                            <button onClick={()=>setSelectedQuarter(2)} className="h-full w-1/5 border-x-2 border-gray0" style={timelineStyle[2]}></button>
                                            <button onClick={()=>setSelectedQuarter(3)} className="h-full w-1/5 border-x-2 border-gray0" style={timelineStyle[3]}></button>
                                            <div className="h-full w-1/5 border-l-2 border-gray0"></div>
                                        </div>
                                    </div>

                                </div>
                                <div className="h-[140px] w-full font-poppins px-8 flex-col flex py-8">
                                    <div className="h-1/2 w-full flex items-end">
                                        <div className="w-[60%] border-b border-x border-gray0 rounded-b-xl flex justify-center pb-[2px]">
                                            <h1 className="font-light text-gray-400 font-poppins italic text-md tracking-wide">Minting Fees Waived</h1>
                                        </div>
                                    </div>
                                    <div className="h-1/2 w-full flex items-end">
                                        <div className="w-[80%]  border-b border-x border-gray0 rounded-b-xl flex justify-center pb-[2px]">
                                            <h1 className="font-light text-gray-400 font-poppins italic text-md tracking-wide">Vaulting Fees Waived</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>

                </div>
                <div className="w-[1300px] mb-28">
                    <div className="w-full flex justify-center">
                        <h1 className="text-4xl font-poppins font-semibold text-white mb-10">The Founders</h1>
                    </div>
                    <div className="w-full h-[520px] flex">
                        <div className="w-1/3 pr-6 h-full">
                            <div className="w-full rounded-3xl border border-gray1 h-full flex flex-col items-center p-10 bg-gradient-to-b from-gray2 to-gray4">
                                <img src={AndyProfilePic} className="h-[300px] w-[300px] rounded-full"></img>
                                <div className="w-full h-1/4 pt-4 flex-col flex items-center">
                                    <h1 className="text-white font-poppins text-2xl font-semibold mb-2 border-t border-gray1 w-[300px] text-center pt-4">Andy Park</h1>
                                    <h2 className="text-gray-400 font-poppins text-xl mb-2">CEO</h2>
                                    <div className="flex gap-x-2">
                                        <a href="https://www.linkedin.com/in/andy-park-b5a76a236/" className="" target="_blank">
                                            <img src={LinkedInIcon} className="h-8 w-8"></img>
                                        </a>
                                        <a>
                                            <img src={TwitterIcon} className="h-8 w-8"></img>
                                        </a>
                                    </div>
                                    
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3 px-2 h-full">
                            <div className="w-full rounded-3xl border border-gray1 h-full flex flex-col items-center p-10 bg-gradient-to-b from-gray2 to-gray4">
                                <img src={EsaProfilePic} className="h-[300px] w-[300px]  rounded-full"></img>
                                <div className="w-full h-1/4 pt-4 flex-col flex items-center">
                                    <h1 className="text-white font-poppins text-2xl font-semibold border-t border-gray1 w-[300px] text-center pt-4 mb-2">Esa Sait</h1>
                                    <h2 className="text-gray-400 font-poppins text-xl text-center mb-2">COO</h2>
                                    <div className="flex gap-x-2">
                                        <a className="" target="_blank">
                                            <img src={LinkedInIcon} className="h-8 w-8"></img>
                                        </a>
                                        <a>
                                            <img src={TwitterIcon} className="h-8 w-8"></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div className="w-1/3 pl-6 h-full">
                            <div className="w-full rounded-3xl border border-gray1 h-full flex flex-col items-center p-10 bg-gradient-to-b from-gray2 to-gray4">
                                <img src={BillProfilePic} className="h-[300px] w-[300px] rounded-full"></img>
                                <div className="w-full h-1/4 pt-4 flex-col flex items-center">
                                    <h1 className="text-white font-poppins text-2xl font-semibold border-t border-gray1 w-[300px] text-center pt-4 mb-2">Bill Yeo</h1>
                                    <h2 className="text-gray-400 font-poppins text-xl text-center mb-2">CFO</h2>
                                    <div className="flex gap-x-2">
                                        <a className="" target="_blank">
                                            <img src={LinkedInIcon} className="h-8 w-8"></img>
                                        </a>
                                        <a>
                                            <img src={TwitterIcon} className="h-8 w-8"></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    
                </div>
            </div>
            <Footer />
        </div>
    )
}