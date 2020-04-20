import React from "react";
import PropTypes from "prop-types";

function ProfileDescriptionBox(props) {
  return (
    <React.Fragment>
      <div class="container-fluid">
        <br></br>
        <br></br>
        <p>{props.description}</p>
        <p>
          <strong>Location</strong> {props.location}
        </p>
        <p>
          <strong>Website</strong>{" "}
          <a href={`https://${props.website}`}>{props.websiteShortUrl}</a>
        </p>
      </div>
    </React.Fragment>
  );
}

ProfileDescriptionBox.propTypes = {
  description: PropTypes.string,
  location: PropTypes.string,
  website: PropTypes.string,
  websiteShortUrl: PropTypes.string,
};

export default ProfileDescriptionBox;
