import {combineReducers} from 'redux';
import todoReducer from '../components/Todo/reducers';

const rootReducer = combineReducers({
  todos: todoReducer
})

export default rootReducer;