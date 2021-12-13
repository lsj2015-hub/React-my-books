import { applyMiddleware, createStore } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import reducer from './modules/reducers';
import createSagaMiddleware from 'redux-saga';
import rootSaga from './modules/rootSaga';
import { routerMiddleware } from 'connected-react-router';
import history from '../history';
import TokenService from '../services/TokenService';

const create = () => {
  const token = TokenService.get();

  const sagaMiddleware = createSagaMiddleware();
  const store = createStore(
    reducer(history),
    // token
    {
      auth: {
        token,
        loading: false,
        error: null,
      },
    },
    composeWithDevTools(
      applyMiddleware(sagaMiddleware, routerMiddleware(history))
    )
  );

  sagaMiddleware.run(rootSaga);

  return store;
};

export default create;
