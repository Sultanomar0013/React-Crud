import React, { useState, useEffect } from "react";
import { useParams, useNavigate } from "react-router-dom";


const backendUrl = import.meta.env.REACT_APP_BACKEND_URL;
const updateBlog = `${backendUrl}/api/updateBlog`;

function BlogUpdate() {
    const { blogId } = useParams();
    const [blogName, setBlogName] = useState("");
    const [blogDes, setBlogDes] = useState("");
    const navigate = useNavigate();

    useEffect(() => {
        const fetchBlog = async () => {
            try {
                const response = await fetch(updateBlog)
                if (response.ok) {
                    const blogData = await response.json();
                    setBlogName(blogData.blogName);
                    setBlogDes(blogData.blogDes);
                }
            } catch (error) {
                console.log("An error Shows", error)
            }
        }
        fetchBlog();
    }, [blogId]);

    const handleUpdate = async (e) => {
        e.preventDefault();
        const data = {
            blogName,
            blogDes,
        };

        try {
            const response = await fetch(updateBlog, {
                method: "PUT",
                body: JSON.stringify(data),
                headers: {
                    "Content-Type": "application/json",
                }

            });

            console.log("Response:", response);

            if (response.ok) {
                navigate("/home");
            } else {
                console.error("Failed to import product");
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <form onSubmit={handleUpdate}>
            <div className="">
                <h1 className="">My Blogs</h1>
                <div>
                    <label className="">Blog Title:</label>
                    <input
                        className=""
                        type="text"
                        value={blogName}
                        onChange={(e) => setBlogName(e.target.value)}
                    />
                </div>
                <div>
                    <label className="">Description:</label>
                    <input
                        className=""
                        type="text"
                        value={blogDes}
                        onChange={(e) => setBlogDes(e.target.value)}
                    />
                </div>
                <button
                    className=""
                    type="submit"
                >
                    Update
                </button>

            </div>
        </form>

    );
}

export default BlogUpdate;