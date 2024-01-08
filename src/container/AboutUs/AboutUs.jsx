import React from "react";

import { images } from "../../constants";
import "./AboutUs.css";

const AboutUs = () => (
  <div
    className="app__aboutus app__bg flex__center section__padding"
    id="about"
  >
    <div className="app__aboutus-overlay flex__center">
      {/* <img src={images.G} alt="G_overlay" /> */}
    </div>

    <div className="app__aboutus-content flex__center">
      <div className="app__aboutus-content_about">
        <h1 className="headtext__cormorant">About Us</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          Step into BFC, a lively restaurant and food court that came to life in
          2022 with a singular mission - to offer our patrons an exceptional
          dining experience. At BFC, we pride ourselves on presenting an array
          of delectable culinary creations, handcrafted beverages, and live
          entertainment that will undoubtedly leave you craving for repeat
          visits. Our goal is to ensure that every moment spent at BFC is a
          memorable one, where you can savor unique flavors and enjoy a tranquil
          ambiance.
        </p>
        {/*  <button type="button" className="custom__button">Know More</button> */}
      </div>

      <div className="app__aboutus-content_knife flex__center">
        <img src={images.PremMandir} alt="about_knife" />
      </div>

      <div className="app__aboutus-content_history">
        <h1 className="headtext__cormorant">Our Legacy</h1>
        <img src={images.spoon} alt="about_spoon" className="spoon__img" />
        <p className="p__opensans">
          BFC, a restaurant and food court established in 2022 by three driven
          individuals, has quickly become a beloved destination. With its
          delectable cuisine, refreshing beverages, and vibrant ambiance, it has
          garnered a dedicated following among both locals and tourists.
          Renowned for its commitment to using premium ingredients and culinary
          expertise, BFC has firmly embedded itself in the community, offering a
          unique dining and drinking experience. During the weekends, especially
          on Fridays and Saturdays, BFC hosts enticing promotions that attract
          crowds seeking a night filled with entertainment and enjoyment.
        </p>
        {/* <button type="button" className="custom__button">Know More</button> */}
      </div>
    </div>
  </div>
);

export default AboutUs;
