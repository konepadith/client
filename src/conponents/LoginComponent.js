import { useState } from "react"

export default function LoginComponent(){
    const [user,setUser]=useState({
        username:"",
        password:""
    })
    const {username,password}=user
    const inputValue=(event)=>{
        setUser({...user,username,password})
    }
    const login=()=>{

    }
    return(
        <div className="container p-5">
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