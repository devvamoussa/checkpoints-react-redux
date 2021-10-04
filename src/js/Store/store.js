import { createStore } from "redux";
import rootReducers from "../Reducers/add_reducers";
// import thunk from "redux-thunk";
// import composeWithdevtools from "redux-devtools-extension";



const store = createStore(rootReducers, 
    // composeWithdevtools(applyMiddleware(thunk))
    );

export default store;