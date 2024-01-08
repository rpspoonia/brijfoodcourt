import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Entertain.css";

const Entertain = () => (
  <div className="section__padding flex__center app__wrapper" id="entertain">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.Gamezone} alt="entertainment_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Quality Time Together" />
      <h1 className="headtext__cormorant">Gamezone</h1>
      <p className="p__opensans">
        Gamezone is a leading interactive out-of-home entertainment that
        operates the latest state-of-the-art family entertainment centers
        providing the latest games, rides & attractions.
      </p>
      <div className="app__wrapper_timings">
        <h1 className="headtext__cormorant">Store Timings</h1>
        <p className="p__opensans">Monday-Friday:</p>
        <p className="p__opensans">09:00 am - 12:00 am</p>
        <p className="p__opensans">Saturday-Sunday:</p>
        <p className="p__opensans">09:00 am - 01:30 am</p>
      </div>
    </div>
  </div>
);

export default Entertain;
