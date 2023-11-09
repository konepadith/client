import axios from "axios";
import { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import swal from "sweetalert2"

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

  const confitmDelete=(slug)=>{
    swal.fire({
      title:"Comfirm deleted",
      icon:"warning",
      showCancelButton:true
    }).then((result)=>{
      if (result.isConfirmed) {
          deleteBlog(slug)
      }
    })
  }
  const deleteBlog=(slug)=>{
    axios.delete(`${process.env.REACT_APP_API}/blog/${slug}`).then(response=>{
      if(response.status === 200) {swal.fire("Delete!","Delete Succesfully","success")}
      fetchData()
    }).catch(err => swal.fire("Not Found!","Document Not FOund","question"))
  }
  return (
    <div className="container p-5">
      {blogs.map((blogs, index) => {
        return <div className="row" key={index} style={{borderBottom:'1px solid silver'}}>
          <div className="col pt-3 pb-2">
            <Link to={`/blog/${blogs.slug}`}><h2>{blogs.title}</h2></Link>
            <p>{blogs.content.substring(0,180)}</p>
            <p className="text-muted">Author: {blogs.author}, publish: {new Date(blogs.createdAt).toLocaleString()}</p>
            <Link  className="btn btn-outline-success" to={`/blog/edit/${blogs.slug}`}>Update</Link>&nbsp;
            <button className="btn btn-outline-danger" onClick={()=>confitmDelete(blogs.slug)}>Delete</button>
          </div>
        </div>
      })}
    </div>
  );
}

export default App;
