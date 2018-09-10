import {
  ADD_TWEET,
  LIKE_TWEET,
  RETWEET_TWEET,
  SET_TWEETS
} from "../constants/index";
import { IStoreState, ITweet } from "../types/index";

import { SashaTwitterAction } from "../actions";

import update from "immutability-helper";

const characterLimit: number = 140;

function setTweets(state: IStoreState, tweetsList: ITweet[]) {
  const initialState = update(state, {
    maxCharacters: { $set: characterLimit },
    tweets: { $set: tweetsList }
  });
  return Object.assign({}, initialState);
}

function addTweet(state: IStoreState, tweetText: string) {
  // Calculate current max id to get id for new tweet
  const getMaxTweetId: any = (max: number, cur: number) => Math.max(max, cur);

  const maxTweetId = state.tweets.map(el => el.id).reduce(getMaxTweetId);

  const tweetId = maxTweetId + 1;
  const updatedTweets = update(state.tweets, {
    $push: [
      {
        author: "dabridginator",
        avatar: "avatar.jpg",
        id: tweetId,
        liked: false,
        retweeted: false,
        time: "now",
        tweetText
      }
    ]
  });
  return Object.assign({}, state, {
    tweets: updatedTweets
  });
}

function likeTweet(state: IStoreState, liked: boolean, id: number) {
  const updatedTweets = update(state.tweets, {
    [id]: {
      liked: {
        $apply: (x: boolean) => !x
      }
    }
  });
  return Object.assign({}, state, {
    tweets: updatedTweets
  });
}

function retweetTweet(state: IStoreState, liked: boolean, id: number) {
  const updatedTweets = update(state.tweets, {
    [id]: {
      retweeted: {
        $apply: (x: boolean) => !x
      }
    }
  });
  return Object.assign({}, state, {
    tweets: updatedTweets
  });
}

export function sashaTwitterReducer(
  state: IStoreState,
  action: SashaTwitterAction
): IStoreState {
  switch (action.type) {
    case SET_TWEETS:
      return setTweets(state, action.tweetsList);
    case ADD_TWEET:
      return addTweet(state, action.tweetText);
    case LIKE_TWEET:
      return likeTweet(state, action.liked, action.id);
    case RETWEET_TWEET:
      return retweetTweet(state, action.retweeted, action.id);
  }
  return state;
}

/*
import {
  ADD_TWEET,
  LIKE_TWEET,
  RETWEET_TWEET,
  SET_TWEETS
} from "../constants/index";
import { IStoreState, ITweet } from "../types/index";

import { SashaTwitterAction } from "../actions";

import update from "immutability-helper";

const characterLimit: number = 140;

function setTweets(state: IStoreState, tweetsList: ITweet[]) {
  return update(state, {
    maxCharacters: characterLimit,
    tweets: { $set: tweetsList }
  });
}

function addTweet(state: IStoreState, tweetText: string) {
  // Calculate current max id to get id for new tweet
  const getMaxTweetId: any = (max: number, cur: number) => Math.max(max, cur);

  const maxTweetId = state.tweets.map(el => el.id).reduce(getMaxTweetId);

  const tweetId = maxTweetId + 1;
  return update(state, {
    tweets: {
      $push: [
        {
          author: "dabridginator",
          avatar: "avatar.jpg",
          id: tweetId,
          liked: false,
          retweeted: false,
          time: "now",
          tweetText
        }
      ]
    }
  });
}

function likeTweet(state: IStoreState, liked: boolean, tweetId: number) {
  return update(state, {
    tweets: {
      [tweetId]: {
        liked: {
          $set: liked
        }
      }
    }
  });
}

function retweetTweet(state: IStoreState, retweeted: boolean, tweetId: number) {
  return update(state, {
    tweets: {
      [tweetId]: {
        retweeted: {
          $set: retweeted
        }
      }
    }
  });
}

export function sashaTwitterReducer(
  state: IStoreState,
  action: SashaTwitterAction
): IStoreState {
  switch (action.type) {
    case SET_TWEETS:
      return setTweets(state, action.tweetsList);
    case ADD_TWEET:
      return addTweet(state, action.tweetText);
    case LIKE_TWEET:
      return likeTweet(state, action.liked, action.tweetId);
    case RETWEET_TWEET:
      return retweetTweet(state, action.retweeted, action.tweetId);
  }
  return state;
}
*/
