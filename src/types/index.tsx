export interface IStoreState {
  tweets: ITweetsProperties;
}

export interface ITweetsProperties {
  maxCharacters: number;
  tweetsList: ITweet[];
}

export interface ITweet {
  author: string;
  avatar: string;
  id: number;
  liked: boolean;
  retweeted: boolean;
  time: string;
  tweetText: string;
}
