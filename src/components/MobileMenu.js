import { useEffect, useState } from "react"
import OutsideAlerter from "../hooks/OutsideAlerter"
import "../styles.css"
import {CSSTransition} from "react-transition-group"
import {useHistory, Link } from "react-router-dom"
import twitterIcon from "../assets/twitter-icon.png"
import discordIcon from "../assets/discord-icon.png"
import instagramIcon from "../assets/instagram-icon.png"
import useWindowSize from "../hooks/useWindowSize.js";

export default function MobileMenu({toggleScrollLock, exitMenuPopUp, isClicked}) {

    const [menuPopUpOn, setMenuPopUpOn] = useState(false)
    const [cbnftsInBag, setCBNFTsInBag] = useState(null)
    const [totalPrice, setTotalPrice] = useState(null)

    const history = useHistory();

    const windowSize = useWindowSize();

    const height={"height": windowSize.height - 80}

    function exitPopUp () {
      setMenuPopUpOn(false)
      setTimeout(runExitFunctions, 300)
      
    }

    function runExitFunctions(){
      return [toggleScrollLock() , exitMenuPopUp()]
    }

    function startSlideIn(){
        setMenuPopUpOn(true)
    }

    useEffect(()=>{
      if (cbnftsInBag !== null){
        let totalCost = 0;
        for (let i = 0; i < cbnftsInBag.length; i++){
          totalCost += cbnftsInBag[i].price
        }
        setTotalPrice(totalCost.toFixed(2)) // toFixed sets n number of decimals and converts to string
      }
    },[cbnftsInBag])

    useState(()=>{
      if (menuPopUpOn === false){
        setTimeout(startSlideIn, 200)
      }
    },[])


    function turnOffScrollLock(){
      return toggleScrollLock()
    }

    function redirectToPage(pageURL){
        setMenuPopUpOn(false)
        turnOffScrollLock()
        history.push(`/${pageURL}`);
        return exitMenuPopUp()
      }


    
    return (
        <div className="fixed w-full" style={height}>
            <CSSTransition in={menuPopUpOn} unmountOnExit classNames="mobile-menu-pop-up" timeout={300}>
                <OutsideAlerter handleClick={exitPopUp} widthFull={true}>
                <div className="h-full flex w-full flex-col relative z-[70] text-black text-5xl blur-popup-strong bg-gray4 bg-opacity-95">
                    <div className="w-full flex flex-col font-poppins text-white text-xl font-[500]">
                        <button onClick={()=>redirectToPage('')} className="w-full flex justify-center items-center h-16  border-t-[1px] border-gray1">
                        {isClicked[0] ? (<h1 className=" text-phyniteBlue">Home</h1>):(<h1 className="">Home</h1>)}
                                
                        </button>
                        <button onClick={()=>redirectToPage('about')} className="w-full flex justify-center items-center h-16  border-t-[1px] border-gray1">
                            {isClicked[1] ? (<h1 className=" text-phyniteBlue">About</h1>):(<h1 className="">About</h1>)}
                                
                        </button>
                        <button onClick={()=>redirectToPage('blogs')} className="w-full flex justify-center items-center h-16  border-t-[1px] border-gray1">
                            {isClicked[2] ? (<h1 className=" text-phyniteBlue">Blog</h1>):(<h1 className="">Blog</h1>)}
                                
                        </button>
                        <a href={"https://docs.phynite.io/"} target="_blank" className="w-full flex justify-center items-center h-16  border-t-[1px] border-gray1">
                            {isClicked[3] ? (<h1 className=" text-phyniteBlue">Protocol</h1>):(<h1 className="">Protocol</h1>)}
                                
                        </a>
                        <button onClick={()=>redirectToPage('getStarted')} className="w-full flex justify-center items-center h-16  border-y-[1px] border-gray1">
                            {isClicked[4] ? (<h1 className=" text-phyniteBlue">Get Started</h1>):(<h1 className="">Get Started</h1>)}
                        </button>
                    </div>
                    <div className="w-full flex flex-col flex-grow items-center justify-end">
                      {(windowSize && windowSize.width >= 600) && (
                        <div className="w-full px-20 flex justify-center">
                          <button onClick={()=>redirectToPage('getStarted')} className="max-w-[500px] w-full rounded-2xl h-16 bg-phyniteBlue text-4xl font-poppins font-semibold text-gray1 mb-6">Get Started</button> 
                        </div>
                      )}
                      {(windowSize && windowSize.width < 600) && (
                        <div className="w-full px-8">
                          <button onClick={()=>redirectToPage('getStarted')} className="w-full rounded-xl h-12 bg-phyniteBlue text-3xl font-poppins font-semibold text-gray1 mb-6">Get Started</button> 
                        </div>
                      )}
                      <div className="w-full border-t-[1px] border-gray1 h-20 flex justify-center items-center gap-x-6">
                          <img className="w-7 h-7" src={twitterIcon}></img>
                          <img className="w-9 h-9" src={discordIcon}></img>
                          <img className="w-[26px] h-[26px]" src={instagramIcon}></img>
                      </div>    
                    </div>   
                        
                </div>
              </OutsideAlerter>
            </CSSTransition>
            
            
        </div>
    
    )
}