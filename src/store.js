import CounterReducer from './reducers/counterReducer'
import {createStore,applyMiddleware,compose} from 'redux';
import thunk from 'redux-thunk'
const store = createStore(CounterReducer,compose(applyMiddleware(thunk)));
export default store;