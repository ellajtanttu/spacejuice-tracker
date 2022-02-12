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
      pageShowing: 0,
      currentJuiceInDetails: null
    };
  }

  handleClick = () => {
    if (this.state.pageShowing === 0) {
      this.setState((prevState) => ({
        pageShowing: 2
      }))
    } else if (this.state.pageShowing === 1) {
      this.setState((prevState) => ({
        pageShowing: 0
      }))
    } else if (this.state.pageShowing === 2) {
      this.setState((prevState) => ({
        pageShowing: 0
      }))
    } else {
      this.setState((prevState) => ({
        pageShowing: 0
      }))
    }


  }

/*
Juice List | 0 => button: NJ From (2)
Juice Details | 1 => button: List (0)
FUTURE: New Juice Form | 2 => button: Details(1)
*/

render() {
  let currentlyVisiblePage = null;
  let buttonText = null;
  if (this.state.pageShowing === 2) {
    currentlyVisiblePage = <NewJuiceForm />
    buttonText = "View All Juices"
  } else if (this.state.pageShowing === 1) {
    currentlyVisiblePage = <JuiceDetails />
    buttonText = "View All Juices"
  } else {
    currentlyVisiblePage = <JuiceList />
    buttonText = "Add Juice"
  }
  return (
    <React.Fragment>
      {currentlyVisiblePage}
      <button onClick={this.handleClick}>{buttonText}</button>
    </React.Fragment>
  )
}


}

export default JuiceControl;