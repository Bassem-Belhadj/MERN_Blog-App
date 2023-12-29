
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { UserContext } from "../UserContext";
function Header(){
   
  useEffect(() => {
    const {setUserInfo}=useContext(UserContext)
    fetch('http://localhost:4000/profile', {
      credentials: 'include',
    }).then(response => {
      response.json().then(userInfo => {
        setUserInfo(userInfo);
      });
    });
  }, []);
  function logout (){
    fetch('http://localhost:4000/logout',{
      credentials:'include',
      method:'POST',
    });
    setUserInfo(null);
  }
  
  const username= userInfo.username?.username;
    return(
        <header>
      <Link to="/" className="logo"> MyBlog </Link>
      <nav>
        { username && (
        <>
<Link to="/create">Create new post</Link>
        <a onClick={logout}>Lagout</a>
        </>
        )}
        {!username && (
          <><Link to="/create">Create new post</Link>
      <Link to="/login" > Login </Link>
      <Link to="/register" > Register </Link>
         </>
        )}
      </nav>
      </header>
    )
};
export default Header 