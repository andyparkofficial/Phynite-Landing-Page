import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"

export default function Blog(props) {
    
    const blogs =
        [
            {
                title: "The Benefits of Physically Backed NFTs",
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
            <Navbar isClicked={"1"} />
            <div className="flex flex-col items-center w-full">
                <div className="h-[350px] w-[1300px] flex justify-center">
                    <h1 className="font-semibold text-7xl font-poppins pt-48 text-white"><span className="text-phyniteBlue">Phynite</span> Blog</h1>
                </div>
                <div className="w-[1300px] flex flex-col mb-16">
                    <div className="w-full ">
                        <h2 className="text-4xl text-white font-poppins font-[500] mb-10">
                            Recent
                        </h2>
                        <div className="rounded-2xl bg-gray4 border border-gray1 h-[400px] bg-gradient-to-br from-mango to-salmon brightness-90"></div>
                    </div>
                </div>
                <div className="text-3xl text-white font-[500] w-[1300px] mb-6">Recommended</div>
                <div className="w-[1324px] flex-wrap flex">
                    
                    {blogs.map((blog, id) => {
                        return (
                            <div className="w-1/3 p-3">
                                <div className="rounded-2xl h-[500px] bg-gray4 border border-gray1 flex flex-col overflow-clip">
                                    <div className="w-full h-[250px] bg-gradient-to-br border-b border-gray1 from-phyniteBlue via-ice to-gray1"></div>
                                    <div className="h-[250px] font-poppins p-3 px-5">
                                        
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
            
            <Footer />
        </div>
    )
}