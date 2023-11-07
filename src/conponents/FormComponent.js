import { useState } from "react"
import axios from "axios"
import Swal from 'sweetalert2'

export default function FormCompoent(){
    const [state,setState]=useState({
        title:"",
        content:"",
        author:""
    })
    const inputValue=name=>event=>{
        setState({...state,[name]:event.target.value})
    }
    const {title,content,author}=state

    const submitForm=(e)=>{
        e.preventDefault();
        console.log("API URL = ",process.env.REACT_APP_API)
        axios.post(`${process.env.REACT_APP_API}/create`,{title,content,author}).then(response=>{
            Swal.fire({
                title: "successfull",
                text: "You clicked the button!",
                icon: "success"
              });
              setState({...state,title:"",content:"",author:""})
        }).catch(err=>{
            Swal.fire({
                title: "successfull",
                text: err.response.data.error,
                icon: "error"
              });
        })
    }
    return(
        <div className="container p-5">
            <h1>Hello Form Component</h1>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label>Blog Titile</label>
                    <input type="text" className="form-control" value={title} onChange={inputValue("title")} />
                </div>
                <div className="form-group">
                    <label>Detail</label>
                    <textarea className="form-control" value={content} onChange={inputValue("content")}></textarea>
                </div>
                <div className="form-group">
                    <label>Author</label>
                    <input type="text" className="form-control" value={author} onChange={inputValue("author")} />
                </div>
                <br/>
                <input type="submit" value="save" className="btn btn-primary"/>
            </form>
        </div>
    )
}