import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";

import * as tweetsActions from "../../store/tweets/tweetsActions";

import { ITweet } from "../../store/tweets/tweetsTypes";

import * as avatar from "../../sasha-avatar.png";

// Separate state props + dispatch props to their own interfaces.

// Props passed from mapDispatchToProps
interface IPropsFromDispatch {
  retweetTweet: typeof tweetsActions.retweetTweet;
  likeTweet: typeof tweetsActions.likeTweet;
}

// Component-specific props.
interface IOtherProps {
  tweet: ITweet;
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type TweetContainerProps = IPropsFromDispatch;

class Tweet extends React.Component<TweetContainerProps & IOtherProps> {
  public retweeted = (retweeted: boolean) => {
    if (retweeted) {
      return " retweeted";
    } else {
      return "";
    }
  };

  public liked = (liked: boolean) => {
    if (liked) {
      return " liked";
    } else {
      return "";
    }
  };

  public handleRetweetClick = () => {
    this.props.retweetTweet(this.props.tweet.id);
  };

  public handleLikeClick = () => {
    this.props.likeTweet(this.props.tweet.id);
  };

  public render() {
    const { tweet } = this.props;
    return (
      <article
        className={`Tweet ${this.retweeted(tweet.retweeted) +
          this.liked(tweet.liked)}`}
      >
        <a
          href={`http://twitter.com/${tweet.author}`}
          className="tweet__avatar"
        >
          <img src={avatar} alt={tweet.author} />
        </a>
        <div className="tweet__details">
          <div className="tweet__metadata">
            <a
              href={`http://twitter.com/${tweet.author}`}
              className="tweet__author"
            >
              {tweet.author}
            </a>
            <small className="tweet__time">{tweet.time}</small>
          </div>
          <p className="tweet__content">{tweet.tweetText}</p>
          <button className="button--retweet" onClick={this.handleRetweetClick}>
            Retweet
          </button>
          <button className="button--like" onClick={this.handleLikeClick}>
            Like
          </button>
        </div>
      </article>
    );
  }
}

// Mapping our action dispatcher to props is especially useful when creating container components.
const mapDispatchToProps = (dispatch: Dispatch) => ({
  likeTweet: (id: number) => dispatch(tweetsActions.likeTweet(id)),
  retweetTweet: (id: number) => dispatch(tweetsActions.retweetTweet(id))
});

export default connect(
  null,
  mapDispatchToProps
)(Tweet);

/*
import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import * as actions from "../../actions/";
import { ITweet } from "../../types/index";

import * as avatar from "../../sasha-avatar.png";

interface IProps {
  likeTweet: any; // function
  retweetTweet: any; // function
  tweet: ITweet;
}

class Tweet extends React.Component<IProps, any> {
  public retweeted = (retweeted: boolean) => {
    if (retweeted) {
      return " retweeted";
    } else {
      return "";
    }
  };

  public liked = (liked: boolean) => {
    if (liked) {
      return " liked";
    } else {
      return "";
    }
  };

  public handleRetweetClick = () => {
    this.props.retweetTweet(this.props.tweet.id, this.props.tweet.retweeted);
  };

  public handleLikeClick = () => {
    this.props.likeTweet(this.props.tweet.id, this.props.tweet.liked);
  };

  public render() {
    const { tweet } = this.props;
    return (
      <article
        className={`Tweet ${this.retweeted(tweet.retweeted) +
          this.liked(tweet.liked)}`}
      >
        <a
          href={`http://twitter.com/${tweet.author}`}
          className="tweet__avatar"
        >
          <img src={avatar} alt={tweet.author} />
        </a>
        <div className="tweet__details">
          <div className="tweet__metadata">
            <a
              href={`http://twitter.com/${tweet.author}`}
              className="tweet__author"
            >
              {tweet.author}
            </a>
            <small className="tweet__time">{tweet.time}</small>
          </div>
          <p className="tweet__content">{tweet.tweetText}</p>
          <button className="button--retweet" onClick={this.handleRetweetClick}>
            Retweet
          </button>
          <button className="button--like" onClick={this.handleLikeClick}>
            Like
          </button>
        </div>
      </article>
    );
  }
}

function mapDispatchToProps(dispatch: Dispatch<actions.SashaTwitterAction>) {
  return {
    likeTweet: (id: number, liked: boolean) =>
      dispatch(actions.likeTweet(id, liked)),
    retweetTweet: (id: number, retweeted: boolean) =>
      dispatch(actions.retweetTweet(id, retweeted))
  };
}

export default connect(
  null,
  mapDispatchToProps
)(Tweet);
*/
