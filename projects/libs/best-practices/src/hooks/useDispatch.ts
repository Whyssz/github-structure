export const useActions = () => {
  const dispatch = useDispatch();

  return useMemo(() => bindActionCreators(allActions, dispatch), [dispatch]);
};


// addition
import * as userActions from "./user/user.action";

export const allActions = {
  ...userActions,
};


