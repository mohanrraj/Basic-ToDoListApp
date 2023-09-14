import React, { useContext } from 'react'
import DataContext from '../DataContext/DataContext'

const Search = () => {

  const {searchInput, setSearchInput} = useContext(DataContext);
  
  return (
    <div>
        <label htmlFor='searchTask'>Search : </label>
        <input 
          type='text' 
          value = {searchInput} 
          onChange = {(e) =>setSearchInput(e.target.value)} 
          placeholder="Search Task"
        />
    </div>
  )
}

export default Search