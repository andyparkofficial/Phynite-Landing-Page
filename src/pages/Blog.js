import { useState, useEffect } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import {useParams} from "react-router-dom"
import PhyniteDataService from "../services/phyniteData.js"


export default function Blog(props) {

    const blogName = useParams().blogName;
    const [blog, setBlog] = useState(null)
    
    useEffect(() => {
        if (blogName) {
            getBlog()
        }
    }, [blogName])
    
    async function getBlog() {
        const response = await PhyniteDataService.getBlogs(blogName)
        const blogs = response.data.blogs
        setBlog(blogs[0])
        console.log(blogs[0])
    }

   

    return (
        <div>
            <Navbar />
            <div className="min-h-screen">
                
                
                
            </div>
            <Footer />
        </div>
    )
}