import Header from './Header';
import Content from './Content';
import Footer from './Footer';
import AddItem from './AddItem';
import SearchItem from './SearchItem';
import { useState } from 'react';

function App() {
  //data is here instead of content.js as we want to access the data in footer as well, since 
  //content.js still requires the data, we will use props to send over the data
  const [items, setItems] = useState(JSON.parse(localStorage.getItem('shoppinglist')));  
  // const [items, setItems] = useState([
  //   {
  //       id:1,
  //       checked:false,
  //       item: "One half pound bag of Cocoa"
  //   },
  //   {
  //       id:2,
  //       checked:false,
  //       item: "Item 2"
  //   },
  //   {
  //       id:3,
  //       checked:true,
  //       item: "Item 3"
  //   }
  // ]);  
  const [newItem , setNewItem] = useState(''); 
  const [search , setSearch] = useState(''); 


  const setAndSaveItems = (newItems) => {
    setItems(newItems);
    localStorage.setItem("shoppinglist", JSON.stringify(newItems));
  }
  const addItem = (item) => {
    const id = items.length ? items[items.length - 1].id + 1 : 1
    const myNewItem = { id, checked: false, item };
    const listItems = [...items, myNewItem];
    setAndSaveItems(listItems)
  }
  

  const handleCheck = (id) => {
    const listItems = items.map((item) => item.id === id ? { ...item,
    checked: !item.checked} : item);
    setAndSaveItems(listItems)

  }
  const handleDelete  = (id) => {
    const listItems = items.filter((item) => item.id !==id);
    setAndSaveItems(listItems)
  }


  const handleSubmit = (e) => {
    e.preventDefault();
    if (!newItem) return;
    addItem(newItem);
    console.log('submitted')
  }
   
  return (
    <div className="app">
      {/* title is the props that can pass data to the Header */}
      <Header title="Grocery List" /> 
      <SearchItem search={search} setSearch={setSearch} />
      <AddItem newItem = {newItem} setNewItem = {setNewItem} handleSubmit={handleSubmit} />
      <Content items={items.filter(item=> ((item.item).toLowerCase()).includes(search.toLowerCase()))} setItems = {setItems} handleCheck={handleCheck} handleDelete={handleDelete}/>
      <Footer length={items.length}/>
    </div>
  );
}


export default App;
