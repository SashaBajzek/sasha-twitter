export interface IStoreState {
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
