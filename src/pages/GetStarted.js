import { useEffect, useState, useRef } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import PhyniteDataService from "../services/phyniteData.js"
import { ClipLoader } from "react-spinners"
import OutsideAlerter from "../hooks/OutsideAlerter.js"
import PopUpWrapper from "../components/PopUpWrapper.js"
import { countryList, howDidYouFindUsList } from "../constants.js"
import { getShortenedString } from "../utils/utils.js"
import caretDown from "../assets/caret-down.png"
import checkedCheckboxIcon from "../assets/checked-checkbox-icon.png"
import uncheckedCheckboxIcon from "../assets/unchecked-checkbox-icon.png"
import useWindowSize from "../hooks/useWindowSize.js"
import {Link} from "react-router-dom"
import { recordPageView } from "../utils/utils.js"

export default function GetStarted(props) {
    
    const [userInfo, setUserInfo] = useState(
        {
            email: "",
            location: "Select",
            howTheyFoundUs: "Select",
            favoriteCollectibles: {
                pokemonCards: false,
                sportsTradingCards: false,
                comics: false,
                coins: false,
                sneakers: false,
                other: false,
            }
        })
    const [emailError, setEmailError] = useState(null);
    const [locationError, setLocationError] = useState(null);
    const [howTheyFoundUsError, setHowTheyFoundUsError] = useState(null);
    const [favoriteCollectiblesError, setFavoriteCollectiblesError] = useState(null)
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)
    const [numberOfEmailsSubmitted, setNumberOfEmailsSubmitted] = useState({ emailCount: 0, emailSubmissionTime: null })
    const [locationPopUpOn, setLocationPopUpOn] = useState(false)
    const [howTheyFoundUsPopUpOn, setHowTheyFoundUsPopUpOn] = useState(false)

    useEffect(()=>{
        recordPageView("Get Started")
    },[])

    const locationRef = useRef(null)
    const howTheyFoundUsRef = useRef(null)

    const windowSize = useWindowSize()

      // The following function sets the "userInfo" state with the data received from the forms
    function handleChange(event) {
      const { name, value } = event.target;
        setUserInfo((prevUserInfo) => {
            return {
                ...prevUserInfo, // keep all the previousUserInfo
                [name]: value, // if checkbox set the value as "checked" value, if not assign it with value
            };
        });

    }

    function selectLocation(country) {
        setUserInfo((prevUserInfo) => {
            return {
                ...prevUserInfo, // keep all the previousUserInfo
                location: country, // if checkbox set the value as "checked" value, if not assign it with value
            };
        });
        setLocationPopUpOn(false)
    }

    function selectHowTheyFoundUs(selection) {
        setUserInfo((prevUserInfo) => {
            return {
                ...prevUserInfo, // keep all the previousUserInfo
                howTheyFoundUs: selection, // if checkbox set the value as "checked" value, if not assign it with value
            };
        });
        setHowTheyFoundUsPopUpOn(false)
    }

    function toggleFavoriteCollectible(collectible) {
        setUserInfo((prevUserInfo) => {
            let newUserInfo = { ...prevUserInfo }
            
            newUserInfo.favoriteCollectibles[collectible] = !newUserInfo.favoriteCollectibles[collectible]
            return newUserInfo
        });
    }

    

    function checkNumberOfEmailsSubmitted() {
        const currentDate = new Date()
        const currentTime = currentDate.getTime()
        if (localStorage.getItem('numberOfEmailsSubmitted') !== null) {
            const emailNumberCheckerObject = JSON.parse(localStorage.getItem('numberOfEmailsSubmitted'))
            
            if (currentTime - emailNumberCheckerObject.emailSubmissionTime >= 86400000) { // if more than 24 hours have passed
                setNumberOfEmailsSubmitted({ emailCount: 0, emailSubmissionTime: currentTime })
                localStorage.setItem('numberOfEmailsSubmitted', JSON.stringify({ emailCount: 0, emailSubmissionTime: currentTime }))
            } else { // if less than 24 hours have passed
                setNumberOfEmailsSubmitted(emailNumberCheckerObject)
                
            }
        }
    }

    useEffect(() => {
        checkNumberOfEmailsSubmitted() 
    }, [])
    
    function increaseNumberOfEmailsSubmitted() {
        if (numberOfEmailsSubmitted.emailSubmissionTime === null) {
            const currentDate = new Date()
            const currentTime = currentDate.getTime()
            localStorage.setItem('numberOfEmailsSubmitted', JSON.stringify({emailCount: numberOfEmailsSubmitted.emailCount + 1, emailSubmissionTime: currentTime}))
            setNumberOfEmailsSubmitted({ emailCount: 1, emailSubmissionTime: currentTime })
        } else {
            localStorage.setItem('numberOfEmailsSubmitted', JSON.stringify({emailCount: numberOfEmailsSubmitted.emailCount + 1, emailSubmissionTime: numberOfEmailsSubmitted.emailSubmissionTime}))
            setNumberOfEmailsSubmitted((prevObject) => {
                let newObject = { ...prevObject, emailCount: prevObject.emailCount + 1 }
                return newObject
            })
        }
        
    }

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    
    async function saveUserInfo()
    {
        const signUpInfo = {
            email: userInfo.email,
            survey: {
                location: userInfo.location,
                favoriteCollectibles: userInfo.favoriteCollectibles,
                howTheyFoundUs: userInfo.howTheyFoundUs
            }
            
        }

        const response = await PhyniteDataService.addSignUp(signUpInfo)
        if (response.status === 201) {
            setSubmitted(true)
            setUserInfo({
                email: "",
                location: "Select",
                howTheyFoundUs: "Select",
                favoriteCollectibles: {
                    pokemonCards: false,
                    sportsTradingCards: false,
                    comics: false,
                    coins: false,
                    sneakers: false,
                    other: false,
                }
            })
            increaseNumberOfEmailsSubmitted()
        } else if (response.status === 202) {
           setError("You're already signed up you silly goose!") 
        }
        setLoading(false)
    }

  // The following function runs when the submit button is pressed
    async function onSubmit(event) {
        event.preventDefault();
        try {
            let errorExists = false
            if (userInfo.email === "") {
                setEmailError(`Please enter an email`);
                errorExists = true
            }else if (!validateEmail(userInfo.email)) {
                setEmailError(`You entered an invalid email, give it another shot!`);
                errorExists = true
            } else {
                setEmailError(null)
            }
            if (userInfo.location === "Select") {
                setLocationError(`Please select one option`);
                errorExists = true
            } else {
                setLocationError(null)
            }
            if (userInfo.howTheyFoundUs === "Select") {
                setHowTheyFoundUsError(`Please select one option`);
                errorExists = true
            } else {
                setHowTheyFoundUsError(null)
            }
            if (userInfo.favoriteCollectibles.pokemonCards === false && userInfo.favoriteCollectibles.sportsTradingCards === false && userInfo.favoriteCollectibles.comics === false && userInfo.favoriteCollectibles.coins === false && userInfo.favoriteCollectibles.sneakers === false && userInfo.favoriteCollectibles.other === false) {
                setFavoriteCollectiblesError(`Please select at least one option`);
                errorExists = true
            } else {
                setFavoriteCollectiblesError(null)
            }
            
            if (errorExists === false) {
                setLoading(true)
                setTimeout(() => saveUserInfo(), 300)
                setError(null)
            } else if (numberOfEmailsSubmitted.emailCount >= 3) {
                setError("You have already submitted 3 emails, come back tomorrow!")
                
            } else {
                setError('Please fix the error above')
            }
                
        } catch (e) {
        alert(`Registration failed! ${e.message}`);
        }
    }

    function toggleLocationPopUp() {
        if (locationPopUpOn === true) {
            locationRef.current.disabled = true
            setLocationPopUpOn(false)
            setTimeout(()=>enableLocationButton(),500)
          } else {
            setLocationPopUpOn(true)
          }
    }

    function toggleHowTheyFoundUsPopUp() {
        if (howTheyFoundUsPopUpOn === true) {
            howTheyFoundUsRef.current.disabled = true
            setHowTheyFoundUsPopUpOn(false)
            setTimeout(()=>enableHowTheyFoundUsButton(),500)
          } else {
            setHowTheyFoundUsPopUpOn(true)
          }
    }

      function enableLocationButton() {
          locationRef.current.disabled = false;
    }
    
    function enableHowTheyFoundUsButton() {
        howTheyFoundUsRef.current.disabled = false;
    }
    
    return (
        <div>
            <Navbar isClicked={"4"} />
            {props.displayType === "mobile" && (
                <div className="min-h-screen justify-center flex px-[14px] pt-28">
                    <div className="w-full flex flex-col items-center font-poppins">
                        {submitted === true ? (
                            <div className="w-full pt-28">
                                <h1 className="gradient-text-blue font-semibold text-2xl text-center leading-tight mb-6">The Phynite Marketplace<br />is Coming Soon</h1>
                                <h2 className="font-[500] text-lg text-white text-center mb-5">Thank you for being one of our earliest supporters!</h2>
                                <h2 className=" text-gray-400 text-center mb-6">Phynite will be built before you know it.</h2>
                                <div className="flex justify-center">
                                    <button onClick={()=>setSubmitted(false)} className=" underline text-gray0 text-center">Add another email</button>
                                </div>
                            </div>   
                        ) : (
                            <div className="flex flex-col items-center w-full">
                                <h1 className="gradient-text-blue font-semibold text-2xl text-center leading-tight mb-6">The Phynite Marketplace<br />is Coming Soon</h1>
                                <h2 className="font-light text-sm text-white text-center mb-10 px-6">Be one of the first 10,000 to join our waitlist and become eligible for exclusive promotions.</h2>
                                <form onSubmit={onSubmit} className="w-full flex flex-col items-center border border-gray1 rounded-xl bg-gray3 p-6 mb-20">
                                    {emailError !== null &&(
                                        <h1 className="text-xs font-poppins text-salmon w-full text-left">*{emailError}</h1>
                                    )}
                                    <div className="w-full mb-4">
                                        <h1 className=" font-[500] text-white mb-2">What's your email?</h1>
                                        <input value={userInfo.email} onChange={handleChange} name="email" type="text" className="w-full h-12 border-gray1 border duration-300 rounded-lg text-lg bg-gray2 pl-4 focus:ring-1 text-white focus:ring-gray0 focus:outline-none placeholder:text-gray-400" placeholder="Email address"></input>
                                        
                                    </div>
                                    
                                    {locationError !== null &&(
                                        <h1 className="text-xs font-poppins text-salmon w-full text-left">*{locationError}</h1>
                                    )}
                                    <div className="w-full mb-4">
                                        <h1 className="text-white font-[500] mb-2">Where are you from?</h1>   
                                    
                                        <div className="w-full">
                                            <button type="button" onClick={() => toggleLocationPopUp()} ref={locationRef} className="w-full bg-gray2 h-10 rounded-lg text-lg flex items-center text-white text-left pl-2 pr-1 border border-gray1  duration-300">
                                                {getShortenedString(userInfo.location, 15)}
                                                <div className="flex flex-grow justify-end items-center">
                                                    {locationPopUpOn ? (
                                                        <img src={caretDown} className="w-3 h-3 rotate-180 duration-100 mr-2"></img>
                                                        ) : (
                                                        <img src={caretDown} className="w-3 h-3 rotate-0 duration-100 mr-2"></img>
                                                    )}
                                                </div>
                                                
                                            </button>
                                            <PopUpWrapper popUpOn={locationPopUpOn}>
                                                <OutsideAlerter handleClick={()=>toggleLocationPopUp()}>
                                                    <div className="max-h-[200px] overflow-scroll overflow-x-clip px-1 z-20 bg-gray1 blur-background-medium bg-opacity-25 absolute mt-2 rounded-lg border border-gray1 duration-300 py-2" style={{width: `${windowSize.width-76}px`}}>
                                                        {countryList.map((country, id) => {
                                                            const notLastItem = id + 1 !== countryList.length
                                                            return (
                                                                <button type="button" onClick={()=>selectLocation(country)} className="w-full ">
                                                                    <h1 className="text-sm text-white px-1 py-1 text-left rounded-lg duration-300 w-full">{country}</h1>
                                                                    {notLastItem === true && (
                                                                        <hr className="h-[1.5px] bg-gray1 border-0 dark:bg-gray1 mt-1.5"/>
                                                                    )}
                                                                </button>
                                                            )
                                                        })}
                                                    </div>
                                                </OutsideAlerter>
                                            </PopUpWrapper>
                                        </div>
                                            

                                    </div>
                                    
                                    {howTheyFoundUsError !== null &&(
                                        <h1 className="text-xs font-poppins text-salmon w-full text-left">*{howTheyFoundUsError}</h1>
                                    )}
                                    <div className="w-full mb-4">
                                        <h1 className="text-white font-[500] mb-2">How did you find us?</h1>   
                                        
                                        <div className="w-full">
                                            <button type="button" onClick={() => toggleHowTheyFoundUsPopUp()} ref={howTheyFoundUsRef} className="w-full bg-gray2 h-10 rounded-lg text-lg flex items-center text-white text-left pl-2 pr-1 border border-gray1 duration-300">
                                                {getShortenedString(userInfo.howTheyFoundUs, 15)}
                                                <div className="flex flex-grow justify-end items-center">
                                                    {howTheyFoundUsPopUpOn ? (
                                                        <img src={caretDown} className="w-3 h-3 rotate-180 duration-100 mr-2"></img>
                                                        ) : (
                                                        <img src={caretDown} className="w-3 h-3 rotate-0 duration-100 mr-2"></img>
                                                    )}
                                                </div>
                                                
                                            </button>
                                            <PopUpWrapper popUpOn={howTheyFoundUsPopUpOn}>
                                                <OutsideAlerter handleClick={()=>toggleHowTheyFoundUsPopUp()}>
                                                    <div style={{width: `${windowSize.width-76}px`}} className="w-full max-h-[200px] overflow-scroll overflow-x-clip px-1 bg-gray1 blur-background-medium bg-opacity-25 absolute mt-2 rounded-lg border border-gray1 duration-300 py-2">
                                                        {howDidYouFindUsList.map((selection, id) => {
                                                            const notLastItem = id + 1 !== howDidYouFindUsList.length
                                                            return (
                                                                <button type="button" onClick={()=>selectHowTheyFoundUs(selection)} className="w-full ">
                                                                    <h1 className="text-sm text-white px-1 py-1 text-left rounded-lg duration-300 w-full">{selection}</h1>
                                                                    {notLastItem === true && (
                                                                        <hr className="h-[1.5px] bg-gray1 border-0 dark:bg-gray1 mt-1.5"/>
                                                                    )}
                                                                </button>
                                                            )
                                                        })}
                                                    </div>
                                                </OutsideAlerter>
                                            </PopUpWrapper>
                                        </div>

                                    </div>
                                        
                                    {favoriteCollectiblesError !== null &&(
                                        <h1 className="text-xs font-poppins text-salmon w-full text-left">*{favoriteCollectiblesError}</h1>
                                    )}
                                    <div className="w-full flex flex-col mb-4">
                                        <h1 className=" text-white font-[500] mb-4">What do you enjoy collecting?</h1>
                                        <div className="w-full">
                                            <button onClick={()=>toggleFavoriteCollectible("pokemonCards")} type="button" className="w-full px-2 flex items-center py-2">
                                                <h1 className=" text-gray-300 font-light text-sm">Pokemon Cards</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["pokemonCards"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("sportsTradingCards")} type="button" className="w-full px-2 flex items-center py-2">
                                                <h1 className=" text-gray-300 font-light text-sm">Sports Trading Cards</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["sportsTradingCards"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("comics")} type="button" className="w-full px-2 flex items-center py-2">
                                                <h1 className=" text-gray-300 font-light text-sm">Comics</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["comics"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("coins")} type="button" className="w-full px-2 flex items-center py-2">
                                                <h1 className=" text-gray-300 font-light text-sm">Coins</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["coins"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("sneakers")} type="button" className="w-full px-2 flex items-center py-2">
                                                <h1 className=" text-gray-300 font-light text-sm">Sneakers</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["sneakers"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("other")} type="button" className="w-full px-2 flex items-center  py-2">
                                                <h1 className=" text-gray-300 font-light text-sm">Other</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["other"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center justify-center">
                                        <h1 className="text-[11px] font-light text-gray-300 mb-4 text-center">By signing up, you are agreeing to our <Link target="_blank" to="/termsOfService" className="underline">Terms of Service</Link> and <Link target="_blank" to="/privacyPolicy" className="underline">Privacy Policy</Link></h1> 
                                    </div>
                                    {error !== null &&(
                                        <h1 className="text-xs pb-3 font-poppins text-salmon w-full text-center">*{error}</h1>
                                    )}
                                    {loading === true ? (
                                        <button type="submit" className="w-full h-12 bg-gradient-to-br from-salmon to-mango brightness-125 rounded-lg flex items-center justify-center"><ClipLoader size={20} color={"#ffffff"} /></button>
                                    ) : (
                                        <button type="submit" className="w-full h-12 bg-gradient-to-br from-phyniteBlue to-phyniteBlue rounded-lg font-poppins text-gray1 text-lg font-semibold ">Sign Up</button>
                                    )}
                                </form>
                                
                            </div>
                        )}
                        
                    </div>
                    
                </div>
            )}
            {props.displayType === "tablet" && (
                <div className="px-[18px] w-full min-h-screen justify-center flex pt-32">
                    <div className="w-full flex flex-col items-center font-poppins">
                        {submitted === true ? (
                            <div className="w-full pt-28">
                                <h1 className="gradient-text-blue font-semibold text-4xl text-center leading-tight mb-6">The Phynite Marketplace<br />is Coming Soon</h1>
                                <h2 className="font-[500] text-xl text-white text-center mb-5">Thank you for being one of our earliest supporters!</h2>
                                <h2 className="text-xl text-gray-400 text-center mb-6">Phynite will be built before you know it.</h2>
                                <div className="flex justify-center">
                                    <button onClick={()=>setSubmitted(false)} className=" underline text-gray0 text-center">Add another email</button>
                                </div>
                            </div>   
                        ) : (
                            <div className="flex flex-col items-center ">
                                <h1 className="gradient-text-blue font-semibold text-4xl text-center leading-tight mb-6">The Phynite Marketplace<br />is Coming Soon</h1>
                                <h2 className="font-light text-lg text-white text-center mb-10 px-6">Be one of the first 10,000 to join our waitlist and become eligible for exclusive promotions.</h2>
                                <form onSubmit={onSubmit} className="w-full flex flex-col items-center border border-gray1 rounded-xl bg-gray3 p-6 mb-20">
                                    {emailError !== null &&(
                                        <h1 className="text-md font-poppins text-salmon w-full text-left">*{emailError}</h1>
                                    )}
                                    <div className="flex items-center w-full mb-6">
                                        <h1 className="text-lg font-[500] text-white">What's your email?</h1>
                                        <div className="flex flex-grow justify-end">
                                            <input value={userInfo.email} onChange={handleChange} name="email" type="text" className="w-[300px] h-12 border-gray1 border duration-300 rounded-lg text-lg bg-gray2 pl-4 focus:ring-1 text-white focus:ring-gray0 focus:outline-none placeholder:text-gray-400" placeholder="Email address"></input>
                                        </div>
                                    </div>
                                    
                                    {locationError !== null &&(
                                        <h1 className="text-md font-poppins text-salmon w-full text-left">*{locationError}</h1>
                                    )}
                                    <div className="w-full flex items-center mb-6">
                                        <h1 className="text-white font-[500] text-lg">Where are you from?</h1>   
                                        <div className="flex flex-grow justify-end">
                                            <div className="w-[200px]">
                                                <button type="button" onClick={() => toggleLocationPopUp()} ref={locationRef} className="w-[200px] bg-gray2 h-10 rounded-lg text-lg flex items-center text-white text-left pl-2 pr-1 border border-gray1  duration-300">
                                                    {getShortenedString(userInfo.location, 15)}
                                                    <div className="flex flex-grow justify-end items-center">
                                                        {locationPopUpOn ? (
                                                            <img src={caretDown} className="w-3 h-3 rotate-180 duration-100 mr-2"></img>
                                                            ) : (
                                                            <img src={caretDown} className="w-3 h-3 rotate-0 duration-100 mr-2"></img>
                                                        )}
                                                    </div>
                                                    
                                                </button>
                                                <PopUpWrapper popUpOn={locationPopUpOn}>
                                                    <OutsideAlerter handleClick={()=>toggleLocationPopUp()}>
                                                        <div className="w-[200px] max-h-[200px] overflow-scroll overflow-x-clip px-1 z-20 bg-gray1 blur-background-medium bg-opacity-25 absolute mt-2 rounded-lg border border-gray1 duration-300 py-2">
                                                            {countryList.map((country, id) => {
                                                                const notLastItem = id + 1 !== countryList.length
                                                                return (
                                                                    <button type="button" onClick={()=>selectLocation(country)} className="w-full ">
                                                                        <h1 className="text-sm text-white px-1 py-1 text-left rounded-lg duration-300 w-full">{country}</h1>
                                                                        {notLastItem === true && (
                                                                            <hr className="h-[1.5px] bg-gray1 border-0 dark:bg-gray1 mt-1.5"/>
                                                                        )}
                                                                    </button>
                                                                )
                                                            })}
                                                        </div>
                                                    </OutsideAlerter>
                                                </PopUpWrapper>
                                            </div>
                                            
                                        </div>

                                    </div>
                                    
                                    {howTheyFoundUsError !== null &&(
                                        <h1 className="text-md font-poppins text-salmon w-full text-left">*{howTheyFoundUsError}</h1>
                                    )}
                                    <div className="w-full flex items-center mb-6">
                                        <h1 className="text-white font-[500] text-lg">How did you find us?</h1>   
                                        <div className="flex flex-grow justify-end">
                                            <div className="w-[200px]">
                                                <button type="button" onClick={() => toggleHowTheyFoundUsPopUp()} ref={howTheyFoundUsRef} className="w-[200px] bg-gray2 h-10 rounded-lg text-lg flex items-center text-white text-left pl-2 pr-1 border border-gray1 duration-300">
                                                    {getShortenedString(userInfo.howTheyFoundUs, 15)}
                                                    <div className="flex flex-grow justify-end items-center">
                                                        {howTheyFoundUsPopUpOn ? (
                                                            <img src={caretDown} className="w-3 h-3 rotate-180 duration-100 mr-2"></img>
                                                            ) : (
                                                            <img src={caretDown} className="w-3 h-3 rotate-0 duration-100 mr-2"></img>
                                                        )}
                                                    </div>
                                                    
                                                </button>
                                                <PopUpWrapper popUpOn={howTheyFoundUsPopUpOn}>
                                                    <OutsideAlerter handleClick={()=>toggleHowTheyFoundUsPopUp()}>
                                                        <div className="w-[200px] max-h-[200px] overflow-scroll overflow-x-clip px-1 bg-gray1 blur-background-medium bg-opacity-25 absolute mt-2 rounded-lg border border-gray1 duration-300 py-2">
                                                            {howDidYouFindUsList.map((selection, id) => {
                                                                const notLastItem = id + 1 !== howDidYouFindUsList.length
                                                                return (
                                                                    <button type="button" onClick={()=>selectHowTheyFoundUs(selection)} className="w-full ">
                                                                        <h1 className="text-sm text-white px-1 py-1 text-left rounded-lg duration-300 w-full">{selection}</h1>
                                                                        {notLastItem === true && (
                                                                            <hr className="h-[1.5px] bg-gray1 border-0 dark:bg-gray1 mt-1.5"/>
                                                                        )}
                                                                    </button>
                                                                )
                                                            })}
                                                        </div>
                                                    </OutsideAlerter>
                                                </PopUpWrapper>
                                            </div>
                                            
                                        </div>

                                    </div>
                                        
                                    {favoriteCollectiblesError !== null &&(
                                        <h1 className="text-md font-poppins text-salmon w-full text-left">*{favoriteCollectiblesError}</h1>
                                    )}
                                    <div className="w-full flex flex-col mb-4">
                                        <h1 className="text-lg text-white font-[500] mb-4">What do you enjoy collecting?</h1>
                                        <div className="w-full">
                                            <button onClick={()=>toggleFavoriteCollectible("pokemonCards")} type="button" className="w-full mb-2 px-2 flex items-center rounded-lg duration-200 py-1">
                                                <h1 className=" text-gray-300 font-light">Pokemon Cards</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["pokemonCards"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("sportsTradingCards")} type="button" className="w-full mb-2 px-2 flex items-center rounded-lg duration-200 py-1">
                                                <h1 className=" text-gray-300 font-light">Sports Trading Cards</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["sportsTradingCards"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("comics")} type="button" className="w-full mb-2 px-2 flex items-center rounded-lg duration-200 py-1">
                                                <h1 className=" text-gray-300 font-light">Comics</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["comics"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("coins")} type="button" className="w-full mb-2 px-2 flex items-center rounded-lg duration-200 py-1">
                                                <h1 className=" text-gray-300 font-light">Coins</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["coins"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("sneakers")} type="button" className="w-full mb-2 px-2 flex items-center rounded-lg duration-200 py-1">
                                                <h1 className=" text-gray-300 font-light">Sneakers</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["sneakers"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("other")} type="button" className="w-full mb-2 px-2 flex items-center rounded-lg duration-200 py-1">
                                                <h1 className=" text-gray-300 font-light">Other</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["other"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center justify-center">
                                        <h1 className="text-xs font-light text-gray-300 mb-4">By signing up, you are agreeing to our <Link target="_blank" to="/termsOfService" className="underline">Terms of Service</Link> and <Link target="_blank" to="/privacyPolicy" className="underline">Privacy Policy</Link></h1> 
                                    </div>
                                    {error !== null &&(
                                        <h1 className="text-md pb-3 font-poppins text-salmon w-[500px] text-center">*{error}</h1>
                                    )}
                                    {loading === true ? (
                                        <button type="submit" className="w-[300px] h-12 bg-gradient-to-br from-salmon to-mango brightness-125 rounded-lg flex items-center justify-center"><ClipLoader size={20} color={"#ffffff"} /></button>
                                    ) : (
                                        <button type="submit" className="w-[300px] h-12 bg-gradient-to-br from-phyniteBlue to-phyniteBlue duration-300 rounded-lg font-poppins text-gray1 text-lg font-semibold ">Sign Up</button>
                                    )}
                                </form>
                                
                            </div>
                        )}
                        
                    </div>
                </div>
            )}
            {props.displayType === "smallComputer" && (
                <div className="min-h-screen flex pt-32">
                    <div className="w-full flex flex-col items-center font-poppins">
                        {submitted === true ? (
                            <div className="w-full mt-28">
                                <h1 className="gradient-text-blue font-semibold text-5xl text-center leading-tight mb-6">The Phynite Marketplace<br />is Coming Soon</h1>
                                <h2 className="font-[500] text-2xl text-white text-center mb-5">Thank you for being one of our earliest supporters!</h2>
                                <h2 className="text-xl text-gray-400 text-center mb-6">Phynite will be built before you know it.</h2>
                                <div className="flex justify-center">
                                    <button onClick={()=>setSubmitted(false)} className=" underline text-gray0 text-center">Add another email</button>
                                </div>
                            </div>   
                        ) : (
                            <div className="flex flex-col items-center ">
                                <h1 className="gradient-text-blue font-semibold text-5xl text-center leading-tight mb-6">The Phynite Marketplace<br />is Coming Soon</h1>
                                <h2 className="font-light text-lg text-white text-center mb-10 px-6">Be one of the first 10,000 to join our waitlist and become eligible for exclusive promotions.</h2>
                                <form onSubmit={onSubmit} className="w-[800px] flex flex-col items-center border border-gray1 rounded-xl bg-gray3 p-6 mb-20">
                                    {emailError !== null &&(
                                        <h1 className="text-md font-poppins text-salmon w-full text-left">*{emailError}</h1>
                                    )}
                                    <div className="flex items-center w-full mb-6">
                                        <h1 className="text-lg font-[500] text-white">What's your email?</h1>
                                        <div className="flex flex-grow justify-end">
                                            <input value={userInfo.email} onChange={handleChange} name="email" type="text" className="w-[300px] h-12 border-gray1 border hover:border-gray0 duration-300 rounded-lg text-lg bg-gray2 pl-4 focus:ring-1 text-white focus:ring-gray0 focus:outline-none placeholder:text-gray-400" placeholder="Email address"></input>
                                        </div>
                                    </div>
                                    
                                    {locationError !== null &&(
                                        <h1 className="text-md font-poppins text-salmon w-full text-left">*{locationError}</h1>
                                    )}
                                    <div className="w-full flex items-center mb-6">
                                        <h1 className="text-white font-[500] text-lg">Where are you from?</h1>   
                                        <div className="flex flex-grow justify-end">
                                            <div className="w-[200px]">
                                                <button type="button" onClick={() => toggleLocationPopUp()} ref={locationRef} className="w-[200px] bg-gray2 h-10 rounded-lg text-lg flex items-center text-white text-left pl-2 pr-1 border border-gray1 hover:border-gray0 duration-300">
                                                    {getShortenedString(userInfo.location, 15)}
                                                    <div className="flex flex-grow justify-end items-center">
                                                        {locationPopUpOn ? (
                                                            <img src={caretDown} className="w-3 h-3 rotate-180 duration-100 mr-2"></img>
                                                            ) : (
                                                            <img src={caretDown} className="w-3 h-3 rotate-0 duration-100 mr-2"></img>
                                                        )}
                                                    </div>
                                                    
                                                </button>
                                                <PopUpWrapper popUpOn={locationPopUpOn}>
                                                    <OutsideAlerter handleClick={()=>toggleLocationPopUp()}>
                                                        <div className="w-[200px] max-h-[200px] overflow-scroll overflow-x-clip px-1 z-20 bg-gray1 blur-background-medium bg-opacity-25 absolute mt-2 rounded-lg border border-gray1 hover:border-gray0 duration-300 py-2">
                                                            {countryList.map((country, id) => {
                                                                const notLastItem = id + 1 !== countryList.length
                                                                return (
                                                                    <button type="button" onClick={()=>selectLocation(country)} className="w-full ">
                                                                        <h1 className="text-sm text-white px-1 py-1 text-left hover:bg-gray2 rounded-lg hover:brightness-125 duration-300 w-full">{country}</h1>
                                                                        {notLastItem === true && (
                                                                            <hr className="h-[1.5px] bg-gray1 border-0 dark:bg-gray1 mt-1.5"/>
                                                                        )}
                                                                    </button>
                                                                )
                                                            })}
                                                        </div>
                                                    </OutsideAlerter>
                                                </PopUpWrapper>
                                            </div>
                                            
                                        </div>

                                    </div>
                                    
                                    {howTheyFoundUsError !== null &&(
                                        <h1 className="text-md font-poppins text-salmon w-full text-left">*{howTheyFoundUsError}</h1>
                                    )}
                                    <div className="w-full flex items-center mb-6">
                                        <h1 className="text-white font-[500] text-lg">How did you find us?</h1>   
                                        <div className="flex flex-grow justify-end">
                                            <div className="w-[200px]">
                                                <button type="button" onClick={() => toggleHowTheyFoundUsPopUp()} ref={howTheyFoundUsRef} className="w-[200px] bg-gray2 h-10 rounded-lg text-lg flex items-center text-white text-left pl-2 pr-1 border border-gray1 hover:border-gray0 duration-300">
                                                    {getShortenedString(userInfo.howTheyFoundUs, 15)}
                                                    <div className="flex flex-grow justify-end items-center">
                                                        {howTheyFoundUsPopUpOn ? (
                                                            <img src={caretDown} className="w-3 h-3 rotate-180 duration-100 mr-2"></img>
                                                            ) : (
                                                            <img src={caretDown} className="w-3 h-3 rotate-0 duration-100 mr-2"></img>
                                                        )}
                                                    </div>
                                                    
                                                </button>
                                                <PopUpWrapper popUpOn={howTheyFoundUsPopUpOn}>
                                                    <OutsideAlerter handleClick={()=>toggleHowTheyFoundUsPopUp()}>
                                                        <div className="w-[200px] max-h-[200px] overflow-scroll overflow-x-clip px-1 bg-gray1 blur-background-medium bg-opacity-25 absolute mt-2 rounded-lg border border-gray1 hover:border-gray0 duration-300 py-2">
                                                            {howDidYouFindUsList.map((selection, id) => {
                                                                const notLastItem = id + 1 !== howDidYouFindUsList.length
                                                                return (
                                                                    <button type="button" onClick={()=>selectHowTheyFoundUs(selection)} className="w-full ">
                                                                        <h1 className="text-sm text-white px-1 py-1 text-left hover:bg-gray2 rounded-lg hover:brightness-125 duration-300 w-full">{selection}</h1>
                                                                        {notLastItem === true && (
                                                                            <hr className="h-[1.5px] bg-gray1 border-0 dark:bg-gray1 mt-1.5"/>
                                                                        )}
                                                                    </button>
                                                                )
                                                            })}
                                                        </div>
                                                    </OutsideAlerter>
                                                </PopUpWrapper>
                                            </div>
                                            
                                        </div>

                                    </div>
                                        
                                    {favoriteCollectiblesError !== null &&(
                                        <h1 className="text-md font-poppins text-salmon w-full text-left">*{favoriteCollectiblesError}</h1>
                                    )}
                                    <div className="w-full flex flex-col mb-6">
                                        <h1 className="text-lg text-white font-[500] mb-4">What do you enjoy collecting?</h1>
                                        <div className="w-full">
                                        <button onClick={()=>toggleFavoriteCollectible("pokemonCards")} type="button" className="w-full px-2 flex items-center rounded-lg hover:bg-gray2 duration-200 py-2">
                                                <h1 className=" text-gray-300 font-light">Pokemon Cards</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["pokemonCards"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("sportsTradingCards")} type="button" className="w-full px-2 flex items-center rounded-lg hover:bg-gray2 duration-200 py-2">
                                                <h1 className=" text-gray-300 font-light">Sports Trading Cards</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["sportsTradingCards"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("comics")} type="button" className="w-full px-2 flex items-center rounded-lg hover:bg-gray2 duration-200 py-2">
                                                <h1 className=" text-gray-300 font-light">Comics</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["comics"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("coins")} type="button" className="w-full px-2 flex items-center rounded-lg hover:bg-gray2 duration-200 py-2">
                                                <h1 className=" text-gray-300 font-light">Coins</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["coins"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("sneakers")} type="button" className="w-full px-2 flex items-center rounded-lg hover:bg-gray2 duration-200 py-2">
                                                <h1 className=" text-gray-300 font-light">Sneakers</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["sneakers"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("other")} type="button" className="w-full px-2 flex items-center rounded-lg hover:bg-gray2 duration-200 py-2">
                                                <h1 className=" text-gray-300 font-light">Other</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["other"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center justify-center">
                                        <h1 className="text-sm font-light text-gray-300 mb-4">By signing up, you are agreeing to our <Link target="_blank" to="/termsOfService" className="underline">Terms of Service</Link> and <Link target="_blank" to="/privacyPolicy" className="underline">Privacy Policy</Link></h1> 
                                    </div>
                                    {error !== null &&(
                                        <h1 className="text-md pb-3 font-poppins text-salmon w-[500px] text-center">*{error}</h1>
                                    )}
                                    {loading === true ? (
                                        <button type="submit" className="w-[300px] h-12 bg-gradient-to-br from-salmon to-mango brightness-125 rounded-lg flex items-center justify-center"><ClipLoader size={20} color={"#ffffff"} /></button>
                                    ) : (
                                        <button type="submit" className="w-[300px] h-12 bg-gradient-to-br from-phyniteBlue to-phyniteBlue hover:brightness-125  duration-300 rounded-lg font-poppins text-gray1 text-lg font-semibold hover:from-salmon hover:to-mango">Sign Up</button>
                                    )}
                                </form>
                                
                            </div>
                        )}
                    </div>
                    
                </div>
            )}
            {props.displayType === "computer" && (
                <div className="pt-40 flex justify-center min-h-screen">
                    <div className="w-[1300px] flex flex-col items-center font-poppins">
                        
                        {submitted === true ? (
                            <div className="w-full mt-32">
                                <h1 className="gradient-text-blue font-semibold text-5xl text-center leading-tight mb-6">The Phynite Marketplace<br />is Coming Soon</h1>
                                <h2 className="font-[500] text-2xl text-white text-center mb-5">Thank you for being one of our earliest supporters!</h2>
                                <h2 className="text-xl text-gray-400 text-center mb-6">Phynite will be built before you know it.</h2>
                                <div className="flex justify-center">
                                    <button onClick={()=>setSubmitted(false)} className=" underline text-gray0 text-center">Add another email</button>
                                </div>
                            </div>   
                        ) : (
                            <div className="flex flex-col items-center ">
                                <h1 className="gradient-text-blue font-semibold text-5xl text-center leading-tight mb-6">The Phynite Marketplace<br />is Coming Soon</h1>
                                <h2 className="font-light text-lg text-white text-center mb-12">Be one of the first 10,000 to join our waitlist and become eligible for exclusive promotions.</h2>
                                <form onSubmit={onSubmit} className="w-[850px] flex flex-col items-center border border-gray1 rounded-xl bg-gray3 p-6 mb-20">
                                    {emailError !== null &&(
                                        <h1 className="text-md font-poppins text-salmon w-full text-left">*{emailError}</h1>
                                    )}
                                    <div className="flex items-center w-full mb-6">
                                        <h1 className="text-lg font-[500] text-white">What's your email?</h1>
                                        <div className="flex flex-grow justify-end">
                                            <input value={userInfo.email} onChange={handleChange} name="email" type="text" className="w-[300px] h-12 border-gray1 border hover:border-gray0 duration-300 rounded-lg text-lg bg-gray2 pl-4 focus:ring-1 text-white focus:ring-gray0 focus:outline-none placeholder:text-gray-400" placeholder="Email address"></input>
                                        </div>
                                    </div>
                                    
                                    {locationError !== null &&(
                                        <h1 className="text-md font-poppins text-salmon w-full text-left">*{locationError}</h1>
                                    )}
                                    <div className="w-full flex items-center mb-6">
                                        <h1 className="text-white font-[500] text-lg">Where are you from?</h1>   
                                        <div className="flex flex-grow justify-end">
                                            <div className="w-[200px]">
                                                <button type="button" onClick={() => toggleLocationPopUp()} ref={locationRef} className="w-[200px] bg-gray2 h-10 rounded-lg text-lg flex items-center text-white text-left pl-2 pr-1 border border-gray1 hover:border-gray0 duration-300">
                                                    {getShortenedString(userInfo.location, 15)}
                                                    <div className="flex flex-grow justify-end items-center">
                                                        {locationPopUpOn ? (
                                                            <img src={caretDown} className="w-3 h-3 rotate-180 duration-100 mr-2"></img>
                                                            ) : (
                                                            <img src={caretDown} className="w-3 h-3 rotate-0 duration-100 mr-2"></img>
                                                        )}
                                                    </div>
                                                    
                                                </button>
                                                <PopUpWrapper popUpOn={locationPopUpOn}>
                                                    <OutsideAlerter handleClick={()=>toggleLocationPopUp()}>
                                                        <div className="w-[200px] max-h-[200px] overflow-scroll overflow-x-clip px-1 z-20 bg-gray1 blur-background-medium bg-opacity-25 absolute mt-2 rounded-lg border border-gray1 hover:border-gray0 duration-300 py-2">
                                                            {countryList.map((country, id) => {
                                                                const notLastItem = id + 1 !== countryList.length
                                                                return (
                                                                    <button type="button" onClick={()=>selectLocation(country)} className="w-full ">
                                                                        <h1 className="text-sm text-white px-1 py-1 text-left hover:bg-gray2 rounded-lg hover:brightness-125 duration-300 w-full">{country}</h1>
                                                                        {notLastItem === true && (
                                                                            <hr className="h-[1.5px] bg-gray1 border-0 dark:bg-gray1 mt-1.5"/>
                                                                        )}
                                                                    </button>
                                                                )
                                                            })}
                                                        </div>
                                                    </OutsideAlerter>
                                                </PopUpWrapper>
                                            </div>
                                            
                                        </div>

                                    </div>
                                    
                                    {howTheyFoundUsError !== null &&(
                                        <h1 className="text-md font-poppins text-salmon w-full text-left">*{howTheyFoundUsError}</h1>
                                    )}
                                    <div className="w-full flex items-center mb-6">
                                        <h1 className="text-white font-[500] text-lg">How did you find us?</h1>   
                                        <div className="flex flex-grow justify-end">
                                            <div className="w-[200px]">
                                                <button type="button" onClick={() => toggleHowTheyFoundUsPopUp()} ref={howTheyFoundUsRef} className="w-[200px] bg-gray2 h-10 rounded-lg text-lg flex items-center text-white text-left pl-2 pr-1 border border-gray1 hover:border-gray0 duration-300">
                                                    {getShortenedString(userInfo.howTheyFoundUs, 15)}
                                                    <div className="flex flex-grow justify-end items-center">
                                                        {howTheyFoundUsPopUpOn ? (
                                                            <img src={caretDown} className="w-3 h-3 rotate-180 duration-100 mr-2"></img>
                                                            ) : (
                                                            <img src={caretDown} className="w-3 h-3 rotate-0 duration-100 mr-2"></img>
                                                        )}
                                                    </div>
                                                    
                                                </button>
                                                <PopUpWrapper popUpOn={howTheyFoundUsPopUpOn}>
                                                    <OutsideAlerter handleClick={()=>toggleHowTheyFoundUsPopUp()}>
                                                        <div className="w-[200px] max-h-[200px] overflow-scroll overflow-x-clip px-1 bg-gray1 blur-background-medium bg-opacity-25 absolute mt-2 rounded-lg border border-gray1 hover:border-gray0 duration-300 py-2">
                                                            {howDidYouFindUsList.map((selection, id) => {
                                                                const notLastItem = id + 1 !== howDidYouFindUsList.length
                                                                return (
                                                                    <button type="button" onClick={()=>selectHowTheyFoundUs(selection)} className="w-full ">
                                                                        <h1 className="text-sm text-white px-1 py-1 text-left hover:bg-gray2 rounded-lg hover:brightness-125 duration-300 w-full">{selection}</h1>
                                                                        {notLastItem === true && (
                                                                            <hr className="h-[1.5px] bg-gray1 border-0 dark:bg-gray1 mt-1.5"/>
                                                                        )}
                                                                    </button>
                                                                )
                                                            })}
                                                        </div>
                                                    </OutsideAlerter>
                                                </PopUpWrapper>
                                            </div>
                                            
                                        </div>

                                    </div>
                                        
                                    {favoriteCollectiblesError !== null &&(
                                        <h1 className="text-md font-poppins text-salmon w-full text-left">*{favoriteCollectiblesError}</h1>
                                    )}
                                    <div className="w-full flex flex-col mb-6">
                                        <h1 className="text-lg text-white font-[500] mb-4">What do you enjoy collecting?</h1>
                                        <div className="w-full">
                                            <button onClick={()=>toggleFavoriteCollectible("pokemonCards")} type="button" className="w-full px-2 flex items-center rounded-lg hover:bg-gray2 duration-200 py-2">
                                                <h1 className=" text-gray-300 font-light">Pokemon Cards</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["pokemonCards"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("sportsTradingCards")} type="button" className="w-full px-2 flex items-center rounded-lg hover:bg-gray2 duration-200 py-2">
                                                <h1 className=" text-gray-300 font-light">Sports Trading Cards</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["sportsTradingCards"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("comics")} type="button" className="w-full px-2 flex items-center rounded-lg hover:bg-gray2 duration-200 py-2">
                                                <h1 className=" text-gray-300 font-light">Comics</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["comics"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("coins")} type="button" className="w-full px-2 flex items-center rounded-lg hover:bg-gray2 duration-200 py-2">
                                                <h1 className=" text-gray-300 font-light">Coins</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["coins"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("sneakers")} type="button" className="w-full px-2 flex items-center rounded-lg hover:bg-gray2 duration-200 py-2">
                                                <h1 className=" text-gray-300 font-light">Sneakers</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["sneakers"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                            <button onClick={()=>toggleFavoriteCollectible("other")} type="button" className="w-full px-2 flex items-center rounded-lg hover:bg-gray2 duration-200 py-2">
                                                <h1 className=" text-gray-300 font-light">Other</h1>
                                                <div className="flex flex-grow justify-end">
                                                    {userInfo.favoriteCollectibles["other"] ? (
                                                        <img src={checkedCheckboxIcon} className="w-4 h-4"></img>
                                                    ):(
                                                        <img src={uncheckedCheckboxIcon} className="w-4 h-4"></img>
                                                    )}
                                                    
                                                </div>
                                            </button>
                                        </div>
                                    </div>
                                    <div className="w-full flex items-center justify-center">
                                        <h1 className="text-sm font-light text-gray-300 mb-4">By signing up, you are agreeing to our <Link target="_blank" to="/termsOfService" className="underline">Terms of Service</Link> and <Link target="_blank" to="/privacyPolicy" className="underline">Privacy Policy</Link></h1> 
                                    </div>
                                    {error !== null &&(
                                        <h1 className="text-md pb-3 font-poppins text-salmon w-[500px] text-center">*{error}</h1>
                                    )}
                                    {loading === true ? (
                                        <button type="submit" className="w-[300px] h-12 bg-gradient-to-br from-salmon to-mango brightness-125 rounded-lg flex items-center justify-center"><ClipLoader size={20} color={"#ffffff"} /></button>
                                    ) : (
                                        <button type="submit" className="w-[300px] h-12 bg-gradient-to-br from-phyniteBlue to-phyniteBlue hover:brightness-125  duration-300 rounded-lg font-poppins text-gray1 text-lg font-semibold hover:from-salmon hover:to-mango">Sign Up</button>
                                    )}
                                </form>
                                
                            </div>
                        )}
                        
                        
                    </div>
                    
                </div>
            )}

            <Footer />
        </div>
    )
}