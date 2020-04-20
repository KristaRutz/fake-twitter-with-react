import React from "react";
import ProfilePreview from "./ProfilePreview";

const suggestedProfiles = [
  {
    username: "rando",
    recentTweet: "we deserve better shipping",
  },
  {
    username: "sumGuy",
    recentTweet: "the world is blue",
  },
  {
    username: "sumWoman",
    recentTweet: "the trumpet is a brass instrument",
  },
];

function SuggestionColumn() {
  return (
    <React.Fragment>
      <div>
        <h5>Suggested for you</h5>
        <ProfilePreview
          // username={profilePreview.username}
          // recentTweet={profilePreview.recentTweet}
          username="test"
          recentTweet="foo bar"
        />
        {/* map() to loop through suggestedProfiles */}
      </div>
    </React.Fragment>
  );
}

export default SuggestionColumn;
