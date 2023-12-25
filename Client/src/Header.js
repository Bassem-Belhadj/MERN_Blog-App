import { userInfo } from "os";
import React, { useEffect, useState } from "react";
import { Link } from "react-router-dom";
function Header(){
  const [username, setUsername]=useState('');
  useEffect(()=>{
    fetch('http://localhost:4000/porfile',{
      credentials:'include',
    }).then(response =>{
      response.json().then(userInfo=>{
      setUsername(userInfo.username);
      });
    });
  },[])
    return(
        <header>
      <Link to="/" className="logo"> MyBlog </Link>
      <nav>
        { username && (
        <>
        <Link to={'/create'}>Create new post</Link>
        <a>Lagout</a>
        </>
        )}
        {!username && (
          <>
      <Link to="/login" > Login </Link>
      <Link to="/register" > Register </Link>
          </>
        )}
      </nav>
      </header>
    )
}
export default Header 