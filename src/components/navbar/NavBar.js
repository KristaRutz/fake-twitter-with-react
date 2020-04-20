import React from "react";

function NavBar() {
  return (
    <React.Fragment>
      <nav class="navbar navbar-light bg-light">
        <div class="btn-group">
          <button class="btn btn-outline-primary">Home</button>
          <button class="btn btn-outline-primary">Notifications</button>
          <button class="btn btn-outline-primary">Messages</button>
        </div>
        <form class="form-inline">
          <input
            class="form-control mr-sm-2"
            type="search"
            placeholder="Search"
            aria-label="Search"
          />
          <button class="btn btn-outline-primary my-2 my-sm-0" type="submit">
            Search
          </button>
        </form>
        <button class="btn btn-primary">Compose Tweet</button>
      </nav>
    </React.Fragment>
  );
}
export default NavBar;
