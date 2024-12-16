import React from 'react'

export default function InputField({text, handleText, submitTodo}) {
  
  return (
		<>
			<label>
				<input
					value={text}
					onChange={e => handleText(e.target.value)}
				/>
				<button onClick={submitTodo}>Add to-do</button>
			</label>
		</>
	)
}
