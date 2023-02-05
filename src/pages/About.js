import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"

export default function About (props) {
    return (
        <div>
            <Navbar isClicked={"0"} />
            <div className="h-screen"></div>
            <Footer />
        </div>
    )
}