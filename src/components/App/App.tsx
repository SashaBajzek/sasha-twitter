import * as React from "react";
import { Provider } from "react-redux";
import "./App.css";

import store from "../../store/index";

import SubmitTweetForm from "../SubmitTweetForm/SubmitTweetForm";
import TweetList from "../TweetList/TweetList";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>BeachTwitter</h1>
          <SubmitTweetForm customText="Hello World" />
          <TweetList />
        </div>
      </Provider>
    );
  }
}

export default App;
