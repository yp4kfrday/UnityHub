import React from "react";
import { useAppDispatch } from "../../../../hooks/redux-hooks"
import { toggleTodoComplete, removeTodo } from "../../../../store/slices/todoSlices"

interface TodoItemProps {
    id: string,
    title: string,
    completed: boolean,
}

const TodoItem: React.FC<TodoItemProps> = ({ id, title, completed }) => {
    const dispatch = useAppDispatch();

    return (
        <li>
            <input
                type="checkbox"
                checked={completed}
                onChange={() => toggleTodoComplete(id)}
            />
            <span>{title}</span>
            <span onClick={() => dispatch(removeTodo(id))}>
                &times;
            </span>
        </li>
    )
}

export { TodoItem }
