import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"

export default function Blog(props) {
    
    const blogs =
        [
            {
                title: "The Pros and Cons of Physically Backed NFTs",
                bgImage: "",
                dateWritten: "January 18, 2023",
                summary: "All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities."

            },
            
            {
                title: "How to Use a Metamask Wallet",
                bgImage: "",
                dateWritten: "January 18, 2023",
                summary: "The Phynite Protocol is built around contractually-binding NFTs (or CBNFTs for short)."
            },

            {
                title: "Off-Chain v.s. On-chain Storage of Legal Signatures",
                bgImage: "",
                dateWritten: "January 18, 2023",
                summary: "All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities."
            },
            
            {
                title: "The Benefits of Physically Backed NFTs",
                bgImage: "",
                dateWritten: "January 18, 2023",
                summary: "All CBNFTs traded on Phynite are linked to collectibles with years of trading activity backed by passionate communities."
            }
        ]

    return (
        <div>
            <Navbar isClicked={"2"} />
            {props.displayType === "mobile" && (
                <div className="pt-20 px-[14px] w-full font-poppins">
                    <div className="w-full pt-12 mb-12">
                        <h1 className="text-white text-5xl font-semibold text-center mb-16">
                            <span className="text-phyniteBlue">Phynite </span>Blog
                        </h1>
                        <h2 className="text-white text-2xl font-[500] mb-4 pl-1">Recent</h2>
                        <div className="rounded-2xl h-[250px] border border-gray0 bg-gradient-to-r from-gray-600 via-gray-300 to-ice flex flex-col justify-end p-4">
                            <h1 className="text-gray1 text-xl font-bold leading-[1.2] mb-2 w-3/4">
                                The Pros and Cons of Physically Backed NFTs
                            </h1>
                            <h2 className="text-gray3 font-semibold justify-end">
                                January 18th, 2023
                            </h2>
                        </div>
                    </div>
                    <div className="w-full mb-20">
                        <h1 className="text-2xl font-[500] text-white pl-1 mb-1">Recommended</h1>
                        <div className="w-full">
                            {blogs.map((blog, id) => {
                                return (
                                    <div className="py-3">
                                        <div className="rounded-2xl h-[450px] bg-gray4 border border-gray1 flex flex-col overflow-clip">
                                            <div className="w-full h-[250px] bg-gradient-to-br border-b border-gray1 from-phyniteBlue via-ice to-gray1"></div>
                                            <div className="h-[250px] font-poppins p-5">
                                                
                                                <h1 className="text-white text-xl font-[500]">{blog.title}</h1>
                                                <h2 className="text-gray0 text-sm mb-2">{blog.dateWritten}</h2>
                                                <p className="border-t border-gray1 text-sm text-gray-400 pt-3">{blog.summary}</p>
                                            </div>
                                        </div>
                                    </div>
                                )
                            })}
                        </div>
                    </div>
                </div>
            )}
            {props.displayType === "computer" && (
                <div className="flex flex-col items-center w-full">
                    <div className="h-[350px] w-[1300px] flex justify-center">
                        <h1 className="font-semibold text-7xl font-poppins pt-48 text-white"><span className="text-phyniteBlue">Phynite</span> Blog</h1>
                    </div>
                    <div className="w-[1300px] flex flex-col mb-16">
                        <div className="w-full ">
                            <h2 className="text-4xl text-white font-poppins font-[500] mb-8">
                                Recent
                            </h2>
                            <div className="rounded-3xl border border-gray0 h-[600px] bg-gradient-to-r from-gray-600 via-gray-300 to-ice flex justify-start items-end pb-16 p-12">
                                <div className=" w-1/2">
                                    <h1 className="text-gray1 text-5xl font-bold leading-[1.2] mb-4">
                                        The Pros and Cons of Physically Backed NFTs
                                    </h1>
                                    <h2 className="text-gray3 font-semibold text-3xl justify-end">
                                        January 18th, 2023
                                    </h2>
                                </div>
                                
                            </div>
                        </div>
                    </div>
                    <div className="text-4xl text-white font-[500] w-[1300px] mb-6 font-poppins">Recommended</div>
                    <div className="w-[1324px] flex-wrap flex">
                        
                        {blogs.map((blog, id) => {
                            return (
                                <div className="w-1/3 p-3">
                                    <div className="rounded-2xl h-[500px] bg-gray4 border border-gray1 flex flex-col overflow-clip">
                                        <div className="w-full h-[250px] bg-gradient-to-br border-b border-gray1 from-phyniteBlue via-ice to-gray1"></div>
                                        <div className="h-[250px] font-poppins p-5">
                                            
                                            <h1 className="text-white text-2xl font-[500]">{blog.title}</h1>
                                            <h2 className="text-gray0 text mb-2">{blog.dateWritten}</h2>
                                            <p className="border-t border-gray1 text-sm text-gray-400 pt-3">{blog.summary}</p>
                                        </div>
                                    </div>
                                </div>
                            )
                        })}
                    </div>
                </div>
            )}

            
            <Footer />
        </div>
    )
}