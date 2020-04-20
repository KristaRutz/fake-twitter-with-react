import React from "react";
import ProfileBox from "./ProfileBox.js";
import ProfileDescriptionBox from "./ProfileDescriptionBox.js";

const profile = {
  name: "Jonny Sue",
  username: "jonnysue",
  tweetCount: 1423,
  followerCount: 816,
  followingCount: 691,
  description:
    "This is me man, just me, nobody else like me. I'm a GOAT in a sea of Sheeple",
  location: "(now)here",
  website: "www.youtube.com/watch?v=dQw4w9WgXcQ",
  websiteShortUrl: "www.jonnysue.com",
};

function ProfileBar() {
  return (
    <React.Fragment>
      <div class="row">
        <ProfileBox
          name={profile.name}
          username={profile.username}
          tweetCount={profile.tweetCount}
          followerCount={profile.followerCount}
          followingCount={profile.followingCount}
        />
      </div>
      <div class="row">
        <ProfileDescriptionBox
          description={profile.description}
          location={profile.location}
          website={profile.website}
          websiteShortUrl={profile.websiteShortUrl}
        />
      </div>
    </React.Fragment>
  );
}

export default ProfileBar;
