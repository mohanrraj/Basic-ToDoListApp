import { createContext, useState, useEffect } from "react";
import api from "../API/api";

const DataContext = createContext({});

export const DataProvider = ({children}) => {

    const [items, setItems] = useState([]);
    const [searchInput, setSearchInput] = useState("");
    const [isEdit, setIsEdit] = useState(false);
    const [editItem, setEditItem] = useState({});
    const [isLoading, setIsLoading] = useState(true);
  
    useEffect(()=>{
  
      async function fetchData(){
        setIsLoading(true);
        try{
          const response = await api.get("/tasks");
          await setItems(response.data);
        }catch(err){
          console.error(err.stack);
        }finally{
            setIsLoading(false);
        }
      }
      fetchData();
  
    }, [])
  
    async function handleAdd(task){
  
      const id = items.length === 0 ? 1 : items[items.length - 1].id + 1;
      const newTask = {id, task, checked : false};
  
      setItems([...items, newTask]);
  
      try{
        await api.post("/tasks", newTask);
      }catch(err){
        console.error(err.stack);
      }
  
    }
  
    function handleEdit(item){
      setIsEdit(true);
      setEditItem(item);
    }
  
    async function handleDelete(id){
      try{
        await api.delete(`/tasks/${id}`);
      }catch(err){
        console.error(err.stack);
      }
  
      setItems((prevItems) => prevItems.filter(item => item.id !== id));
    }
  
    async function handleCheck(task){
  
      try{
        await api.patch(`/tasks/${task.id}`, {checked : !task.checked});
      }catch(err){
        console.error(err.stack);
      }
  
      setItems((prevItems) => prevItems.map(item => item.id === task.id ? {...item, checked : !item.checked} : item));
    }
  
    async function handleUpdate(newItem){
      try{
        await api.put(`/tasks/${newItem.id}`, newItem);
      }catch(err){
        console.error(err.stack);
      }finally{
        setIsEdit(false);
        setEditItem({});
      }
  
      setItems(prevItems => prevItems.map(item => item.id === newItem.id ? newItem : item));
      
    }
  
    function handleCancel(){
      setIsEdit(false);
      setEditItem({});
    }

    return (<DataContext.Provider value={{
       isEdit, isLoading, handleAdd, searchInput, setSearchInput, items, handleCheck, handleEdit, handleDelete, editItem, handleUpdate, handleCancel
    }}> {children} </DataContext.Provider>)
}

export default DataContext;