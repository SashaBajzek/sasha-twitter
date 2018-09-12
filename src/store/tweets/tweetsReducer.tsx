import { Reducer } from "redux";
import { ITweet, ITweetsState, TweetsActionTypes } from "./tweetsTypes";

import update from "immutability-helper";

// Type-safe initialState!
const initialState: ITweetsState = {
  tweetsList: [
    {
      author: "dabridginator",
      avatar: "sasha-avatar.png",
      id: 2,
      liked: false,
      retweeted: false,
      time: "1h",
      tweetText: "Stinson Beach is nice."
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
      id: 0,
      liked: false,
      retweeted: false,
      time: "3h",
      tweetText: "Going to the beach today?"
    }
  ]
};

function addTweet(state: ITweetsState, tweetText: string) {
  // Calculate current max id to get id for new tweet
  const getMaxTweetId: any = (max: number, cur: number) => Math.max(max, cur);

  const maxTweetId = state.tweetsList.map(el => el.id).reduce(getMaxTweetId);

  const tweetId = maxTweetId + 1;
  const updatedTweets = update(state.tweetsList, {
    $unshift: [
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
    tweetsList: updatedTweets
  });
}

function likeTweet(state: ITweetsState, id: number) {
  const updatedTweets = update(state.tweetsList, {
    [id]: {
      liked: {
        $apply: (x: boolean) => !x
      }
    }
  });
  return Object.assign({}, state, {
    tweetsList: updatedTweets
  });
}

function retweetTweet(state: ITweetsState, id: number) {
  const updatedTweets = update(state.tweetsList, {
    [id]: {
      retweeted: {
        $apply: (x: boolean) => !x
      }
    }
  });
  return Object.assign({}, state, {
    tweetsList: updatedTweets
  });
}

function setTweets(state: ITweetsState, tweetsList: ITweet[]) {
  const initialStateTweetsList = update(state, {
    tweetsList: { $set: tweetsList }
  });
  return Object.assign({}, initialStateTweetsList);
}

// Thanks to Redux 4's much simpler typings, we can take away a lot of typings on the reducer side,
// everything will remain type-safe.
const reducer: Reducer<ITweetsState> = (state = initialState, action) => {
  switch (action.type) {
    case TweetsActionTypes.ADD_TWEET:
      return addTweet(state, action.payload);
    case TweetsActionTypes.LIKE_TWEET:
      return likeTweet(state, action.payload);
    case TweetsActionTypes.RETWEET_TWEET:
      return retweetTweet(state, action.payload);
    case TweetsActionTypes.SET_TWEETS:
      return setTweets(state, action.payload);
    default:
      return state;
  }
};

// Instead of using default export, we use named exports. That way we can group these exports
// inside the `index.js` folder.
export { reducer as tweetsReducer };
