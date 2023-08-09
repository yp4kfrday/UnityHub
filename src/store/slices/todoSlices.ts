import { PayloadAction, createSlice } from "@reduxjs/toolkit";

interface Todo {
    id: number;
    title: string;
    completed: boolean;
}

interface TodoState {
    todos: Todo[];
}

const initialState: TodoState = {
    todos: []
}

const todoSlice = createSlice({
    name: 'todos',
    initialState,
    reducers: {
        addTodo: (state, action: PayloadAction<Todo>) => {
            state.todos.push(action.payload);
        },
        removeAllTodos: (state) => {
            state.todos = [];
        },
    },
});

export const { addTodo, removeAllTodos } = todoSlice.actions

export default todoSlice.reducer
