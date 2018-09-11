import * as React from "react";
import { connect } from "react-redux";

import { IApplicationState } from "../../store/index";

// Props passed from mapStateToProps
interface IPropsFromState {
  remainingCharacters: number;
}

// Combine both state + dispatch props - as well as any props we want to pass - in a union type.
type CharacterCounterProps = IPropsFromState;

export class CharacterCounter extends React.Component<CharacterCounterProps> {
  public render() {
    return (
      <div className="SubmitTweetForm__counter">
        {this.props.remainingCharacters}
      </div>
    );
  }
}

// It's usually good practice to only include one context at a time in a connected component.
// Although if necessary, you can always include multiple contexts. Just make sure to
// separate them from each other to prevent prop conflicts.
const mapStateToProps = ({ counter, form }: IApplicationState) => {
  const tweetTextValue =
    form.createTweetForm &&
    form.createTweetForm.values &&
    form.createTweetForm.values.tweetText
      ? form.createTweetForm.values.tweetText
      : "";
  // tweetTextValue is undefined until it has text, so pass empty string to be able to use .length to calculate remainingCharacters

  return {
    remainingCharacters: counter.maxCharacters - tweetTextValue.length
  };
};

export default connect(
  mapStateToProps,
  null
)(CharacterCounter);
