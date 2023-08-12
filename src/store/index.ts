import { configureStore } from '@reduxjs/toolkit';
import userReducer from './slices/userSlices'
import todoReducer from './slices/todoSlices'

export const store = configureStore({
    reducer: {
        user: userReducer,
        todos: todoReducer
    }
});

export type AppDispatch = typeof store.dispatch;
export type RootState = ReturnType<typeof store.getState>; 