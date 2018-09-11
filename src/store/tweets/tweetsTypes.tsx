// This file holds our state type, as well as any other types related to this Redux store.

export interface ITweet {
  author: string;
  avatar: string;
  id: number;
  liked: boolean;
  retweeted: boolean;
  time: string;
  tweetText: string;
}

// Use const enums for better autocompletion of action type names. These will
// be compiled away leaving only the final value in your compiled code.
//
// Define however naming conventions you'd like for your action types, but
// personally, I use the `@@context/ACTION_TYPE` convention, to follow the convention
// of Redux's `@@INIT` action.
export const enum TweetsActionTypes {
  SET_TWEETS = "@@tweets/SET_TWEETS",
  ADD_TWEET = "@@tweets/ADD_TWEET",
  RETWEET_TWEET = "@@tweets/RETWEET_TWEET",
  LIKE_TWEET = "@@tweets/LIKE_TWEET"
}

// Declare state types with `readonly` modifier to get compile time immutability.
// https://github.com/piotrwitek/react-redux-typescript-guide#state-with-type-level-immutability
export interface ITweetsState {
  readonly tweetsList: ITweet[];
}
