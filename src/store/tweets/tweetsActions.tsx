import { action } from "typesafe-actions";
import { ITweet, TweetsActionTypes } from "./tweetsTypes";

// Here we use the `action` helper function provided by `typesafe-actions`.
// This library provides really useful helpers for writing Redux actions in a type-safe manner.
// For more info: https://github.com/piotrwitek/typesafe-actions

// Remember, you can also pass parameters into an action creator. Make sure to
// type them properly as well.

export const addTweet = (tweetText: string) =>
  action(TweetsActionTypes.ADD_TWEET, tweetText);
export const likeTweet = (id: number) =>
  action(TweetsActionTypes.LIKE_TWEET, id);
export const retweetTweet = (id: number) =>
  action(TweetsActionTypes.RETWEET_TWEET, id);
export const setTweets = (tweetsList: ITweet[]) =>
  action(TweetsActionTypes.SET_TWEETS, tweetsList);
