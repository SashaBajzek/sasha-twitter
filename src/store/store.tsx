import { createStore } from "redux";
import { SashaTwitterAction } from "../actions/index";
import { sashaTwitterReducer } from "../reducers/index";
import { IStoreState } from "../types/index";

const initialState = {
  tweets: {
    maxCharacters: 140,
    tweetsList: [
      {
        author: "dabridginator",
        avatar: "sasha-avatar.png",
        id: 0,
        liked: false,
        retweeted: false,
        time: "3h",
        tweetText: "Going to the beach today?"
      },
      {
        author: "dabridginator",
        avatar: "sasha-avatar.png",
        id: 1,
        liked: false,
        retweeted: false,
        time: "2h",
        tweetText: "Seashell hunting."
      },
      {
        author: "dabridginator",
        avatar: "sasha-avatar.png",
        id: 2,
        liked: false,
        retweeted: false,
        time: "1h",
        tweetText: "Stinson Beach is nice."
      }
    ]
  }
};

const store = createStore<IStoreState, SashaTwitterAction, any, any>(
  sashaTwitterReducer,
  initialState,
  (window as any).__REDUX_DEVTOOLS_EXTENSION__ &&
    (window as any).__REDUX_DEVTOOLS_EXTENSION__()
);

export default store;
