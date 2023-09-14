import React, {useContext} from 'react'
import DataContext from '../DataContext/DataContext';
import EditItem from './EditItem';

const ListItems = () => {

  const {items, searchInput, handleCheck, handleEdit, handleDelete, isEdit, isLoading} = useContext(DataContext);
  
  return (
    isEdit ? <EditItem /> :
    <ul>
        { isLoading ? <h2>Loading...</h2> : items.length ? 

          items.filter(item => item.task.toLowerCase().includes(searchInput.toLowerCase())).map(item => {
            return <li key={item.id} style={{textDecoration : item.checked ? "line-through" : "none"}}><input className="checkbox" type="checkbox" checked={item.checked} onChange={() => handleCheck(item)} />{item.task}
                    <div className='btnDiv'>
                    <button className='editbtn btnSize' type='button' onClick={() => handleEdit(item)}>Edit</button>
                    <button className="deletebtn btnSize" type="button" onClick={() => handleDelete(item.id)}>-</button>
                    </div></li>
            })
        : <h2>No Items to display!</h2>
        }
    </ul>
    
  )
}

export default ListItems