import { useState, useEffect } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import {useParams} from "react-router-dom"
import PhyniteDataService from "../services/phyniteData.js"
import { formatDateObject } from "../utils/utils.js"
import ReactMarkdown from "react-markdown"


export default function Blog(props) {

    const blogName = useParams().blogName;
    const [blog, setBlog] = useState(null)
    
    useEffect(() => {
        if (blogName) {
            getBlog()
        }
    }, [blogName])
    
    async function getBlog() {
        const response = await PhyniteDataService.getBlog(blogName)
        const blogs = response.data.blogs
        setBlog(blogs[0])
        console.log(blogs[0])
    }


   

    return (
        <div className="min-h-screen">
            <Navbar />
            {props.displayType === "mobile" && (
                <div className="min-h-screen flex flex-col items-center mt-12 font-poppins px-[14px]">
                    {blog === null ? (
                        <div></div>
                    ):(
                        <div className="w-full h-full pt-16">
                            <h1 className="text-3xl font-semibold text-white mb-4 leading-tight">{blog.title}</h1>
                            <h2 className="text- font-light text-gray-300 mb-6">{blog.summary}</h2>   
                            <div className="flex items-center mb-8">
                                <img className=" w-14 h-14 mr-4 rounded-full" src={blog.authorImageURL}></img>
                                <div className="">
                                    <h2 className=" text-white">{blog.author}</h2>
                                    <div className="flex items-center">
                                        <h2 className=" text-gray-300 font-light text-sm">{formatDateObject(blog.datePublished)}</h2>
                                        <div className="h-1 w-1 rounded-full bg-gray-300 mx-2"></div>
                                        <h2 className=" text-gray-300 font-light text-sm">{blog.readingLength}</h2>
                                    </div>   
                                </div>
                            </div> 
                            <img src={blog.imageURL} className="w-full mb-12 rounded-xl"></img>
                            <div className="mb-16">
                                {blog.sections.map((section, id) => {
                                    return(
                                        <div className="w-full mb-6">
                                            {("header" in section) && (<div className="text-2xl text-white font-semibold mb-6">{section.header}</div>)}
                                            {("imageURL" in section) && (<div className="text-2xl text-white font-semibold mb-4">{section.imageURL}</div>)}
                                            {("paragraph" in section) && (<div className=" text-gray-300 mb-4 leading-loose"><ReactMarkdown>{section.paragraph}</ReactMarkdown></div>)}
                                        </div>
                                    )
                                })}
                            </div>
                            
                            
                        </div>
                    )}
                    
                    
                </div>
            )}
            {props.displayType === "tablet" && (
                <div className="min-h-screen flex flex-col items-center mt-16 font-poppins px-[18px]">
                    {blog === null ? (
                        <div></div>
                    ):(
                        <div className="w-full h-full pt-20">
                            <h1 className="text-4xl font-semibold text-white mb-4 leading-tight">{blog.title}</h1>
                            <h2 className="text-lg font-light text-gray-300 mb-6">{blog.summary}</h2>   
                            <div className="flex items-center mb-8">
                                <img className=" w-14 h-14 mr-4 rounded-full" src={blog.authorImageURL}></img>
                                <div className="">
                                    <h2 className=" text-white">{blog.author}</h2>
                                    <div className="flex items-center">
                                        <h2 className=" text-gray-300 font-light text-sm">{formatDateObject(blog.datePublished)}</h2>
                                        <div className="h-1 w-1 rounded-full bg-gray-300 mx-2"></div>
                                        <h2 className=" text-gray-300 font-light text-sm">{blog.readingLength}</h2>
                                    </div>   
                                </div>
                            </div> 
                            <img src={blog.imageURL} className="w-full mb-12 rounded-xl"></img>
                            <div className="mb-16">
                                {blog.sections.map((section, id) => {
                                    return(
                                        <div className="w-full mb-6">
                                            {("header" in section) && (<div className="text-2xl text-white font-semibold mb-6">{section.header}</div>)}
                                            {("imageURL" in section) && (<div className="text-2xl text-white font-semibold mb-4">{section.imageURL}</div>)}
                                            {("paragraph" in section) && (<div className="text-lg text-gray-300 mb-4 leading-loose"><ReactMarkdown>{section.paragraph}</ReactMarkdown></div>)}
                                        </div>
                                    )
                                })}
                            </div>
                            
                            
                        </div>
                    )}
                    
                    
                </div>
            )}
            {props.displayType === "smallComputer" && (
                <div className="min-h-screen flex flex-col items-center mt-20 font-poppins">
                    {blog === null ? (
                        <div></div>
                    ):(
                        <div className="w-[800px] h-full pt-20">
                            <h1 className="text-5xl font-semibold text-white mb-4 leading-tight">{blog.title}</h1>
                            <h2 className="text-xl font-light text-gray-300 mb-6">{blog.summary}</h2>   
                            <div className="flex items-center mb-8">
                                <img className=" w-14 h-14 mr-4 rounded-full" src={blog.authorImageURL}></img>
                                <div className="">
                                    <h2 className="text-lg text-white">{blog.author}</h2>
                                    <div className="flex items-center">
                                        <h2 className=" text-gray-300 font-light">{formatDateObject(blog.datePublished)}</h2>
                                        <div className="h-1 w-1 rounded-full bg-gray-300 mx-2"></div>
                                        <h2 className=" text-gray-300 font-light">{blog.readingLength}</h2>
                                    </div>   
                                </div>
                            </div> 
                            <img src={blog.imageURL} className="w-full mb-12 rounded-xl"></img>
                            <div className="mb-16">
                                {blog.sections.map((section, id) => {
                                    return(
                                        <div className="w-full mb-6">
                                            {("header" in section) && (<div className="text-2xl text-white font-semibold mb-6">{section.header}</div>)}
                                            {("imageURL" in section) && (<div className="text-2xl text-white font-semibold mb-4">{section.imageURL}</div>)}
                                            {("paragraph" in section) && (<div className="text-xl text-gray-300 mb-4 leading-loose"><ReactMarkdown>{section.paragraph}</ReactMarkdown></div>)}
                                        </div>
                                    )
                                })}
                            </div>
                            
                            
                        </div>
                    )}
                    
                    
                </div>
            )}
            {props.displayType === "computer" && (
                <div className="min-h-screen flex flex-col items-center mt-20 font-poppins">
                    {blog === null ? (
                        <div></div>
                    ):(
                        <div className="w-[800px] h-full pt-20">
                            <h1 className="text-5xl font-semibold text-white mb-4 leading-tight">{blog.title}</h1>
                            <h2 className="text-xl font-light text-gray-300 mb-6">{blog.summary}</h2>   
                            <div className="flex items-center mb-8">
                                <img className=" w-14 h-14 mr-4 rounded-full" src={blog.authorImageURL}></img>
                                <div className="">
                                    <h2 className="text-lg text-white">{blog.author}</h2>
                                    <div className="flex items-center">
                                        <h2 className=" text-gray-300 font-light">{formatDateObject(blog.datePublished)}</h2>
                                        <div className="h-1 w-1 rounded-full bg-gray-300 mx-2"></div>
                                        <h2 className=" text-gray-300 font-light">{blog.readingLength}</h2>
                                    </div>   
                                </div>
                            </div> 
                            <img src={blog.imageURL} className="w-full mb-12 rounded-xl"></img>
                            <div className="mb-16">
                                {blog.sections.map((section, id) => {
                                    return(
                                        <div className="w-full mb-6">
                                            {("header" in section) && (<div className="text-2xl text-white font-semibold mb-6 mt-16">{section.header}</div>)}
                                            {("imageURL" in section) && (<div className="text-2xl text-white font-semibold mb-4">{section.imageURL}</div>)}
                                            {("paragraph" in section) && 
                                            (
                                                <div className="text-xl text-gray-300 mb-4 leading-loose">
                                                    <ReactMarkdown>{section.paragraph}</ReactMarkdown>
                                                </div>
                                            )}
                                        </div>
                                    )
                                })}
                            </div>
                            
                            
                        </div>
                    )}
                    
                    
                </div>
            )}

            <Footer />
        </div>
    )
}