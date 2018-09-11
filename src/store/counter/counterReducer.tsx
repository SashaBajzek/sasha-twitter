import { Reducer } from "redux";
import { CounterActionTypes, ICounterState } from "./counterTypes";

// Type-safe initialState!
const initialState: ICounterState = {
  maxCharacters: 140
};

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<ICounterState> = (state = initialState, action) => {
  switch (action.type) {
    case CounterActionTypes.SET_MAX_CHARACTERS: {
      return { ...state, maxCharacters: action.payload };
    }
    default: {
      return state;
    }
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as counterReducer };
