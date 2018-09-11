import * as React from "react";
import { InjectedFormProps, reduxForm } from "redux-form";

interface ICustomProps {
  customText: string;
}

class FormComponent extends React.Component<
  ICustomProps & InjectedFormProps<{}, ICustomProps>
> {
  public render() {
    const { handleSubmit, customText } = this.props;

    return (
      <form onSubmit={handleSubmit}>
        <div>
          <p>{customText}</p>
        </div>
        <button type="submit">Submit Tweet</button>
      </form>
    );
  }
}

const SubmitTweetForm = reduxForm<{}, ICustomProps>({
  form: "form"
})(FormComponent);

export default SubmitTweetForm;
