import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const TitleTitlecenteralign = ({ style, quisqueUtMetusStyle, text = "Quisque ut Metus" }) => {
  return (
    <div className="title-titlecenteralign" style={style}>
      <div className="quisque-ut-metus" style={quisqueUtMetusStyle}>
        {text}
      </div>
      <div className="title-titlecenteralign-active-indicator" />
    </div>
  );
};

TitleTitlecenteralign.propTypes = {
  text: PropTypes.string,
};
