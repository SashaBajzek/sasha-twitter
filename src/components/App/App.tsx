import * as React from "react";
import { connect } from "react-redux";
import { Dispatch } from "redux";
import { reset } from "redux-form";
import "./App.css";

import { IApplicationState } from "../../store/index";

import { IMaxCharacters } from "../../store/counter";

import * as tweetsActions from "../../store/tweets/tweetsActions";

import SubmitTweetForm from "../SubmitTweetForm/SubmitTweetForm";
import TweetList from "../TweetList/TweetList";

// Props passed from mapStateToProps
interface IPropsFromState {
  maxCharacters: IMaxCharacters;
}

// Props passed from mapDispatchToProps
interface IPropsFromDispatch {
  addTweet: typeof tweetsActions.addTweet;
  resetForm: any;
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type AppContainerProps = IPropsFromState & IPropsFromDispatch;

class App extends React.Component<AppContainerProps> {
  public handleTweetSubmit = (values: any) => {
    // tslint:disable-next-line:no-console
    console.log("submit values", values);
    this.props.addTweet(values.newTweetText);
    this.props.resetForm();
  };

  public render() {
    return (
      <div className="App">
        <h1>BeachTwitter</h1>
        <SubmitTweetForm
          maxCharacters={this.props.maxCharacters}
          onSubmit={this.handleTweetSubmit}
        />
        <TweetList />
      </div>
    );
  }
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ counter }: IApplicationState) => ({
  maxCharacters: counter.maxCharacters
});

// Mapping our action dispatcher to props is especially useful when creating container components.
const mapDispatchToProps = (dispatch: Dispatch) => ({
  addTweet: (tweetText: string) => dispatch(tweetsActions.addTweet(tweetText)),
  resetForm: () => dispatch(reset("createTweetForm"))
});

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App);
