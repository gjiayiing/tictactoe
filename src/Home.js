import React, { useRef, useState } from "react";
import "./index.css";
import BlogList from "./BlogList";
import useFetch from "./useFetch";
const Home = () => {
    // const [blogs, setBlogs] = useState([]);
    // const [isPending, setIsPending] = useState(true);
    const { error, isPending, data: blogs } = useFetch('http://localhost:8000/blogs')
    const [name, setName] = useState('mario'); // variable and function to do whatever after
    const [age, setAge] = useState(25); // variable and function to do whatever after
    // let name = 'luigi'; // not reactive, react doesnt follow it and re-render if it changes
    // const handleDelete = (id) => {
    //     const newBlogs = blogs.filter(blog => blog.id !== id)
    //     setBlogs(newBlogs);
    // }
   // will run function only if name is changed

    const handleClick = () => {
        // name = 'mario' 
        setName('luigi');
        setAge(900);
        
    }
    const clickName = (name, e) => {
        console.log("hello" + name, e.target);
    }
    return (  
        <div className="home">
            {/* prop */}
            {error && <div>{ error }</div>}
            {isPending && <div>Loading...</div>}
            {blogs && <BlogList blogs={blogs} title="All Blogs!"/>}
            <button onClick={()=> setName('luigi')}>change name</button>
            
            {/* <BlogList blogs={blogs.filter((blog)=> blog.author =="mario")} title="Mario's Blogs!"/>  */}
        </div>
        // <div className="home">
        //     <h2>Homepage</h2>
        //     <p>{ name } is { age } years old</p>
        //     <button onClick={handleClick}>Click me</button>
        //     <button onClick={(e) => {clickName('bjorn', e)}}>Click me 2 times</button>
        //     {/* <button onClick={clickName('bjorn')}>Click me for name</button> */}
        // </div>
    );
}
 
export default Home;