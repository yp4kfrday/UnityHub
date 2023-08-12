import React from 'react'
import { useAppSelector } from '../../../../hooks/redux-hooks'
import { TodoItem } from '../TodoItem/TodoItem'

const TodoList: React.FC = () => {
    const todos = useAppSelector(state => state.todos.list)

    return (
        <ul>
            {todos.map((todo) => (
                <TodoItem
                    key={todo.id}
                    {...todo}
                />
            ))}
        </ul>
    )
}

export { TodoList }
