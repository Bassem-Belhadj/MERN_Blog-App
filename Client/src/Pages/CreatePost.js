import { useState } from 'react';
import ReactQuill from 'react-quill';
import 'react-quill/dist/quill.snow.css';

function CreatePost(){
    const [title , setTitle] = useState('');
    const [summary, setSummary] = useState('');
    const [content, setContent] = useState('');
    const [file, setFile]= useState('');
    function createNewPost (ev){
        const data = new FormData(); 
        data.set('title', title);
        data.set('summary', summary);
        data.set('content', content);
        data.set('file', files[0]);
        ev.preventDefault();
     fetch('http://://localhost:4000/login', {
      method:'POST',
      //body: 
     })
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
        <input type="file" 
        value={file} 
        onChange={ev=>setFile(ev.target.files)}/>
        <ReactQuill value={content} 
        onChange={newValue => setContent(newValue)}
        />
        <button style={{margin:'5px'}}>create post</button>
       </form>
    )
}
export default CreatePost