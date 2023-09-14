import React, { useState, useContext } from 'react'

import DataContext from "../DataContext/DataContext"

const EditItem = () => {

  const {editItem, handleUpdate, handleCancel} = useContext(DataContext);

  const [editInput, setEditInput] = useState(editItem.task);



  return (
    <div>
      <label htmlFor='editTask'>Update Task : </label>
      <input type='text' value={editInput} onChange={(e) => setEditInput(e.target.value)} />
      <button className='btnSize updateBtn' type="button" onClick={() => {handleUpdate({...editItem, task : editInput})}} >✓</button>
      <button className = "btnSize cancelBtn" type="button" onClick = {() => handleCancel()}>X</button>
    </div>
  )
}

export default EditItem