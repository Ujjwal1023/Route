import React from "react";
import {Link,NavLink} from "react-router-dom";

const Navigation = () => {

    return (

        <nav className="nav">
        <NavLink to="/">Home</NavLink>
        <NavLink to="/about">About</NavLink>
        <NavLink to="/blog">Blog</NavLink>
        <NavLink to="/contact">Contact</NavLink>

        </nav>
    );
}


export default Navigation;