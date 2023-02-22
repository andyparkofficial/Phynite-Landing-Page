import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import CrystalPhyniteLogo from "../assets/crystal-phynite-logo.png"
import CrystalGlobe from "../assets/crystal-globe.png"
import CrystalHand from "../assets/crystal-hand.png"
import DescriptionDropdownMenu from "../components/DescriptionDropdownMenu.js"
import DescriptionItem from "../components/DescriptionItem.js"


export default function Home(props) {
    
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
            <Navbar />
            <div className="w-full bg-mainGray max-h-[900px] h-screen min-h-[700px] flex justify-center">
                <div className="w-[1300px]  h-full flex justify-center">
                    <div className="w-[60%] h-full flex flex-col justify-center">
                        <h1 className="text-5xl font-semibold text-phyniteBlue leading-tight font-poppins">The Web3 Marketplace<br/>for Physical Collectibles</h1>
                        <h2 className="text-xl mt-8 text-white font-light font-poppins">The fastest, safest, most forward-thinking way to trade<br/> physical collectibles. Only on Phynite.</h2>
                    </div>
                    <div className="w-[40%]  h-full flex justify-center items-center">
                        <img className="w-[500px] h-[500px]" src={CrystalPhyniteLogo}></img>
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
            <div className="w-full flex justify-center mb-16">
                <div className="w-[1300px] h-full flex flex-col items-center">
                    <div className="flex flex-col items-center font-poppins w-full h-full">
                        <h1 className="text-white text-4xl font-semibold mb-6">How does Phynite work?</h1>
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
                                                <div className="text-white p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
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
                                                <div className="text-white p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
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
                                                <div className="text-white p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
                                            </DescriptionDropdownMenu>
                                        </DescriptionItem>
                                    </div>
                                </div>
                                <div className="w-[50%] h-full flex items-center pr-10 justify-end">
                                    <img className="w-[500px] h-[500px]" src={CrystalPhyniteLogo}></img>
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
                                                <div className="text-white p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
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
                                                <div className="text-white p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
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
                                                <div className="text-white p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
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
                                                <div className="text-white p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
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
                                                <div className="text-white p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
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
                                                <div className="text-white p-6">All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities. Our goal is to support these communities and encourage new supporters by trailblazing the most efficient platform for collectors to trade.</div>
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
            <div className="w-full flex justify-center mb-32">
                <div className="w-[1300px] font-poppins flex flex-col">
                    <h1 className="text-white text-semibold text-3xl font-semibold mb-4">Learn More</h1>
                    <div className="flex w-fullS min-h-[400px] mb-6">
                        <div className="bg-gray3 border border-gray1 rounded-xl flex flex-grow h-full mr-6"></div>
                        <div className="w-[200px] h-full flex flex-col gap-y-6">
                            <div className="h-[50%] bg-gray3 p-5 border border-gray1 rounded-xl">

                            </div>
                            <div className="h-[50%] bg-gray3 p-5 border border-gray1 rounded-xl">

                            </div>
                        </div>
                    </div>
                    <div className="flex w-full min-h-[200px] gap-x-6">
                        <div className="h-full w-[200px] bg-gray3 p-5 border border-gray1 rounded-xl"></div>
                        <div className="h-full w-[200px] bg-gray3 p-5 border border-gray1 rounded-xl"></div>
                        <div className="h-full flex flex-grow rounded-xl bg-gray3 p-5 border border-gray1"></div>
                    </div>
                </div>
            </div>
            <Footer />
        </div>
    )
}