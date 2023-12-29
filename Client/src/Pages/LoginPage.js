import React, { useState } from "react";

function LoginPage() {
    const [username,setUsername]= useState('');
    const [password,setPassword]=useState('');
    const [redirect, setRedirect]=useState(false);
    async function Login (ev){
        ev.preventDefault();
        const Response = await fetch('http://localhost:4000/login',{
            method: 'POST',
            body: JSON.stringify({username,password}),
            headers:{'Content-type ': 'application/json'},
            credentials: 'include',
        }); if(Response.ok){
          Response.json().then(userInfo=>{
            setRedirect(true);  
          })
             
        }else {
            alert('wrong credentials');
        }
    }
    if (redirect){
        return <Navigate to={'/'}/>
    }
 return (
       <form className="login" onSubmit={Login} > 
        <h1>Login</h1> 
       <input type="text" 
         placeholder="usename" 
         value={username} 
         onChange={ev=>setUsername(ev.target.value)} /> 
       <input type="password" 
         placeholder="password"  
         value={password} 
         onChange={ev=>setPassword(ev.target.value)} /> 
       <button>Login</button>
     </form>  
      )
    }
export default LoginPage