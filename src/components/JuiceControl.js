import React from "react";
import JuiceList from "./JuiceList";
import JuiceDetails from "./JuiceDetails";
import NewJuiceForm from "./NewJuiceForm";
import EditJuiceForm from "./EditJuiceForm";

class JuiceControl extends React.Component {
  constructor() {
    super();
    this.state = {
      mainJuiceList: [],
      pageShowing: 0,
      currentJuiceInDetails: null,
      editing: false
    };
  }

  handleClick = () => {
    if (this.state.editing) {
      this.setState(prevState => ({
        editing: false
      }));
    } else if (this.state.pageShowing === 1) {
      this.setState(prevState => ({
        pageShowing: 0,
        currentJuiceInDetails: null
      }));
    } else if (this.state.pageShowing === 0) {
      this.setState(prevState => ({
        pageShowing: 2,
        currentJuiceInDetails: null
      }));
    } else if (this.state.pageShowing === 2) {
      this.setState(prevState => ({
        pageShowing: 0
      }));
    } else {
      this.setState(prevState => ({
        pageShowing: 0
      }));
    }
  };

  handleAddingNewJuiceToList = newJuice => {
    const newMainJuiceList = this.state.mainJuiceList.concat(newJuice);
    this.setState({
      mainJuiceList: newMainJuiceList,
      editing: false,
      currentJuiceInDetails: null,
      pageShowing: 0
    });
  };

  handleChangingDetailView = juiceKey => {
    const newJuice = this.state.mainJuiceList.filter(juice => juice.id === juiceKey)[0];
    this.setState({ currentJuiceInDetails: newJuice, pageShowing: 1 });
  };

  handleDeletingJuice = id => {
    const newMainJuiceList = this.state.mainJuiceList.filter(juice => juice.id !== id);
    this.setState({
      mainJuiceList: newMainJuiceList,
      currentJuiceInDetails: null,
      pageShowing: 0
    });
  };

  handleEditClick = () => {
    this.setState({ editing: true });
  };

  handleEditingJuiceInList = juiceToEdit => {
    const editedMainJuiceList = this.state.mainJuiceList
      .filter(juice => juice.id !== this.state.currentJuiceInDetails.id)
      .concat(juiceToEdit);
    this.setState({
      mainJuiceList: editedMainJuiceList,
      editing: false,
      currentJuiceInDetails: null,
      pageShowing: 0
    });
  };

  handleCanisterMinusOne = canisterCount => {
    if (canisterCount > 0) {
      const editedMainJuiceList = this.state.mainJuiceList.filter(juice => (juice.canisterCount -= 1));
      this.setState({
        mainJuiceList: editedMainJuiceList,
        editing: false,
        pageShowing: 1
      });
    } else {
      return canisterCount;
    }
  };

  render() {
    let currentPage = null;
    let buttonText = null;
    const currentJuiceList = this.state.mainJuiceList;
    if (this.state.editing) {
      currentPage = <EditJuiceForm juice={this.state.currentJuiceInDetails} onEditJuice={this.handleEditingJuiceInList} />;
      buttonText = "Return to Juice Details";
    } else if (this.state.currentJuiceInDetails != null) {
      currentPage = (
        <JuiceDetails
          juice={this.state.currentJuiceInDetails}
          onClickingDelete={this.handleDeletingJuice}
          onClickingEdit={this.handleEditClick}
          onClickingSoldCanister={this.handleCanisterMinusOne}
        />
      );
      buttonText = "Go back";
    } else if (this.state.pageShowing === 0) {
      currentPage = <JuiceList currentJuiceList={currentJuiceList} onJuiceClick={this.handleChangingDetailView} />;
      buttonText = "Create new juice";
    } else if (this.state.pageShowing === 2) {
      currentPage = (
        <NewJuiceForm
          onNewJuiceCreation={this.handleAddingNewJuiceToList}
          // onClickingBack={this.handleClickingBackToList}
        />
      );
      buttonText = "Go back";
    }
    return (
      <React.Fragment>
        {currentPage}
        <button onClick={this.handleClick}>{buttonText}</button>
      </React.Fragment>
    );
  }
}

export default JuiceControl;