import React from "react";
import PropTypes from "prop-types";

function ProfilePreview(props) {
  return (
    <React.Fragment>
      <div class="row">
        <div class="col-xs-2">
          <img
            alt="twitter egg"
            height="30"
            border-radius="5%"
            src="https://img.buzzfeed.com/buzzfeed-static/static/2017-03/31/13/enhanced/buzzfeed-prod-fastlane-02/original-grid-image-14740-1490981786-4.jpg?crop=590:590;5,0"
          />
        </div>
        <div class="col-xs-10">
          {" "}
          <h4>@{props.username}</h4>
        </div>
      </div>

      <p>{props.recentTweet}</p>
      <hr />
    </React.Fragment>
  );
}

ProfilePreview.propTypes = {
  username: PropTypes.string,
  recentTweet: PropTypes.string,
};

export default ProfilePreview;
