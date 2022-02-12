import React from "react";
import Juice from "./Juice";
import PropTypes from "prop-types";

const mainJuiceList = [
  {
    name: "Luminous Lime",
    distributor: "Hydrus Galaxy Inc.",
    flavor: "Lime",
    price: "$24 / Canister",
    canisterCount: "121"
  },
  {
    name: "Radial Raspberry",
    distributor: "Medusa Nebula corp.",
    flavor: "Raspberry",
    price: "$18 / Canister",
    canisterCount: "89"
  }
];

function JuiceList() {
  return (
    <React.Fragment>
      {mainJuiceList.map((juice, index) =>
        <Juice 
          name= {juice.name}
          distributor= {juice.distributor}
          flavor= {juice.flavor}
          price= {juice.price}
          canisterCount= {juice.canisterCount}
          key= {index}
        />
      )}
    </React.Fragment>
  )
}

export default JuiceList;