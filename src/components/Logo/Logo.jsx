import React from "react";
import "./style.css";

export const Logo = ({ style }) => {
  return (
    <div className="logo" style={style}>
      <div className="mobile">Mobile</div>
      <img
        className="logo-luxi-mobile"
        alt={"Luxi mobile"}
        src={
          "https://anima-uploads.s3.amazonaws.com/projects/646ce5a6a15d733178302cb8/releases/646ceafabb20048b40e66e05/img/luxi-mobile-1@2x.png"
        }
      />
    </div>
  );
};
