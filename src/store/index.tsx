import {
  Action,
  AnyAction,
  combineReducers,
  createStore,
  Dispatch
} from "redux";
import { reducer as formReducer } from "redux-form";
import { counterReducer, ICounterState } from "./counter";
import { ITweetsState, tweetsReducer } from "./tweets";

// The top-level state object
export interface IApplicationState {
  counter: ICounterState;
  form: any;
  tweets: ITweetsState;
}

// Additional props for connected React components. This prop is passed by default with `connect()`
export interface IConnectedReduxProps<A extends Action = AnyAction> {
  dispatch: Dispatch<A>;
}

// Whenever an action is dispatched, Redux will update each top-level application state property
// using the reducer with the matching name. It's important that the names match exactly, and that
// the reducer acts on the corresponding ApplicationState property type.
export const rootReducer = combineReducers<IApplicationState>({
  counter: counterReducer,
  form: formReducer,
  tweets: tweetsReducer
});

const store = createStore(
  rootReducer,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
