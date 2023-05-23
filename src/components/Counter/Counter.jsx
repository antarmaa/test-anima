import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const Counter = ({
  style,
  overlapStyle,
  overlapGroupStyle,
  iosCloudDownloadOutline = "https://anima-uploads.s3.amazonaws.com/projects/646ce5a6a15d733178302cb8/releases/646ceafabb20048b40e66e05/img/ios-cloud-download-outline-1@2x.png",
}) => {
  return (
    <div className="counter" style={style}>
      <div className="counter-overlap" style={overlapStyle}>
        <div className="counter-overlap-group" style={overlapGroupStyle}>
          <div className="element">+200M</div>
          <div className="download">Download</div>
        </div>
        <img className="ios-cloud-download-outline" alt={"Ios cloud download outline"} src={iosCloudDownloadOutline} />
      </div>
    </div>
  );
};

Counter.propTypes = {
  iosCloudDownloadOutline: PropTypes.string,
};
