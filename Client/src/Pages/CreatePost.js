import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreatePost(){
    const [title , setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    function createNewPost (ev){
        ev.preventDefault();
    }
    return(
       <form onSubmit={createNewPost}>
        <input type="title" 
        placeholder="{'Title'}" 
        value={title}
        onChange={ev => setTitle(ev.target.value)}
        />
        <input type="summary "
         placeholder="{'Summary'}" 
         value={summary} 
         onChange={ev=> setSummary(ev.target.value)}
         />
        <input type="file"/>
        <ReactQuill value={content} 
        onChange={newValue => setContent(newValue)}
        />
        <button style={{margin:'5px'}}>create post</button>
       </form>
    )
}
export default CreatePost