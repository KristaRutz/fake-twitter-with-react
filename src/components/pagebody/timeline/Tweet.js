import React from "react";
import PropTypes from "prop-types";

function Tweet(props) {
  return (
    <React.Fragment>
      <br />
      <h3>@{props.username}</h3>
      <p>
        {props.content} #sofun #timeisanillusion #spiritualAF #alignyochakra
      </p>
      <h5>{props.timestamp}</h5>
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
