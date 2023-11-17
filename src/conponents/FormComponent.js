import {  useState } from "react"
import axios from "axios"
import Swal from 'sweetalert2'
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import NavbarComponent from "./NavbarComponent";
import { getUsername,getToken } from "../service/authorize"
export default function FormComponent(){
    const [blog,setBlog]=useState({
        title:"",
        author:getUsername()
    })
    const inputValue=name=>event=>{
        setBlog({...blog,[name]:event.target.value})
    }

    //defactoring useState for easier use
    const {title,author}=blog

    const [content,setContent]=useState('')

    const submitContent=(event)=>{
        setContent(event)
    }
    const submitForm=(e)=>{
        e.preventDefault();
        axios.post(`${process.env.REACT_APP_API}/create`,
                    {title,content,author},
                    {headers:{Authorization:`Bearer ${getToken()}` }}).then(response=>{
            Swal.fire({
                title: "successfull",
                text: "You clicked the button!",
                icon: "success"
              });
              setBlog({...blog,title:"",author:""})
              setContent('')
        }).catch(err=>{
            Swal.fire({
                title: "Error",
                text: err.response.data.error,
                icon: "error"
              });
        })
    }

    return(
        <div className="container p-5">
            <NavbarComponent/>
            <h1>Hello Form Component</h1>
            <form onSubmit={submitForm}>
                <div className="form-group">
                    <label>Blog Titile</label>
                    <input type="text" className="form-control" value={title} onChange={inputValue("title")} />
                </div>
                <div className="form-group">
                <label>Blog Content</label>
                    <ReactQuill value={content} onChange={submitContent} theme="snow" className="pb-5 mb-3" placeholder="blog of content" style={{border:"1px solid #666"}}/>
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