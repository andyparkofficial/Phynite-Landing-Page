import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import CrystalPhyniteLogo from "../assets/crystal-phynite-logo.png"
import CrystalContract from "../assets/crystal-contract.png"
import CrystalGlobe from "../assets/crystal-globe.png"
import CrystalHand from "../assets/crystal-hand.png"
import CrystalVault from "../assets/crystal-vault.png"
import PhyniteCar from "../assets/phynite-car.png"
import { Link, useHistory, useLocation } from "react-router-dom"
import Arrow from "../assets/right-arrow.png"
import FloatingCitiesBanner from "../assets/floating-cities.png"
import { HashLink } from 'react-router-hash-link';
import PhyniteCarFront from "../assets/phynite-car-front.png"
import InteractiveCar from "../components/InteractiveCar"
import useWindowSize from "../hooks/useWindowSize.js"
import ImageBoxWithLink from "../components/ImageBoxWithLink.js"
import ImageBox from "../components/ImageBox.js"
import PhyniteUi from "../assets/phynite-ui.png"
import LowFeesIcon from "../assets/low-fees-icon.png"
import PhoneIcon from "../assets/phone-icon.png"
import SecurityIcon from "../assets/security-icon.png"

export default function Home(props) {


    const history = useHistory()

    function redirectToPage(pageURL){
        history.push(`/${pageURL}`);
    }
    const location = useLocation()
    const hash = location.hash;
    console.log(hash)

    const windowSize = useWindowSize()

    return (
        <div>
            <Navbar isClicked={"0"} />
            {props.displayType === "mobile" && (
                <div className="w-full pt-20 px-[14px] font-poppins overflow-clip min-h-screen">
                    <div className="w-full mb-16">
                        <h1 className="font-semibold text-[26px] text-phyniteBlue leading-tight pt-8 px-1 mb-2">
                            The Web3 Marketplace for Physical Collectibles
                        </h1>
                        <h2 className="text-white font-light text-sm pl-1">The fastest, safest, most forward-thinking way to trade physical collectibles. Only on Phynite.</h2>
                        <div className="w-full flex justify-center mb-6">
                            <div className="w-full translate-x-0">
                                <InteractiveCar/>
                            </div>
                        </div>
                        <div className="w-full px-3">
                            <button onClick={()=>redirectToPage("getStarted")} className="w-full py-2 rounded-2xl text-3xl text-gray1 font-semibold bg-phyniteBlue">Get Started</button>
                        </div>
                    </div>
                    <div className="w-full mb-16 px-1">
                        <h1 className="font-[500] text-2xl text-white mb-6">The Phynite Marketplace</h1>
                        <div className="w-full rounded-xl mb-12">
                            <img className="w-full scale-[106%] -translate-x-[0.7%]" src={PhyniteUi}></img>
                        </div>
                        <div className="w-full">
                            <div className="w-full flex items-center">
                                <img src={PhoneIcon} className="rounded-lg w-20 mr-4"></img>
                                <div className="flex flex-grow flex-col">
                                    <h2 className="text-[15px] font-semibold mb-2 text-white">Invest in the Physical, Digitally</h2>
                                    <h3 className="text-[10px] text-gray-400 font-light">
                                    All NFTs on Phynite are physically-backed by real collectibles, owned legally by the Users. Trade Contractually Bound NFTs (CBNFTs) instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.
                                    </h3>
                                </div>
                                
                            </div>
                            <div className="w-full my-8 flex items-center">
                                <img src={SecurityIcon} className="rounded-lg w-20 mr-4"></img>
                                <div className="flex flex-grow flex-col">
                                    <h2 className="text-[15px] font-semibold mb-2 text-white">Legal, Digital, and Physical Security</h2>
                                    <h3 className="text-[10px] text-gray-400 font-light">
                                    We store physical collectibles in Phynite's private vaults where they are safe from all external threats. Each linked CBNFT also blends Blockchain and legal security through integrated legally-binding contracts to provide the highest level of user protection.
                                    </h3>
                                </div>
                            </div>
                            <div className="w-full flex items-center">
                                <img src={LowFeesIcon} className="rounded-lg w-20 mr-4"></img>
                                <div className="flex flex-grow flex-col">
                                    <h2 className="text-[15px] font-semibold mb-2 text-white">High Royalties, Low Fees</h2>
                                    <h3 className="text-[10px] text-gray-400 font-light">
                                    Mint your physical collectibles into NFTs to earn a 1% royalty everytime it's traded. By eliminating the need for physical transfers, you can invest in verified physical collectibles at fractions of the extra cost.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-16">
                        <h1 className="text-white font-semibold text-3xl text-center mb-2">What is Phynite?</h1>
                        <h2 className="w-full text-gray-400 font-light text-xs text-center mb-6">Phynite is the smartest way to invest in physical assets, powered by our innovation, the <a href="https://docs.phynite.io/" target="_blank" className="underline">Phynite Protocol</a>.</h2>
                        <div className="rounded-2xl bg-gradient-to-l from-gray3 to-gray1 p-5 border border-gray1 flex gap-x-2 mb-5">
                            <div className="w-[45%]">
                                <h1 className="text-white font-[500] text-2xl">Mint</h1>
                                <img alt="" className="w-full" src={CrystalVault}></img>
                            </div>
                            <div className="w-[65%]">
                                <h2 className="text-white font-[500] mb-3 text-sm pt-11">Digitize Your Collectibles and Earn Royalties</h2>
                                <h3 className="text-gray-400 text-[11px]">Secure your physical collectible by shipping it to the Phynite Vault. It is re-verified, 3D scanned, vaulted away, and minted into your CBNFT.</h3>
                                <div className="flex w-full items-end justify-end pt-3 flex-grow">
                                    <HashLink smooth to="/about?sectionIndex=0#phyniteProtocol" className="text-gray-300 py-[2px] px-2 flex items-center">
                                        <h1 className="text-gray-300 text-xs mr-1">Read More</h1>
                                        <img alt="" className="w-3 h-3 brightness-90" src={Arrow}></img>
                                    </HashLink>
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
                                <h3 className="text-gray-400 text-[11px]">Transfer collectibles’ ownership rights instantly, worldwide. Buy, sell, and list CBNFTs for auction on the Phynite Marketplace.</h3>
                                <div className="flex w-full items-end justify-end pt-3 flex-grow">
                                    <HashLink smooth to="/about?sectionIndex=1#phyniteProtocol" className="text-gray-300 py-[2px] px-2 flex items-center">
                                        <h1 className="text-gray-300 text-xs mr-1">Read More</h1>
                                        <img alt="" className="w-3 h-3 brightness-90" src={Arrow}></img>
                                    </HashLink>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gradient-to-l from-gray3 to-gray1 p-5 border border-gray1 flex gap-x-2 mb-5">
                            <div className="w-[45%]">
                                <h1 className="text-white font-[500] text-2xl">Redeem</h1>
                                <img alt="" className="w-[90%] translate-y-2 translate-x-2" src={CrystalHand}></img>
                            </div>
                            <div className="w-[65%]">
                                <h2 className="text-white font-[500] mb-3 text-sm pt-11">Receive Your Collectible in Just a Few Clicks</h2>
                                <h3 className="text-gray-400 text-[11px]">Phynite will deliver your physical collectible anywhere, anytime. Simply “burn” your CBNFT, and we ship your valued item in a secure package.</h3>
                                <div className="flex w-full items-end justify-end pt-3 flex-grow">
                                    <HashLink smooth to="/about?sectionIndex=2#phyniteProtocol" className="text-gray-300  py-[2px] px-2 flex items-center">
                                        <h1 className="text-gray-300 text-xs mr-1">Read More</h1>
                                        <img alt="" className="w-3 h-3 brightness-90" src={Arrow}></img>
                                    </HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-16">
                        <h1 className="text-white font-semibold text-3xl mb-3 pl-1">Learn More</h1>
                        <div className="w-full mb-4 overflow-clip rounded-xl border border-gray-600">
                            <ImageBoxWithLink imageSource={FloatingCitiesBanner} link={"https://docs.phynite.io/"}>
                                <div className="flex flex-col items-end justify-end mr-1 w-full h-full p-4">
                                    <h1 className="text-white font-semibold text-lg leading-tight mb-1 text-right">Powered by the Phynite Protocol</h1>
                                    <div className="flex items-center">
                                        <h2 className="text-gray-300 font-light text-sm text-right">Read the Phynite Protocol White Paper</h2>
                                        <img className="w-4 h-4 ml-1 brightness-75" src={Arrow}></img>
                                    </div>
                                </div>
                            </ImageBoxWithLink>
                        </div>
                        <div className="flex w-full gap-y-4 flex-col">
                            <Link to="/about" className="rounded-xl flex justify-center items-center py-6 pl-6 h-56 border border-gray-600 w-full bg-gradient-to-b from-gray3 to-gray2">
                                <div className="flex flex-col flex-grow justify-center">
                                    <h1 className="text-white text-2xl font-semibold mb-4 leading-7">Learn More about Phynite</h1>
                                    <h2 className="text-gray-300 text-sm font-light leading-tight">Who we are, our vision, and more.</h2>
                                </div>
                                <div className="h-[170px] min-w-[170px] flex justify-center">
                                    <img className="h-full " src={CrystalPhyniteLogo}></img>
                                </div>
                            </Link>

                            <HashLink smooth to="/about#cbnfts" className="rounded-xl flex justify-center py-6 pl-6 items-center h-56 border border-gray-600 w-full bg-gradient-to-b from-gray3 to-gray2">
                                <div className="flex flex-col flex-grow justify-center">
                                    <h1 className="text-white text-xl font-semibold mb-4 leading-7">Contractually Bound NFTs are the Future.</h1>
                                    <h2 className="text-gray-300 text-xs font-light leading-tight">Learn how they can be used to protect your legal ownership of property.</h2>
                                </div>
                                <div className="h-[170px] min-w-[170px]  flex justify-center">
                                    <img className="h-full scale-110" src={CrystalContract}></img>
                                </div>
                            </HashLink>

                            <HashLink smooth to="/about#timeline" className="rounded-xl flex justify-center py-6 pl-6 items-center h-56 border border-gray-600 w-full bg-gradient-to-b from-gray3 to-gray2">
                                <div className="flex flex-col flex-grow justify-center">
                                    <h1 className="text-white text-2xl font-semibold mb-4 leading-7">We Plan to Take Off Soon.</h1>
                                    <h2 className="text-gray-300 text-sm font-light leading-tight">View our timeline to see Phynite's exciting upcoming launches.</h2>
                                </div>
                                <div className="h-[170px] min-w-[170px] flex justify-center">
                                    <img className="h-full scale-110" src={PhyniteCarFront}></img>
                                </div>
                            </HashLink>
                            <Link to="/blogs" className="rounded-xl flex justify-center items-center p-6 h-56 border border-gray-600 w-full bg-gradient-to-b from-gray3 to-gray2">
                                    
                                <div className="w-full flex flex-col">
                                    <h1 className="text-white text-[40px] font-semibold mb-7 leading-6 text-center"><span className="text-phyniteBlue">Phynite </span>Blog</h1>
                                    <h2 className="text-gray-300 text-[15px] font-light text-center">Ideas, Updates, Guides, and more.</h2>
                                </div>
                                
                                
                            </Link>
                        </div>
                        
                    </div>
                </div>
            )}
            {props.displayType === "tablet" && (
                <div className="w-full pt-20 px-[18px] font-poppins min-h-screen">
                    <div className="w-full flex justify-center pt-20 items-center mb-24">
                        <div className="w-[60%] h-full flex flex-col justify-center pl-1">
                            {(windowSize && windowSize.width > 810) && (
                                <div className="w-full flex flex-col justify-center">
                                    <h1 className="text-4xl font-semibold text-phyniteBlue leading-tight font-poppins">The Web3 Marketplace for Physical Collectibles</h1>
                                    <h2 className="text-lg mt-6 mb-8 text-white font-light font-poppins">The fastest, safest, most forward-thinking way to trade physical collectibles. Only on Phynite.</h2>
                                    <Link to="/getStarted" className="text-3xl font-semibold font-poppins text-gray1 bg-gradient-to-br from-phyniteBlue to-phyniteBlue rounded-xl w-[300px] py-2 text-center">Get Started</Link>
                                </div>
                            )}
                            {(windowSize && windowSize.width <= 810) && (
                                <div className="w-full flex flex-col justify-center">
                                    <h1 className="text-3xl font-semibold text-phyniteBlue leading-tight font-poppins">The Web3 Marketplace for Physical Collectibles</h1>
                                    <h2 className="text-sm mt-6 mb-8 text-white font-light font-poppins">The fastest, safest, most forward-thinking way to trade physical collectibles. Only on Phynite.</h2>
                                    <Link to="/getStarted" className="text-3xl font-semibold font-poppins text-gray1 bg-gradient-to-br from-phyniteBlue to-phyniteBlue rounded-xl w-[300px] py-2 text-center">Get Started</Link>
                                </div>
                            )}
                            
                            
                        </div>
                        <div className="w-[40%]  h-full flex justify-center items-center overflow-hidden">
                            <div className="w-full translate-x-0">
                                    <InteractiveCar/>
                            </div>
                        </div>
                    </div>

                    <div className="w-full mb-24">
                        <h1 className="text-white text-[27px] font-semibold font-poppins pl-1 mb-6">The Phynite Marketplace</h1>
                       
                        <div className="w-full flex-col flex font-poppins rounded-2xl mb-6 justify-center">
                            <img className="w-full scale-[104%] -translate-x-[0.7%]" src={PhyniteUi}></img>
                        </div>
                        <div className="font-poppins px-1">
                            <div className="w-full flex items-center">
                                <img src={PhoneIcon} className="rounded-lg w-20 mr-6"></img>
                                <div className="flex flex-grow flex-col">
                                    <h2 className="text-lg font-semibold mb-2 text-white">Invest in the Physical, Digitally</h2>
                                    <h3 className="text-[13px] text-gray-400 font-light">
                                    All NFTs on Phynite are physically-backed by real collectibles, owned legally by the Users. Trade Contractually Bound NFTs (CBNFTs) instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.
                                    </h3>
                                </div>
                                
                            </div>
                            <div className="w-full my-8 flex items-center">
                                <img src={SecurityIcon} className="rounded-lg w-20 mr-6"></img>
                                <div className="flex flex-grow flex-col">
                                    <h2 className="text-lg font-semibold mb-2 text-white">Legal, Digital, and Physical Security</h2>
                                    <h3 className="text-[13px] text-gray-400 font-light">
                                    We store physical collectibles in Phynite's private vaults where they are safe from all external threats. Each linked CBNFT also blends Blockchain and legal security through integrated legally-binding contracts to provide the highest level of user protection.
                                    </h3>
                                </div>
                            </div>
                            <div className="w-full flex items-center">
                                <img src={LowFeesIcon} className="rounded-lg w-20 mr-6"></img>
                                <div className="flex flex-grow flex-col">
                                    <h2 className="text-lg font-semibold mb-2 text-white">High Royalties, Low Fees</h2>
                                    <h3 className="text-[13px] text-gray-400 font-light">
                                    Mint your physical collectibles into NFTs to earn a 1% royalty everytime it's traded. By eliminating the need for physical transfers, you can invest in verified physical collectibles at fractions of the extra cost.
                                    </h3>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-24">
                        <h1 className="text-white font-semibold text-3xl text-center mb-2">What is Phynite?</h1>
                        <h2 className="w-full text-gray-400 font-light text-sm text-center mb-6">Phynite is the smartest way to invest in physical assets, powered by our innovation, the <a href="https://docs.phynite.io/" target="_blank" className="underline">Phynite Protocol</a>.</h2>
                        <div className="rounded-2xl bg-gradient-to-l from-gray3 to-gray1 p-7 border border-gray1 flex gap-x-2 mb-5">
                            <div className="w-[45%]">
                                <h1 className="text-white font-[500] text-[26px]">Mint</h1>
                                <img alt="" className="w-full" src={CrystalVault}></img>
                            </div>
                            <div className="w-[65%] flex flex-col justify-center pt-8">
                                <h2 className="text-white font-[500] mb-3 text-xl pt-11">Digitize Your Collectibles and Earn Royalties</h2>
                                <h3 className="text-gray-400 text-sm">Secure your physical collectible by shipping it to the Phynite Vault. It is re-verified, 3D scanned, vaulted away, and minted into your CBNFT.</h3>
                                <div className="flex w-full items-end justify-end pt-3 flex-grow">
                                    <HashLink smooth to="/about?sectionIndex=0#phyniteProtocol" className="text-gray-300 py-[2px] px-2 flex items-center">
                                        <h1 className="text-gray-300 text-sm mr-1">Read More</h1>
                                        <img alt="" className="w-4 h-4 brightness-90" src={Arrow}></img>
                                    </HashLink>
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
                                <h3 className="text-gray-400 text-sm">Transfer collectibles’ ownership rights instantly, worldwide. Buy, sell, and list CBNFTs for auction on the Phynite Marketplace.</h3>
                                <div className="flex w-full items-end justify-end pt-3 flex-grow">
                                    <HashLink smooth to="/about?sectionIndex=1#phyniteProtocol" className="text-gray-300 py-[2px] px-2 flex items-center">
                                        <h1 className="text-gray-300 text-sm mr-1">Read More</h1>
                                        <img alt="" className="w-4 h-4 brightness-90" src={Arrow}></img>
                                    </HashLink>
                                </div>
                            </div>
                        </div>
                        <div className="rounded-2xl bg-gradient-to-l from-gray3 to-gray1 p-7 border border-gray1 flex gap-x-2 mb-5">
                            <div className="w-[45%]">
                                <h1 className="text-white font-[500] text-[26px]">Redeem</h1>
                                <img alt="" className="w-[90%] translate-y-2 translate-x-2" src={CrystalHand}></img>
                            </div>
                            <div className="w-[65%] flex flex-col justify-center pt-8">
                                <h2 className="text-white font-[500] mb-3 text-xl pt-11">Receive Your Collectible in Just a Few Clicks</h2>
                                <h3 className="text-gray-400 text-sm">Phynite will deliver your physical collectible anywhere, anytime. Simply “burn” your CBNFT, and we ship your valued item in a secure package.</h3>
                                <div className="flex w-full items-end justify-end pt-3 flex-grow">
                                    <HashLink smooth to="/about?sectionIndex=2#phyniteProtocol" className="text-gray-300  py-[2px] px-2 flex items-center">
                                        <h1 className="text-gray-300 text-sm mr-1">Read More</h1>
                                        <img alt="" className="w-4 h-4 brightness-90" src={Arrow}></img>
                                    </HashLink>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-24">
                        <h1 className="text-white font-semibold text-3xl mb-5 pl-1">Learn More</h1>
                        <div className="w-full mb-4 overflow-clip rounded-xl border border-gray-600">
                            <ImageBoxWithLink imageSource={FloatingCitiesBanner} link={"https://docs.phynite.io/"}>
                                <div className="flex flex-col items-end justify-end mr-1 w-full h-full p-4">
                                    <h1 className="text-white font-semibold text-4xl leading-tight mb-1 text-justify">Powered by the<br/> Phynite Protocol</h1>
                                    <div className="flex items-center">
                                        <h2 className="text-gray-300 font-light text-[14.5px] text-right">Read the Phynite Protocol White Paper</h2>
                                        <img className="w-4 h-4 ml-1 brightness-75" src={Arrow}></img>
                                    </div>
                                </div>
                            </ImageBoxWithLink>
                        </div>
                        <div className="flex w-full gap-x-4 mb-5">
                            <Link to="/about"  className="rounded-xl flex items-center h-56  bg-gradient-to-b from-gray3 to-gray2 border border-gray-600 w-1/2 py-4 pl-4">
                                <div className="flex flex-col flex-grow justify-center">
                                    <h1 className="text-white text-2xl font-semibold mb-4 leading-7">Learn More about Phynite</h1>
                                    <h2 className="text-gray-300 text-sm font-light leading-tight">Who we are, our vision, and more.</h2>
                                </div>
                                <div className="h-[150px] min-w-[150px] flex justify-center">
                                    <img className="h-full " src={CrystalPhyniteLogo}></img>
                                </div>
                            </Link>
                            <HashLink smooth to="/about#cbnfts"  className="rounded-xl flex items-center h-56  bg-gradient-to-b from-gray3 to-gray2 border border-gray-600 w-1/2 py-4 pl-4">
                                <div className="flex flex-col flex-grow justify-center">
                                    <h1 className="text-white text-xl font-semibold mb-4 leading-7">Contractually Bound NFTs are the Future.</h1>
                                    <h2 className="text-gray-300 text-xs font-light leading-tight">Learn how they can be used to protect your legal ownership of property.</h2>
                                </div>
                                <div className="h-[150px] min-w-[150px]  flex justify-center">
                                    <img className="h-full scale-110" src={CrystalContract}></img>
                                </div>
                            </HashLink>
                        </div>
                        <div className="flex w-full gap-x-4">
                            <HashLink smooth to="/about#timeline"  className="rounded-xl flex items-center h-56  bg-gradient-to-b from-gray3 to-gray2 border border-gray-600 w-1/2 py-4 pl-4">
                                <div className="flex flex-col flex-grow justify-center">
                                    <h1 className="text-white text-2xl font-semibold mb-4 leading-7">We Plan to Take Off Soon.</h1>
                                    <h2 className="text-gray-300 text-xs font-light leading-tight">View our timeline to see Phynite's exciting upcoming launches.</h2>
                                </div>
                                <div className="h-[170px] min-w-[170px] flex justify-center">
                                    <img className="h-full scale-110" src={PhyniteCarFront}></img>
                                </div>
                            </HashLink>
                            <Link to="/blogs"  className="rounded-xl flex items-center h-56 bg-gradient-to-b from-gray3 to-gray2 border border-gray-600 w-1/2 p-4">
                                <div className="w-full flex flex-col">
                                    <h1 className="text-white text-[40px] font-semibold mb-7 leading-6 text-center"><span className="text-phyniteBlue">Phynite </span>Blog</h1>
                                    <h2 className="text-gray-300 text-[15px] font-light text-center">Ideas, Updates, Guides, and more.</h2>
                                </div>
                            </Link>
                        </div>
                    </div>
                </div>
            )}
            {props.displayType === "smallComputer" && (
                <div className="w-full px-8 font-poppins pt-20 min-h-screen">
                    <div className="w-full flex justify-center pt-20 items-center mb-20 h-screen min-h-[500px] max-h-[600px] gap-x-6">
                        <div className="w-[60%] h-full flex flex-col justify-center pl-1">
                            {(windowSize && windowSize.width > 930) && (
                                <div className="w-full flex flex-col justify-center">
                                    <h1 className="text-5xl font-semibold text-phyniteBlue leading-tight font-poppins w-full">The Web3 Marketplace for Physical Collectibles</h1>
                                    <h2 className="text-lg mt-6 mb-8 text-white font-light font-poppins w-full">The fastest, safest, most forward-thinking way to trade physical collectibles. Only on Phynite.</h2>
                                    <Link to="/getStarted" className="text-3xl font-semibold font-poppins text-gray1 bg-gradient-to-br from-phyniteBlue to-phyniteBlue rounded-xl w-[300px] py-2 text-center hover:brightness-125 hover:from-mango hover:to-salmon duration-300">Get Started</Link>
                                </div>
                            )}
                            {(windowSize && windowSize.width <= 930) && (
                                <div className="w-full flex flex-col justify-center">
                                    <h1 className="text-[44px] font-semibold text-phyniteBlue leading-tight font-poppins">The Web3 Marketplace for Physical Collectibles</h1>
                                    <h2 className="text-lg mt-6 mb-8 text-white font-light font-poppins">The fastest, safest, most forward-thinking way to trade physical collectibles. Only on Phynite.</h2>
                                    <Link to="/getStarted" className="text-3xl font-semibold font-poppins text-gray1 bg-gradient-to-br from-phyniteBlue to-phyniteBlue rounded-xl w-[300px] py-2 text-center hover:brightness-125 hover:from-mango hover:to-salmon duration-300">Get Started</Link>
                                </div>
                            )}
                            
                        </div>
                        <div className="w-[40%] h-full flex justify-center items-center overflow-hidden">
                            <div className="w-full translate-x-0">
                                    <InteractiveCar/>
                            </div>
                        </div>
                    </div>
                    <div className="w-full mb-24">
                        <h1 className="text-white text-3xl font-semibold font-poppins mb-6">The Phynite Marketplace</h1>
                        <div className="flex justify-center">
                            <div className="w-[55%] h-full flex-col flex font-poppins">
                                <img className="w-full -translate-x-[3%]" src={PhyniteUi}></img>
                            </div>
                            {windowSize && windowSize.width > 1080 ? (
                                <div className="w-[45%]  h-full font-poppins pl-5">
                                    <div className="w-full  pt-5 flex items-center">
                                        <img src={PhoneIcon} className="rounded-lg w-20 mr-7"></img>
                                        <div className="flex flex-grow flex-col">
                                            <h2 className="text-xl font-semibold mb-2 text-white">Invest in the Physical, Digitally</h2>
                                            <h3 className="text-[13px] text-gray-400 font-light">
                                            All NFTs on Phynite are physically-backed by real collectibles, owned legally by the Users. Trade Contractually Bound NFTs (CBNFTs) instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.
                                            </h3>
                                        </div>
                                        
                                    </div>
                                    <div className="w-full my-8 flex items-center">
                                        <img src={SecurityIcon} className="rounded-lg w-20 mr-7"></img>
                                        <div className="flex flex-grow flex-col">
                                            <h2 className="text-xl font-semibold mb-2 text-white">Legal, Digital, and Physical Security</h2>
                                            <h3 className="text-[13px] text-gray-400 font-light">
                                            We store physical collectibles in Phynite's private vaults where they are safe from all external threats. Each linked CBNFT also blends Blockchain and legal security through integrated legally-binding contracts to provide the highest level of user protection.
                                            </h3>
                                        </div>
                                        
                                    </div>
                                    <div className="w-full flex items-center">
                                        <img src={LowFeesIcon} className="rounded-lg w-20 mr-7"></img>
                                        <div className="flex flex-grow flex-col">
                                            <h2 className="text-xl font-semibold mb-2 text-white">High Royalties, Low Fees</h2>
                                            <h3 className="text-[13px] text-gray-400 font-light">
                                            Mint your physical collectibles into NFTs to earn a 1% royalty everytime it's traded. By eliminating the need for physical transfers, you can invest in verified physical collectibles at fractions of the extra cost.
                                            </h3>
                                        </div>
                                        
                                    </div>
                                </div>
                            ) : (
                                <div className="w-[45%]  h-full font-poppins pl-5">
                                    <div className="w-full py-2 flex items-center">
                                        <img src={PhoneIcon} className="rounded-lg w-[72px] mr-5"></img>
                                        <div className="flex flex-grow flex-col">
                                            <h2 className="text-[17px] font-semibold mb-2 text-white">Invest in the Physical, Digitally</h2>
                                            <h3 className="text-[11px] text-gray-400 font-light">
                                                All NFTs on Phynite are physically-backed by real collectibles, owned legally by the Users. Trade Contractually Bound NFTs (CBNFTs) instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="w-full my-2 py-2 flex items-center">
                                        <img src={SecurityIcon} className="rounded-lg w-[72px] mr-5"></img>
                                        <div className="flex flex-grow flex-col">
                                            <h2 className="text-[17px] font-semibold mb-2 text-white">Legal, Digital, and Physical Security</h2>
                                            <h3 className="text-[11px] text-gray-400 font-light">
                                            We store physical collectibles in Phynite's private vaults where they are safe from all external threats. Each linked CBNFT also blends Blockchain and legal security through integrated legally-binding contracts to provide the highest level of user protection.
                                            </h3>
                                        </div>
                                    </div>
                                    <div className="w-full py-2 flex items-center">
                                        <img src={LowFeesIcon} className="rounded-lg w-[72px] mr-5"></img>
                                        <div className="flex flex-grow flex-col">
                                            <h2 className="text-[17px] font-semibold mb-2 text-white">High Royalties, Low Fees</h2>
                                            <h3 className="text-[11px] text-gray-400 font-light">
                                            Mint your physical collectibles into NFTs to earn a 1% royalty everytime it's traded. By eliminating the need for physical transfers, you can invest in verified physical collectibles at fractions of the extra cost.
                                            </h3>
                                        </div>
                                    </div>
                                </div>
                            )}
                            
                        </div>
                    </div>
                    <div className="w-full mb-24">
                        <h1 className="text-white font-poppins text-4xl font-semibold mb-2 w-full text-center">What is Phynite?</h1>
                        <h2 className="w-full text-gray-400 font-light text-center mb-10">Phynite is the smartest way to invest in physical assets, powered by our innovation, the <a href="https://docs.phynite.io/" target="_blank" className="underline">Phynite Protocol</a>.</h2>
                        {windowSize && windowSize.width > 1070 ? (
                            <div className="w-full font-poppins flex gap-x-6 h-full">
                                <div className="w-1/3 h-full flex flex-col items-center bg-gradient-to-b from-gray3 to-gray1 rounded-2xl p-8 border border-gray1 hover:border-gray0 duration-200">
                                    <h1 className="text-white text-3xl font-[500] w-full text-left mb-3">
                                        Mint
                                    </h1>
                                    <div className="flex justify-center items-center w-full mb-5">
                                        <img alt="" src={CrystalVault} className="w-[70%]"></img>
                                    </div>
                                    <h1 className="text-white text-xl font-[500] text-left w-full mb-3">
                                        Digitize Your Collectibles and Earn Royalties
                                    </h1>
                                    <h2 className="w-full text-gray-300 font-light text-left text-[13px] mb-5">Secure your physical collectible by shipping it to the Phynite Vault. It is re-verified, 3D scanned, vaulted away, and minted into your CBNFT.</h2>
                                    <div className="flex flex-grow items-end justify-end w-full ">
                                        <HashLink smooth to="/about?sectionIndex=0#phyniteProtocol" className="flex items-center hover:brightness-125 px-3 border border-gray0 rounded-lg h-7">
                                            <div className="text-gray-300 text-[13px]">Read More</div>
                                            <img alt="" src={Arrow} className="w-4 h-4 ml-1 brightness-90"></img>
                                        </HashLink>
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
                                    <h2 className="w-full text-gray-300 font-light text-left text-[13px] mb-5">Transfer collectibles’ ownership rights instantly, worldwide. Buy, sell, and list CBNFTs for auction on the Phynite Marketplace.</h2>
                                    <div className="flex flex-grow items-end justify-end w-full ">
                                        <HashLink smooth to="/about?sectionIndex=1#phyniteProtocol"  className="flex items-center hover:brightness-125 px-3 border border-gray0 rounded-lg h-7">
                                            <div className="text-gray-300 text-[13px]">Read More</div>
                                            <img alt="" src={Arrow} className="w-4 h-4 ml-1 brightness-90"></img>
                                        </HashLink>
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
                                        Receive Your Collectible in Just a Few Clicks
                                    </h1>
                                    <h2 className="w-full text-gray-300 font-light text-left text-[13px] mb-5">Phynite will deliver your physical collectible anywhere, anytime. Simply “burn” your CBNFT, and we ship your valued item in a secure package.</h2>
                                    <div className="flex flex-grow items-end justify-end w-full ">
                                        <HashLink smooth to="/about?sectionIndex=2#phyniteProtocol"  className="flex items-center hover:brightness-125 px-3 border border-gray0 rounded-lg h-7">
                                            <div className="text-gray-300 text-[13px]">Read More</div>
                                            <img alt="" src={Arrow} className="w-4 h-4 ml-1 brightness-90"></img>
                                        </HashLink>
                                    </div>
                                </div>
                            </div>
                        ) : (
                            <div className="w-full font-poppins flex gap-x-6 h-full">
                                <div className="w-1/3 h-full flex flex-col items-center bg-gradient-to-b from-gray3 to-gray1 rounded-2xl p-8 border border-gray1 hover:border-gray0 duration-200">
                                    <h1 className="text-white text-3xl font-[500] w-full text-left mb-3">
                                        Mint
                                    </h1>
                                    <div className="flex justify-center items-center w-full mb-5">
                                        <img alt="" src={CrystalVault} className="w-[70%]"></img>
                                    </div>
                                    <h1 className="text-white text-lg font-[500] text-left w-full mb-2 leading-6">
                                        Digitize Your Collectibles and Earn Royalties
                                    </h1>
                                    <h2 className="w-full text-gray-300 font-light text-left text-xs mb-4">Secure your physical collectible by shipping it to the Phynite Vault. It is re-verified, 3D scanned, vaulted away, and minted into your CBNFT.</h2>
                                    <div className="flex flex-grow items-end justify-end w-full ">
                                        <HashLink smooth to="/about?sectionIndex=0#phyniteProtocol" className="flex items-center hover:brightness-125 px-3 border border-gray0 rounded-lg h-7">
                                            <div className="text-gray-300 text-[13px]">Read More</div>
                                            <img alt="" src={Arrow} className="w-4 h-4 ml-1 brightness-90"></img>
                                        </HashLink>
                                    </div>
                                </div>
                                <div className="w-1/3 h-full flex flex-col items-center bg-gradient-to-b from-gray3 to-gray1 rounded-2xl p-8 border border-gray1 hover:border-gray0 duration-200">
                                    <h1 className="text-white text-3xl font-[500] w-full text-left mb-3">
                                        Trade
                                    </h1>
                                    <div className="flex justify-center items-center w-full mb-5">
                                        <img alt="" src={CrystalGlobe} className="w-[70%]"></img>
                                    </div>
                                    <h1 className="text-white text-lg font-[500] text-left w-full mb-2 leading-6">
                                        Buy or Sell Collectibles from Anywhere, Anytime
                                    </h1>
                                    <h2 className="w-full text-gray-300 font-light text-left text-xs mb-4">Transfer collectibles’ ownership rights instantly, worldwide. Buy, sell, and list CBNFTs for auction on the Phynite Marketplace.</h2>
                                    <div className="flex flex-grow items-end justify-end w-full ">
                                        <HashLink smooth to="/about?sectionIndex=1#phyniteProtocol"  className="flex items-center hover:brightness-125 px-3 border border-gray0 rounded-lg h-7">
                                            <div className="text-gray-300 text-[13px]">Read More</div>
                                            <img alt="" src={Arrow} className="w-4 h-4 ml-1 brightness-90"></img>
                                        </HashLink>
                                    </div>
                                </div>
                                <div className="w-1/3 h-full flex flex-col items-center bg-gradient-to-b from-gray3 to-gray1 rounded-2xl p-8 border border-gray1 hover:border-gray0 duration-200">
                                    <h1 className="text-white text-3xl font-[500] w-full text-left mb-3">
                                        Redeem
                                    </h1>
                                    <div className="flex justify-center items-center w-full mb-5">
                                        <img alt="" src={CrystalHand} className="w-[70%]"></img>
                                    </div>
                                    <h1 className="text-white text-lg font-[500] text-left w-full mb-2 leading-6">
                                     Receive Your Collectible in Just a Few Clicks
                                    </h1>
                                    <h2 className="w-full text-gray-300 font-light text-left text-xs mb-4">Phynite will deliver your physical collectible anywhere, anytime. Simply “burn” your CBNFT, and we ship your valued item in a secure package.</h2>
                                    <div className="flex flex-grow items-end justify-end w-full ">
                                        <HashLink smooth to="/about?sectionIndex=2#phyniteProtocol"  className="flex items-center hover:brightness-125 px-3 border border-gray0 rounded-lg h-7">
                                            <div className="text-gray-300 text-[13px]">Read More</div>
                                            <img alt="" src={Arrow} className="w-4 h-4 ml-1 brightness-90"></img>
                                        </HashLink>
                                    </div>
                                </div>
                            </div>
                        )}
                    </div>
                    <div className="w-full mb-24">
                        <div className="w-full flex flex-col">
                            <h1 className="text-white text-semibold text-3xl font-semibold mb-5">Learn More</h1>
                            <div className="w-full mb-7 overflow-clip rounded-xl border border-gray1 hover:border-gray0 duration-300">
                                <ImageBoxWithLink imageSource={FloatingCitiesBanner} link={"https://docs.phynite.io/"}>
                                    <div className="flex flex-col items-end justify-end mr-1 w-full h-full p-4">
                                        <h1 className="text-white font-semibold text-5xl leading-tight mb-1 text-justify pr-3">Powered by the<br/> Phynite Protocol</h1>
                                        <div className="flex items-center">
                                            <h2 className="text-gray-300 font-light text-[20px] text-right pr-[6px]">Read the Phynite Protocol White Paper</h2>
                                            <img className="w-5 h-5 ml-1 brightness-75" src={Arrow}></img>
                                        </div>
                                    </div>
                                </ImageBoxWithLink>
                            </div>
                            <div className="flex w-full gap-x-5 mb-6">
                                <Link to="/about"  className="rounded-xl flex items-center h-64 bg-gray3 border border-gray1 hover:border-gray0 duration-300 hover:bg-gradient-to-b hover:from-gray3 hover:to-gray2 hover:brightness-125 w-1/2 py-6 pl-6">
                                    <div className="flex flex-col flex-grow justify-center">
                                        <h1 className="text-white text-3xl font-semibold mb-4 leading-8">Learn More about Phynite</h1>
                                        <h2 className="text-gray-300 font-light leading-tight">Who we are, our vision, and more.</h2>
                                    </div>
                                    <div className="h-[170px] min-w-[170px] flex justify-center">
                                        <img className="h-full " src={CrystalPhyniteLogo}></img>
                                    </div>
                                </Link>
                                <HashLink smooth to="/about#cbnfts"  className=" flex items-center h-64  bg-gray3 border border-gray1 rounded-xl hover:border-gray0 duration-300 hover:bg-gradient-to-b hover:from-gray3 hover:to-gray2 hover:brightness-125 w-1/2 py-6 pl-6">
                                    <div className="flex flex-col flex-grow justify-center">
                                        <h1 className="text-white text-2xl font-semibold mb-4 leading-8">Contractually Bound NFTs are the Future.</h1>
                                        <h2 className="text-gray-300 text-sm font-light leading-tight">Learn how they can be used to protect your legal ownership of property.</h2>
                                    </div>
                                    <div className="h-[170px] min-w-[170px]  flex justify-center">
                                        <img className="h-full scale-110" src={CrystalContract}></img>
                                    </div>
                                </HashLink>
                            </div>
                            <div className="flex w-full gap-x-5">
                                <HashLink smooth to="/about#timeline"  className="flex items-center h-64  bg-gray3 border border-gray1 rounded-xl hover:border-gray0 duration-300 hover:bg-gradient-to-b hover:from-gray3 hover:to-gray2 hover:brightness-125 w-1/2 py-6 pl-6">
                                    <div className="flex flex-col flex-grow justify-center">
                                        <h1 className="text-white text-3xl font-semibold mb-4 leading-8">We Plan to Take Off Soon.</h1>
                                        <h2 className="text-gray-300 text-sm font-light leading-tight">View our timeline to see Phynite's exciting upcoming launches.</h2>
                                    </div>
                                    <div className="h-[170px] min-w-[170px] flex justify-center">
                                        <img className="h-full scale-110" src={PhyniteCarFront}></img>
                                    </div>
                                </HashLink>
                                <Link to="/blogs"  className="rounded-xl flex items-center h-64 bg-gray3 border border-gray1 hover:border-gray0 duration-300 hover:bg-gradient-to-b hover:from-gray3 hover:to-gray2 hover:brightness-125 w-1/2 p-6">
                                    <div className="w-full flex flex-col">
                                        <h1 className="text-white text-5xl font-semibold mb-7 leading-6 text-center"><span className="text-phyniteBlue">Phynite </span>Blog</h1>
                                        <h2 className="text-gray-300 text-[15px] font-light text-center">Ideas, Updates, Guides, and more.</h2>
                                    </div>
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            )}
            {props.displayType === "computer" && (
                <div className="w-full overflow-clip min-h-screen">
                    <div className="w-full bg-mainGray max-h-[900px] h-screen min-h-[700px] flex justify-center">
                        <div className="w-[1350px]  h-full flex justify-center">
                            <div className="w-[55%] h-full flex flex-col justify-center ml-[28px]">
                                <h1 className="text-[54px] font-semibold text-phyniteBlue leading-tight font-poppins">The Web3 Marketplace<br/>for Physical Collectibles</h1>
                                <h2 className="text-xl mt-6 mb-8 text-white font-light font-poppins">The fastest, safest, most forward-thinking way to trade physical<br/>collectibles. Only on Phynite.</h2>
                                <Link to="/getStarted" className="text-3xl font-semibold font-poppins text-gray1 bg-gradient-to-br from-phyniteBlue to-phyniteBlue hover:brightness-125 hover:from-mango hover:to-salmon duration-300 rounded-xl w-[300px] py-2 text-center">Get Started</Link>
                            </div>
                            <div className="w-[45%]  h-full flex justify-center items-center">
                                <div className="w-full translate-x-0">
                                    <InteractiveCar/>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className="w-full min-h-[500px] flex justify-center mb-32">
                        <div className="w-[1350px]  h-full flex flex-col px-[25px]">
                            <h1 className="text-white text-4xl font-semibold font-poppins mb-4">The Phynite Marketplace</h1>
                            <div className="flex">
                                <div className="w-[55%] h-full flex-col flex font-poppins pt-3 items-start">
                                    <img className="w-full -translate-x-5" src={PhyniteUi}></img>
                                </div>
                                <div className="w-[45%]  h-full font-poppins pl-8">
                                    <div className="w-full py-5 flex items-center">
                                        <img src={PhoneIcon} className="rounded-lg w-20 mr-10"></img>
                                        <div className="flex flex-grow flex-col">
                                            <h2 className="text-2xl font-semibold mb-3 text-white">Invest in the Physical, Digitally</h2>
                                            <h3 className="text-sm text-gray-400 font-light">
                                            All NFTs on Phynite are physically-backed by real collectibles, owned legally by the Users. Trade Contractually Bound NFTs (CBNFTs) instantly on Phynite, and redeem your physical collectible at any time by burning your CBNFT.
                                            </h3>
                                        </div>
                                        
                                    </div>
                                    <div className="w-full my-5 py-5 flex items-center">
                                        <img src={SecurityIcon} className="rounded-lg w-20 mr-10"></img>
                                        <div className="flex flex-grow flex-col">
                                            <h2 className="text-2xl font-semibold mb-3 text-white">Legal, Digital, and Physical Security</h2>
                                            <h3 className="text-sm text-gray-400 font-light">
                                            We store physical collectibles in Phynite's private vaults where they are safe from all external threats. Each linked CBNFT also blends Blockchain and legal security through integrated legally-binding contracts to provide the highest level of user protection.
                                            </h3>
                                        </div>
                                        
                                    </div>
                                    <div className="w-full py-5 flex items-center">
                                        <img src={LowFeesIcon} className="rounded-lg w-20 mr-10"></img>
                                        <div className="flex flex-grow flex-col">
                                            <h2 className="text-2xl font-semibold mb-3 text-white">High Royalties, Low Fees</h2>
                                            <h3 className="text-sm text-gray-400 font-light">
                                            Mint your physical collectibles into NFTs to earn a 1% royalty everytime it's traded. By eliminating the need for physical transfers, you can invest in verified physical collectibles at fractions of the extra cost.
                                            </h3>
                                        </div>
                                        
                                    </div>
                                </div>
                            </div>
                            
                            
                        </div> 
                    </div>
                    <div className="w-full flex-col flex items-center mb-32 ">
                        <div className="max-w-[1350px] px-[28px]">
                            <h1 className="text-white text-center font-poppins text-[42px] font-semibold mb-2">What is Phynite?</h1>
                            <h2 className="w-full text-gray-400 font-light text-center mb-10">Phynite is the smartest way to invest in physical assets, powered by our innovation, the <a href="https://docs.phynite.io/" target="_blank" className="underline">Phynite Protocol</a>.</h2>
                            <div className=" w-full  font-poppins flex items-center h-[575px]">
                                <div className="w-1/3 h-full mr-[9px] flex flex-col items-center bg-gradient-to-b from-gray3 to-gray1 rounded-2xl p-10 border border-gray1 hover:border-gray0 duration-200">
                                    <h1 className="text-white text-3xl font-[500] w-full text-left mb-3">
                                        Mint
                                    </h1>
                                    <div className="flex justify-center items-center w-full h-[240px] mb-5">
                                        <img alt="" src={CrystalVault} className="w-[240px] h-[240px]"></img>
                                    </div>
                                    <h1 className="text-white text-2xl font-[500] text-left w-full mb-3">
                                        Digitize Your Collectibles and Earn Royalties
                                    </h1>
                                    <h2 className="w-full text-gray-300 font-light text-left text-[13px]">Secure your physical collectible by shipping it to the Phynite Vault. It is re-verified, 3D scanned, vaulted away, and minted into your CBNFT.</h2>
                                    <div className="flex flex-grow items-end justify-end w-full ">
                                        <HashLink smooth to="/about?sectionIndex=0#phyniteProtocol"  className="flex items-center hover:brightness-125 px-3 border border-gray0 rounded-lg h-7">
                                            <div className="text-gray-300 text-[13px]">Read More</div>
                                            <img alt="" src={Arrow} className="w-4 h-4 ml-1 brightness-90"></img>
                                        </HashLink>
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
                                    <h2 className="w-full text-gray-300 font-light text-left text-[13px]">Transfer collectibles’ ownership rights instantly, worldwide. Buy, sell, and list CBNFTs for auction on the Phynite Marketplace.</h2>
                                    <div className="flex flex-grow items-end justify-end w-full ">
                                        <HashLink smooth to="/about?sectionIndex=1#phyniteProtocol" className="flex items-center hover:brightness-125 px-3 border border-gray0 rounded-lg h-7">
                                            <div className="text-gray-300 text-[13px]">Read More</div>
                                            <img alt="" src={Arrow} className="w-4 h-4 ml-1 brightness-90"></img>
                                        </HashLink>
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
                                        Receive Your Collectible in Just a Few Clicks
                                    </h1>
                                    <h2 className="w-full text-gray-300 font-light text-left text-[13px]">Phynite will deliver your physical collectible anywhere, anytime. Simply “burn” your CBNFT, and we ship your valued item in a secure package.</h2>
                                    <div className="flex flex-grow items-end justify-end w-full ">
                                        <HashLink smooth to="/about?sectionIndex=2#phyniteProtocol" className="flex items-center hover:brightness-125 px-3 border border-gray0 rounded-lg h-7">
                                            <div className="text-gray-300 text-[13px]">Read More</div>
                                            <img alt="" src={Arrow} className="w-4 h-4 ml-1 brightness-90"></img>
                                        </HashLink>
                                    </div>
                                </div>
                            </div>
                        </div>

                    </div>
                    <div className="w-full flex justify-center mb-32">
                        <div className="w-[1300px] font-poppins flex flex-col">
                            <h1 className="text-white text-semibold text-4xl font-semibold mb-6">Learn More</h1>
                            <div className="w-full mb-8">
                                <a href="https://docs.phynite.io/" target="_blank" className="w-[1300px] absolute h-[610px] flex justify-end items-end flex-col pb-6 pr-6 hover:border-gray0 duration-200 border border-gray1 rounded-xl hover:shadow-xl">
                                    <h1 className="text-white font-semibold text-5xl text-justify leading-tight mb-2 mr-[14px]">Powered by the<br/> Phynite Protocol</h1>
                                    <div className="flex items-center mr-1">
                                        <h2 className="text-gray-300 font-light text-xl">Read the Phynite Protocol White Paper</h2>
                                        <img className="w-5 h-5 ml-2 brightness-75" src={Arrow}></img>
                                    </div>
                                    
                                </a>
                                <img src={FloatingCitiesBanner} className=" rounded-xl h-full w-full"></img>
                                
                            </div>
                            <div className="h-[200px] w-full flex gap-x-6">
                                <Link to="/about" className="w-[25%] flex items-center bg-gray3 p-6 border border-gray1 rounded-xl hover:border-gray0 duration-300 hover:bg-gradient-to-b hover:from-gray3 hover:to-gray2 hover:brightness-125">
                                    
                                    <div className="w-[60%] flex flex-col">
                                        <h1 className="text-white text-xl font-semibold mb-3 leading-6">Learn More about Phynite</h1>
                                        <h2 className="text-gray-300 text-xs font-light">Who we are, our vision, and more.</h2>
                                    </div>
                                    <div className="w-[40%] overflow-clip flex justify-center items-center">
                                        <img src={CrystalPhyniteLogo} className="min-w-[140px]"></img>
                                    </div>
                                    
                                </Link>
                                <HashLink smooth to="/about#cbnfts" className="w-[25%] flex items-center bg-gray3 p-6 border border-gray1 rounded-xl hover:border-gray0 duration-300 hover:bg-gradient-to-b hover:from-gray3 hover:to-gray2 hover:brightness-125">
                                    
                                    <div className="w-[60%] flex flex-col">
                                        <h1 className="text-white text-lg font-semibold mb-3 leading-6">Contractually Bound NFTs are the Future.</h1>
                                        <h2 className="text-gray-300 text-xs font-light">Learn how they can be used to protect your legal ownership of property.</h2>
                                    </div>
                                    <div className="w-[40%] overflow-clip flex justify-center items-center">
                                        <img src={CrystalContract} className="min-w-[160px] translate-x-2"></img>
                                    </div>
                                    
                                </HashLink>
                                <HashLink smooth to="/about#timeline" className="w-[25%] flex items-center bg-gray3 p-6 border border-gray1 rounded-xl hover:border-gray0 duration-300 hover:bg-gradient-to-b hover:from-gray3 hover:to-gray2 hover:brightness-125">
                                    
                                    <div className="w-[60%] flex flex-col">
                                        <h1 className="text-white text-xl font-semibold mb-3 leading-6">We Plan to Take Off Soon.</h1>
                                        <h2 className="text-gray-300 text-xs font-light">View our timeline to see Phynite's exciting upcoming launches.</h2>
                                    </div>
                                    <div className="w-[40%] overflow-clip flex justify-center items-center">
                                        <img src={PhyniteCarFront} className="min-w-[140px] translate-x-2"></img>
                                    </div>
                                    
                                </HashLink>
                                <Link to="/blogs" className="w-[25%] flex items-center bg-gray3 p-6 border border-gray1 rounded-xl hover:border-gray0 duration-300 hover:bg-gradient-to-b hover:from-gray3 hover:to-gray2 hover:brightness-125">
                                    
                                    <div className="w-full flex flex-col">
                                        <h1 className="text-white text-[32px] font-semibold mb-4 leading-6 text-center"><span className="text-phyniteBlue">Phynite </span>Blog</h1>
                                        <h2 className="text-gray-300 text-xs font-light text-center">Ideas, Updates, Guides, and more.</h2>
                                    </div>
                                    
                                    
                                </Link>
                            </div>
                        </div>
                    </div>

                </div>
            )}

            <Footer />
        </div>
    )
}