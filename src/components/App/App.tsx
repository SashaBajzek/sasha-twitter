import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { reset } from "redux-form";
import "./App.css";

import * as tweetsActions from "../../store/tweets/tweetsActions";

import SubmitTweetForm from "../SubmitTweetForm/SubmitTweetForm";
import TweetList from "../TweetList/TweetList";

// Props passed from mapDispatchToProps
interface IPropsFromDispatch {
  addTweet: typeof tweetsActions.addTweet;
  resetForm: any;
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AppContainerProps = IPropsFromDispatch;

class App extends React.Component<AppContainerProps> {
  public handleTweetSubmit = (values: any) => {
    // tslint:disable-next-line:no-console
    console.log("submit values", values);
    this.props.addTweet(values.tweetText);
    this.props.resetForm();
  };

  public render() {
    return (
      <div className="App">
        <h1>BeachTwitter</h1>
        <SubmitTweetForm onSubmit={this.handleTweetSubmit} validated={false} />
        <TweetList />
      </div>
    );
  }
}

// Mapping our action dispatcher to props is especially useful when creating container components.
const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTweet: (tweetText: string) => dispatch(tweetsActions.addTweet(tweetText)),
  resetForm: () => dispatch(reset("createTweetForm"))
});

export default connect(
  null,
  mapDispatchToProps
)(App);
