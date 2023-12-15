import React, { useState, useEffect, useCallback } from "react";
import { Link, useNavigate } from 'react-router-dom';


const backendUrl = import.meta.env.REACT_APP_BACKEND_URL;
const urlhome = `${backendUrl}/api/home`;

function BlogView() {
    const [blogList, setBlogList] = useState([]);
    const navigate = useNavigate();


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

    const handleDelete = async (blogId) => {
        try{
            const response = await fetch(urlhome , {
                method: "DELETE"
            })
            if (response.ok){
                fetchBlogList();
            }else{
                console.log("failed to delete or fetch blog")
            }

        }catch(error){
            console.log("there is an error on Delete", error)
        }
        };

        const handleEdit = (blogId) =>{
            navigate(`/update/${blogId}`);
        }

    return (
        <>
        

            <div className="">
                
                <div className="">
                    <h1> Blog List </h1>
                    <ul className="">
                        {blogList.map((blog) => (
                            <div key={blog._id} className="">
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
                                        <p>description {blog.blogDes}</p>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </ul>
                    <button onclick={() => handleEdit(blog._id)}>Edit</button>
                    <button onClick={() => handleDelete(blog._id) }>Delete</button>
                </div>
            </div>
        </>
    );

};




export default BlogView;