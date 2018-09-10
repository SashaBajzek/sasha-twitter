import * as constants from "../constants";
import { ITweet } from "../types/index";

export interface ISetTweets {
  type: constants.SET_TWEETS;
  tweetsList: ITweet[];
}

export interface IAddTweet {
  type: constants.ADD_TWEET;
  tweetText: string;
}

export interface IRetweetTweet {
  id: number;
  retweeted: boolean;
  type: constants.RETWEET_TWEET;
}

export interface ILikeTweet {
  id: number;
  liked: boolean;
  type: constants.LIKE_TWEET;
}

export type SashaTwitterAction =
  | ISetTweets
  | IAddTweet
  | IRetweetTweet
  | ILikeTweet;

export function setTweets(tweetsList: any): ISetTweets {
  return {
    tweetsList,
    type: constants.SET_TWEETS
  };
}

export function addTweet(tweetText: string): IAddTweet {
  return {
    tweetText,
    type: constants.ADD_TWEET
  };
}

export function retweetTweet(id: any, retweeted: boolean): IRetweetTweet {
  return {
    id,
    retweeted,
    type: constants.RETWEET_TWEET
  };
}

export function likeTweet(id: any, liked: boolean): ILikeTweet {
  return {
    id,
    liked,
    type: constants.LIKE_TWEET
  };
}
