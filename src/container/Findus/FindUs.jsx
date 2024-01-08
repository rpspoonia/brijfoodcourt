import React from 'react';
import {FiMapPin} from 'react-icons/fi';

import { SubHeading } from '../../components';
import { images } from '../../constants';

const FindUs = () => (
  <div className="app__bg app__wrapper section__padding" id="contact">
    <div className="app__wrapper_info">
      <SubHeading title="Contact" />
      <h1 className="headtext__cormorant" style={{ marginBottom: '3rem' }}>Find Us</h1>
      <div className="app__wrapper-content">
        <p className="p__opensans"><FiMapPin />&nbsp;in front of gate no 4 prem mandir, vrindavan</p>
        <p className="p__cormorant" style={{ color: '#DCCA87', margin: '2rem 0' }}>Opening Hours</p>
        <p className="p__opensans">Mon - Fri: 9:00 am - 12:00 am</p>
        <p className="p__opensans">Sat - Sun: 9:00 am - 01:30 am</p>
      </div>
      <button type="button" className="custom__button" style={{ marginTop: '2rem' }}><a href="https://www.google.com/maps/place/Brij+Food+Court+Vrindavan+%7C+North+Indian,+Chinese,+Italian,+Momos,+Burgers+Restaurant+%7C+Game+Zone/@27.5704617,77.6627505,16z/data=!4m7!3m6!1s0x39736f46b4e1dc8f:0xc544d597a44f3b1c!8m2!3d27.5704617!4d77.6679003!15sChlicmlqIGZvb2QgY291cnQgdnJpbmRhdmFuWhsiGWJyaWogZm9vZCBjb3VydCB2cmluZGF2YW6SAQpmb29kX2NvdXJ0mgEjQ2haRFNVaE5NRzluUzBWSlEwRm5TVU5hYzJacVdraG5FQUXgAQA!16s%2Fg%2F11vb3zv4gd?entry=tts" target="_blank" rel="noopener noreferrer"> Visit Us</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.findus} alt="finus_img" />
    </div>
  </div>
);

export default FindUs;