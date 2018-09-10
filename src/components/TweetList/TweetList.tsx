import * as React from "react";
import { connect } from "react-redux";
import { IStoreState, ITweet } from "../../types/index";
import Tweet from "../Tweet/Tweet";

interface IProps {
  tweets: ITweet[];
}

class TweetList extends React.Component<IProps, any> {
  public render() {
    return (
      <section className="TweetList">
        {this.props.tweets.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </section>
    );
  }
}

function mapStateToProps({ tweets }: IStoreState) {
  return {
    tweets
  };
}

export default connect(
  mapStateToProps,
  null
)(TweetList);
