import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import { recordPageView } from "../utils/utils.js"


export default function FAQ (props) {
    return (
        <div>
            <Navbar/>
            <div className="min-h-screen"></div>
            <Footer />
        </div>
    )
}