import { all, call, apply, takeEvery, put } from "redux-saga/effects";
import {
  ADD_TODO, GET_SINGLE_TODO,
  GET_TODOS,
  GET_TODOS_SUCCESS,
  // GET_SINGLE_TODO
} from "../reducers/actions";

export function* getTodoList() {
  const request = yield call(
    fetch,
    `https://jsonplaceholder.typicode.com/todos`
  )
  const data = yield apply(request, request.json);
  console.log(data, '---data');
  yield put({
    type: GET_TODOS_SUCCESS,
    payload: data,
  });
}

export function* addTodo(action) {
  const request = yield call(
    fetch,
    `https://academic-cc5a9-default-rtdb.firebaseio.com/todos.json`,
    {
        method : 'POST',
        headers : {
          'Accept': 'application/json, application/xml, text/plain, text/html, *.*',
          'Content-Type' :'multipart/form-data, application/x-www-form-urlencoded;charset=utf-8',
        },
        body : JSON.stringify(
          {
            completed: false,
            text: action.taskLabel
          }
        )
    }
  )
  yield put({type: GET_TODOS})
}

export default function* rootSaga() {
  yield all([
    yield takeEvery(GET_TODOS, getTodoList),
    yield takeEvery(ADD_TODO, addTodo),
  ]);
}