import { useEffect, useState } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"

export default function GetStarted(props) {
    
    const [userInfo, setUserInfo] = useState({})
    const [error, setError] = useState(null);

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
    
    function saveUserInfo()
    {
        console.log("email saved: "+ userInfo.email)
    }
  // The following function runs when the submit button is pressed
  async function onSubmit(event) {
    event.preventDefault();
    try {
    //   setButtonClicked(true);
        if (!validateEmail(userInfo.email)) {
            setError('Please enter a valid email address');
            
        } else {
            setError(null);
            saveUserInfo();
        }  
    } catch (e) {
      alert(`Registration failed! ${e.message}`);
    }
    }
    
    return (
        <div>
            <Navbar isClicked={"4"} />
            <div className="h-screen min-h-[600px] justify-center items-center flex">
                <div className="w-[1300px] flex flex-col items-center font-poppins h-[300px]">
                    <h1 className="gradient-text-blue font-semibold text-5xl text-center leading-tight mb-6">The Phynite Marketplace<br/>is Coming Soon</h1>
                    <h2 className="font-[500] text-xl text-white text-center mb-6">Sign up to be the first to know when we launch.</h2>
                    <form onSubmit={onSubmit} className="flex border-2 border-gray1 hover:border-gray0 duration-100 rounded-lg">
                        <input required value={userInfo.email} onChange={handleChange} name="email" type="email" className="w-[400px] h-12 rounded-l-lg text-lg bg-gray2 pl-4 focus:ring-1 text-white focus:ring-gray0 focus:outline-none placeholder:text-gray-400" placeholder="Email address"></input>
                        <button type="submit" className="w-[120px] h-12 bg-gradient-to-br from-phyniteBlue to-phyniteBlue hover:brightness-125  duration-300 rounded-r-lg font-poppins text-gray1 text-lg font-[500] hover:from-salmon hover:to-mango">Sign Up</button>
                    </form>
                    {error !== null &&(
                        <h1 className="text-md pt-3 font-poppins text-salmon">*{error}</h1>
                    )}
                </div>
                
            </div>
            <Footer />
        </div>
    )
}