import { useState,useEffect } from "react"
import axios from "axios"
import { useParams } from "react-router-dom"
import Swal from "sweetalert2"
import ReactQuill from "react-quill"
import "react-quill/dist/quill.snow.css"
import NavbarComponent from "./NavbarComponent";
export default function EditComponent(props){
    const params = useParams()
    const [blog,setBlog]=useState({
        title:"",
        author:"",
        slug:""
    })
    const {title,author,slug}=blog

    const [content,setContent]=useState('')

    const inputValue=name=>event=>{
        setBlog({...blog,[name]:event.target.value})
    }
    const submitContent=(event)=>{
        setContent(event)
    }

    const fetchData =()=>{
        axios.get(`${process.env.REACT_APP_API}/blog/${params.slug}`).then(response=>{
            const {title,content,author,slug} = response.data
            setBlog({...blog,title,author,slug})
            setContent(content)
        }).catch(err=>alert(err))
    }

    useEffect(()=>{
        fetchData()
        // eslint-disable-next-line react-hooks/exhaustive-deps
     },[])
    
     const showUpdateForm=()=>(
        <form onSubmit={submitForm}>
            <div className="form-group">
            <NavbarComponent/>
                <label>Blog Title</label>
                <input type="text" className="form-control" value={title} onChange={inputValue("title")}/>
            </div>
            <div className="form-group">
                <label>Bloc Content</label>
                <ReactQuill value={content} onChange={submitContent} theme="snow" className="pb-5 mb-3" style={{border:"1px solid #666"}}/>
            </div>
            <div className="form-group">
                <label>Bloc Content</label>
                <input type="textarea" className="form-control" value={author} onChange={inputValue("content")}/>
            </div>
            <br/>
            <input type="submit" value="update" className="btn btn-primary"/>
            </form>
     )
    
     const submitForm=(e)=>{
        e.preventDefault();
        console.log("API URL = ",process.env.REACT_APP_API)
        axios.put(`${process.env.REACT_APP_API}/blog/${slug}`,{title,content,author,slug}).then(response=>{
            Swal.fire({
                title: "Notifyation",
                text: "๊Update Data Successful",
                icon: "success"
              });
              const {title,content,author,slug}=response.data
              setBlog({...blog,title,author,slug})
              setContent(content)
        }).catch(err=>{
            Swal.fire({
                title: "succeNotifyationssfull",
                text: err.response.data.error,
                icon: "error"
              });
        })
    }
    return(
        <div className="container p-5">
            <h1>Hello From Edit Component</h1>
            {showUpdateForm()}
        </div>
    )
}