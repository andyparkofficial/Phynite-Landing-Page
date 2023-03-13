import { useState, useRef, useEffect } from "react"
import useWindowSize from "../hooks/useWindowSize"

export default function ImageBox(props) {

    const [boxStyle, setBoxStyle] = useState({width: "0px"})

    const imageRef = useRef(null)
    const windowSize = useWindowSize()

    useEffect(() => {
        if (windowSize && imageRef.current) {
            setBoxStyle({width: `${Math.round(imageRef.current.offsetWidth)}px`, height: `${Math.round(imageRef.current.offsetHeight)}px`})
        }
    },[windowSize])

    return (
        <div className="w-full">
            <div style={boxStyle} className=" absolute">
                {props.children}
            </div>
            <img src={props.imageSource} className="w-full" ref={imageRef}></img>

        </div>
    )
}