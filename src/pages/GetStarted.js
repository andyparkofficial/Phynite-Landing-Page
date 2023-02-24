import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"

export default function GetStarted (props) {
    return (
        <div>
            <Navbar isClicked={"3"} />
            <div className="h-screen"></div>
            <Footer />
        </div>
    )
}