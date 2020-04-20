import React from "react";
import PropTypes from "prop-types";

function Tweet(props) {
  return (
    <React.Fragment>
      <br />
      <div class="row">
        <div class="col-xs-2">
          <img
            alt="twitter egg"
            height="45"
            border-radius="5%"
            src="https://img.buzzfeed.com/buzzfeed-static/static/2017-03/31/13/enhanced/buzzfeed-prod-fastlane-02/original-grid-image-14740-1490981786-4.jpg?crop=590:590;5,0"
          />
        </div>
        <div class="col col-xs-10">
          <h3>@{props.username}</h3>
          <p>
            {props.content} #sofun #timeisanillusion #spiritualAF #alignyochakra
          </p>
          <h5>{props.timestamp}</h5>
        </div>
      </div>
      <hr />
    </React.Fragment>
  );
}

Tweet.propTypes = {
  username: PropTypes.string.isRequired,
  timestamp: PropTypes.string.isRequired,
  content: PropTypes.string.isRequired,
};

export default Tweet;
