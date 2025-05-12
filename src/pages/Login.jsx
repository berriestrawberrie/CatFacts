import React from 'react'
import {useState, useEffect} from 'react'
import { useNavigate } from "react-router-dom";

 const Login = () =>{

    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");
    const [wrong,setWrong] =useState(false);
     const navigate = useNavigate();
    

    const startGame =(e)=>{
         e.preventDefault();
        const currentUser = localStorage.getItem("username")
        const currentPass = localStorage.getItem("password")

        if(currentUser === user && currentPass === password){
            navigate("/CatFacts");
        }else{
            setWrong(true);
        }

    }

    return <div>
    <h1 className="mb-2">Login <i className="fa-solid fa-paw rotate-15"></i></h1>
    {wrong? <div className="text-red-500"><i class="fa-solid fa-circle-exclamation"></i>Invalid Username or Password!</div> : ""}
    <div className="bg-white/40  backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
        <form className='flex flex-col gap-4'>
        <fieldset>
        <label htmlFor="username">Username: </label><input type="text" id="username" className="bg-white me-2" value={user}  onChange={(e)=>setUser(e.target.value)}/>
        </fieldset>
        <fieldset>
        <label htmlFor="username">Password: </label><input type="text" id="username" className="bg-white me-2" value={password} onChange={(e)=>setPassword(e.target.value)} />
        </fieldset>
        <button onClick={startGame}>Login</button>
        <span className="text-rose-400 text-xl hover:text-white" onClick={() => navigate("/register")}><i className="fa-solid fa-paw -rotate-15"></i>Register !</span>
        </form>
        
    </div>

    </div>

}

export default Login;