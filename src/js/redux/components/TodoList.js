import Todo from "./Todo";

const TodoList = ({todos,onTodoClick}) => {
	<ul>
		{todos.maps(todo=>{
			<Todo key={todo.id} {...todo} onClick={()=>onTodoClick(todo.id)} />
		})}
	</ul>
}