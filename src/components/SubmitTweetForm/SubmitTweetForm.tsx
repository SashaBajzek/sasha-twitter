import * as React from "react";
import TextArea from "react-textarea-autosize";
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

const renderField = (field: any) => (
  <div>
    <TextArea
      minRows={2}
      {...field.input}
      placeholder="Compose new beachy Tweet..."
      type="text"
      className="SubmitTweetForm__field"
    />
    {field.meta.touched &&
      field.meta.error && <span className="error">{field.meta.error}</span>}
  </div>
);

class FormComponent extends React.Component<
  ICustomProps & InjectedFormProps<{}, ICustomProps>
> {
  public render() {
    const { handleSubmit, valid } = this.props;

    return (
      <form className="SubmitTweetForm" onSubmit={handleSubmit}>
        <div>
          <label htmlFor="tweetText" className="SubmitTweetForm__label">
            Input new tweet:
          </label>
          <Field name="tweetText" component={renderField} />
        </div>
        <div className="SubmitTweetForm__actions">
          <CharacterCounter />
          <input
            className="SubmitTweetForm__button"
            disabled={!valid}
            type="submit"
          />
        </div>
      </form>
    );
  }
}

const SubmitTweetForm = reduxForm<{}, ICustomProps>({
  form: "createTweetForm", // a unique name for the form
  validate
})(FormComponent);

export default SubmitTweetForm;
