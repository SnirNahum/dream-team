import {
  combineReducers,
  compose,
  legacy_createStore as createStore,
} from "redux";
import { fplReducer } from "./reducers/fpl.reducer";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const rootReducer = combineReducers({
  fplModule: fplReducer,
});

export const store = createStore(rootReducer, composeEnhancers());

window.gStore = store;
