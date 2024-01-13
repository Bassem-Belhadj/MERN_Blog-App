import react from 'react';
import {formatISO9075} from "date-fns";
import { Link } from 'react-router-dom';
function Post({_id,title, summary,cover, content,createdAt,author}){
return (
    <div classeName="post">
    <div classeName="image"> 
      <Link to={`/post/${_id}`}>
    <img src={'http://localhost:4000'+cover} alt=""/>
      </Link>      
    </div>
    <div classeName="texts">
      <Link to={`/post/${_id}`}>
      <h2>{title}</h2>
      </Link>
    
    <p classeName="info">
       <a classeName="author">{author.username}</a>
       <time>{format(new Date(createdAt),'MMM d, YYYY HH:mm')}</time>
     </ p>
        <p  classeName="summary">{summary}</p>
     </div>
    </div>
)
}
export default Post