import axios from "axios"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"

export default function SingleComponent(props){
    const {slug} = useParams()
    const [blog,setBlog]=useState({})
    const fetchData =()=>{
        axios.get(`${process.env.REACT_APP_API}/blog/${slug}`).then(response=>{
            setBlog(response.data)
        }).catch(err=>alert(err))
    }
    useEffect(()=>{
        fetchData()
    },[])
    return(
        <div className="container">
            <h1>{blog.title}</h1>
            <p>{blog.content}</p>
            <p className="text-muted">Author:{blog.author},publish:{new Date(blog.createdAt).toLocaleString()}</p>
        </div>

        
    )
}