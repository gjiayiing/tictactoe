import { FaTrashAlt } from 'react-icons/fa'

const LineItem = ({item, setItems, handleCheck, handleDelete}) => {
    return ( 
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

     );
}
 
export default LineItem ;