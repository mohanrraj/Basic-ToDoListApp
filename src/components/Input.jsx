import React, { useContext, useState } from "react";
import DataContext from "../DataContext/DataContext";

const Input = () => {
    const [input, setInput] = useState("");
    const {handleAdd} = useContext(DataContext);
    return (
        <div>
            <label className="input" htmlFor="task">Task : </label>
            <input 
                type="text" 
                value = {input} 
                onChange={(e) => setInput(e.target.value)} 
                placeholder="Enter New Task"
            />
            <button className="btnSize addBtn" type="button" onClick={()=>{handleAdd(input); setInput("")}}>+</button>
        </div>
    )
}

export default Input;