import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return(
        <header>
      <Link to="/" classeName="logo"> MyBlog </Link>
      <nav>
      <Link to="/login" > Login </Link>
      <Link to="/regiter" > Register </Link>
      </nav>
      </header>
    )
}
export default Header 