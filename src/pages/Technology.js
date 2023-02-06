import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"

export default function Technology (props) {
    return (
        <div>
            <Navbar isClicked={"2"} />
            <div className="h-screen"></div>
            <Footer />
        </div>
    )
}