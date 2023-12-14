import React, { useState } from "react";
import { useNavigate } from "react-router-dom";


const backendUrl = process.env.REACT_APP_BACKEND_URL;
const urlcreate = `${backendUrl}/api/addblog`;

function CreateBlog() {
    const [blogName, setBlogName] = useState("");
    const [blogDes, setBlogDes] = useState("");
   // const [selectedImage, setSelectedImage] = useState(null);
    

    const navigate = useNavigate();

/*  const handleImageChange = (e) => {
        const file = e.target.files[0];
        setSelectedImage(file);
    };
*/
    const handleSubmit = async (e) => {
        e.preventDefault();
        const formData = new FormData();
        formData.append("blogName", blogName);
        formData.append("blogDes", blogDes);
//        formData.append("productImage", selectedImage);
        try {
            const response = await fetch(urlcreate, {
                method: "POST",
                body: formData,
                headers:{
                    "Content-Type": "application/json",
                }
            
            });

            if (response.ok) {
                navigate("/home");
            } else {
                console.log('error found')
            }
        } catch (error) {
            console.error("An error occurred:", error);
        }
    };

    return (
        <div>
        
            <div className="">
                <div className="">
                    <h1 className="">Add New product </h1>
                    <form onSubmit={handleSubmit}>
                        <label className="">
                            Product Name:
                            <input
                                className="Inputbox2"
                                type="text"
                                value={blogName}
                                onChange={(e) => setBlogName(e.target.value)}
                            />
                        </label>
                        <label className="">
                            Product Type:
                            <input
                                className="Inputbox2"
                                type="text"
                                value={blogDes}
                                onChange={(e) => setBlogDes(e.target.value)}
                            />
                        </label>
                    {/** 
                    <label htmlFor="imageUpload addProductLabel">Product Image:</label>
                        <input
                            type="file"
                            className="Inputbox3"
                            id="imageUpload"
                            accept="image/*"
                            onChange={handleImageChange}
                        />
                        */}
                        <button className="createBlog" type="submit">
                            Create Blog
                        </button>
                    </form>
                </div>
            </div>
        </div>
    );
}

export default CreateBlog;