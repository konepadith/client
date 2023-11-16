import axios from "axios"
import { useState,useEffect } from "react"
import { useParams } from "react-router-dom"
import parse from 'html-react-parser'
import NavbarComponent from "./NavbarComponent";
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
       // eslint-disable-next-line react-hooks/exhaustive-deps
    },[])
    return(
        <div className="container">
            <NavbarComponent/>
            <h1>{blog.title}</h1>
            <p>{parse(`${blog.content}`)}</p>
            <p className="text-muted">Author:{blog.author},publish:{new Date(blog.createdAt).toLocaleString()}</p>
        </div>

        
    )
}