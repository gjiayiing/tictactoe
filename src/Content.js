import ItemList from './ItemList';
const Content = ({items, setItems, handleCheck, handleDelete}) => {
    

    // const handleNameChange = () => {
    //     const names = ['Bob', 'Kevin', 'Dave'];
    //     const int = Math.floor(Math.random() *3);
    //     setName(names[int])
        
        
    //   }
    // const [name, setName] = useState('Dave');
    // const [count, setCount] = useState(0);
    // const handleClick = () => {
    //     handleNameChange()
    //     setCount(count+1)
    //     console.log('You clicked it')
    // }  
    // const handleClick3 = (e) => {
    //     console.log(e.target.innerText)
    // }  


      
        
    
     
    return ( 
        <main>
            {items.length ? (
                <ItemList items={items} setItems = {setItems} handleCheck={handleCheck} handleDelete={handleDelete}/>
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
