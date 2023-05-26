import { useEffect, useState, useRef } from "react"
import Navbar from "../components/Navbar.js"
import Footer from "../components/Footer.js"
import PhyniteDataService from "../services/phyniteData.js"
import { useHistory } from "react-router-dom"
import { formatDateObject } from "../utils/utils.js"
import ImageBox from "../components/ImageBox.js"
import { recordPageView } from "../utils/utils.js"

export default function Blogs(props) {

    const [blogs, setBlogs] = useState(null)
    const [recommendedBlog, setRecommendedBlog] = useState(null)

    const history = useHistory()

    useEffect(()=>{
        recordPageView("Blogs")
    },[])
    
    async function getBlogs() {
        const response = await PhyniteDataService.getBlogs()
        const blogs = response.data.blogs
        setBlogs(blogs)
        console.log(response.data)
    }

    useEffect(() => {
        getBlogs()
    }, [])

    const recommendedBlogSlug = "the_importance_of_physically_backed_nfts"

    useEffect(()=>{
        if (blogs !== null && recommendedBlog === null){
            for (let i = 0; i < blogs.length; i++){
                if (blogs[i].slug === recommendedBlogSlug){
                    setRecommendedBlog(blogs[i])
                }
            }
        }
    },[blogs])
    
    function redirectToPage(pageURL){
        history.push(`/${pageURL}`);
      }

    return (
        <div>
            <Navbar isClicked={"2"} />
            {props.displayType === "mobile" && (
                <div className="pt-20 px-[14px] w-full font-poppins min-h-screen">
                    <div className="w-full pt-12 mb-12">
                        <h1 className="text-white text-5xl font-semibold text-center mb-16">
                            <span className="text-phyniteBlue">Phynite </span>Blog
                        </h1>
                        <h2 className="text-white text-2xl font-[500] mb-4 pl-1">Recommended</h2>
                        {recommendedBlog === null ? (<div></div>) : (
                            <button onClick={()=>redirectToPage(`blog/${recommendedBlog.slug}`)} className="rounded-2xl  border border-gray1 overflow-hidden w-full">
                                
                                <ImageBox dimensions={9/16}  imageSource={recommendedBlog.imageURL} className="">
                                    <div className="w-full flex justify-end flex-col items-start p-5 h-full">
                                        <h1 className="text-gray-300 text-xl font-bold leading-[1.2] mb-2 text-left">
                                            {recommendedBlog.title}
                                        </h1>
                                        <h2 className="text-gray3 font-semibold text-lg justify-end text-left">
                                            {formatDateObject(recommendedBlog.datePublished)}
                                        </h2>
                                    </div>
                                    
                                </ImageBox>
                            </button>
                        )}
                        
                    </div>
                    <div className="w-full mb-20">
                        <h1 className="text-2xl font-[500] text-white pl-1 mb-1">Recent</h1>
                        {blogs === null ? (<div></div>) : (
                            <div className="w-full">
                                {blogs.map((blog, id) => {
                                    return (
                                        <div className="py-3">
                                            <button onClick={()=>redirectToPage(`blog/${blog.slug}`)} className="rounded-2xl bg-gray4 border border-gray1 flex flex-col overflow-clip">
                                                <img src={blog.imageURL} className="w-full border-b border-gray1"></img>
                                                <div className="font-poppins p-5 text-left">
                                                    
                                                    <h1 className="text-white text-xl font-[500] mb-1">{blog.title}</h1>
                                                    <div className="w-full flex items-center mb-1">
                                                        <h2 className=" text-gray-300 font-light" >{formatDateObject(blog.datePublished)}</h2>
                                                        <h2 className=" text-gray-300 font-light text-xl pb-3 mx-2">.</h2>
                                                        <h2 className=" text-gray-300 font-light">{blog.readingLength}</h2>
                                                    </div>
                                                    <p className="border-t border-gray1 text-sm text-gray-400 pt-3">{blog.summary}</p>
                                                </div>
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        )}

                    </div>
                </div>
            )}
            {props.displayType === "tablet" && (
                <div className="w-full font-poppins min-h-screen">
                    <div className="h-[350px] w-full flex justify-center">
                        <h1 className="font-semibold text-[66px] font-poppins pt-48 text-white"><span className="text-phyniteBlue">Phynite</span> Blog</h1>
                    </div>
                    <div className="w-full flex flex-col mb-16 px-[18px]">
                        <div className="w-full ">
                            <h2 className="text-3xl text-white font-poppins font-[500] mb-8">
                                Recommended
                            </h2>
                            {recommendedBlog === null ? (<div></div>) : (
                                <button onClick={()=>redirectToPage(`blog/${recommendedBlog.slug}`)} className="rounded-2xl  border border-gray1 overflow-hidden  w-full">
                                    <ImageBox dimensions={9/16}  imageSource={recommendedBlog.imageURL} className="">
                                        <div className=" w-full  flex justify-end flex-col items-start pb-10 p-8 h-full">
                                            <h1 className="text-gray-300 text-2xl font-bold leading-[1.2] mb-4 text-left">
                                                {recommendedBlog.title}
                                            </h1>
                                            <h2 className="text-gray3 font-semibold text-xl justify-end text-left">
                                                {formatDateObject(recommendedBlog.datePublished)}
                                            </h2>
                                        </div>
                                        
                                    </ImageBox>
                                </button>
                            )}

                        </div>
                    </div>
                    <div className="w-full mb-24 px-[10px]">
                        <h1 className="text-3xl font-[500] text-white pl-3 mb-1">Recent</h1>
                        {blogs === null ? (<div></div>) : (
                        <div className="w-full flex flex-wrap">
                                {blogs.map((blog, id) => {
                                    return (
                                        <div className="py-3 w-1/2 px-2">
                                            <button onClick={()=>redirectToPage(`blog/${blog.slug}`)} className="rounded-2xl h-[450px] bg-gray4 border border-gray1 flex flex-col overflow-clip">
                                            <img src={blog.imageURL} className="w-full border-b border-gray1"></img>
                                                <div className="h-[250px] font-poppins p-5 text-left">
                                                    
                                                    <h1 className="text-white text-xl font-[500] mb-1">{blog.title}</h1>
                                                    <div className="w-full flex items-center mb-1">
                                                        <h2 className=" text-gray-300 font-light" >{formatDateObject(blog.datePublished)}</h2>
                                                        <h2 className=" text-gray-300 font-light text-xl pb-3 mx-2">.</h2>
                                                        <h2 className=" text-gray-300 font-light">{blog.readingLength}</h2>
                                                    </div>
                                                    <p className="border-t border-gray1 text-sm text-gray-400 pt-3">{blog.summary}</p>
                                                </div>
                                            </button>
                                        </div>
                                    )
                                })}
                            </div>
                        )}

                    </div>
                </div>
            )}
            {props.displayType === "smallComputer" && (
                <div className="flex flex-col items-center w-full px-5 min-h-screen">
                    <div className="h-[350px] w-full flex justify-center">
                        <h1 className="font-semibold text-6xl font-poppins pt-48 text-white"><span className="text-phyniteBlue">Phynite</span> Blog</h1>
                    </div>
                    <div className="w-full flex flex-col mb-16 px-3">
                        <div className="w-full ">
                            <h2 className="text-3xl text-white font-poppins font-[500] mb-8">
                                Recommended
                            </h2>
                            {recommendedBlog === null ? (<div></div>) : (
                                <button onClick={()=>redirectToPage(`blog/${recommendedBlog.slug}`)} className="rounded-3xl hover:border-gray0 w-full border border-gray1 hover:brightness-110 duration-300 overflow-hidden">
                                    <ImageBox dimensions={9/16}  imageSource={recommendedBlog.imageURL} className="">
                                        <div className=" w-1/2  flex justify-end flex-col items-start pb-12 p-10 h-full">
                                            <h1 className="text-gray-300 text-4xl font-bold leading-[1.2] mb-4 text-left">
                                                {recommendedBlog.title}
                                            </h1>
                                            <h2 className="text-gray3 font-semibold text-2xl justify-end text-left">
                                                {formatDateObject(recommendedBlog.datePublished)}
                                            </h2>
                                        </div>
                                        
                                    </ImageBox>
                                </button>
                            )}
                        </div>
                    </div>
                    <div className="text-3xl text-white font-[500] w-full mb-6 font-poppins pl-3">Recent</div>
                    {blogs === null ? (<div></div>) : (
                        <div className="w-full flex-wrap flex mb-24">
                            
                            {blogs.map((blog, id) => {
                                return (
                                    <div className="w-1/3 p-3">
                                        <button onClick={()=>redirectToPage(`blog/${blog.slug}`)} className="rounded-2xl h-[460px] bg-gray4 border border-gray1 flex flex-col overflow-clip hover:bg-gradient-to-br hover:brightness-110 hover:border-gray0 hover:from-gray2 hover:to-gray4 duration-300">
                                            <img src={blog.imageURL} className="w-full border-b border-gray1"></img>
                                            <div className="font-poppins p-5 text-left">
                                                
                                                <h1 className="text-white text-xl font-[500] mb-2">{blog.title}</h1>
                                                <div className="w-full flex items-center mb-2">
                                                    <h2 className=" text-gray-300 font-light" >{formatDateObject(blog.datePublished)}</h2>
                                                    <h2 className=" text-gray-300 font-light text-xl pb-3 mx-2">.</h2>
                                                    <h2 className=" text-gray-300 font-light">{blog.readingLength}</h2>
                                                </div>
                                                <p className="border-t border-gray1 text-xs text-gray-400 pt-3">{blog.summary}</p>
                                            </div>
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    )}

                </div>
            )}
            {props.displayType === "computer" && (
                <div className="flex flex-col items-center w-full min-h-screen">
                    <div className="h-[350px] w-[1300px] flex justify-center">
                        <h1 className="font-semibold text-7xl font-poppins pt-48 text-white"><span className="text-phyniteBlue">Phynite</span> Blog</h1>
                    </div>
                    <div className="w-[1300px] flex flex-col mb-16">
                        <div className="w-full ">
                            <h2 className="text-4xl text-white font-poppins font-[500] mb-8">
                                Recommended
                            </h2>
                            {recommendedBlog === null ? (
                                <div className="h-96">

                                </div>
                            ) : (
                                <button  onClick={()=>redirectToPage(`blog/${recommendedBlog.slug}`)} className="rounded-3xl hover:border-gray0 border border-gray1 hover:brightness-110 duration-300 overflow-hidden w-full">
                                    <ImageBox dimensions={9/16} imageSource={recommendedBlog.imageURL} className="">
                                        <div className=" w-1/2  flex justify-end flex-col items-start pb-16 p-12 h-full">
                                            <h1 className="text-gray-300 text-5xl font-bold leading-[1.2] mb-4 text-left">
                                                {recommendedBlog.title}
                                            </h1>
                                            <h2 className="text-gray3 font-semibold text-3xl text-left">
                                                {formatDateObject(recommendedBlog.datePublished)}
                                            </h2>
                                        </div>
                                        
                                    </ImageBox>
                                </button>
                            )}
                            

                        </div>
                    </div>
                    <div className="text-4xl text-white font-[500] w-[1300px] mb-6 font-poppins">Recent</div>
                    {blogs === null ? (<div></div>) : (
                        <div className="w-[1324px] flex-wrap flex mb-28">
        
                            {blogs.map((blog, id) => {
                                return (
                                    <div className="w-1/3 p-3">
                                        <button onClick={()=>redirectToPage(`blog/${blog.slug}`)} className="rounded-2xl h-[500px] bg-gray4 border border-gray1 flex flex-col overflow-clip hover:bg-gradient-to-br hover:brightness-110 hover:border-gray0 hover:from-gray2 hover:to-gray4 duration-300">
                                            <img src={blog.imageURL} className="w-full border-b border-gray1"></img>
                                            <div className="h-[250px] font-poppins p-5 text-left">
                                                
                                                <h1 className="text-white text-2xl font-[500] mb-2">{blog.title}</h1>
                                                <div className="w-full flex items-center mb-2">
                                                    <h2 className=" text-gray-300 font-light" >{formatDateObject(blog.datePublished)}</h2>
                                                    <h2 className=" text-gray-300 font-light text-xl pb-3 mx-2">.</h2>
                                                    <h2 className=" text-gray-300 font-light">{blog.readingLength}</h2>
                                                </div>
                                                
                                                <p className="border-t border-gray1 text-sm text-gray-400 pt-3 text-left">{blog.summary}</p>
                                            </div>
                                        </button>
                                    </div>
                                )
                            })}
                        </div>
                    )}

                </div>
            )}

            
            <Footer />
        </div>
    )
}