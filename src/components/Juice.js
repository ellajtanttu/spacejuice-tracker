import React from "react";
import PropTypes from "prop-types";

function Juice(props) {
  function onClickFunction() {
    props.onJuiceClick(props.id);
  }
  return (
    <React.Fragment>
      <div>
        <h2>{props.name}</h2>
        <p>{props.price}</p>

        <h4>Canisters Remaining:</h4>

        {props.canisterCount === 0 ? (
          <p>Out of Stock</p>
        ) : (
          <p>quantity: {props.canisterCount}</p>
        )}
        <button onClick={onClickFunction}>See Details</button>
        </div>
    </React.Fragment>
  );
}


Juice.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  canisterCount: PropTypes.number,
  id: PropTypes.string,
  onJuiceSelection: PropTypes.func,
};

export default Juice;

