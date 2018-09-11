import * as React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import CharacterCounter from "../CharacterCounter/CharacterCounter";

interface ICustomProps {
  validated: boolean;
}

class FormComponent extends React.Component<
  ICustomProps & InjectedFormProps<{}, ICustomProps>
> {
  public render() {
    const { handleSubmit } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tweetText">Input new tweet:</label>
          <Field name="tweetText" component="textarea" type="text" />
        </div>
        <CharacterCounter />
        <button type="submit">Submit Tweet</button>
      </form>
    );
  }
}

const SubmitTweetForm = reduxForm<{}, ICustomProps>({
  form: "createTweetForm" // a unique name for the form
})(FormComponent);

export default SubmitTweetForm;
