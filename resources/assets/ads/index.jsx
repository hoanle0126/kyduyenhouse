import React from "react";
import adsImage from "./ads.jpg";

const AdsImage = ({ className }) => {
    return <img src={adsImage} alt="" className={className} />;
};

export default AdsImage;
