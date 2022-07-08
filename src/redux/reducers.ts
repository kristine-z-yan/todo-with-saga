import {combineReducers} from 'redux';
import todoReducer from '../components/Todo/reducers';

const initial = {};

// export function appReducer(state = initial) {
//   return state;
// }

const rootReducer = combineReducers({
  // app: appReducer,
  todos: todoReducer
})

export default rootReducer;