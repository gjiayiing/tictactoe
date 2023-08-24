import { useState, useEffect } from "react";
import BlogList from "./BlogList";
const Home = () => {
    const [blogs, setBlogs] = useState([]);


    const [name, setName] = useState('mario'); // variable and function to do whatever after
    const [age, setAge] = useState(25); // variable and function to do whatever after
    // let name = 'luigi'; // not reactive, react doesnt follow it and re-render if it changes
    
    const handleDelete = (id) => {
        const newBlogs = blogs.filter(blog => blog.id != id)
        setBlogs(newBlogs);
    }

    useEffect(() => {//runs on every render
        fetch('http://localhost:8000/blogs')
        .then(res => {
            return res.json();
        })
        .then(data=> {
            console.log(data);
            setBlogs(data)
        })
    }, []); // will run function only if name is changed

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
            {blogs && <BlogList blogs={blogs} title="All Blogs!" handleDelete={handleDelete}/>}
            <button onClick={()=> setName('luigi')}>change name</button>
            <p>{ name }</p>
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