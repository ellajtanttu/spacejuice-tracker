import React from "react";
import PropTypes from "prop-types";

//     name: "Luminous Lime",
//     distributor: "Hydrus Galaxy Inc.",
//     flavor: "Lime",
//     price: "$24 / Canister",
//     canisterCount: "121"

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
        <input type="text" name="distributor" placeholder="Hydrus Galaxy Inc." />
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
        <input type="number" name="canisterCount" min="0" />
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
