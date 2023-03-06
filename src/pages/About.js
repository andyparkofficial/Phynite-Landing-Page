import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import CrystalPhyniteLogo from "../assets/crystal-phynite-logo.png"
import CrystalGlobe from "../assets/crystal-globe.png"
import CrystalHand from "../assets/crystal-hand.png"
import CrystalVault from "../assets/crystal-vault.png"
import DescriptionDropdownMenu from "../components/DescriptionDropdownMenu.js"
import DescriptionItem from "../components/DescriptionItem.js"
import RandomPlaceholder from "../assets/random-placeholder.png"
import Arrow from "../assets/right-arrow.png"
import GrayArrow from "../assets/gray-left-arrow.png"
import { Link } from "react-router-dom"
import AndyProfilePic from "../assets/andy-profile-picture.png"
import BillProfilePic from "../assets/bill-profile-picture.png"
import EsaProfilePic from "../assets/esa-profile-picture.png"
import LinkedInIcon from "../assets/linkedin-icon.png"
import TwitterIcon from "../assets/gray-twitter-icon.png"
import CrystalContract from "../assets/crystal-contract.png"

export default function About (props) {
    const [selectedCBNFTSection, setSelectedCBNFTSection] = useState(0)
    const [cbnftSectionButtonStyle, setCBNFTSectionButtonStyle] = useState(["border border-gray0 bg-gray3 rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray-400 text-white hover:brightness-125 duration-150", "border border-gray1 bg-mainGray rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray0 text-gray0 hover:text-gray-400 hover:brightness-125 duration-150", "border border-gray1 bg-mainGray rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray0 text-gray0 hover:text-gray-400 hover:brightness-125 duration-150"])
    const [mobileCBNFTSectionButtonStyle, setMobileCBNFTSectionButtonStyle] = useState(["border border-gray0 bg-gray3 rounded-2xl w-full flex justify-start items-center text-white", "border border-gray1 bg-mainGray rounded-2xl w-full flex justify-start items-center text-gray0", "border border-gray1 bg-mainGray rounded-2xl w-full flex justify-start items-center text-gray0"])
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
        setCBNFTSectionButtonStyle(() => {
            let newStyle = ["border border-gray1 bg-mainGray rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray0 text-gray0 hover:text-gray-400 hover:brightness-125 duration-150", "border border-gray1 bg-mainGray rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray0 text-gray0 hover:text-gray-400 hover:brightness-125 duration-150", "border border-gray1 bg-mainGray rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray0 text-gray0 hover:text-gray-400 hover:brightness-125 duration-150"]
            newStyle[selectedCBNFTSection] = "border border-gray0 bg-gray3 rounded-3xl w-full h-full flex justify-start items-center pl-8 hover:border-gray-400 text-white hover:brightness-125 duration-150"
            return newStyle
            
        })
        setMobileCBNFTSectionButtonStyle(() => {
            let newStyle = ["border border-gray1 bg-mainGray rounded-2xl w-full flex justify-start items-center text-gray0","border border-gray1 bg-mainGray rounded-2xl w-full flex justify-start items-center text-gray0","border border-gray1 bg-mainGray rounded-2xl w-full flex justify-start items-center text-gray0"]
            newStyle[selectedCBNFTSection] = "border border-gray0 bg-gray3 rounded-2xl w-full flex justify-start items-center text-white"
            return newStyle
        })
    }, [selectedCBNFTSection])

    const [selectedSection, setSelectedSection] = useState(0)
    const [sectionButtonStyle, setSectionButtonStyle] = useState(["w-1/3 border-b-2 border-gray0", "w-1/3", "w-1/3"])
    const [activeMenuMint, setActiveMenuMint] = useState([true, false, false])
    const [activeMenuTrade, setActiveMenuTrade] = useState([true, false, false])
    const [activeMenuRedeem, setActiveMenuRedeem] = useState([true, false, false])
    

    useEffect(() => {
        setSectionButtonStyle(() => {
            let newStyle = ["w-1/3", "w-1/3", "w-1/3"]
            newStyle[selectedSection] = "w-1/3 border-b-2 border-gray0"
            return newStyle
            
        })
    }, [selectedSection])
    
    function toggleMintMenu(menuIndex) {
        setActiveMenuMint((prevMenu) => {
            let newMenu = [...prevMenu]
            if (newMenu[menuIndex] === false) {
                newMenu = [false, false, false]
                newMenu[menuIndex] = true
            } else {
                newMenu[menuIndex] = false
            }
            
            return newMenu
        })
    }

    function toggleTradeMenu(menuIndex) {
        setActiveMenuTrade((prevMenu) => {
            let newMenu = [...prevMenu]
            if (newMenu[menuIndex] === false) {
                newMenu = [false, false, false]
                newMenu[menuIndex] = true
            } else {
                newMenu[menuIndex] = false
            }
            
            return newMenu
        })
    }

    function toggleRedeemMenu(menuIndex) {
        setActiveMenuRedeem((prevMenu) => {
            let newMenu = [...prevMenu]
            if (newMenu[menuIndex] === false) {
                newMenu = [false, false, false]
                newMenu[menuIndex] = true
            } else {
                newMenu[menuIndex] = false
            }
            
            return newMenu
        })
    }


    

    return (
        <div className="">
            <Navbar isClicked={"1"} />
            {props.displayType === "mobile" && (
                <div className="pt-20 px-[14px] font-poppins w-full">
                    <div className="w-full mb-16">
                        <h1 className="font-semibold text-3xl text-phyniteBlue leading-tight pt-8 px-1 mb-2">
                            Who We Are, Our Vision, and More.
                        </h1>
                        <h2 className="text-white font-light text-sm pl-1">Learn more about our proprietary technology, timeline, and meet the team!</h2>
                        <div className="w-full flex justify-center pt-10 mb-12">
                            <img className="w-[90%] -translate-x-3" src={CrystalPhyniteLogo}></img>
                        </div>
                        
                    </div>
                    <div className="w-full mb-16">
                        <h1 className="w-full text-center text-[26px] text-white font-semibold mb-4">What is Phynite?</h1>
                        <h2 className="w-full text-justify text-sm text-gray-400 font-light px-1">Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT. All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT.</h2>

                    </div>
                    <div className="w-full mb-20">
                        <h1 className="text-white text-[26px] font-semibold text-center mb-3">The Phynite Protocol</h1>
                        <div className="flex border-b border-gray1 text-gray-400">
                            <button onClick={()=>setSelectedSection(0)} className={sectionButtonStyle[0]}>Mint</button>
                            <button onClick={()=>setSelectedSection(1)} className={sectionButtonStyle[1]}>Trade</button>
                            <button onClick={()=>setSelectedSection(2)} className={sectionButtonStyle[2]}>Redeem</button>
                        </div>
                        {selectedSection === 0 && (
                            <div className="w-full flex flex-col items-center">
                                <h1 className="text-white text-xl font-semibold mt-10 w-full pl-1 mb-2">Minting Process</h1>
                                <img className="w-[80%] mb-2" src={CrystalVault}></img>
                                <div className="w-full rounded-xl overflow-clip border border-gray1 mt-2">
                                    <DescriptionItem
                                        number={1}
                                        itemName={"Item Submission"}
                                        itemIndex={0}
                                        menuOpened={activeMenuMint[0]}
                                        toggleDropdownMenu={()=>toggleMintMenu(0)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuMint[0]}>
                                            <div className="text-gray-300 text-sm p-6 ">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                    <DescriptionItem
                                        number={2}
                                        itemName={"Verification and Vaulting"}
                                        itemIndex={1}
                                        menuOpened={activeMenuMint[1]}
                                        toggleDropdownMenu={()=>toggleMintMenu(1)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuMint[1]}>
                                            <div className="text-gray-300 text-sm p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                    <DescriptionItem
                                        number={3}
                                        itemName={"Minting and Transfer"}
                                        itemIndex={2}
                                        menuOpened={activeMenuMint[2]}
                                        toggleDropdownMenu={()=>toggleMintMenu(2)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuMint[2]}>
                                            <div className="text-gray-300 text-sm p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                </div>
                            </div>
                        )}
                        {selectedSection === 1 && (
                            <div className="w-full flex flex-col items-center">
                                <h1 className="text-white text-xl font-semibold mt-10 w-full pl-1 mb-2">Trading Process</h1>
                                <img className="w-[80%] mb-2" src={CrystalGlobe}></img>
                                <div className="w-full rounded-xl overflow-clip border border-gray1 mt-2">
                                    <DescriptionItem
                                        number={1}
                                        itemName={"Item Submission"}
                                        itemIndex={0}
                                        menuOpened={activeMenuTrade[0]}
                                        toggleDropdownMenu={()=>toggleTradeMenu(0)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuTrade[0]}>
                                            <div className="text-gray-300 text-sm p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                    <DescriptionItem
                                        number={2}
                                        itemName={"Verification and Vaulting"}
                                        itemIndex={1}
                                        menuOpened={activeMenuTrade[1]}
                                        toggleDropdownMenu={()=>toggleTradeMenu(1)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuTrade[1]}>
                                            <div className="text-gray-300 text-sm p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                    <DescriptionItem
                                        number={3}
                                        itemName={"Minting and Transfer"}
                                        itemIndex={2}
                                        menuOpened={activeMenuTrade[2]}
                                        toggleDropdownMenu={()=>toggleTradeMenu(2)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuTrade[2]}>
                                            <div className="text-gray-300 text-sm p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                </div>
                            </div>
                        )}
                        {selectedSection === 2 && (
                            <div className="w-full flex flex-col items-center">
                                <h1 className="text-white text-xl font-semibold mt-10 w-full pl-1 mb-2">Redeeming Process</h1>
                                <img className="w-[80%] mb-2" src={CrystalHand}></img>
                                <div className="w-full rounded-xl overflow-clip border border-gray1 mt-2">
                                    <DescriptionItem
                                        number={1}
                                        itemName={"Item Submission"}
                                        itemIndex={0}
                                        menuOpened={activeMenuRedeem[0]}
                                        toggleDropdownMenu={()=>toggleRedeemMenu(0)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuRedeem[0]}>
                                            <div className="text-gray-300 text-sm p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                    <DescriptionItem
                                        number={2}
                                        itemName={"Verification and Vaulting"}
                                        itemIndex={1}
                                        menuOpened={activeMenuRedeem[1]}
                                        toggleDropdownMenu={()=>toggleRedeemMenu(1)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuRedeem[1]}>
                                            <div className="text-gray-300 text-sm p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                    <DescriptionItem
                                        number={3}
                                        itemName={"Minting and Transfer"}
                                        itemIndex={2}
                                        menuOpened={activeMenuRedeem[2]}
                                        toggleDropdownMenu={()=>toggleRedeemMenu(2)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuRedeem[2]}>
                                            <div className="text-gray-300 text-sm p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="w-full mb-20 min-h-[250px]">
                        <h1 className="text-white font-semibold text-2xl pb-2 pl-1 border-b border-gray0">Contractually Bound NFTs</h1>
                        <div className="flex gap-x-4">
                            <div className="flex flex-col items-center gap-y-2 pl-1 w-[96px] pt-3">
                                <button onClick={()=>setSelectedCBNFTSection(0)} className={mobileCBNFTSectionButtonStyle[0]}>
                                    <h1 className="text-sm py-3 text-center px-2 w-full">Overview</h1>
                                </button>
                                <button onClick={()=>setSelectedCBNFTSection(1)} className={mobileCBNFTSectionButtonStyle[1]}>
                                    <h1 className="text-sm py-3 text-center px-2 w-full">Phase 1</h1>
                                </button>
                                <button onClick={()=>setSelectedCBNFTSection(2)} className={mobileCBNFTSectionButtonStyle[2]}>
                                    <h1 className="text-sm py-3 text-center px-2 w-full">Phase 2</h1>
                                </button>
                                
                            </div>
                            <div className="flex flex-grow">
                                {selectedCBNFTSection === 0 && (
                                    <div className="w-full h-full font-poppins flex flex-col pt-3 items-center">
                                        <h1 className="text-white text-lg font-[500] mt-1 w-full text-left mb-2">Overview: CBNFTs</h1>
                                        
                                        
                                        <div className="flex">
                                            <div className="flex flex-col">
                                                <p className="text-xs text-gray-400 w-full mt-2 mb-3" >Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. </p>
                                                <Link to="/phyniteProtocol"  className="flex items-center">
                                                    <div className="text-gray-300 text-xs">Read More</div>
                                                    <img src={Arrow} className="w-4 h-4 ml-2 brightness-90"></img>
                                                </Link>
                                            </div>
                                            <img src={CrystalContract} className="w-28"></img>
                                        </div>
                                    </div>
                                        
                                    
                                )}
                                {selectedCBNFTSection === 1 && (
                                    <div className="w-full h-full font-poppins flex flex-col pt-3 items-center">
                                        <h1 className="text-white text-lg font-[500] mt-1 w-full text-left mb-2">Phase 1: Off-Chain Storage</h1>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-gray-400 w-full mt-2 mb-3" >All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). </p>
                                            <Link to="/phyniteProtocol"  className="flex items-center">
                                                <div className="text-gray-300 text-xs">Read More</div>
                                                <img src={Arrow} className="w-4 h-4 ml-2 brightness-90"></img>
                                            </Link>
                                        </div>
                                        
                                    </div>
                                )}
                                {selectedCBNFTSection === 2 && (
                                    <div className="w-full h-full font-poppins flex flex-col pt-3 items-center">
                                        <h1 className="text-white text-lg font-[500] mt-1 w-full text-left mb-2">Phase 2: On-Chain Storage</h1>
                                        <div className="flex flex-col">
                                            <p className="text-xs text-gray-400 w-full mt-2 mb-3" >All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). </p>
                                            <Link to="/phyniteProtocol"  className="flex items-center">
                                                <div className="text-gray-300 text-xs">Read More</div>
                                                <img src={Arrow} className="w-4 h-4 ml-2 brightness-90"></img>
                                            </Link>
                                        </div>
                                        
                                    </div>
                                )}
                            </div>
                        </div>
                        
                    </div>
                    <div className="w-full mb-20">
                        <h1 className="text-white text-[26px] font-semibold mb-5">
                            Timeline
                        </h1>
                        <div className="flex flex-col h-full rounded-xl border border-gray1 bg-gradient-to-r from-gray4 via-gray3 to-gray1 ">
                            <div className="h-[260px] w-full flex flex-col">
                                <div className="h-[120px] w-full font-poppins pt-8 flex px-8">
                                    <div className="w-[10%] h-full">
                                        <h1 className="text-white font-semibold text-xl">2023</h1>
                                    </div>
                                    <div className="w-1/5 h-full justify-center items-end flex">
                                        {selectedQuarter === 0 ? (
                                            <button onClick={()=>setSelectedQuarter(0)} className="text-white font-semibold text-2xl p-2">Q2</button>
                                        ):(
                                            <button onClick={()=>setSelectedQuarter(0)} className="text-gray-300 font-[500] text-xl p-2">Q2</button>        
                                        )}
                                        
                                    </div>
                                    <div className="w-1/5 h-full justify-center items-end flex">
                                        {selectedQuarter === 1 ? (
                                            <button onClick={() => setSelectedQuarter(1)} className="text-white font-semibold text-2xl p-2">Q3</button>
                                        ):(
                                            <button onClick={() => setSelectedQuarter(1)} className="text-gray-300 font-[500] text-xl p-2">Q3</button>
                                        )}
                                        
                                    </div>
                                    <div className="w-1/5 h-full justify-center items-end flex">
                                        {selectedQuarter === 2 ? (
                                            <button onClick={() => setSelectedQuarter(2)} className="text-white font-semibold text-2xl p-2">Q4</button>
                                        ):(
                                            <button onClick={() => setSelectedQuarter(2)} className="text-gray-300 font-[500] text-xl p-2">Q4</button>    
                                        )}
                                        
                                    </div>
                                    <div className="w-1/5 h-full justify-end items-center flex flex-col">
                                        <div className="flex flex-grow">
                                            <h1 className="text-white font-semibold text-xl">2024</h1>
                                        </div>
                                        
                                        {selectedQuarter === 3 ? (
                                            <button onClick={()=>setSelectedQuarter(3)} className="text-white font-semibold text-2xl p-2">Q1</button>
                                        ):(
                                            <button onClick={()=>setSelectedQuarter(3)} className="text-gray-300 font-[500] text-xl p-2">Q1</button>
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
                                <div className="h-[120px] w-full font-poppins px-8 flex-col flex pb-8 pt-6">
                                    <div className="h-1/2 w-full flex items-start">
                                        <div className="w-[60%] border-b border-x border-gray0 rounded-b-xl flex justify-center pb-[2px]">
                                            <h1 className="font-light text-gray-400 font-poppins italic text-sm tracking-wide">Minting Fees Waived</h1>
                                        </div>
                                    </div>
                                    <div className="h-1/2 w-full flex items-end">
                                        <div className="w-[80%]  border-b border-x border-gray0 rounded-b-xl flex justify-center pb-[2px]">
                                            <h1 className="font-light text-gray-400 font-poppins italic text-sm tracking-wide">Vaulting Fees Waived</h1>
                                        </div>
                                    </div>
                                </div>
                            </div>

                        </div>
                        <div className="w-full pt-4 pl-1 h-[170px]">
                                
                            {selectedQuarter === 0 && (
                                <div className="">
                                    <h1 className="text-white font-poppins text-xl font-semibold mb-4">Q2 2023</h1>
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
                                    <h1 className="text-white font-poppins text-xl font-semibold mb-4">Q3 2023</h1>
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
                                    <h1 className="text-white font-poppins text-xl font-semibold mb-4">Q4 2023</h1>
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
                                    <h1 className="text-white font-poppins text-xl font-semibold mb-4">Q1 2024</h1>
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
                    </div>
                    <div className="w-full mb-20">
                        <h1 className="text-white font-semibold text-2xl mb-6">The Founders</h1>
                        <div className="w-full bg-gradient-to-l from-gray4 to-gray2 rounded-xl flex border-gray1 border p-4 gap-x-2 mb-4">
                            <div className="w-1/2 flex flex-col">
                                <h1 className="text-white text-xl font-[500]">Andy Park</h1>
                                <h2 className="text-gray-400 text-sm">CEO/CTO</h2>
                                <div className="flex flex-grow items-end">
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
                            <div className="w-1/2">
                                <img src={AndyProfilePic} className="w-full rounded-full"></img>
                            </div>
                        </div>
                        <div className="w-full bg-gradient-to-l from-gray4 to-gray2 rounded-xl flex border-gray1 border p-4 gap-x-2 mb-4">
                            <div className="w-1/2 flex flex-col">
                                <h1 className="text-white text-xl font-[500]">Esa Sait</h1>
                                <h2 className="text-gray-400 text-sm">COO</h2>
                                <div className="flex flex-grow items-end">
                                    <div className="flex gap-x-2">
                                        <a>
                                            <img src={LinkedInIcon} className="h-8 w-8"></img>
                                        </a>
                                        <a>
                                            <img src={TwitterIcon} className="h-8 w-8"></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <img src={EsaProfilePic} className="w-full rounded-full"></img>
                            </div>
                        </div>
                        <div className="w-full bg-gradient-to-l from-gray4 to-gray2 rounded-xl flex border-gray1 border p-4 gap-x-2">
                            <div className="w-1/2 flex flex-col">
                                <h1 className="text-white text-xl font-[500]">William Yeo</h1>
                                <h2 className="text-gray-400 text-sm">CFO</h2>
                                <div className="flex flex-grow items-end">
                                    <div className="flex gap-x-2">
                                        <a>
                                            <img src={LinkedInIcon} className="h-8 w-8"></img>
                                        </a>
                                        <a>
                                            <img src={TwitterIcon} className="h-8 w-8"></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="w-1/2">
                                <img src={BillProfilePic} className="w-full rounded-full"></img>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {props.displayType === "tablet" && (
                <div className="w-full px-[18px] pt-20 font-poppins">
                    <div className="w-full flex pt-20 items-center gap-x-4 mb-32">
    
                        <div className="w-[40%]  h-full flex justify-start items-center overflow-hidden">
                            <img className="w-full scale-110" src={CrystalPhyniteLogo}></img>
                        </div>
                        <div className="w-[60%] h-full flex flex-col justify-center items-end">
                            <div className="w-full">
                                <h1 className="text-4xl font-semibold text-phyniteBlue leading-tight font-poppins">Who We Are, Our Vision, and More.</h1>
                                <h2 className="text-lg mt-8 text-white font-light font-poppins">Learn more about our proprietary technology, timeline, and meet the team!</h2>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="w-full mb-28">
                        <h1 className="text-3xl text-white font-semibold w-full text-center">What is Phynite?</h1>
                        <p className="text-md text-gray-400 mt-6 text-center font-light w-full px-1" >Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT. All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT.</p>
                    </div>
                    <div className="w-full mb-24">
                        <h1 className="text-white text-3xl font-semibold text-center mb-5">The Phynite Protocol</h1>
                        <div className="flex border-b border-gray1 text-gray-400">
                            <button onClick={()=>setSelectedSection(0)} className={sectionButtonStyle[0]}>Mint</button>
                            <button onClick={()=>setSelectedSection(1)} className={sectionButtonStyle[1]}>Trade</button>
                            <button onClick={()=>setSelectedSection(2)} className={sectionButtonStyle[2]}>Redeem</button>
                        </div>
                        {selectedSection === 0 && (
                            <div className="w-full flex flex-col items-center">
                                <h1 className="text-white text-2xl font-semibold mt-10 w-full pl-1 mb-2">Minting Process</h1>
                                <img className="w-[70%] mb-2" src={CrystalVault}></img>
                                <div className="w-full rounded-xl overflow-clip border border-gray1 mt-2">
                                    <DescriptionItem
                                        number={1}
                                        itemName={"Item Submission"}
                                        itemIndex={0}
                                        menuOpened={activeMenuMint[0]}
                                        toggleDropdownMenu={()=>toggleMintMenu(0)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuMint[0]}>
                                            <div className="text-gray-300 text-sm p-6 ">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                    <DescriptionItem
                                        number={2}
                                        itemName={"Verification and Vaulting"}
                                        itemIndex={1}
                                        menuOpened={activeMenuMint[1]}
                                        toggleDropdownMenu={()=>toggleMintMenu(1)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuMint[1]}>
                                            <div className="text-gray-300 text-sm p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                    <DescriptionItem
                                        number={3}
                                        itemName={"Minting and Transfer"}
                                        itemIndex={2}
                                        menuOpened={activeMenuMint[2]}
                                        toggleDropdownMenu={()=>toggleMintMenu(2)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuMint[2]}>
                                            <div className="text-gray-300 text-sm p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                </div>
                            </div>
                        )}
                        {selectedSection === 1 && (
                            <div className="w-full flex flex-col items-center">
                                <h1 className="text-white text-2xl font-semibold mt-10 w-full pl-1 mb-2">Trading Process</h1>
                                <img className="w-[70%] mb-2" src={CrystalGlobe}></img>
                                <div className="w-full rounded-xl overflow-clip border border-gray1 mt-2">
                                    <DescriptionItem
                                        number={1}
                                        itemName={"Item Submission"}
                                        itemIndex={0}
                                        menuOpened={activeMenuTrade[0]}
                                        toggleDropdownMenu={()=>toggleTradeMenu(0)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuTrade[0]}>
                                            <div className="text-gray-300 text-sm p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                    <DescriptionItem
                                        number={2}
                                        itemName={"Verification and Vaulting"}
                                        itemIndex={1}
                                        menuOpened={activeMenuTrade[1]}
                                        toggleDropdownMenu={()=>toggleTradeMenu(1)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuTrade[1]}>
                                            <div className="text-gray-300 text-sm p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                    <DescriptionItem
                                        number={3}
                                        itemName={"Minting and Transfer"}
                                        itemIndex={2}
                                        menuOpened={activeMenuTrade[2]}
                                        toggleDropdownMenu={()=>toggleTradeMenu(2)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuTrade[2]}>
                                            <div className="text-gray-300 text-sm p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                </div>
                            </div>
                        )}
                        {selectedSection === 2 && (
                            <div className="w-full flex flex-col items-center">
                                <h1 className="text-white text-2xl font-semibold mt-10 w-full pl-1 mb-2">Redeeming Process</h1>
                                <img className="w-[70%] mb-2" src={CrystalHand}></img>
                                <div className="w-full rounded-xl overflow-clip border border-gray1 mt-2">
                                    <DescriptionItem
                                        number={1}
                                        itemName={"Item Submission"}
                                        itemIndex={0}
                                        menuOpened={activeMenuRedeem[0]}
                                        toggleDropdownMenu={()=>toggleRedeemMenu(0)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuRedeem[0]}>
                                            <div className="text-gray-300 text-sm p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                    <DescriptionItem
                                        number={2}
                                        itemName={"Verification and Vaulting"}
                                        itemIndex={1}
                                        menuOpened={activeMenuRedeem[1]}
                                        toggleDropdownMenu={()=>toggleRedeemMenu(1)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuRedeem[1]}>
                                            <div className="text-gray-300 text-sm p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                    <DescriptionItem
                                        number={3}
                                        itemName={"Minting and Transfer"}
                                        itemIndex={2}
                                        menuOpened={activeMenuRedeem[2]}
                                        toggleDropdownMenu={()=>toggleRedeemMenu(2)}
                                    >
                                        <DescriptionDropdownMenu menuOpened={activeMenuRedeem[2]}>
                                            <div className="text-gray-300 text-sm p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                        </DescriptionDropdownMenu>
                                    </DescriptionItem>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="w-full mb-24">
                        <h1 className="text-white font-semibold text-3xl pb-3 pl-1 border-b border-gray0">Contractually Bound NFTs</h1>
                        <div className="flex gap-x-6">
                            <div className="flex flex-col items-center gap-y-3 pl-1 min-w-[175px] pt-4">
                                <button onClick={()=>setSelectedCBNFTSection(0)} className={mobileCBNFTSectionButtonStyle[0]}>
                                    <h1 className="py-4 text-center w-full">Overview</h1>
                                </button>
                                <button onClick={()=>setSelectedCBNFTSection(1)} className={mobileCBNFTSectionButtonStyle[1]}>
                                    <h1 className="py-4 text-center w-full">Phase 1</h1>
                                </button>
                                <button onClick={()=>setSelectedCBNFTSection(2)} className={mobileCBNFTSectionButtonStyle[2]}>
                                    <h1 className="py-4 text-center w-full">Phase 2</h1>
                                </button>
                                
                            </div>
                            <div className="min-h-[250px]">
                                {selectedCBNFTSection === 0 && (
                                    <div className="w-full h-full font-poppins flex flex-col pt-4 items-center">
                                        <h1 className="text-white text-xl font-[500] mt-1 w-full text-left mb-2">Overview: CBNFTs</h1>
                                        
                                        
                                        <div className="flex">
                                            <div className="flex flex-col">
                                                <p className=" text-gray-400 w-full mt-3 mb-5" >Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. </p>
                                                <Link to="/phyniteProtocol"  className="flex items-center">
                                                    <div className="text-gray-300 text-sm">Read More</div>
                                                    <img src={Arrow} className="w-5 h-5 ml-2 brightness-90"></img>
                                                </Link>
                                            </div>
                                            <img src={CrystalContract} className="w-48 -translate-y-8"></img>
                                        </div>
                                    </div>
                                        
                                    
                                )}
                                {selectedCBNFTSection === 1 && (
                                    <div className="w-full h-full font-poppins flex flex-col pt-4 items-center">
                                        <h1 className="text-white text-xl font-[500] mt-1 w-full text-left mb-2">Phase 1: Off-Chain Storage</h1>
                                        <div className="flex flex-col">
                                            <p className=" text-gray-400 w-full mt-3 mb-5" >All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). </p>
                                            <Link to="/phyniteProtocol"  className="flex items-center">
                                                <div className="text-gray-300 text-sm">Read More</div>
                                                <img src={Arrow} className="w-5 h-5 ml-2 brightness-90"></img>
                                            </Link>
                                        </div>
                                        
                                    </div>
                                )}
                                {selectedCBNFTSection === 2 && (
                                    <div className="w-full h-full font-poppins flex flex-col pt-4 items-center">
                                        <h1 className="text-white text-xl font-[500] mt-1 w-full text-left mb-2">Phase 2: On-Chain Storage</h1>
                                        <div className="flex flex-col">
                                            <p className=" text-gray-400 w-full mt-3 mb-5" >All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). </p>
                                            <Link to="/phyniteProtocol"  className="flex items-center">
                                                <div className="text-gray-300 text-sm">Read More</div>
                                                <img src={Arrow} className="w-5 h-5 ml-2 brightness-90"></img>
                                            </Link>
                                        </div>
                                        
                                    </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-24">
                        <h1 className="text-4xl font-poppins font-semibold text-white mb-8">Timeline</h1>
                        <div className="flex h-full rounded-xl border border-gray1 bg-gradient-to-r from-gray4 via-gray3 to-gray1 ">
                            <div className=" pr-6 pt-8  pl-8 w-[40%] min-w-[200px]">
                                
                                {selectedQuarter === 0 && (
                                    <div className="w-full">
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
                                    <div className="w-full">
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
                                    <div className="w-full">
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
                                    <div className="w-full">
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
                            <div className="w-[60%]">
                                <div className="h-[300px] w-full flex flex-col">
                                    <div className="h-[140px] w-full font-poppins pt-8 flex px-8">
                                        <div className="w-[10%] h-full">
                                            <h1 className="text-white font-semibold text-3xl">2023</h1>
                                        </div>
                                        <div className="w-1/5 h-full justify-center items-end flex">
                                            {selectedQuarter === 0 ? (
                                                <button onClick={()=>setSelectedQuarter(0)} className="text-white font-semibold text-3xl p-2 duration-150">Q2</button>
                                            ):(
                                                <button onClick={()=>setSelectedQuarter(0)} className="text-gray-300 font-[500] text-2xl p-2 hover:text-3xl hover:font-semibold duration-150">Q2</button>        
                                            )}
                                            
                                        </div>
                                        <div className="w-1/5 h-full justify-center items-end flex">
                                            {selectedQuarter === 1 ? (
                                                <button onClick={() => setSelectedQuarter(1)} className="text-white font-semibold text-3xl p-2 duration-150">Q3</button>
                                            ):(
                                                <button onClick={() => setSelectedQuarter(1)} className="text-gray-300 font-[500] text-2xl p-2 hover:text-3xl hover:font-semibold duration-150">Q3</button>
                                            )}
                                            
                                        </div>
                                        <div className="w-1/5 h-full justify-center items-end flex">
                                            {selectedQuarter === 2 ? (
                                                <button onClick={() => setSelectedQuarter(2)} className="text-white font-semibold text-3xl p-2 duration-150">Q4</button>
                                            ):(
                                                <button onClick={() => setSelectedQuarter(2)} className="text-gray-300 font-[500] text-2xl p-2 hover:text-3xl hover:font-semibold duration-150">Q4</button>    
                                            )}
                                            
                                        </div>
                                        <div className="w-1/5 h-full justify-end items-center flex flex-col">
                                            <div className="flex flex-grow">
                                                <h1 className="text-white font-semibold text-3xl">2024</h1>
                                            </div>
                                            
                                            {selectedQuarter === 3 ? (
                                                <button onClick={()=>setSelectedQuarter(3)} className="text-white font-semibold text-3xl p-2 duration-150">Q1</button>
                                            ):(
                                                <button onClick={()=>setSelectedQuarter(3)} className="text-gray-300 font-[500] text-2xl p-2 hover:text-3xl hover:font-semibold duration-150">Q1</button>
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
                    <div className="w-full mb-24">
                        <h1 className="text-white font-semibold text-3xl mb-6">The Founders</h1>
                        <div className="w-full bg-gradient-to-l from-gray4 to-gray2 rounded-xl flex border-gray1 border p-4 gap-x-2 mb-6">
                            <div className="flex flex-col">
                                <h1 className="text-white text-2xl font-[500]">Andy Park</h1>
                                <h2 className="text-gray-400">CEO/CTO</h2>
                                <div className="flex flex-grow items-end">
                                    <div className="flex gap-x-2">
                                        <a href="https://www.linkedin.com/in/andy-park-b5a76a236/" className="" target="_blank">
                                            <img src={LinkedInIcon} className="h-10 w-10"></img>
                                        </a>
                                        <a>
                                            <img src={TwitterIcon} className="h-10 w-10"></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-grow justify-end">
                                <img src={AndyProfilePic} className="rounded-full w-[350px] "></img>
                            </div>
                        </div>
                        <div className="w-full bg-gradient-to-l from-gray4 to-gray2 rounded-xl flex border-gray1 border p-4 gap-x-2 mb-6">
                            <div className=" flex flex-col">
                                <h1 className="text-white text-2xl font-[500]">Esa Sait</h1>
                                <h2 className="text-gray-400">COO</h2>
                                <div className="flex flex-grow items-end">
                                    <div className="flex gap-x-2">
                                        <a>
                                            <img src={LinkedInIcon} className="h-10 w-10"></img>
                                        </a>
                                        <a>
                                            <img src={TwitterIcon} className="h-10 w-10"></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-grow justify-end">
                                <img src={EsaProfilePic} className="rounded-full w-[350px] "></img>
                            </div>
                        </div>
                        <div className="w-full bg-gradient-to-l from-gray4 to-gray2 rounded-xl flex border-gray1 border p-4 gap-x-2">
                            <div className="flex flex-col">
                                <h1 className="text-white text-2xl font-[500]">William Yeo</h1>
                                <h2 className="text-gray-400">CFO</h2>
                                <div className="flex flex-grow items-end">
                                    <div className="flex gap-x-2">
                                        <a>
                                            <img src={LinkedInIcon} className="h-10 w-10"></img>
                                        </a>
                                        <a>
                                            <img src={TwitterIcon} className="h-10 w-10"></img>
                                        </a>
                                    </div>
                                </div>
                            </div>
                            <div className="flex flex-grow justify-end">
                                <img src={BillProfilePic} className="rounded-full w-[350px] "></img>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {props.displayType === "smallComputer" && (
                <div className="w-full px-8 pt-20 font-poppins">
                    <div className="w-full flex pt-20 items-center gap-x-8 mb-20 h-screen min-h-[500px] max-h-[600px]">
                        <div className="w-[40%]  h-full flex justify-start items-center overflow-hidden">
                            <img className="w-full" src={CrystalPhyniteLogo}></img>
                        </div>
                        <div className="w-[60%] h-full flex flex-col justify-center items-start">
                            <div className="w-[90%]">
                                <h1 className="text-5xl font-semibold text-phyniteBlue leading-tight font-poppins">Who We Are, Our Vision, and More.</h1>
                                <h2 className="text-lg mt-8 text-white font-light font-poppins">Learn more about our proprietary technology, timeline, and meet the team!</h2>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="w-full mb-28 flex flex-col items-center">
                        <h1 className="text-3xl text-white font-semibold w-full text-center">What is Phynite?</h1>
                        <p className="text-md text-gray-400 mt-6 text-center font-light w-[90%]" >Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT. All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT.</p>
                    </div>
                    <div className="w-full flex justify-center mb-24">
                        <div className="w-[1300px] h-full flex flex-col items-center">
                            <div className="flex flex-col items-center font-poppins w-full h-full">
                                <h1 className="text-white text-4xl font-semibold mb-8">The Phynite Protocol</h1>
                                <div className="w-full flex h-10 border-b border-gray0 text-xl text-gray-400 font-[500] mb-8">
                                    <button onClick={()=>setSelectedSection(0)} className={sectionButtonStyle[0]}>Mint</button>
                                    <button onClick={()=>setSelectedSection(1)} className={sectionButtonStyle[1]}>Trade</button>
                                    <button onClick={()=>setSelectedSection(2)} className={sectionButtonStyle[2]}>Redeem</button>
                                </div>
                                {selectedSection === 0 && (
                                    <div className="w-full flex h-[550px]">
                                        <div className="w-[50%]">
                                            <h1 className="text-white text-3xl font-semibold mt-16">Minting Process</h1>
                                            <div className="w-full rounded-xl overflow-clip border border-gray1 mt-8">
                                                <DescriptionItem
                                                    number={1}
                                                    itemName={"Item Submission"}
                                                    itemIndex={0}
                                                    menuOpened={activeMenuMint[0]}
                                                    toggleDropdownMenu={()=>toggleMintMenu(0)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuMint[0]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                                <DescriptionItem
                                                    number={2}
                                                    itemName={"Verification and Vaulting"}
                                                    itemIndex={1}
                                                    menuOpened={activeMenuMint[1]}
                                                    toggleDropdownMenu={()=>toggleMintMenu(1)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuMint[1]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                                <DescriptionItem
                                                    number={3}
                                                    itemName={"Minting and Transfer"}
                                                    itemIndex={2}
                                                    menuOpened={activeMenuMint[2]}
                                                    toggleDropdownMenu={()=>toggleMintMenu(2)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuMint[2]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                            </div>
                                        </div>
                                        <div className="w-[50%] h-full flex items-center pr-10 justify-end">
                                            <img className="w-[80%] scale-110" src={CrystalVault}></img>
                                        </div>
                                        
                                    </div>
                                )}
                                {selectedSection === 1 && (
                                    <div className="w-full flex h-[550px]">
                                        <div className="w-[50%]">
                                            <h1 className="text-white text-3xl font-semibold mt-16">Trading Process</h1>
                                            <div className="w-full rounded-xl overflow-clip border border-gray1 mt-8">
                                                <DescriptionItem
                                                    number={1}
                                                    itemName={"Item Submission"}
                                                    itemIndex={0}
                                                    menuOpened={activeMenuTrade[0]}
                                                    toggleDropdownMenu={()=>toggleTradeMenu(0)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuTrade[0]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                                <DescriptionItem
                                                    number={2}
                                                    itemName={"Verification and Vaulting"}
                                                    itemIndex={1}
                                                    menuOpened={activeMenuTrade[1]}
                                                    toggleDropdownMenu={()=>toggleTradeMenu(1)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuTrade[1]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                                <DescriptionItem
                                                    number={3}
                                                    itemName={"Minting and Transfer"}
                                                    itemIndex={2}
                                                    menuOpened={activeMenuTrade[2]}
                                                    toggleDropdownMenu={()=>toggleTradeMenu(2)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuTrade[2]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                            </div>
                                        </div>
                                        <div className="w-[50%] h-full flex items-center pr-10 justify-end">
                                            <img className="w-[75%] scale-110" src={CrystalGlobe}></img>
                                        </div>
                                    </div>
                                )}
                                {selectedSection === 2 && (
                                    <div className="w-full flex h-[550px]">
                                        <div className="w-[50%]">
                                            <h1 className="text-white text-3xl font-semibold mt-16">Redeeming Process</h1>
                                            <div className="w-full rounded-xl overflow-clip border border-gray1 mt-8">
                                                <DescriptionItem
                                                    number={1}
                                                    itemName={"Item Submission"}
                                                    itemIndex={0}
                                                    menuOpened={activeMenuRedeem[0]}
                                                    toggleDropdownMenu={()=>toggleRedeemMenu(0)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuRedeem[0]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                                <DescriptionItem
                                                    number={2}
                                                    itemName={"Verification and Vaulting"}
                                                    itemIndex={1}
                                                    menuOpened={activeMenuRedeem[1]}
                                                    toggleDropdownMenu={()=>toggleRedeemMenu(1)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuRedeem[1]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                                <DescriptionItem
                                                    number={3}
                                                    itemName={"Minting and Transfer"}
                                                    itemIndex={2}
                                                    menuOpened={activeMenuRedeem[2]}
                                                    toggleDropdownMenu={()=>toggleRedeemMenu(2)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuRedeem[2]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                            </div>
                                        </div>
                                        <div className="w-[50%] h-full flex items-center pr-10 justify-end">
                                            <img className="w-[75%] scale-110" src={CrystalHand}></img>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
    
                    </div>
                    <div className="w-full mb-28">
                        <h1 className="font-poppins text-white text-3xl mb-10 w-full border-b border-gray0 pb-6 font-semibold">Contractually Bound Non-Fungible Tokens</h1>
                        <div className="flex h-[300px] w-full">
                            <div className="min-w-[370px] pr-10 flex flex-col font-poppins font-[500]">
                                <div className="pb-3 h-1/3 w-full">
                                    <button onClick={()=>setSelectedCBNFTSection(0)} className={cbnftSectionButtonStyle[0]}>
                                        <h1 className="text-lg">Overview: CBNFTs</h1>
                                    </button>
                                </div>
                                
                                <div className="py-1 h-1/3 w-full">
                                    <button onClick={()=>setSelectedCBNFTSection(1)} className={cbnftSectionButtonStyle[1]}>
                                        <h1 className="text-lg">Phase 1: Off-Chain Storage</h1>
                                    </button>
                                </div>
                                <div className="pt-3 h-1/3 w-full">
                                    <button onClick={()=>setSelectedCBNFTSection(2)} className={cbnftSectionButtonStyle[2]}>
                                        <h1 className="text-lg">Phase 2: On-Chain Storage</h1>
                                    </button>
                                </div>
                                
                            </div>
                            <div className="h-full">
                                {selectedCBNFTSection === 0 && (
                                <div className="w-full h-full font-poppins pt-2 flex flex-col">
                                    <h1 className="text-white text-2xl font-[500]">Overview: CBNFTs</h1>
                                    <div className="flex">
                                        <div className="flex flex-col flex-grow">
                                            <p className=" text-gray-400 w-full mt-8 mb-[43px]" >Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). </p>
                                            <Link to="/phyniteProtocol"  className="flex items-center hover:border-gray0 hover:brightness-125 duration-150 bg-mainGray rounded-2xl border-gray1 border p-2 w-40 justify-center">
                                                <div className="text-white">Read More</div>
                                                <img src={Arrow} className="w-5 h-5 ml-2"></img>
                                            </Link>
                                        </div>
                                        <img src={CrystalContract} className="w-[300px] h-[300px] -translate-y-4"></img>
                                    </div>    
                                </div>
                                )}
                                {selectedCBNFTSection === 1 && (
                                <div className="w-full h-full font-poppins pt-2 flex flex-col">
                                    <h1 className="text-white text-2xl font-[500]">Phase 1: Off-Chain Storage</h1>
                                    <p className=" text-gray-400 w-full mt-8" >All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT.</p>
                                    <div className="flex flex-grow items-end">
                                        <Link to="/phyniteProtocol"  className="flex items-center hover:border-gray0 hover:brightness-125 duration-150 bg-mainGray rounded-2xl border-gray1 border p-2 w-40 justify-center">
                                            <div className="text-white">Read More</div>
                                            <img src={Arrow} className="w-5 h-5 ml-2"></img>
                                        </Link>
                                    </div>
                                </div>
                                )}
                                {selectedCBNFTSection === 2 && (
                                <div className="w-full h-full font-poppins pt-2 flex flex-col">
                                    <h1 className="text-white text-2xl font-[500]">Phase 2: On-Chain Storage</h1>
                                    <p className=" text-gray-400 w-full mt-8" >All NFTs on Phynite are physically-backed by real collectibles. Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). Each CBNFT traded includes a legally-binding contract guaranteeing the holder protections and rights over the physical collectible linked to each CBNFT.</p>
                                    <div className="flex flex-grow items-end">
                                        <Link to="/phyniteProtocol"  className="flex items-center hover:border-gray0 hover:brightness-125 duration-150 bg-mainGray rounded-2xl border-gray1 border p-2 w-40 justify-center">
                                            <div className="text-white">Read More</div>
                                            <img src={Arrow} className="w-5 h-5 ml-2"></img>
                                        </Link>
                                    </div>
                                </div>
                                )}
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-24">
                        <h1 className="text-4xl font-poppins font-semibold text-white mb-8">Timeline</h1>
                        <div className="flex h-full rounded-xl border border-gray1 bg-gradient-to-r from-gray4 via-gray3 to-gray1 ">
                            <div className=" pr-6 pt-8  pl-8 w-[30%] min-w-[200px]">
                                
                                {selectedQuarter === 0 && (
                                    <div className="w-full">
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
                                    <div className="w-full">
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
                                    <div className="w-full">
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
                                    <div className="w-full">
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
                            <div className="w-[70%]">
                                <div className="h-[300px] w-full flex flex-col">
                                    <div className="h-[140px] w-full font-poppins pt-8 flex px-8">
                                        <div className="w-[10%] h-full">
                                            <h1 className="text-white font-semibold text-3xl">2023</h1>
                                        </div>
                                        <div className="w-1/5 h-full justify-center items-end flex">
                                            {selectedQuarter === 0 ? (
                                                <button onClick={()=>setSelectedQuarter(0)} className="text-white font-semibold text-3xl p-2 duration-150">Q2</button>
                                            ):(
                                                <button onClick={()=>setSelectedQuarter(0)} className="text-gray-300 font-[500] text-2xl p-2 hover:text-3xl hover:font-semibold duration-150">Q2</button>        
                                            )}
                                            
                                        </div>
                                        <div className="w-1/5 h-full justify-center items-end flex">
                                            {selectedQuarter === 1 ? (
                                                <button onClick={() => setSelectedQuarter(1)} className="text-white font-semibold text-3xl p-2 duration-150">Q3</button>
                                            ):(
                                                <button onClick={() => setSelectedQuarter(1)} className="text-gray-300 font-[500] text-2xl p-2 hover:text-3xl hover:font-semibold duration-150">Q3</button>
                                            )}
                                            
                                        </div>
                                        <div className="w-1/5 h-full justify-center items-end flex">
                                            {selectedQuarter === 2 ? (
                                                <button onClick={() => setSelectedQuarter(2)} className="text-white font-semibold text-3xl p-2 duration-150">Q4</button>
                                            ):(
                                                <button onClick={() => setSelectedQuarter(2)} className="text-gray-300 font-[500] text-2xl p-2 hover:text-3xl hover:font-semibold duration-150">Q4</button>    
                                            )}
                                            
                                        </div>
                                        <div className="w-1/5 h-full justify-end items-center flex flex-col">
                                            <div className="flex flex-grow">
                                                <h1 className="text-white font-semibold text-3xl">2024</h1>
                                            </div>
                                            
                                            {selectedQuarter === 3 ? (
                                                <button onClick={()=>setSelectedQuarter(3)} className="text-white font-semibold text-3xl p-2 duration-150">Q1</button>
                                            ):(
                                                <button onClick={()=>setSelectedQuarter(3)} className="text-gray-300 font-[500] text-2xl p-2 hover:text-3xl hover:font-semibold duration-150">Q1</button>
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
                    <div className="w-full mb-24">
                        <div className="w-full flex justify-center">
                            <h1 className="text-4xl font-poppins font-semibold text-white mb-10">The Founders</h1>
                        </div>
                        <div className="w-full flex">
                            <div className="w-1/3 pr-6 h-full">
                                <div className="w-full rounded-3xl border border-gray1 h-full flex flex-col items-center p-10 bg-gradient-to-b from-gray2 to-gray4">
                                    <img src={AndyProfilePic} className="w-full rounded-full"></img>
                                    <div className="w-full h-1/4 pt-4 flex-col flex items-center">
                                        <h1 className="text-white font-poppins text-2xl font-semibold mb-2 border-t border-gray1 w-full text-center pt-4">Andy Park</h1>
                                        <h2 className="text-gray-400 font-poppins text-lg mb-2">CEO/CTO</h2>
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
                                    <img src={EsaProfilePic} className="w-full  rounded-full"></img>
                                    <div className="w-full h-1/4 pt-4 flex-col flex items-center">
                                        <h1 className="text-white font-poppins text-2xl font-semibold border-t border-gray1 w-full text-center pt-4 mb-2">Esa Sait</h1>
                                        <h2 className="text-gray-400 font-poppins text-lg text-center mb-2">COO</h2>
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
                                    <img src={BillProfilePic} className="w-full rounded-full"></img>
                                    <div className="w-full h-1/4 pt-4 flex-col flex items-center">
                                        <h1 className="text-white font-poppins text-2xl font-semibold border-t border-gray1 w-full text-center pt-4 mb-2">Bill Yeo</h1>
                                        <h2 className="text-gray-400 font-poppins text-lg text-center mb-2">CFO</h2>
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
            )}

            {props.displayType === "computer" && (
                <div className="w-full bg-mainGray flex flex-col items-center pt-12">
                    <div className="w-[1300px] max-h-[900px] h-screen min-h-[700px] flex justify-center">
    
                        <div className="w-[40%]  h-full flex justify-start items-center">
                            <img className="w-[500px] h-[500px]" src={CrystalPhyniteLogo}></img>
                        </div>
                        <div className="w-[60%] h-full flex flex-col justify-center items-end pr-10">
                            <div className="w-[600px]">
                                <h1 className="text-[54px]  font-semibold text-phyniteBlue leading-tight font-poppins">Who We Are, Our Vision, and More.</h1>
                                <h2 className="text-xl mt-8 text-white font-light font-poppins">Learn more about our proprietary technology, timeline, and meet the team!</h2>
                            </div>
                            
                        </div>
                        
                    </div>
                    <div className="w-[1300px] font-poppins mb-36 flex flex-col items-center">
                        <h1 className="text-4xl text-white font-semibold w-full text-center">Our Founding Mission</h1>
                        <p className="text-md text-gray-400 mt-8 w-[80%] text-center font-light" >Phynite was founded with collectors at the forefront of our efforts. Our founding team is comprised of collectors with years of experience within collectibles communities, so we knew firsthand the problems irritating digital and physical collectors worldwide. We focused on bringing efficiency, security, and ease-of-access to physical and digital collectors by making it easier than ever to start collecting and trading physical collectibles as NFTs. By bringing users instant transactions for physical items, baked-in legal protections (even against us!), and a concrete link between blockchain technology and existing real-world markets, we’re pushing the world of Web3 forward while making it faster, safer, and easier than ever for collectors worldwide to pursue their passion for collecting!</p>
                    </div>
                    <div className="w-full flex justify-center mb-32">
                        <div className="w-[1300px] h-full flex flex-col items-center">
                            <div className="flex flex-col items-center font-poppins w-full h-full">
                                <h1 className="text-white text-[40px] font-semibold mb-8">The Phynite Protocol</h1>
                                <div className="w-full flex h-10 border-b border-gray0 text-xl text-gray-400 font-[500] mb-8">
                                    <button onClick={()=>setSelectedSection(0)} className={sectionButtonStyle[0]}>Mint</button>
                                    <button onClick={()=>setSelectedSection(1)} className={sectionButtonStyle[1]}>Trade</button>
                                    <button onClick={()=>setSelectedSection(2)} className={sectionButtonStyle[2]}>Redeem</button>
                                </div>
                                {selectedSection === 0 && (
                                    <div className="w-full flex h-[550px]">
                                        <div className="w-[50%]">
                                            <h1 className="text-white text-3xl font-semibold mt-16">Minting Process</h1>
                                            <div className="w-full rounded-xl overflow-clip border border-gray1 mt-8">
                                                <DescriptionItem
                                                    number={1}
                                                    itemName={"Item Submission"}
                                                    itemIndex={0}
                                                    menuOpened={activeMenuMint[0]}
                                                    toggleDropdownMenu={()=>toggleMintMenu(0)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuMint[0]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                                <DescriptionItem
                                                    number={2}
                                                    itemName={"Verification and Vaulting"}
                                                    itemIndex={1}
                                                    menuOpened={activeMenuMint[1]}
                                                    toggleDropdownMenu={()=>toggleMintMenu(1)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuMint[1]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                                <DescriptionItem
                                                    number={3}
                                                    itemName={"Minting and Transfer"}
                                                    itemIndex={2}
                                                    menuOpened={activeMenuMint[2]}
                                                    toggleDropdownMenu={()=>toggleMintMenu(2)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuMint[2]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                            </div>
                                        </div>
                                        <div className="w-[50%] h-full flex items-center pr-10 justify-end">
                                            <img className="w-[500px] h-[500px]" src={CrystalVault}></img>
                                        </div>
                                        
                                    </div>
                                )}
                                {selectedSection === 1 && (
                                    <div className="w-full flex h-[550px]">
                                        <div className="w-[50%]">
                                            <h1 className="text-white text-3xl font-semibold mt-16">Trading Process</h1>
                                            <div className="w-full rounded-xl overflow-clip border border-gray1 mt-8">
                                                <DescriptionItem
                                                    number={1}
                                                    itemName={"Item Submission"}
                                                    itemIndex={0}
                                                    menuOpened={activeMenuTrade[0]}
                                                    toggleDropdownMenu={()=>toggleTradeMenu(0)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuTrade[0]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                                <DescriptionItem
                                                    number={2}
                                                    itemName={"Verification and Vaulting"}
                                                    itemIndex={1}
                                                    menuOpened={activeMenuTrade[1]}
                                                    toggleDropdownMenu={()=>toggleTradeMenu(1)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuTrade[1]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                                <DescriptionItem
                                                    number={3}
                                                    itemName={"Minting and Transfer"}
                                                    itemIndex={2}
                                                    menuOpened={activeMenuTrade[2]}
                                                    toggleDropdownMenu={()=>toggleTradeMenu(2)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuTrade[2]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                            </div>
                                        </div>
                                        <div className="w-[50%] h-full flex items-center pr-10 justify-end">
                                            <img className="w-[500px] h-[500px]" src={CrystalGlobe}></img>
                                        </div>
                                    </div>
                                )}
                                {selectedSection === 2 && (
                                    <div className="w-full flex h-[550px]">
                                        <div className="w-[50%]">
                                            <h1 className="text-white text-3xl font-semibold mt-16">Redeeming Process</h1>
                                            <div className="w-full rounded-xl overflow-clip border border-gray1 mt-8">
                                                <DescriptionItem
                                                    number={1}
                                                    itemName={"Item Submission"}
                                                    itemIndex={0}
                                                    menuOpened={activeMenuRedeem[0]}
                                                    toggleDropdownMenu={()=>toggleRedeemMenu(0)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuRedeem[0]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                                <DescriptionItem
                                                    number={2}
                                                    itemName={"Verification and Vaulting"}
                                                    itemIndex={1}
                                                    menuOpened={activeMenuRedeem[1]}
                                                    toggleDropdownMenu={()=>toggleRedeemMenu(1)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuRedeem[1]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                                <DescriptionItem
                                                    number={3}
                                                    itemName={"Minting and Transfer"}
                                                    itemIndex={2}
                                                    menuOpened={activeMenuRedeem[2]}
                                                    toggleDropdownMenu={()=>toggleRedeemMenu(2)}
                                                >
                                                    <DescriptionDropdownMenu menuOpened={activeMenuRedeem[2]}>
                                                        <div className="text-gray-300 p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                                    </DescriptionDropdownMenu>
                                                </DescriptionItem>
                                            </div>
                                        </div>
                                        <div className="w-[50%] h-full flex items-center pr-10 justify-end">
                                            <img className="w-[500px] h-[500px]" src={CrystalHand}></img>
                                        </div>
                                    </div>
                                )}
                            </div>
                        </div>
    
                    </div>
                    <div className="w-[1300px] mb-36">
                        <h1 className="font-poppins text-white text-3xl mb-16 w-full border-b border-gray0 pb-10 font-semibold">Contractually Bound Non-Fungible Tokens</h1>
                        <div className="flex h-[300px] w-full">
                            <div className="w-[35%] pr-16 flex flex-col font-poppins font-[500]">
                                <div className="pb-3 h-1/3 w-full">
                                    <button onClick={()=>setSelectedCBNFTSection(0)} className={cbnftSectionButtonStyle[0]}>
                                        <h1 className="text-xl">Overview: CBNFTs</h1>
                                    </button>
                                </div>
                                
                                <div className="py-1 h-1/3 w-full">
                                    <button onClick={()=>setSelectedCBNFTSection(1)} className={cbnftSectionButtonStyle[1]}>
                                        <h1 className="text-xl">Phase 1: Off-Chain Storage</h1>
                                    </button>
                                </div>
                                <div className="pt-3 h-1/3 w-full">
                                    <button onClick={()=>setSelectedCBNFTSection(2)} className={cbnftSectionButtonStyle[2]}>
                                        <h1 className="text-xl">Phase 2: On-Chain Storage</h1>
                                    </button>
                                </div>
                                
                            </div>
                            <div className="w-[65%] h-full">
                                {selectedCBNFTSection === 0 && (
                                <div className="w-full h-full font-poppins pt-2 flex flex-col">
                                    <h1 className="text-white text-2xl font-[500]">Overview: CBNFTs</h1>
                                    <div className="flex">
                                        <div className="">
                                            <p className="text-lg text-gray-400 w-full mt-8 mb-[43px]" >Trade NFTs instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT. The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short). </p>
                                            <Link to="/phyniteProtocol"  className="flex items-center hover:border-gray0 hover:brightness-125 duration-150 bg-mainGray rounded-2xl border-gray1 border p-2 w-44 justify-center">
                                                <div className="text-white text-lg">Read More</div>
                                                <img src={Arrow} className="w-6 h-6 ml-2"></img>
                                            </Link>
                                        </div>
                                        <img src={CrystalContract} className="w-[300px] -translate-y-4"></img>
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
                    <div className="w-[1300px] mb-36">
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
                                                <button onClick={()=>setSelectedQuarter(0)} className="text-white font-semibold text-3xl p-2 duration-150">Q2</button>
                                            ):(
                                                <button onClick={()=>setSelectedQuarter(0)} className="text-gray-300 font-[500] text-2xl p-2 hover:text-3xl hover:font-semibold duration-150">Q2</button>        
                                            )}
                                            
                                        </div>
                                        <div className="w-1/5 h-full justify-center items-end flex">
                                            {selectedQuarter === 1 ? (
                                                <button onClick={() => setSelectedQuarter(1)} className="text-white font-semibold text-3xl p-2 duration-150">Q3</button>
                                            ):(
                                                <button onClick={() => setSelectedQuarter(1)} className="text-gray-300 font-[500] text-2xl p-2 hover:text-3xl hover:font-semibold duration-150">Q3</button>
                                            )}
                                            
                                        </div>
                                        <div className="w-1/5 h-full justify-center items-end flex">
                                            {selectedQuarter === 2 ? (
                                                <button onClick={() => setSelectedQuarter(2)} className="text-white font-semibold text-3xl p-2 duration-150">Q4</button>
                                            ):(
                                                <button onClick={() => setSelectedQuarter(2)} className="text-gray-300 font-[500] text-2xl p-2 hover:text-3xl hover:font-semibold duration-150">Q4</button>    
                                            )}
                                            
                                        </div>
                                        <div className="w-1/5 h-full justify-end items-center flex flex-col">
                                            <div className="flex flex-grow">
                                                <h1 className="text-white font-semibold text-3xl">2024</h1>
                                            </div>
                                            
                                            {selectedQuarter === 3 ? (
                                                <button onClick={()=>setSelectedQuarter(3)} className="text-white font-semibold text-3xl p-2 duration-150">Q1</button>
                                            ):(
                                                <button onClick={()=>setSelectedQuarter(3)} className="text-gray-300 font-[500] text-2xl p-2 hover:text-3xl hover:font-semibold duration-150">Q1</button>
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
                                        <h2 className="text-gray-400 font-poppins text-xl mb-2">CEO/CTO</h2>
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
            )}

            <Footer />
        </div>
    )
}