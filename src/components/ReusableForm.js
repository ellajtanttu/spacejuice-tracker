import React from "react";
import PropTypes from "prop-types";

function ReusableForm(props) {
  return (
    <form onSubmit={props.formSubmissionHandler}>
      <div>
        <label htmlFor="name">Juice Name</label>
        <br />
        <input type="text" name="name" placeholder="Luminous Lime" />
      </div>
      <br />

      <div>
        <label htmlFor="distributor">Distributor</label>
        <br />
        <input
          type="text"
          name="distributor"
          placeholder="Hydrus Galaxy Inc."
        />
      </div>
      <br />

      <div>
        <label htmlFor="flavor">Flavor</label>
        <br />
        <input type="text" name="flavor" placeholder="Lime" />
      </div>
      <br />

      <div>
        <label htmlFor="price">Price</label>
        <br />
        <input type="text" name="price" placeholder="$24 / Canister" />
      </div>
      <br />

      <div>
        <label htmlFor="canisterCount">Available Canisters out of 123</label>
        <br />
        <input type="number" name="canisterCount" min="0" max="123" />
      </div>
      <br />

      <button type="submit">Submit</button>
    </form>
  );
}

ReusableForm.propTypes = {
  formSubmissionHandler: PropTypes.func,
  buttonText: PropTypes.string,
};

export default ReusableForm;