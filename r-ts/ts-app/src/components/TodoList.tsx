import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const TodoList: React.FC = () => {
  const {todos, page, limit, loading, error} = useTypedSelector(state => state.todos)

  const {fetchTodo, setTodoPage} = useActions()

  const pagination = [1,2,3,4,5]

  useEffect(() => {
    fetchTodo(page, limit)
  }, [page])

  const load = <h1>Loading...</h1>

  const err = <h1>Error...</h1>

  const user = (todo:any[]) => {
    return (
      <div>
        {todo.map(item => <div key={item.id}>{item.id} - {item.title}</div>)}
        <div style={{display: 'flex'}}>
          {pagination.map(item => (
            <div onClick={() => setTodoPage(item)} key={item} style={{border: item ===page ? '2px solid red' : '1px solid gray', padding: 7, margin: '5px', cursor: 'pointer'}}>{item}</div>
          ))}
        </div>
      </div>
    )
  }

  const list = user(todos)

  return (
    <div>
      {loading ? load : error === null ? list : err}
    </div>
  )
};
