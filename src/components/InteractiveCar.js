import { useState, useEffect, useRef } from "react"

import ReactPlayer from "react-player"
import "../styles.css"
import useScrollPosition from "../hooks/useScrollPosition"
import phyniteCarVideo from "../assets/phynite-car-video.mp4"

export default function InteractiveCar(props) { 
    const scrollPosition = useScrollPosition()
    const [videoPlaying, setVideoPlaying] = useState(true)
    const [scrollPassed, setScrollPassed] = useState(false)

    useEffect(() => {
        if (scrollPosition !== 0) {
            setScrollPassed(true)
        }
        if (videoPlaying === false && scrollPassed === true) {
            setVideoPlaying(true)
        }
    }, [scrollPosition, videoPlaying, scrollPassed])
    
    const handleVideoProgress = (progress) => {
        const currentTime = progress.playedSeconds;
        if (currentTime >= 3.8 && scrollPassed === false) {
            setVideoPlaying(false)
        }
    };

    

    
    return (
        <div className="w-full h-full font-poppins">
            <ReactPlayer playsinline={true} url={phyniteCarVideo} muted={true} width="100%" height="100%" onProgress={handleVideoProgress} playing={videoPlaying} />

        </div>
        
    )
}