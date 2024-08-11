import { createContext, useContext } from "react";

export const TodoContext=createContext({
    todos: [{
        id: 1,
        todo:"hello",
        completed:false,
    }],
    addTodo:(todo)=>{},
    // editTodo:(id,todo)=>{},
    deleteTodo:(id)=>{},
    updateTodo:(id,todo)=>{},
    toggleComplete:(id)=>{},
});


export const useTodo=()=>{
    return useContext(TodoContext);
}

export const TodoProvider=TodoContext.Provider