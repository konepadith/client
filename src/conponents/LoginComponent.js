import { useState,useEffect } from "react"
import axios from "axios"
import {authenticate} from "../service/authorize"
import {useNavigate } from "react-router-dom"
import NavbarComponent from "./NavbarComponent";
import { getUsername } from "../service/authorize";
export default function LoginComponent(){
    const navigate = useNavigate();
    const [user,setUser]=useState({
        username:"",
        password:""
    })
    const {username,password}=user
    const inputValue=name=>event=>{
        setUser({...user,[name]:event.target.value})
    }
    const login=(e)=>{
        e.preventDefault()
        axios.post(`${process.env.REACT_APP_API}/login`,{username,password}).then(response=>{
            // console.log(response.data)
            authenticate(response,()=>navigate("/create"))
        }).catch(err=>{
            console.log(err.response.data)
        })
    }
    useEffect(()=>{
        
        getUsername() && navigate("/")
    },[])
    return(
        
        
        <div className="container p-5">
            <NavbarComponent/>
        <h1>Log in Admin</h1>
        <form onSubmit={login}>
            <div className="form-group">
                <label>Username</label>
                <input type="text" className="form-control" value={username} onChange={inputValue("username")} />
            </div>
            <div className="form-group">
                <label>Password</label>
                <input type="password" className="form-control" value={password} onChange={inputValue("password")} />
            </div>
            <br/>
            <input type="submit" value="Log in" className="btn btn-primary"/>
        </form>
    </div>
    )
}