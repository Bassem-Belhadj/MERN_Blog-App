import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";

function PostPage(){
   const {id}= useParams();
   const [postINfo, setPostInfo]= useState(null);
    
        useEffect(() => {
            fetch(`http://localhost:4000/post/${id}`)
              .then(response => {
                response.json().then(postInfo => {
                 setPostInfo(postINfo); 
                });
              });
          }, []);
       if   (!postInfo) return '';
    return(
<div className="post-page">
   <div className="image">
   <img src={`http://localhost:4000/${postInfo.cover}`} alt=""/>
   </div> 
   <div className="content" dangerouslySetInnerHTML={{__html:postInfo.content}} />
   </div>
    )
}
export default PostPage