import React from "react"

export default function TodoItem({id, text, completed, toggleTodoCompleted, removeTodo}) {
	return (
		<li>
			<input
				type='checkbox'
				checked={completed}
				onChange={() => toggleTodoCompleted(id)}
			/>
			<span className={completed ? "completed" : ""}>{text}</span>
			<span className='delete' onClick={() => removeTodo(id)}>
				&times;
			</span>
		</li>
	)
}
