import * as React from "react";
import { Provider } from "react-redux";
import "./App.css";

import store from "../../store/store";

import TweetList from "../TweetList/TweetList";

class App extends React.Component {
  public render() {
    return (
      <Provider store={store}>
        <div className="App">
          <h1>BeachTwitter</h1>
          <TweetList />
        </div>
      </Provider>
    );
  }
}

export default App;
