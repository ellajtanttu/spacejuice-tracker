import React from "react";
import PropTypes from "prop-types";

function Juice(props) {
  return (
    <React.Fragment>
        <h2>{props.name}</h2>
        <p>{props.price}</p>
        <p>Canisters Remaining: {props.canisterCount}</p>
    </React.Fragment>
  );
}


Juice.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  canisterCount: PropTypes.number
};

export default Juice;

