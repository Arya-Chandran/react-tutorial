import React, { Component } from "react";

class UserGreeting extends Component {
  constructor(props) {
    super(props);
    this.state = {
      isLoggedIn: true,
    };
  }

  render() {
   return this.state.isLoggedIn && <div>Welcome Arya</div>;

    //   if (this.state.isLoggedIn)
    //   {
    //       return(
    //         <div>Welcome Arya</div>
    //       )
    //   }else{
    //       return(
    //         <div> Welcome guest</div>
    //       )
    //   }
    // return (
    //   <div>
    //     <div>Welcome Arya</div>
    //     <div> Welcome guests</div>
    //   </div>
    // );
  }
}

export default UserGreeting;
