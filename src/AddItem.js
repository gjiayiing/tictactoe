import { FaPlus } from 'react-icons/fa';
import { useRef } from 'react';
const AddItem = ({newItem, setNewItem, handleSubmit}) => {
    const inputRef = useRef();
    return ( 
        // when u submit a form, the page refresh (html)
        <form className='addForm' onSubmit={handleSubmit}> 
            <label htmlFor="AddItem">AddItem</label>
            <input
                autoFocus
                ref={inputRef}
                id='addItem'
                type='text'
                placeholder='Add Item'
                required
                value = {newItem}
                onChange={(e) => setNewItem(e.target.value)}></input>
            <button
                type ='submit'
                aria-label="Add Item"
                onClick={()=> inputRef.current.focus()}>
                <FaPlus/>
            </button>
        </form>
     );
}
 
export default AddItem;