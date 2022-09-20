import { TodoList } from "./components/TodoList";
import { UserList } from "./components/UserList";

export const App = () => {
  return (
    <div>
      <UserList/>
      <hr />
      <TodoList/>
    </div>
  )
};
