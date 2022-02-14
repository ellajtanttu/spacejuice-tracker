import React from "react";
import ReusableForm from "./ReusableForm";
import PropTypes from "prop-types";

function EditJuiceForm(props) {
  const { juice } = props;

  function handleEditJuiceFormSubmission(event) {
    event.preventDefault();
    props.onEditJuice({
      name: event.target.name.value,
      distributor: event.target.distributor.value,
      price: event.target.price.value,
      flavor: event.target.flavor.value,
      canisterCount: parseInt(event.target.canisterCount.value),
      id: juice.id,
    });
  }
  return (
    <React.Fragment>
      <ReusableForm
        formSubmissionHandler={handleEditJuiceFormSubmission}
        buttonText="Update Juice"
      />
    </React.Fragment>
  );
}

EditJuiceForm.propTypes = {
  juice: PropTypes.object,
  onEditJuice: PropTypes.func,
};

export default EditJuiceForm;