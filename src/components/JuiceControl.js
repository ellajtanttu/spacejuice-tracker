import React from "react";
import JuiceDetails from "./JuiceDetails";
import JuiceList from "./JuiceList";
import NewJuiceForm from "./NewJuiceForm"
// import JuiceDetails from "./JuiceDetails";

class JuiceControl extends React.Component {
  constructor() {
    super();
    this.state = {
      // mainJuiceList: [],
      pageShowing: 0
    };
  }

/*
Juice List | 0 => button: NJ From (2)
Juice Details | 1 => button: List (0)
FUTURE: New Juice Form | 2 => button: Details(1)
*/

render() {
  let currentlyVisiblePage = null;
  if (this.state.pageShowing === 0) {
    currentlyVisiblePage = <JuiceList />
  } else if (this.state.pageShowing === 1) {
    currentlyVisiblePage = <JuiceDetails />
  } else {
    currentlyVisiblePage = <NewJuiceForm />
  }
  return (
    <React.Fragment>
      {currentlyVisiblePage}
    </React.Fragment>
  )
}


}

export default JuiceControl;