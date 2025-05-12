import React from 'react'
import {useState, useEffect} from 'react'
import { useNavigate } from 'react-router-dom';



 const Register = () =>{
    const navigate = useNavigate();
    const [user, setUser] = useState("");
    const [password, setPassword] = useState("");

    const addUser =()=>{
        localStorage.setItem("username", user)
        localStorage.setItem("password", password)
        setUser("")
        setPassword("")
        navigate('/')
     
    }

    return <div>
            <h1 className="mb-2">Register <i className="fa-solid fa-paw rotate-15"></i></h1>
            <div className="bg-white/40  backdrop-blur-lg p-8 rounded-2xl shadow-xl border border-white/20">
                <form className='flex flex-col gap-4' onSubmit={addUser}>
                <fieldset>
                <label htmlFor="username">Username: </label><input placeholder="Username" 
          required pattern="^[a-zA-Z0-9]{4,15}$" title="4-15 characters. Only letters and numbers."type="text" id="username" className="bg-white me-2" value={user} onChange={(e)=>setUser(e.target.value)}/>
                </fieldset>
                <fieldset>
                <label htmlFor="password">Password: </label><input placeholder="Password" 
          required pattern="^(?=.*[A-Za-z])(?=.*\d)[A-Za-z\d]{6,}$" title="At least 6 characters with letters and numbers." type="password" id="password" className="bg-white me-2" value={password} onChange={(e)=>setPassword(e.target.value)}/>
                </fieldset>
                <button type="submit">Register</button>
                </form>
                
            </div>

        </div>

}

export default Register;