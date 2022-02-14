import React from "react";
import Juice from "./Juice";
import PropTypes from "prop-types";

function JuiceList(props) {
  return (
    <React.Fragment>
      {props.currentJuiceList.map((juice) =>
        <Juice 
          onJuiceClick={props.onJuiceClick}
          name= {juice.name}
          distributor= {juice.distributor}
          flavor= {juice.flavor}
          price= {juice.price}
          canisterCount= {juice.canisterCount}
          id= {juice.id}
          key= {juice.id}
        />
      )}
    </React.Fragment>
  )
}

JuiceList.propTypes = {
  juiceList: PropTypes.array,
  onJuiceClick: PropTypes.func
}

export default JuiceList;

