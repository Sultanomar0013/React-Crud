import React, { useState, useEffect, useCallback } from "react";
import { Link } from 'react-router-dom';
import Navbar from "../Components/Navbar";
import "./css/home.css";

const backendUrl = process.env.REACT_APP_BACKEND_URL;
const urlhome = `${backendUrl}/api/home`;

function View() {
    const [blogList, setBlogList] = useState([]);


    const fetchBlogList = useCallback(async () => {
        try {
            const response = await fetch(urlhome, {
                method: "GET",
            
            });

            if (response.ok) {
                const data = await response.json();
                setBlogList(data);
            } else {
                console.error("Failed to fetch product list");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    }, []);

    useEffect(() => {
        fetchBlogList();
    }, [fetchBlogList]);

    return (
        <>
        

            <div className="Home">
                
                <div className="blog List">
                    <h1> Product List </h1>
                    <ul className="get-blog">
                        {blogList.map((blog) => (
                            <div key={blog._id} className="get-blogli">
                                <div className="blog-item">
                        {/*
                            <img
                                        src={`data:${blog.blogImage.contentType};base64,${blog.blogImage.data}`}
                                        alt="blog"
                                        className="blog-image"
                                    />
                                
                                 */}  
                                    <div className="blog-details">
                                        <h3>{blog.blogName}</h3>
                                        <p>Quantity: {blog.blogDescription}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>



                </div>
            </div>
        </>
    );

};




export default View;