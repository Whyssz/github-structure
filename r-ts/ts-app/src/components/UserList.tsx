import { useEffect } from "react";
import { useActions } from "../hooks/useActions";
import { useTypedSelector } from "../hooks/useTypedSelector";

export const UserList: React.FC = () => {
  const {users, loading, error} = useTypedSelector(state => state.users)
  const {fetchUsers} = useActions()

  useEffect(() => {
    fetchUsers()
  }, [])

  const load = <h1>Loading...</h1>

  const err = <h1>Error...</h1>

  const user = (users:any[]) => {
    return users.map(item => <div key={item.id}>{item.name}</div>)
  }

  const list = user(users)

  return (
    <div>
      {loading ? load : error === null ? list : err}
    </div>
  )
};
