import React from "react";
import PropTypes from "prop-types";

function JuiceDetails(props) {
  const { juice, onClickingDelete, onClickingEdit } = props;
  return (
    <React.Fragment>
      <h2>{juice.name}</h2>
      <p>Distributor: {juice.distributor}</p>
      <p>Flavor: {juice.flavor}</p>
      <p>Price: {juice.price}</p>
      <p>Canisters Remaining: {juice.canisterCount}</p>
      <button onClick={() => onClickingDelete(juice.id)}>Delete juice</button>
      <button onClick={onClickingEdit}>Update Ticket</button>
    </React.Fragment>
  );
}

JuiceDetails.propTypes = {
  name: PropTypes.string,
  distributor: PropTypes.string,
  flavor: PropTypes.string,
  price: PropTypes.string,
  canisterCount: PropTypes.string,
  onClickingDelete: PropTypes.func,
  onClickingEdit: PropTypes.func,
};

export default JuiceDetails;
