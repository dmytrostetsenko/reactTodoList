import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    todoList: []
}
const todoSlice = createSlice({
    name: 'todoes',
    initialState: initialState,
    reducers: {
        addTodo(state, action) {
            state.todoList.push({
                id: Date.now(), 
                time: new Date().toLocaleDateString(), 
                todoStatus: false,
                title: action.payload.title,
                description: action.payload.description
            })
        },
        removeTodo(state, action) {
            state.todoList = state.todoList.filter(todo => todo.id !== action.payload)
        },
        updateTodo(state, action) {
            state.todoList = state.todoList.map((todo) => {
                if (todo.id === action.payload.id){
                    return action.payload
                }
            return todo;
            });
        },
        completeTodo(state, action) {
            const competedTodo = state.todoList.find(todo => todo.id === action.payload);
            competedTodo.todoStatus = !competedTodo.todoStatus
        }
    }
})

export const {addTodo, removeTodo, updateTodo, completeTodo} = todoSlice.actions;
export default todoSlice.reducer;