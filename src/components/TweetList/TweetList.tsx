import * as React from "react";
import { connect } from "react-redux";

import { IApplicationState } from "../../store/index";
import { ITweet } from "../../store/tweets";

import Tweet from "../Tweet/Tweet";

// Props passed from mapStateToProps
interface IPropsFromState {
  tweetsList: ITweet[];
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type TweetListContainerProps = IPropsFromState;

class TweetList extends React.Component<TweetListContainerProps> {
  public render() {
    const { tweetsList } = this.props;

    return (
      <section className="TweetList">
        {tweetsList.map(tweet => (
          <Tweet key={tweet.id} tweet={tweet} />
        ))}
      </section>
    );
  }
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ tweets }: IApplicationState) => ({
  tweetsList: tweets.tweetsList
});

export default connect(
  mapStateToProps,
  null
)(TweetList);
