import React, { useEffect } from "react";
import { useParams } from "react-router-dom";

function PostPage(){
   const {id}= useParams();
    useEffect(()=>{
    
        useEffect(() => {
            fetch(`http://localhost:4000/post/${id}`)
              .then(response => {
                response.json().then(postInfo => {
                  
                });
              });
          }, []);
    return(
<div>post page here</div>
    )
}
export default PostPage