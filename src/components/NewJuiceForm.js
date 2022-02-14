import React from "react";
import { v4 } from "uuid";
import PropTypes from "prop-types";
import ReusableForm from "./ReusableForm";

function NewJuiceForm(props) {
  function handleNewJuiceFormSubmission(event) {
    event.preventDefault();
    props.onNewJuiceCreation({
      name: event.target.name.value,
      distributor: event.target.distributor.value,
      price: event.target.price.value,
      flavor: event.target.flavor.value,
      canisterCount: parseInt(event.target.canisterCount.value),
      id: v4(),
    });
  }

  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleNewJuiceFormSubmission}
        buttonText="Create"
      />
    </React.Fragment>
  );
}

NewJuiceForm.propTypes = {
  onNewJuiceCreation: PropTypes.func,
};

export default NewJuiceForm;
