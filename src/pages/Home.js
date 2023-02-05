import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"

export default function Home (props) {
    return (
        <div className="">
            <Navbar />
            <div className="w-full bg-mainGray h-[900px] flex justify-center">
                <div className="w-[1300px]  h-full flex justify-center">
                    <div className="w-[60%] h-full flex flex-col justify-center">
                        <h1 className="text-6xl font-semibold text-phyniteBlue leading-tight font-poppins">NFTs Backed by <br/>Real Physical Items</h1>
                        <h2 className="text-xl mt-8 text-white font-light font-poppins">World's First Contractually Bound NFT Marketplace</h2>
                    </div>
                    <div className="w-[40%]  h-full">

                    </div>
                </div>
            </div>
            <div className="w-full min-h-[500px] flex justify-center mb-32">
                <div className="w-[1300px]  h-full flex flex-col">
                    <h1 className="text-white text-3xl font-[500] font-poppins">Phynite Marketplace</h1>
                    <div className="flex justify-center">
                        <div className="w-[50%] h-full flex-col flex font-poppins bg-gray0">
                        </div>
                        <div className="w-[50%]  h-full font-poppins p-4">
                            <div className="w-full bg-gray3 rounded-xl p-5 border border-gray1">
                                <h2 className="text-3xl font-semibold mb-2 text-white">Yeet</h2>
                                <h3 className="text-md text-gray0">
                                His parents continued to question him. He didn't know what to say to them since they refused to believe the truth.
                                </h3>
                            </div>
                            <div className="w-full bg-gray3 rounded-xl my-5 p-5 border border-gray1">
                                <h2 className="text-3xl font-semibold mb-2 text-white">Yeet</h2>
                                <h3 className="text-md text-gray0">
                                He explained again and again, and they dismissed his explanation as a figment of his imagination.
                                </h3>
                            </div>
                            <div className="w-full bg-gray3 rounded-xl p-5 border border-gray1">
                                <h2 className="text-3xl font-semibold mb-2 text-white">Yeet</h2>
                                <h3 className="text-md text-gray0">
                                There was no way that grandpa, who had been dead for five years, could have told him where the treasure had been hidden. 
                                </h3>
                            </div>
                        </div>
                    </div>
                    
                    
                </div>
            </div>
            <div className="w-full h-[800px] flex justify-center">
                <div className="w-[1300px] h-full flex flex-col items-center">
                    <div className="flex flex-col items-center font-poppins">
                        <h2 className="text-gray-400 text-2xl font-[500] mb-4">Our Role</h2>
                        <h1 className="text-white text-4xl font-semibold text-center leading-tight">We Securely Store Physical Collectibles,<br/> you trade the ownership rights at any time</h1>
                    </div>
                </div>

            </div>
            <div className="w-full flex justify-center mb-32">
                <div className="w-[1300px] font-poppins flex flex-col">
                    <h1 className="text-white text-semibold text-3xl font-[500] mb-4">Learn More</h1>
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