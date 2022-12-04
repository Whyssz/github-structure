import * as TodoActionCreators from '../actionCreators/todo';
import * as UserActionCreators from '../actionCreators/user';

export const AllActions = {
  ...UserActionCreators,
  ...TodoActionCreators
};