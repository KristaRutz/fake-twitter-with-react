import React from "react";
import TimelineFeed from "./timeline/TimelineFeed";
import SuggestionColumn from "./suggestionbar/SuggestionColumn";
import ProfileBar from "./profilebar/ProfileBar";

function Page() {
  return (
    <React.Fragment>
      <div class="row">
        <div class="col col-md-4">
          <ProfileBar />
        </div>
        <div class="col col-md-6">
          <TimelineFeed />
        </div>
        <div class="col col-md-2">
          <SuggestionColumn />
        </div>
      </div>
    </React.Fragment>
  );
}

export default Page;
