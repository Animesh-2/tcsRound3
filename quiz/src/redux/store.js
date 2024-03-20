import { legacy_createStore} from 'redux';
import rootReducer from './reducers';
import { createStore} from 'redux';

const store = createStore(rootReducer);

export default store;
