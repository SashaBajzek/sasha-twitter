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
