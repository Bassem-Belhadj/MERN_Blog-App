import React from "react";
import { Link } from "react-router-dom";
function Header(){
    return(
        <header>
      <a href="" classeName="logo"> MyBlog </a>
      <nav>
      <Link to="/login" > Login </Link>
      <Link to="/regiter" > Register </Link>
      </nav>
      </header>
    )
}
export default Header