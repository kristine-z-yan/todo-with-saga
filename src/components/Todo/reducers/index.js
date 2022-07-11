import {
  GET_TODOS,
  ADD_TODO,
  ADD_TODO_SUCCESS,
  COMPLETE_TODO,
  DELETE_TODO_SUCCESS,
  GET_TODOS_SUCCESS
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
      return {
        ...state,
        loading: false
      }
    }
    case COMPLETE_TODO: {
      return {
        ...state,
        loading: true
      }
    }
    case DELETE_TODO_SUCCESS: {
      return {
        ...state,
        loading: true
      }
    }
    default: {
      return {...state}
    }
  }
}