import React from "react";
import PropTypes from "prop-types";
import "./style.css";

export const Sitemap = ({
  style,
  text = "COMPANY",
  text1 = "Donec dignissim<br/><br/>Curabitur egestas<br/><br/>Nam posuere<br/><br/>Aenean facilisis",
}) => {
  return (
    <div className="sitemap" style={style}>
      <div className="COMPANY">{text}</div>
      <p className="donec-dignissim-cura">{text1}</p>
    </div>
  );
};

Sitemap.propTypes = {
  text: PropTypes.string,
  text1: PropTypes.string,
};
