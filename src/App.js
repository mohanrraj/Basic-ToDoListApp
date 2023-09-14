import React from 'react'
import Input from './components/Input';
import Search from './components/Search';
import ListItems from "./components/ListItems"
import { DataProvider } from './DataContext/DataContext';

const App = () => {

  return (
    <div className='app'>
      <header>
        <h1>Welcome to ToDoList App!</h1>
      </header>
      <DataProvider>
        <Input />
        <Search />
        <ListItems/>
      </DataProvider>
    </div>
  )
}

export default App;