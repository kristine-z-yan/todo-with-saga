import { all, call, takeEvery, put } from "redux-saga/effects";
import {
  ADD_TODO,
  GET_TODOS,
  GET_TODOS_SUCCESS,
  DELETE_TODO,
  DELETE_TODO_SUCCESS, COMPLETE_TODO, DELETE_ALL_TODOS, COMPLETE_ALL_TODOS,
} from "../reducers/actions";
import TodoApi from "../../../server/todoApi";
import todoApi from "../../../server/todoApi";

export function* getTodoList() {
  const data = yield call(TodoApi.getAll);
  yield put({
    type: GET_TODOS_SUCCESS,
    payload: data,
  });
}

export function* addTodo(action) {
  yield call(todoApi.add, action.payload);
}

export function* deleteTodo(action) {
  const request = yield call(TodoApi.delete, action.id)
  if(request.ok) {
    yield put({type: DELETE_TODO_SUCCESS, payload: request})
  }
}

export function* completeTodo(action) {
  yield call(TodoApi.complete, action.id)
}

export function* deleteAll() {
  yield call(TodoApi.deleteAll)
}

export function* completeAll() {
  yield call(TodoApi.completeAll)
}

export default function* rootSaga() {
  yield all([
    yield takeEvery(GET_TODOS, getTodoList),
    yield takeEvery(ADD_TODO, addTodo),
    yield takeEvery(DELETE_TODO, deleteTodo),
    yield takeEvery(COMPLETE_TODO, completeTodo),
    yield takeEvery(DELETE_ALL_TODOS, deleteAll),
    yield takeEvery(COMPLETE_ALL_TODOS, completeAll),
  ]);
}