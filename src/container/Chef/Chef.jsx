import React from "react";

import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./Chef.css";

const Chef = () => (
  <div className="app__bg app__wrapper section__padding" id="chef">
    <div className="app__wrapper_img app__wrapper_img-reverse">
      <img src={images.BankeBihari} alt="bankebihari_image" />
    </div>
    <div className="app__wrapper_info">
      <SubHeading title="Founder's word" />
      <h1 className="headtext__cormorant">What we believe in</h1>
      <div className="app__chef-content">
        <div className="app__chef-content_quote">
          <img src={images.quote} alt="quote_image" />
          <p className="p__opensans">
            Welcome to 'Brij Food Court,' a culinary delight nestled in
            Vrindavan, the childhood home of Lord Krishna, and conveniently
            located near the iconic Prem Mandir and Banke Bihari Mandir. Our
            food court is a testament to our passion for great food with a touch
            of spirituality.
          </p>
        </div>
        <br />
        <p className="p__opensans">
          Brij Food Court is a paradise for vegetarian food lovers. Our menu
          showcases a diverse range of cuisines, from North Indian and Punjabi
          delights to South Indian, Italian, Chinese, snacks, shakes, juices,
          and tempting desserts. As you indulge in these flavors, your children
          can enjoy our dedicated game zone. We understand the importance of
          convenience, offering ample parking, top-notch washrooms, and a fully
          air-conditioned dining space. <br />
          <br />
          We are grateful for your support, and as we expand, we aim to bring
          Brij Food Court to more communities across the country through
          franchise opportunities. Join us on this culinary journey where
          tradition meets modernity, guided by Lord Krishna's blessings. Thank
          you for choosing Brij Food Court; we can't wait to welcome you to our
          food paradise.
        </p>
      </div>

      <div className="app__chef-sign">
        <p>Harsh Puniya&nbsp;&&nbsp;Ravi Sharma&nbsp;&&nbsp;Dhruv Soni</p>
        <p className="p__opensans">Owner & Founder</p>
        {/* <img src={images.sign} alt="sign_image" /> */}
      </div>
    </div>
  </div>
);

export default Chef;
