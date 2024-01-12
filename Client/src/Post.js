import react from 'react';
 
function Post(title, summary,cover, content,createdAt,author){
return (
    <div classeName="post">
    <div classeName="image">       
    <img src="https://techcrunch.com/wp-content/uploads/2023/06/OpenAI-logo-symmetry.jpg?w=850&h=492&crop=1&fbclid=IwAR2GOgpgav4DTRwWOVxpCXc-VzrTMxkro-HcWwpQd02msGfh153WdGHaQ5Qepard_LaunchPadCheck.webp" alt=""/>
       </div>
    <div classeName="texts">
    <h2>{title}</h2>
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