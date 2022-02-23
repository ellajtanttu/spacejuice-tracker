import React from "react";
import PropTypes from "prop-types";

function Juice(props) {
  function onClickFunction() {
    props.onJuiceClick(props.id);
  }

  return (
    <React.Fragment>
      <hr/>
      <div>
        <h2>Juice Name: {props.name}</h2>
        <p>Juice Price: {props.price}</p>

        <h4>Canisters Remaining:</h4>
        {props.canisterCount === 0 ? (
          <p>Out of Stock</p>
        ) : (
          <p>quantity: {props.canisterCount}</p>
        )}
        <button onClick={onClickFunction}>See Details</button>
      </div>
      <hr/>
    </React.Fragment>
  );
}

Juice.propTypes = {
  name: PropTypes.string,
  price: PropTypes.string,
  canisterCount: PropTypes.number,
  onJuiceSelection: PropTypes.func,
};

export default Juice;