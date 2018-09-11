import * as React from "react";
import { Field, InjectedFormProps, reduxForm } from "redux-form";

import { IMaxCharacters } from "../../store/counter";

interface ICustomProps {
  maxCharacters: IMaxCharacters;
}

class FormComponent extends React.Component<
  ICustomProps & InjectedFormProps<{}, ICustomProps>
> {
  public render() {
    const { handleSubmit, maxCharacters } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <label htmlFor="newTweetText">Input new tweet:</label>
          <Field name="newTweetText" component="textarea" type="text" />
        </div>

        <p>Max Characters: {maxCharacters}</p>
        <button type="submit">Submit Tweet</button>
      </form>
    );
  }
}

const SubmitTweetForm = reduxForm<{}, ICustomProps>({
  form: "createTweetForm" // a unique name for the form
})(FormComponent);

export default SubmitTweetForm;
