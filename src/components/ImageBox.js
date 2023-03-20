import { useState, useRef, useEffect } from "react"
import useWindowSize from "../hooks/useWindowSize"

export default function ImageBox(props) {

    const [boxStyle, setBoxStyle] = useState({width: "0px", height: "0px"})

    const imageRef = useRef(null)
    const windowSize = useWindowSize()

    useEffect(() => {
        if (props.imageSource && imageRef.current) {
            setTimeout(()=>calculateDimensions(),200)
        }
    }, [windowSize])
    
    useEffect(() => {
        if (props.imageSource && imageRef.current) {
            setTimeout(() => calculateDimensions(), 200)
            setTimeout(() => calculateDimensions(), 500)
            setTimeout(()=>calculateDimensions(),1000)
        }
    }, [props.imageSource])
    
    function calculateDimensions() {
        setBoxStyle({width: `${Math.round(imageRef.current.offsetWidth)}px`, height: `${Math.round(imageRef.current.offsetHeight)}px`})
    }

    return (
        <div className="w-full">
            <div style={boxStyle} className=" absolute">
                {props.children}
            </div>
            <img src={props.imageSource} className="w-full" ref={imageRef}></img>

        </div>
    )
}