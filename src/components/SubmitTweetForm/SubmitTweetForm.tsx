import * as React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import CharacterCounter from "../CharacterCounter/CharacterCounter";

interface ICustomProps {
  validated: boolean; // Delete this
}

const validate = (values: any) => {
  const errors: any = {};
  if (!values.tweetText) {
    errors.tweetText = "tweet required";
  } else if (values.tweetText.length > 140) {
    errors.tweetText = "Must be less than or equal to 140 characters";
  }
  return errors;
};

class FormComponent extends React.Component<
  ICustomProps & InjectedFormProps<{}, ICustomProps>
> {
  public render() {
    const { handleSubmit, valid } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tweetText">Input new tweet:</label>
          <Field name="tweetText" component="textarea" type="text" />
        </div>
        <CharacterCounter />
        <button type="submit" disabled={!valid}>
          Submit Tweet
        </button>
      </form>
    );
  }
}

const SubmitTweetForm = reduxForm<{}, ICustomProps>({
  form: "createTweetForm", // a unique name for the form
  validate
})(FormComponent);

export default SubmitTweetForm;
