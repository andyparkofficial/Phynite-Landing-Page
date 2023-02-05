import { useEffect, useState } from "react"
import phyniteLogo from "../assets/phynite-logo-white.png"
import {Link} from "react-router-dom"

export default function Footer() {
    return (
        <div className="bg-gray2 h-[300px] flex justify-center">
            <div className="w-[1300px] h-full flex pt-12 font-poppins">
                <div className="w-[25%] h-full">
                    <img className="w-52 mb-2 -translate-x-3" src={phyniteLogo}></img>
                    <h1 className="text-sm text-gray-400 font-[500] ">Trade Physical Finite Items</h1>
                </div>
                <div className="w-[25%] h-full pt-2 flex flex-col gap-y-4">
                    <h1 className="text-xs text-gray-400 font-[500] tracking-[.2em] ">PRODUCT</h1>
                    <Link to="/faq">
                        <h2 className="text-sm text-white font-semibold">FAQ</h2>
                    </Link>
                    <Link to="/whitepaper">
                        <h2 className="text-sm text-white font-semibold">White Paper</h2>
                    </Link>
                </div>
                <div className="w-[25%] h-full pt-2 flex flex-col gap-y-4">
                    <h1 className="text-xs text-gray-400 font-[500] tracking-[.2em]">COMPANY </h1>
                    <Link to="/about">
                        <h2 className="text-sm text-white font-semibold">About</h2>
                    </Link>
                    <Link to="/blog">
                        <h2 className="text-sm text-white font-semibold">Blog</h2>
                    </Link>
                </div>
                <div className="w-[25%] h-full pt-2 flex flex-col gap-y-4">
                    <h1 className="text-xs text-gray-400 font-[500] tracking-[.2em]">SOCIAL </h1>
                   
                </div>
            </div>

        </div>
    )
}