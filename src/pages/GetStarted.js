import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import PhyniteDataService from "../services/phyniteData.js"
import {ClipLoader} from "react-spinners"

export default function GetStarted(props) {
    
    const [userInfo, setUserInfo] = useState({})
    const [error, setError] = useState(null);
    const [submitted, setSubmitted] = useState(false)
    const [loading, setLoading] = useState(false)


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

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };
    
    async function saveUserInfo()
    {
        const response = await PhyniteDataService.addEmail(userInfo.email)
        if (response.status === 201) {
            setSubmitted(true)
            setUserInfo({})
        } else if (response.status === 202) {
           setError("You already have an account you silly goose!") 
        }
        setLoading(false)
    }
  // The following function runs when the submit button is pressed
  async function onSubmit(event) {
    event.preventDefault();
    try {
    //   setButtonClicked(true);
        if (!validateEmail(userInfo.email)) {
            setError(`You entered an invalid email, but don't give up!`);
            
        } else {
            setError(null);
            setLoading(true)
            setTimeout(()=>saveUserInfo(),2000)
        }  
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
    }
    
    return (
        <div>
            <Navbar isClicked={"4"} />
            {props.displayType === "mobile" && (
                <div className="h-screen min-h-[600px] justify-center items-center flex px-[14px]">
                    <div className="w-full flex flex-col items-center font-poppins h-[300px]">
                        <h1 className="gradient-text-blue font-semibold text-[28px] text-center leading-tight mb-6">The Phynite Marketplace<br/>is Coming Soon</h1>
                        {submitted === true ? (
                            <div>
                                <div className="">
                                    <h2 className="font-[500] text-lg text-white text-center mb-5">Thank you for being one of our earliest supporters!</h2>
                                    <h2 className="text-gray-400 text-center mb-6">Phynite will be built before you know it.</h2>
                                    <div className="flex justify-center">
                                        <button onClick={()=>setSubmitted(false)} className=" underline text-gray0 text-xs text-center">Add another email</button>
                                    </div>
                                </div>               
                            </div>
                        ):(
                            <div>
                                <h2 className="font-[500] text-white text-[15px] text-center mb-6">Sign up to be the first to know when we launch.</h2>
                                <form onSubmit={onSubmit} className="flex border-2 border-gray1 duration-100 rounded-xl w-full">
                                    <input value={userInfo.email} onChange={handleChange} name="email" type="text" className="h-12 w-full rounded-l-xl text-lg bg-gray2 pl-4 focus:ring-1 text-white focus:ring-gray0 focus:outline-none placeholder:text-gray-400" placeholder="Email address"></input>
                                    {loading === true ? (
                                        <button type="submit" className="w-[120px] h-12 bg-gradient-to-br from-salmon to-mango brightness-125 rounded-r-lg flex items-center justify-center"><ClipLoader size={20} color={"#ffffff"} /></button>
                                    ) : (
                                        <button type="submit" className="w-[120px] h-12 bg-gradient-to-br from-phyniteBlue to-phyniteBlue duration-300 rounded-r-xl font-poppins text-gray1 text-lg font-semibold">Sign Up</button>
                                    )}
                                        
                                </form>
                                {error !== null &&(
                                    <h1 className="text-md pt-3 font-poppins text-salmon px-1 text-center">*{error}</h1>
                                )}        
                            </div>
                        )}
                        
                    </div>
                    
                </div>
            )}
            {props.displayType === "tablet" && (
                <div className="px-[18px] w-full h-screen min-h-[600px] justify-center items-center flex">
                    <div className="w-full flex flex-col items-center font-poppins h-[300px]">
                        <h1 className="gradient-text-blue font-semibold text-4xl text-center leading-tight mb-6">The Phynite Marketplace<br/>is Coming Soon</h1>
                        {submitted === true ? (
                            <div className="">
                                <h2 className="font-[500] text-xl text-white text-center mb-5">Thank you for being one of our earliest supporters!</h2>
                                <h2 className="text-lg text-gray-400 text-center mb-6">Phynite will be built before you know it.</h2>
                                <div className="flex justify-center">
                                    <button onClick={()=>setSubmitted(false)} className=" underline text-gray0 text-sm text-center">Add another email</button>
                                </div>
                            </div>   
                        ): (
                            <div>
                                <h2 className="font-[500] text-white text-lg text-center mb-6">Sign up to be the first to know when we launch.</h2>
                                <form onSubmit={onSubmit} className="flex border-2 border-gray1 duration-100 rounded-xl w-full max-w-[500px]">
                                    <input value={userInfo.email} onChange={handleChange} name="email" type="text" className="h-12 w-full rounded-l-xl text-lg bg-gray2 pl-4 focus:ring-1 text-white focus:ring-gray0 focus:outline-none placeholder:text-gray-400" placeholder="Email address"></input>
                                    {loading === true ? (
                                        <button type="submit" className="w-[120px] h-12 bg-gradient-to-br from-salmon to-mango brightness-125 rounded-r-lg flex items-center justify-center"><ClipLoader size={20} color={"#ffffff"} /></button>
                                    ) : (
                                        <button type="submit" className="w-[120px] h-12 bg-gradient-to-br from-phyniteBlue to-phyniteBlue duration-300 rounded-r-xl font-poppins text-gray1 text-lg font-semibold">Sign Up</button>
                                    )}
                                        
                                </form>
                                {error !== null &&(
                                    <h1 className="text-md pt-3 font-poppins text-salmon px-1 text-center">*{error}</h1>
                                )}
                            </div>
                        )}
                        
                    </div>
                </div>
            )}
            {props.displayType === "smallComputer" && (
                <div className="h-screen min-h-[600px] justify-center items-center flex">
                    <div className="w-full flex flex-col items-center font-poppins h-[300px]">
                        <h1 className="gradient-text-blue font-semibold text-5xl text-center leading-tight mb-6">The Phynite Marketplace<br />is Coming Soon</h1>
                        {submitted === true ? (
                            <div className="">
                                <h2 className="font-[500] text-2xl text-white text-center mb-5">Thank you for being one of our earliest supporters!</h2>
                                <h2 className="text-xl text-gray-400 text-center mb-6">Phynite will be built before you know it.</h2>
                                <div className="flex justify-center">
                                    <button onClick={()=>setSubmitted(false)} className=" underline text-gray0 text-center">Add another email</button>
                                </div>
                            </div>   
                        ) : (
                            <div className="">
                                <h2 className="font-[500] text-xl text-white text-center mb-6">Sign up to be the first to know when we launch.</h2>
                                <form onSubmit={onSubmit} className="flex border-2 border-gray1 hover:border-gray0 duration-100 rounded-lg">
                                    <input value={userInfo.email} onChange={handleChange} name="email" type="text" className="w-[400px] h-12 rounded-l-lg text-lg bg-gray2 pl-4 focus:ring-1 text-white focus:ring-gray0 focus:outline-none placeholder:text-gray-400" placeholder="Email address"></input>
                                    {loading === true ? (
                                        <button type="submit" className="w-[120px] h-12 bg-gradient-to-br from-salmon to-mango brightness-125 rounded-r-lg flex items-center justify-center"><ClipLoader size={20} color={"#ffffff"} /></button>
                                    ) : (
                                        <button type="submit" className="w-[120px] h-12 bg-gradient-to-br from-phyniteBlue to-phyniteBlue hover:brightness-125  duration-300 rounded-r-lg font-poppins text-gray1 text-lg font-semibold hover:from-salmon hover:to-mango">Sign Up</button>
                                    )}
                                </form>
                                {error !== null &&(
                                    <h1 className="text-md pt-3 font-poppins text-salmon w-[500px] text-center">*{error}</h1>
                                )}
                            </div>
                        )}
                    </div>
                    
                </div>
            )}
            {props.displayType === "computer" && (
                <div className="h-screen min-h-[600px] justify-center items-center flex">
                    <div className="w-[1300px] flex flex-col items-center font-poppins h-[300px]">
                        <h1 className="gradient-text-blue font-semibold text-5xl text-center leading-tight mb-6">The Phynite Marketplace<br />is Coming Soon</h1>
                        {submitted === true ? (
                            <div className="">
                                <h2 className="font-[500] text-2xl text-white text-center mb-5">Thank you for being one of our earliest supporters!</h2>
                                <h2 className="text-xl text-gray-400 text-center mb-6">Phynite will be built before you know it.</h2>
                                <div className="flex justify-center">
                                    <button onClick={()=>setSubmitted(false)} className=" underline text-gray0 text-center">Add another email</button>
                                </div>
                            </div>   
                        ) : (
                            <div className="">
                                <h2 className="font-[500] text-xl text-white text-center mb-6">Sign up to be the first to know when we launch.</h2>
                                <form onSubmit={onSubmit} className="flex border-2 border-gray1 hover:border-gray0 duration-100 rounded-lg">
                                    <input value={userInfo.email} onChange={handleChange} name="email" type="text" className="w-[400px] h-12 rounded-l-lg text-lg bg-gray2 pl-4 focus:ring-1 text-white focus:ring-gray0 focus:outline-none placeholder:text-gray-400" placeholder="Email address"></input>
                                    {loading === true ? (
                                        <button type="submit" className="w-[120px] h-12 bg-gradient-to-br from-salmon to-mango brightness-125 rounded-r-lg flex items-center justify-center"><ClipLoader size={20} color={"#ffffff"} /></button>
                                    ) : (
                                        <button type="submit" className="w-[120px] h-12 bg-gradient-to-br from-phyniteBlue to-phyniteBlue hover:brightness-125  duration-300 rounded-r-lg font-poppins text-gray1 text-lg font-semibold hover:from-salmon hover:to-mango">Sign Up</button>
                                    )}
                                </form>
                                {error !== null &&(
                                    <h1 className="text-md pt-3 font-poppins text-salmon w-[500px] text-center">*{error}</h1>
                                )}
                            </div>
                        )}
                        
                        
                    </div>
                    
                </div>
            )}

            <Footer />
        </div>
    )
}