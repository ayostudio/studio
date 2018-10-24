import { createStore, applyMiddleware, combineReducers } from 'redux';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunkMiddleware from 'redux-thunk';

// import exampleReducer from './store/example/reducer';

export default function initializeStore(initialState = {}) {
  return createStore(
    combineReducers({
      // example: exampleReducer,
    }),
    initialState,
    composeWithDevTools(applyMiddleware(thunkMiddleware)),
  );
}
