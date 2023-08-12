import React from "react"


interface NewTodoFormProps {
    value: string,
    updateText: (str: string) => void,
    handleAction: () => void,
}

const InputField: React.FC<NewTodoFormProps> = ({ value, updateText, handleAction }) => {

    return (
        <label>
            <input
                placeholder="new todo"
                value={value}
                onChange={(e) => updateText(e.target.value)}
            />
            <button onClick={handleAction}>Add todo</button>
        </label>
    )
}

export { InputField }