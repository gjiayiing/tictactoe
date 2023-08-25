import { useState } from 'react';
import { FaTrashAlt } from 'react-icons/fa'
const Content = () => {
    const [items, setItems] = useState([
        {
            id:1,
            checked:false,
            item: "One half pound bag of Cocoa"
        },
        {
            id:2,
            checked:false,
            item: "Item 2"
        },
        {
            id:3,
            checked:true,
            item: "Item 3"
        }
    ]);   

    const handleNameChange = () => {
        const names = ['Bob', 'Kevin', 'Dave'];
        const int = Math.floor(Math.random() *3);
        setName(names[int])
        
        
      }
    const [name, setName] = useState('Dave');
    const [count, setCount] = useState(0);
    const handleClick = () => {
        handleNameChange()
        setCount(count+1)
        console.log('You clicked it')
    }  
    const handleClick3 = (e) => {
        console.log(e.target.innerText)
    }  

    const handleCheck = (id) => {
        const listItems = items.map((item) => item.id === id ? { ...item,
        checked: !item.checked} : item);
        setItems(listItems);
        localStorage.setItem("shoppinglist", JSON.stringify(listItems));
     }
     const handleDelete  = (id) => {
        const listItems = items.filter((item) => item.id !==id);
        setItems(listItems);
        localStorage.setItem("shoppinglist", JSON.stringify(listItems));
     }
      
        
    
     
    return ( 
        <main>
            {items.length ? (
            <ul>
                {items.map((item) => (
                    <li className="item" key={item.id}>
                        <input type="checkbox"
                        onChange={() => handleCheck(item.id)} checked={item.checked}></input>
                        <label
                            style={(item.checked) ? {textDecoration:'line-through'} : null}
                            onDoubleClick={() => handleCheck(item.id)}
                        >{item.item}</label>
                        <FaTrashAlt 
                            role="button" 
                            tabIndex="0" 
                            onClick={() => handleDelete(item.id)}
                        />
                    </li>

                ))}
            </ul>
            ) : (
                <p style={{marginTop: '2rem' }}>Your list is empty.</p>
            )}    

            {/* <p>
                Hello {name}!
            </p>
            <p>{count}</p>
            <button onClick={handleClick}>Change Name </button>
            <button onClick={(e)=>handleClick3(e)}>Click It </button> 
            e.target gives element name */}
        </main>
     );
}
 
export default Content;
