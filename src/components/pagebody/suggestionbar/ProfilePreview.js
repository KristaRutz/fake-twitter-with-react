import React from "react";
import PropTypes from "prop-types";

function ProfilePreview(props) {
  return (
    <React.Fragment>
      <h4>@{props.username}</h4>
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
