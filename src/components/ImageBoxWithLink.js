import { useState, useRef, useEffect } from "react"
import useWindowSize from "../hooks/useWindowSize"

export default function ImageBoxWithLink(props) {

    const [boxStyle, setBoxStyle] = useState({width: "0px"})

    const imageRef = useRef(null)
    const windowSize = useWindowSize()

    useEffect(() => {
        if (windowSize && imageRef.current) {
            setBoxStyle({width: `${Math.round(imageRef.current.offsetWidth)}px`, height: `${Math.round(imageRef.current.offsetHeight)}px`})
        }
    },[windowSize])

    return (
        <div className="w-full ">
            <a style={boxStyle} href={props.link} target="_blank" className=" absolute">
                {props.children}
            </a>
            <img src={props.imageSource} className="w-full" ref={imageRef}></img>

        </div>
    )
}