
// store: "Redux store bring togthers the store,actions and reducer that together make the Application"

import { createStore } from 'redux'
import rootReducer from "./reducers";

const store = createStore(rootReducer ,  window.__REDUX_DEVTOOLS_EXTENSION__ && window.__REDUX_DEVTOOLS_EXTENSION__())


export default store;