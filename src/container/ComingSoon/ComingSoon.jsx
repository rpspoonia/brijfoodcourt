import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";

const ComingSoon = () => (
  <div className="section__padding flex__center app__wrapper" id="coming-soon">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.comingsoon} alt="coming_soon_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Relaxation Awaits" />
      <h1 className="headtext__cormorant">Coming Soon</h1>
      <p className="p__opensans">
        Exciting things are on the way! We're working hard to bring you a new
        experience. Stay tuned for our grand opening. Get ready to enjoy an
        amazing space where great food meets relaxation and entertainment.
      </p>
    </div>
  </div>
);

export default ComingSoon;
