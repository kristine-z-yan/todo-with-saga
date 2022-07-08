import {
  GET_TODOS,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  COMPLETE_TODO,
  COMPLETE_ALL_TODOS,
  DELETE_ALL_TODOS,
  DELETE_TODO, GET_TODOS_SUCCESS
} from './actions';

const initialState = {
  all: [],
  loading: false,
  filter: ''
};

export default function todoReducer (state = initialState, action) {
  switch (action.type) {
    case GET_TODOS: {
      return {
        ...state,
        loading: true
      }
    }
    case GET_TODOS_SUCCESS: {
      return {
        ...state,
        loading: false,
        all: action.payload
      }
    }
    case ADD_TODO: {
      return {
        ...state,
        loading: true
      }
    }
    case ADD_TODO_SUCCESS: {
      state.all = [
        ...state.all,
        {
          text: action.payload,
          completed: false,
          // id: Math.floor(Math.random()*100)
        }
      ]
    }
    case COMPLETE_TODO: {

    }
    default: {
      return {...state}
    }
  }
}