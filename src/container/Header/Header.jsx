import React from 'react';

import { SubHeading } from '../../components';
import { images } from '../../constants';
import './Header.css';

const Header = () => (
  <div className="app__header app__wrapper section__padding" id="home">
    <div className="app__wrapper_info">
      <SubHeading title="Satisfy Your Cravings" />
      <h1 className="app__header-h1">Unleash Your Senses</h1>
      <p className="p__opensans" style={{ margin: '2rem 0' }}>Step into the lively atmosphere of Brij Food Court and experience the ultimate dining and Peaceful destination. Our vibrant spot boasts an array of delectable dishes, handcrafted lassi, and live entertainment that will keep you coming back for more. 
      <span className="p__opensans wrap" style={{ margin: '0.6rem 0', display: 'flex', color: 'var(--color-golden)', fontWeight: '600' }}>Sattvik Bhojan! 🍛. &nbsp; Every Monday to Sunday from 9am to 12am </span>
      </p>
      <button type="button" className="custom__button"><a href="#dine">Explore Menu</a></button>
    </div>

    <div className="app__wrapper_img">
      <img src={images.Krishna} alt="header_img" />
    </div>
  </div>
);

export default Header;