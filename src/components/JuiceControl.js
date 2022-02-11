import React from "react";
import JuiceList from "./JuiceList";
import NewJuiceForm from "./NewJuiceForm"
// import JuiceDetails from "./JuiceDetails";

class JuiceControl extends React.Component {
  constructor() {
    super();
    this.state = {
      mainJuiceList: [],
      pageShowing: 0,
      currentJuiceInDetails: null
    };
  }

/*
Juice List | 0 => button: NJ From (2)
Juice Details | 1 => button: List (0)
FUTURE: New Juice Form | 2 => button: Details(1)
*/

render() {
  return (
    <React.Fragment>

    </React.Fragment>
  )
  // let currentPage = null;
}


}

export default JuiceControl;