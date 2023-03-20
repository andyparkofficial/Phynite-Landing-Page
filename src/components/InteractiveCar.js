import { useState, useEffect, useRef } from "react"
import carEntersFrame from "../assets/car-enters-frame.mp4"
import carDoorsOpen from "../assets/car-doors-open.mp4"
import carLightsTurnOn from "../assets/car-lights-turn-on.mp4"
import carLightsTurnOff from "../assets/car-lights-turn-off.mp4"
import ReactPlayer from "react-player"
import useWindowSize from "../hooks/useWindowSize"
import PopUpWrapper from "../components/PopUpWrapper"
import carLightsOnDoorsOpen from "../assets/car-lights-on-doors-open.mp4"
import clickIcon from "../assets/click-icon.png"
import "../styles.css"

export default function InteractiveCar(props) { 
    
    // state 0: carEntersFrame starts
    // state 1: carEntersFrame has finished, lights can turn on and off depending on hover
    // state 2: carDoorsOpen starts and finished

    const [interactiveState, setInteractiveState] = useState(0)
    const [hoverOn, setHoverOn] = useState(false)
    const [enteringVideoEnded, setEnteringVideoEnded] = useState(false)
    const [clickableButtonStyle, setClickableButtonStyle] = useState({width: "0px", height: "0px"})
    const [transitionState, setTransitionState] = useState(0) // the transition state is cleverly used to reduce flickering
    const [clickMeOn, setClickMeOn] = useState(false)
    const [componentStyle, setComponentStyle] = useState({ height: "0px" })
    const [clickMeStyle, setClickMeStyle] = useState({ height: "0px", width: "0px" })
    const [clickMeComponentStyle, setClickMeComponentStyle] = useState({ padding: "0px" })
    const [mobileOrTabletSize, setMobileOrTabletSize] = useState(false)
    const windowSize = useWindowSize()
    const componentRef = useRef(null)
        
    useEffect(() => {
        if (enteringVideoEnded === true && hoverOn === true && interactiveState === 0) {
            setInteractiveState(1)
        }
    }, [hoverOn])
    
    useEffect(() => {
        if (enteringVideoEnded === true && hoverOn === true && interactiveState === 0) {
            setInteractiveState(1)
        }
    }, [enteringVideoEnded])

    useEffect(() => {
        if (enteringVideoEnded === true && interactiveState !== 2) {
            setClickMeOn(true)
        }
    }, [enteringVideoEnded])
    


    
    useEffect(() => {
        if (windowSize && windowSize.width < 900) {
            setMobileOrTabletSize(true)
        } else {
            setMobileOrTabletSize(false)
        }

        if (componentRef.current) {
            const buttonHeight = Math.round(.65*(componentRef.current.offsetHeight))
            const buttonWidth = Math.round(.7 * buttonHeight)
            const componentHeight = Math.round(componentRef.current.offsetWidth)
            const clickMeWidth = Math.round(0.12 * componentRef.current.offsetHeight)
            const clickMeHeight = Math.round(1.3 * clickMeWidth)
            const clickMeContainerPadding = Math.round(0.17 * componentRef.current.offsetWidth)

            setClickableButtonStyle({ width: `${buttonWidth}px`, height: `${buttonHeight}px` })
            setComponentStyle({ height: `${componentHeight}px`, width: `${componentHeight}px`})
            setClickMeStyle({ height: `${clickMeHeight}px`, width: `${clickMeWidth}px` })
            setClickMeComponentStyle({ padding: `${clickMeContainerPadding}px` })
        }
        

    }, [windowSize])
    
    function handleClick() {
        setTransitionState(1)
        setInteractiveState(2)
        setTimeout(()=>disableTransitionState(),200)
    }

    useEffect(() => {
        if (interactiveState === 2) {
            
            setClickMeOn(false)
        }
    },[interactiveState])

    function disableTransitionState() {
        setTransitionState(null)
    }

    function handleMobileOrTabletClick() {
        if (enteringVideoEnded === true){
            setInteractiveState(2)
            setTimeout(()=>disableTransitionState(),200)
        }
        
    }


    
    
    return (
        <div className="w-full h-full font-poppins" ref={componentRef} >
            {mobileOrTabletSize === true && (
                <div style={componentStyle}>
                    <div className="w-full h-full absolute flex justify-end items-center" style={clickMeComponentStyle}>
                        <PopUpWrapper popUpOn={clickMeOn}>
                            <button style={clickMeStyle} onClick={()=>handleMobileOrTabletClick()} className=" flex flex-col items-center">
                                <div className="w-full h-[80%] blur-background-light z-20 bg-gray1 bg-opacity-50 flex justify-center items-center rounded-lg border border-gray0">
                                    <img src={clickIcon} className="w-[75%]"></img>
                                </div>
                                <div className="overflow-clip h-[25%] z-20 w-10 flex justify-center">
                                    <div className="w-6 h-6 rotate-45 bg-gray1 bg-opacity-50 blur-background-light z-20 -translate-y-[80%] border border-gray0"></div>
                                </div>
                                
                            </button>
                        </PopUpWrapper>
                    </div>
                    {(interactiveState === 0 ) && (
                        <div className="w-full h-full absolute">
                            <button onClick={()=>handleMobileOrTabletClick()} className="trapezoid absolute bg-transparent -rotate-[25deg] translate-y-[45%] skew-x-[15deg] skew-y-[10deg] rounded-3xl translate-x-[92%]" style={clickableButtonStyle}></button>
                            <ReactPlayer playsinline={true} url={carEntersFrame} muted={true} width="100%" height="100%" playing={true} onEnded={() => setEnteringVideoEnded(true)} />
                        </div>
                    )}
                    {interactiveState === 2 && (
                        <div className="w-full h-full absolute">
                            <ReactPlayer playsinline={true} url={carLightsOnDoorsOpen} muted={true} width="100%" height="100%" playing={true}/>
                        </div>
                    )}
                </div>
            )}
            {mobileOrTabletSize === false && (
                <div style={componentStyle}>
                    <div className="w-full h-full absolute flex justify-end items-center" style={clickMeComponentStyle}>
                        <PopUpWrapper popUpOn={clickMeOn}>
                            <button style={clickMeStyle} onMouseEnter={()=>setHoverOn(true)} onMouseLeave={()=>setHoverOn(false)} onClick={()=>handleClick()} className=" flex flex-col items-center">
                                <div className="w-full h-[80%] blur-background-light z-20 bg-gray1 bg-opacity-50 flex justify-center items-center rounded-xl border border-gray0 duration-300 hover:brightness-125">
                                    <img src={clickIcon} className="w-[75%]"></img>
                                </div>
                                <div className="overflow-hidden h-[25%] z-20 w-10 flex justify-center">
                                    <div className="w-6 h-6 rotate-45 bg-gray1 bg-opacity-50 blur-background-light z-20 -translate-y-[80%] border border-gray0"></div>
                                </div>
                                
                            </button>
                        </PopUpWrapper>
                    </div>
                    {(interactiveState === 0|| transitionState === 0) && (
                        <div className="w-full h-full absolute" style={componentStyle}>
                            <div onMouseEnter={()=>setHoverOn(true)} onMouseLeave={()=>setHoverOn(false)} className="trapezoid absolute bg-transparent -rotate-[25deg] translate-y-[45%] skew-x-[15deg] skew-y-[10deg] rounded-3xl translate-x-[92%]" style={clickableButtonStyle}></div>
                            <ReactPlayer playsinline={true} url={carEntersFrame} muted={true} width="100%" height="100%" playing={true} onEnded={() => setEnteringVideoEnded(true)}/>
                        </div>
                        
                    )}
                    {(interactiveState === 1 || transitionState === 1) && (
                        <div className="w-full h-full absolute" style={componentStyle}>
                            <button onMouseEnter={()=>setHoverOn(true)} onMouseLeave={()=>setHoverOn(false)} onClick={()=>handleClick()} className="trapezoid absolute bg-transparent -rotate-[25deg] translate-y-[45%] skew-x-[15deg] skew-y-[10deg] rounded-3xl translate-x-[92%]" style={clickableButtonStyle}></button>
                            {hoverOn === false ? (
                                <ReactPlayer playsinline={true} url={carLightsTurnOff} muted={true} width="100%" height="100%" playing={true}/>
                            ):(
                                <ReactPlayer playsinline={true} url={carLightsTurnOn} muted={true} width="100%" height="100%" playing={true}/>    
                            )}
                        </div>
                    )}
                    {interactiveState === 2 && (
                        <div className="w-full h-full absolute" style={componentStyle}>
                            <ReactPlayer playsinline={true} url={carDoorsOpen} muted={true} width="100%" height="100%" playing={true}/>
                        </div>

                    )}
                </div>
            )}

        </div>
        
    )
}