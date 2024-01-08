import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./SpecialMenu.css";
import ExpandTFB from "../HiddenContent/TFB/ExpandTFB";
import ExpandTCH from "../HiddenContent/TCH/ExpandTCH";
import ExpandJ from "../HiddenContent/Juice/ExpandJ";
import ExpandBPW from "../HiddenContent/BPW/ExpandBPW";
import ExpandUP85 from "../HiddenContent/UP85/ExpandUP85";
import ExpandVG from "../HiddenContent/VG/ExpandVG";
import ExpandBE from "../HiddenContent/BE/ExpandBE";
import ExpandP from "../HiddenContent/Pizza/ExpandP";

const SpecialMenu = () => (
  <div className="app__specialMenu section__padding" id="dine">
    <div className="app__specialMenu-title">
      <SubHeading title="Savor the moment with the various cuisines" />
      <h1 className="headtext__cormorant">Food Restaurants</h1>
    </div>

    <div className="app__specialMenu-menu">
      {/* Row 1 */}
      <div className="app__specialMenu-menu_wine">
        <p className="app__specialMenu-menu_heading">The Caffeine Hub</p>
        <div className="app__specialMenu-menu_img">
          <img src={images.TCH} alt="menu__img" />
        </div>
        <ExpandTCH />
      </div>

      <div className="app__specialMenu-menu_wine">
        <p className="app__specialMenu-menu_heading">Juice Fresh Fruit</p>
        <div className="app__specialMenu-menu_img">
          <img src={images.JuiceFreshFruit} alt="menu__img" />
        </div>
        <ExpandJ />
      </div>

      {/* <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div> */}

      <div className="app__specialMenu-menu_cocktails">
        <p className="app__specialMenu-menu_heading">BankeyLal's Pede Wale</p>
        <div className="app__specialMenu-menu_img">
          <img src={images.Bankey} alt="menu__img" />
        </div>
        <ExpandBPW />
      </div>

      {/* Row 2 */}
      <div className="app__specialMenu-menu_cocktails">
        <p className="app__specialMenu-menu_heading">The Foodies Bar</p>
        <div className="app__specialMenu-menu_img">
          <img src={images.TFB} alt="menu__img" />
        </div>
        <ExpandTFB />
      </div>

      <div className="app__specialMenu-menu_cocktails">
        <p className="app__specialMenu-menu_heading">UP85</p>
        <div className="app__specialMenu-menu_img">
          <img src={images.UP85} alt="menu__img" />
        </div>
        <ExpandUP85 />
      </div>

      <div className="app__specialMenu-menu_cocktails">
        <p className="app__specialMenu-menu_heading">Veg Grill</p>
        <div className="app__specialMenu-menu_img">
          <img src={images.VegGrill} alt="menu__img" />
        </div>
        <ExpandVG />
      </div>

      {/* Row 3 */}
      <div className="app__specialMenu-menu_cocktails">
        <p className="app__specialMenu-menu_heading">The Brijwasi Express</p>
        <div className="app__specialMenu-menu_img">
          <img src={images.BE} alt="menu__img" />
        </div>
        <ExpandBE />
      </div>

      <div className="app__specialMenu-menu_cocktails">
        <p className="app__specialMenu-menu_heading">Pizza & Pasta Hub</p>
        <div className="app__specialMenu-menu_img">
          <img src={images.Pizza} alt="menu__img" />
        </div>
        <ExpandP />
      </div>

      {/*

      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Image 11</p>
        <div className="app__specialMenu-menu_img">
          <img src={images.Image11} alt="menu__img" />
        </div>
      </div>

      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Image 12</p>
        <div className="app__specialMenu-menu_img">
          <img src={images.Image12} alt="menu__img" />
        </div>
      </div>

      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Image 13</p>
        <div className="app__specialMenu-menu_img">
          <img src={images.Image13} alt="menu__img" />
        </div>
      </div>
      
      */}

    </div>
    {/*     <div style={{ marginTop: 15 }}>
      <button type="button" className="custom__button">View More</button>
    </div> */}
    {/* <div className="app__specialMenu-menu_img">
      <img src={images.qr} alt="menu__img" />
    </div>
    <div className="app__specialMenu-menu_cocktails  flex__center">
      <p className="app__specialMenu-menu_heading">Scan this code for menu</p>
    </div> */}
  </div>
);

export default SpecialMenu;
