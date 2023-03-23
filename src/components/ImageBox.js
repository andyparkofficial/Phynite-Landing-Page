import { useState, useRef, useEffect } from "react"
import useWindowSize from "../hooks/useWindowSize"

export default function ImageBox({imageSource, children, dimensions = null}) {

    const [boxStyle, setBoxStyle] = useState({width: "0px", height: "0px"})

    const boxRef = useRef(null)

    const windowSize = useWindowSize()


    // dimensions is a ratio of height/width
    useEffect(() => {
        if (dimensions !== null && boxRef.current && boxStyle.width === "0px") {
            calculateDimensions()
        }
    }, [boxStyle])
    
    useEffect(() => {
        if (dimensions !== null && boxRef.current) {
            calculateDimensions()
        }
    }, [windowSize])

    function calculateDimensions() {
        setBoxStyle({width: `${Math.round(boxRef.current.offsetWidth)}px`, height: `${Math.round(boxRef.current.offsetWidth*dimensions)}px`})
    }


    return (
        <div className="w-full" ref={boxRef}>
            <div style={boxStyle} className=" absolute">
                {children}
            </div>
            <img src={imageSource} className="w-full"></img>

        </div>
    )
}