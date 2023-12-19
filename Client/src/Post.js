import react from 'react';
 
function Post(){
return (
    <div classeName="post">
    <div classeName="image">       
    <img src="https://techcrunch.com/wp-content/uploads/2023/06/OpenAI-logo-symmetry.jpg?w=850&h=492&crop=1&fbclid=IwAR2GOgpgav4DTRwWOVxpCXc-VzrTMxkro-HcWwpQd02msGfh153WdGHaQ5Qepard_LaunchPadCheck.webp" alt=""/>
       </div>
    <div classeName="texts">
    <h2>OpenAI inks deal with Axel Springer on licensing news for model training</h2>
    <p classeName="info">
       <a classeName="author">Dawid pazko</a>
       <time>2023-01-06 16:45</time>
     </ p>
        <p  classeName="summary"> Many, if not most, generative AI tech vendors argue that fair use entitles them to train AI models on copyrighted material scraped from the internet — even if they don’t get permission from the rightsholders.
      </p>
     </div>
    </div>
)
}
export default Post