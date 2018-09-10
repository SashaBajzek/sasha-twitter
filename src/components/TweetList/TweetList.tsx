import * as React from "react";
import { connect } from "react-redux";
import { IStoreState, ITweet } from "../../types/index";
import Tweet from "../Tweet/Tweet";

interface IProps {
  tweetsList: ITweet[];
}

class TweetList extends React.Component<IProps, any> {
  public render() {
    return (
      <section className="TweetList">
        {this.props.tweetsList.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </section>
    );
  }
}

function mapStateToProps({ tweetsList }: IStoreState) {
  return {
    tweetsList
  };
}

export default connect(
  mapStateToProps,
  null
)(TweetList);
