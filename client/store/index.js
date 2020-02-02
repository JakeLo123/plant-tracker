import { createStore, combineReducers, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { composeWithDevTools } from 'redux-devtools-extension';
import thunk from 'redux-thunk';
import userReducer from './user';
import plantsReducer from './plants';

const rootReducer = combineReducers({
  user: userReducer,
  plants: plantsReducer,
});

const logger = createLogger({ collapsed: true });
const middleware = composeWithDevTools(applyMiddleware(thunk, logger));

const store = createStore(rootReducer, middleware);

export default store;
