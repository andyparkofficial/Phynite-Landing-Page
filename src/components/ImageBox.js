import { useState, useRef, useEffect } from "react"
import useWindowSize from "../hooks/useWindowSize"

export default function ImageBox({imageSource, children, dimensions = null}) {

    const [boxStyle, setBoxStyle] = useState({ width: "0px", height: "0px" })
    const [loading, setLoading] = useState(true)

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
        setBoxStyle({ width: `${Math.round(boxRef.current.offsetWidth)}px`, height: `${Math.round(boxRef.current.offsetWidth * dimensions)}px` })
        console.log(boxStyle)
    }

    useEffect(() => {
        setTimeout(()=>turnLoadingOff(), 500)
    }, [])
    
    function turnLoadingOff() {
        setLoading(false)
    }




    return (
        <div className="w-full" ref={boxRef}>
            {loading === true ? (
                <div>
                    <div className="skeleton" style={boxStyle}>
                        
                    </div>
                </div>
            ): (
                <div>
                    <div style={boxStyle} className=" absolute">
                        {children}
                    </div>
                    <img src={imageSource} className="w-full"></img> 
                </div>
            )}
            

        </div>
    )
}