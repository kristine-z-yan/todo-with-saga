import {createStore, applyMiddleware} from 'redux';
import createSagaMiddleware from 'redux-saga';
import rootSaga from '../components/Todo/sagas/index'
import reducers from './reducers';

const sagaMiddleware = createSagaMiddleware();

export const store = createStore(
  reducers,
  applyMiddleware(sagaMiddleware)
)

export type RootState = ReturnType<typeof store.getState>

sagaMiddleware.run(rootSaga);
