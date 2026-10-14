import React, { useState } from 'react'

const OvieTodo = () => {
    const [todos, setTodo] = useState([])
    const [inputeValue, setInputValue] = useState("")

    const handleSubmit = (e) => {

        e.preventDefault()


        if(inputeValue.trim()){
            setTodo([...todos, inputeValue])
            setInputValue("")
        }
    }

    const handleChange = (e) => {
        setInputValue(e.target.value)

    }              







  return (
    <div>
        <form onSubmit={handleSubmit}>
            <input type="text" value={inputeValue} onChange={handleChange} placeholder='Add to Todo'/>
            <button type='submit'>Add Todo</button>
        </form>
        <ul>
            <h1>Todo List</h1>
            {todos.map((todo, index) =>(
                <li key={index}>
                    {todo}
                </li>
            ))}
            
        </ul>
        
    </div>
  )
}

export default OvieTodo