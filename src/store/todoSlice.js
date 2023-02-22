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
        completeTodo(state, action) {
            const competedTodo = state.todoList.find(todo => todo.id === action.payload);
            competedTodo.todoStatus = !competedTodo.todoStatus
        }
    }
})

export const {addTodo, removeTodo, completeTodo} = todoSlice.actions;
export default todoSlice.reducer;