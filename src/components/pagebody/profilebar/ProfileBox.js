import React from "react";
import PropTypes from "prop-types";

function ProfileBox(props) {
  return (
    <React.Fragment>
      <div class="container-fluid">
        <h1>
          {props.name} <small class="text-muted">@{props.username}</small>
        </h1>
        <div class="form-inline">
          <button class="btn btn-sm btn-light">
            Tweets{" "}
            <span class="badge badge-pill badge-primary">
              {props.tweetCount}
            </span>
          </button>
          <button class="btn btn-sm btn-light">
            Following{" "}
            <span class="badge badge-pill badge-primary">
              {props.followingCount}
            </span>
          </button>
          <button class="btn btn-sm btn-light">
            Followers{" "}
            <span class="badge badge-pill badge-primary">
              {props.followerCount}
            </span>
          </button>
        </div>
      </div>
    </React.Fragment>
  );
}

export default ProfileBox;

ProfileBox.propTypes = {
  name: PropTypes.string,
  username: PropTypes.string.isRequired,
  tweetCount: PropTypes.number.isRequired,
  followerCount: PropTypes.number.isRequired,
  followingCount: PropTypes.number.isRequired,
};

// PropTypes.instanceof.Date
