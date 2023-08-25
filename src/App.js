// import './App.css'
import Navbar from './Navbar'
import Home from './Home'
import axiosConfig from './axiosConfig';
function App() {
  const title = 'Welcome to the new blog';
  const likes = 50;
  // const person = { name:'yoshi', age: 30};
  const link = "http://www.google.com"
  return (
    <div className="App">
      <Navbar />
      <div className="content">
        <Home/>
      </div>
    </div>
  );
}

export default App;

//we always export our function to ue in other files

// import { useState } from 'react';
// function Square() {
//   const [value, setValue] = useState(null);
//   //inner functions of each square
//   function handleClick(){
//     setValue('X');
//     console.log("clicked!"+ {value} );
//   }

//   return <button className="square" onClick={handleClick}>{value}</button>
// }
// export default function Board() {
//   return (
//   <>
//   <div className="board-row">
//     <Square />
//     <Square />
//     <Square />
//   </div>
//   <div className="board-row">
//     <Square />
//     <Square />
//     <Square />
//   </div>
//   <div className="board-row">
//     <Square />
//     <Square />
//     <Square />
//   </div>
//   </>
//   );
// }
