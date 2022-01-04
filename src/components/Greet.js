import React from "react";

// function Greet(props) {
//   return <h1> Hello Arya</h1>;
// }

const Greet =({name,heroName}) => {

    return( <div> 
        <h1> Hello {name} is also know as {heroName}</h1>
        {/* <p> {props.children}</p> */}
    </div>
    )
   
    
}

export default Greet;
