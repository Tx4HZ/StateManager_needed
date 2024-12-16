import TodoItem from "./TodoItem"

export default function TodoList({ todos, toggleTodoCompleted, removeTodo }) {
	return (
		<ul>
			{todos.map(todo => (
				<TodoItem
					key={todo.id}
					toggleTodoCompleted={toggleTodoCompleted}
					removeTodo={removeTodo}
					{...todo}
				/>
			))}
		</ul>
	)
}
