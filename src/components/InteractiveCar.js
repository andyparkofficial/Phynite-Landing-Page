import { useState, useEffect, useRef } from "react"
import carEntersFrame from "../assets/car-enters-frame.mp4"
import carDoorsOpen from "../assets/car-doors-open.mp4"
import carLightsTurnOn from "../assets/car-lights-turn-on.mp4"
import carLightsTurnOff from "../assets/car-lights-turn-off.mp4"
import carLightsOff from "../assets/car-lights-off.png"
import carLightsOn from "../assets/car-lights-on.png"
import carFinalFrame from "../assets/car-final-frame.png"
import ReactPlayer from "react-player/lazy"
import useWindowSize from "../hooks/useWindowSize"
import PopUpWrapper from "../components/PopUpWrapper"
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
    const [twoSecondsPassed, setTwoSecondsPassed] = useState(false) // to handle setTimeout side effect
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
            setTimeout(()=>turnOnClickMe(),2000)
        }
    }, [enteringVideoEnded])
    
    function turnOnClickMe() {
        if (interactiveState !== 2) { // if STILL not state 2
            setTwoSecondsPassed(true)
        }
    }

    useEffect(() => {
        if (twoSecondsPassed === true && interactiveState!== 2) {
            setClickMeOn(true)
        }
    },[twoSecondsPassed])
    
    useEffect(() => {
        if (componentRef.current) {
            const buttonHeight = Math.round(.65*(componentRef.current.offsetHeight))
            const buttonWidth = Math.round(.7*buttonHeight)
            setClickableButtonStyle({ width: `${buttonWidth}px`, height: `${buttonHeight}px` })
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

    
    
    return (
        <div className="w-full h-full font-poppins" ref={componentRef}>
            <div className="w-full h-full absolute flex justify-end items-center pr-16 pb-6">
                <PopUpWrapper popUpOn={clickMeOn}>
                    <button onMouseEnter={()=>setHoverOn(true)} onMouseLeave={()=>setHoverOn(false)} onClick={()=>handleClick()} className=" flex flex-col items-center w-[200px] h-[70px]">
                        <div className="w-full h-[50px] blur-background-light z-20 bg-gray1 bg-opacity-50 flex justify-center items-center rounded-xl border border-gray0">
                            <h1 className="text-2xl font-semibold text-white">Click Me!</h1>
                        </div>
                        <div className="overflow-clip z-20 w-10 flex justify-center">
                            <div className="w-6 h-6 rotate-45 bg-gray1 bg-opacity-50 blur-background-light z-20 -translate-y-3 border border-gray0"></div>
                        </div>
                        
                    </button>
                </PopUpWrapper>
            </div>

            {(interactiveState === 0 || transitionState === 0) && (
                <div className="w-full h-full absolute">
                    <div onMouseEnter={()=>setHoverOn(true)} onMouseLeave={()=>setHoverOn(false)} className="trapezoid absolute bg-transparent -rotate-[25deg] translate-y-[45%] skew-x-[15deg] skew-y-[10deg] rounded-3xl translate-x-[92%]" style={clickableButtonStyle}></div>
                    <ReactPlayer url={carEntersFrame} muted={true} width="100%" height="100%" playing={true} onEnded={() => setEnteringVideoEnded(true)}/>
                </div>
                
            )}
            {(interactiveState === 1 || transitionState === 1) && (
                <div className="w-full h-full absolute">
                    <button onMouseEnter={()=>setHoverOn(true)} onMouseLeave={()=>setHoverOn(false)} onClick={()=>handleClick()} className="trapezoid absolute bg-transparent -rotate-[25deg] translate-y-[45%] skew-x-[15deg] skew-y-[10deg] rounded-3xl translate-x-[92%]" style={clickableButtonStyle}></button>
                    {hoverOn === false ? (
                        <ReactPlayer url={carLightsTurnOff} muted={true} width="100%" height="100%" playing={true}/>
                    ):(
                        <ReactPlayer url={carLightsTurnOn} muted={true} width="100%" height="100%" playing={true}/>    
                    )}
                </div>
            )}
            {interactiveState === 2 && (
                <div className="w-full h-full">
                    <ReactPlayer url={carDoorsOpen} muted={true} width="100%" height="100%" playing={true}/>
                </div>

            )}
        </div>
        
    )
}