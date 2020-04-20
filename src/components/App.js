import React from "react";
import NavBar from "./navbar/NavBar.js";

function App() {
  return (
    <React.Fragment>
      <NavBar />
      {/* nav bar
       > nav links // Three links same component
       > search bar
       > Tweet Button // submit button so individual component
       */}

      {/* body 
        > profile bar - columns 1
        > > profile box
        > > description box 
        > timeline feed - columns 2
        > > new tweet post bar
        > > tweets
        > suggestions box - columns 3
        > > profile preview
      */}
    </React.Fragment>
  );
}

export default App;
