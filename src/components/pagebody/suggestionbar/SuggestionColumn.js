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
        {suggestedProfiles.map((profile, index) => (
          <ProfilePreview
            username={profile.username}
            recentTweet={profile.recentTweet}
            key={index}
          />
        ))}
      </div>
    </React.Fragment>
  );
}

export default SuggestionColumn;
