import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";

function App() {
  const [blogs, setBlogs] = useState([])

  const fetchData = () => {
    axios.get(`${process.env.REACT_APP_API}/blogs`).then(response => {
      setBlogs(response.data)
    }).catch(err => alert(err))
  }
  useEffect(() => {
    fetchData()
  }, [])
  return (
    <div className="container p-5">
      {blogs.map((blogs, index) => {
        return <div className="row" key={index} style={{borderBottom:'1px solid silver'}}>
          <div className="col pt-3 pb-2">
            <Link to={`/blog/${blogs.slug}`}><h2>{blogs.title}</h2></Link>
            <p>{blogs.content.substring(0,180)}</p>
            <p className="text-muted">Author:{blogs.author},publish:{new Date(blogs.createdAt).toLocaleString()}</p>
          </div>
        </div>
      })}
    </div>
  );
}

export default App;
