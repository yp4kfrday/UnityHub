import React, { useState } from "react"
import styles from './TodoPage.module.css'
import { TodoList, InputField, TodoItem } from "./components";
import { useAppDispatch } from "../../hooks/redux-hooks";
import { addTodo } from "../../store/slices/todoSlices";

const Todo: React.FC = () => {
    const [text, setText] = useState('');
    const dispatch = useAppDispatch();

    const handleAction = () => {
        if (text.trim().length) {
            dispatch(addTodo(text));
            setText('');
        }
    }
    return (
        <div>
            <InputField
                value={text}
                updateText={setText}
                handleAction={handleAction}
            />
            <TodoList />
        </div>
    )
}

export { Todo } 