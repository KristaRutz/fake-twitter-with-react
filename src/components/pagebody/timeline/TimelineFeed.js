import React from "react";
import Tweet from "./Tweet.js";
import ComposeTweetForm from "./ComposeTweetForm.js";

const masterTweetList = [
  {
    username: "joeblow",
    timestamp: "rn",
    content: "tweet tweet mofo",
  },
  {
    username: "jonnysue",
    timestamp: "the future",
    content: "roses are not red, the light reflecting off of them is red",
  },
  {
    username: "joeblow",
    timestamp: "rn",
    content: "the universe is deterministic",
  },
  {
    username: "joe aka steven",
    timestamp: "time is a social construct",
    content: "this is a pointless exercise",
  },
  {
    username: "joeshmow",
    timestamp: "yesterday",
    content:
      "nothing has a point, except a spear, can't really argue with that one",
  },
];

function TimelineFeed() {
  return (
    <React.Fragment>
      <ComposeTweetForm />
      {masterTweetList.map((tweet, index) => (
        <Tweet
          username={tweet.username}
          timestamp={tweet.timestamp}
          content={tweet.content}
        />
      ))}
    </React.Fragment>
  );
}

export default TimelineFeed;
