import React, { useState } from "react"
import styles from './TodoPage.module.css'

const TodoPage: React.FC = () => {
    const [todos, setTodos] = useState([]);
    const [text, setText] = useState();

    // const addTodo = () => {
    //     if (text.trim().length) {
    //         setTodos(
    //             [...todos,
    //             ])
    //             setText('');
    //     }
    // }

    return (
        <div className={styles.Todo}>
            <label>
                <input value={text} onChange={(e) => setText(e.target.value)} />
                <button onClick={addTodo}>AddTodo</button>
            </label>
            </div>
    )
}

export { TodoPage } 