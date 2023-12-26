import React from "react";
import { useNavigate } from "react-router-dom";

const Blog= () => {

    const navigate =useNavigate()

    return (

        <div>
        <h1>Blog</h1>
        <p>Blog page body content</p>
        <button onClick={()=>navigate("/contact")}>contact1</button>
    
        </div>
    );
}
export default Blog;