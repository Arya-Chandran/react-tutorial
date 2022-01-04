import React, { Component } from "react";

class EventBind extends Component {
  constructor() {
    super();
    this.state = {
      message: "hellooo",
    };
    // this.clickHandler = this.clickHandler.bind(this);
  }

  //   clickHandler() {
  //     this.setState({
  //       message: "good bye!!",
  //     });
  //   }

  clickHandler = () => {
    this.setState({
      message: "good bye!!",
    });
  };

  render() {
    return (
      <div>
        <div> {this.state.message} </div>
        <button onClick={this.clickHandler}>Click</button>
        {/* <button onClick={()=>this.clickHandler()}>Click</button> */}
        {/* <button onClick={this.clickHandler.bind(this)}>Click</button> */}
      </div>
    );
  }
}

export default EventBind;
