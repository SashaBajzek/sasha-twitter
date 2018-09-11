import * as React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

import { IMaxCharacters } from "../../store/counter";

interface ICustomProps {
  customText: string;
  maxCharacters: IMaxCharacters;
}

class FormComponent extends React.Component<
  ICustomProps & InjectedFormProps<{}, ICustomProps>
> {
  public render() {
    const { handleSubmit, customText, maxCharacters } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <p>{customText}</p>
        </div>
        <p>Max Characters: {maxCharacters}</p>
        <button type="submit">Submit Tweet</button>
      </form>
    );
  }
}

const SubmitTweetForm = reduxForm<{}, ICustomProps>({
  form: "form"
})(FormComponent);

export default SubmitTweetForm;
