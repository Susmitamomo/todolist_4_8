const TodoList = () => {
    const [todos, dispatch] = useReducer(reducer, initialState);
    const [newTodo, setNewTodo] = useState('');
    const [editId, setEditId] = useState(null);
    const [editValue, setEditValue] = useState('');
  
    const handleInputChange = event => {
      setNewTodo(event.target.value);
    };
  
    const handleAddTodo = () => {
      if (newTodo.trim() !== '') {
        dispatch({
          type: 'ADD_TODO',
          payload: {
            userId: 1,
            id: todos.length + 1,
            title: newTodo,
            completed: false
          }
        });
        setNewTodo('');
      }
    };
  
    const handleToggleTodo = todo => {
      dispatch({ type: 'TOGGLE_TODO', payload: todo });
    };
  
    const handleDeleteTodo = todo => {
      dispatch({ type: 'DELETE_TODO', payload: todo });
    };
  
    const handleEditTodo = todo => {
      setEditId(todo.id);
      setEditValue(todo.title);
    };
  
    const handleSaveTodo = () => {
      if (editValue.trim() !== '') {
        dispatch({
          type: 'EDIT_TODO',
          payload: { id: editId, title: editValue }
        });
        setEditId(null);
      }
    };
  
    return (
      <div>
        <h1>Todo List</h1>
        <input
          type="text"
          value={newTodo}
          onChange={handleInputChange}
          placeholder="Enter a new todo"
        />
        <button onClick={handleAddTodo}>Add Todo</button>
        <ul>
          {todos.map(todo => (
            <li key={todo.id}>
              <input
                type="checkbox"
                checked={todo.completed}
                onChange={() => handleToggleTodo(todo)}
              />
              {editId === todo.id ? (
                <input
                  type="text"
                  value={editValue}
                  onChange={e => setEditValue(e.target.value)}
                />
              ) : (
                <span>{todo.title}</span>
              )}
              {editId !== todo.id && (
                <button onClick={() => handleDeleteTodo(todo)} disabled={!todo.completed}>
                  Delete
                </button>
              )}
              {editId !== todo.id && (
                <button onClick={() => handleEditTodo(todo)}>Edit</button>
              )}
              {editId === todo.id && <button onClick={handleSaveTodo}>Save</button>}
            </li>
          ))}
        </ul>
      </div>
    );
  };
  
  export default TodoList;
  