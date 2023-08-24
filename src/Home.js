import { useState } from "react";
const Home = () => {
    const [name, setName] = useState('mario'); // variable and function to do whatever after
    const [age, setAge] = useState(25); // variable and function to do whatever after
    // let name = 'luigi'; // not reactive, react doesnt follow it and re-render if it changes
        
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
            <h2>Homepage</h2>
            <p>{ name } is { age } years old</p>
            <button onClick={handleClick}>Click me</button>
            <button onClick={(e) => {clickName('bjorn', e)}}>Click me 2 times</button>
            {/* <button onClick={clickName('bjorn')}>Click me for name</button> */}
        </div>
    );
}
 
export default Home;