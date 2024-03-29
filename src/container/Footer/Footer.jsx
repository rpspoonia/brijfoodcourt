import React, { useState } from 'react';
import { FiMapPin } from 'react-icons/fi';
import {FiFacebook, FiTwitter, FiInstagram} from 'react-icons/fi';
import { FooterOverlay, Newsletter, Modal } from '../../components';
import { images } from '../../constants';
import './Footer.css';

const Footer = () => {
  const [showModal, setShowModal] = useState(false);

  return (
    <div className="app__footer section__padding" id="login">
      <FooterOverlay />
      <Newsletter />

      <div className="app__footer-links">
        <div className="app__footer-links_contact">
          <h1 className="app__footer-headtext">Contact Us</h1>
          <p className="p__opensans"><FiMapPin />&nbsp;in front of gate no 4 prem mandir, vrindavan</p>
          {/* <p className="p__opensans">+254 700-116-190</p> */}
      </div>

        <div className="app__footer-links_logo">
          <img src={images.BFC} alt="footer_logo" />
          <p className="p__opensans">&quot;The best way to find yourself is to lose yourself in the service of others.&quot;</p>
          <img src={images.spoon} alt="spoon_logo" className="spoon__img" style={{ marginTop: 15 }} />
          <div className="app__footer-links_icons">
            <a href='https://www.facebook.com'><FiFacebook /></a>
            <a href='https://www.twitter.com'><FiTwitter /></a>
            <a href='https://www.instagram.com/ampm_254/'><FiInstagram /></a>
          </div>
        </div>

        <div className="app__footer-links_work">
          <h1 className="app__footer-headtext">Working Hours</h1>
          <p className="p__opensans">Monday-Friday:</p>
          <p className="p__opensans">09:00 am - 12:00 am</p>
          <p className="p__opensans">Saturday-Sunday:</p>
          <p className="p__opensans">09:00 am - 01:30 am</p>
        </div>
      </div>


      <div className="footer__copyright">
        <p className="p__opensans">Brij Food Court&nbsp;@2023  All Rights reserved.</p>
      </div>
      
      <div className="app">
        <div className="app__footer-links">
          <button className="app__footer-links_legal a" onClick={() => setShowModal(true)}>
            &nbsp;Copyright&nbsp;&amp;&nbsp;Disclaimer
          </button>
        </div>

      {showModal && <Modal setShowModal={setShowModal} />}
    </div>

    </div>
  );
};

export default Footer;
