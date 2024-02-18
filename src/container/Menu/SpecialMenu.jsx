import React from "react";
import { SubHeading } from "../../components";
import { images } from "../../constants";
import "./SpecialMenu.css";

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
          <div className="img-container">
            <img src={images.TCH} alt="menu__img" />
            <div className="dropdown-content">
              {/* Content for the dropdown */}
              {/* You can customize this content as needed */}
              <p>
                <strong>Cuisines</strong> <br /> Waffle, Coffee, Shakes,
                Burgers, Wraps
                <br />
                <a
                  href="https://link.zomato.com/xqzv/rshare?id=56037054720b9c7a"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.zomato}
                    alt="zomato_image"
                    className="icon"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="app__specialMenu-menu_wine">
        <p className="app__specialMenu-menu_heading">Juice Fresh Fruit</p>
        <div className="app__specialMenu-menu_img">
          <div className="img-container">
            <img src={images.JuiceFreshFruit} alt="menu__img" />
            <div className="dropdown-content">
              {/* Content for the dropdown */}
              {/* You can customize this content as needed */}
              <p>
                <strong>Cuisines</strong> <br /> Juice, Cold Drink, Wafers
                <br />
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.zomato}
                    alt="zomato_image"
                    className="icon"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* <div className="app__specialMenu-menu_img">
        <img src={images.menu} alt="menu__img" />
      </div> */}

      <div className="app__specialMenu-menu_wine">
        <p className="app__specialMenu-menu_heading">BankeyLal's Pede Wale</p>
        <div className="app__specialMenu-menu_img">
          <div className="img-container">
            <img src={images.Bankey} alt="menu__img" />
            <div className="dropdown-content">
              {/* Content for the dropdown */}
              {/* You can customize this content as needed */}
              <p>
                <strong>Cuisines</strong> <br /> Indian Sweets, Mithai, Street
                Food
                <br />
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.zomato}
                    alt="zomato_image"
                    className="icon"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 2 */}
      <div className="app__specialMenu-menu_wine">
        <p className="app__specialMenu-menu_heading">The Foodies Bar</p>
        <div className="app__specialMenu-menu_img">
          <div className="img-container">
            <img src={images.TFB} alt="menu__img" />
            <div className="dropdown-content">
              {/* Content for the dropdown */}
              {/* You can customize this content as needed */}
              <p>
                <strong>Cuisines</strong> <br /> Burger, Wrap, Fries
                <br />
                <a
                  href="https://link.zomato.com/xqzv/rshare?id=52920974517b96e1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.zomato}
                    alt="zomato_image"
                    className="icon"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="app__specialMenu-menu_wine">
        <p className="app__specialMenu-menu_heading">UP85</p>
        <div className="app__specialMenu-menu_img">
          <div className="img-container">
            <img src={images.UP85} alt="menu__img" />
            <div className="dropdown-content">
              {/* Content for the dropdown */}
              {/* You can customize this content as needed */}
              <p>
                <strong>Cuisines</strong> <br /> Punjabi, North Indian
                <br />
                <a
                  href="https://link.zomato.com/xqzv/rshare?id=52920944517b96e1"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.zomato}
                    alt="zomato_image"
                    className="icon"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="app__specialMenu-menu_wine">
        <p className="app__specialMenu-menu_heading">Veg Grill</p>
        <div className="app__specialMenu-menu_img">
          <div className="img-container">
            <img src={images.VegGrill} alt="menu__img" />
            <div className="dropdown-content">
              {/* Content for the dropdown */}
              {/* You can customize this content as needed */}
              <p>
                <strong>Cuisines</strong> <br /> Chaap
                <br />
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.zomato}
                    alt="zomato_image"
                    className="icon"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/* Row 3 */}
      <div className="app__specialMenu-menu_wine">
        <p className="app__specialMenu-menu_heading">The Brijwasi Express</p>
        <div className="app__specialMenu-menu_img">
          <div className="img-container">
            <img src={images.BE} alt="menu__img" />
            <div className="dropdown-content">
              {/* Content for the dropdown */}
              {/* You can customize this content as needed */}
              <p>
                <strong>Cuisines </strong> <br /> Chinese
                <br />
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.zomato}
                    alt="zomato_image"
                    className="icon"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="app__specialMenu-menu_wine">
        <p className="app__specialMenu-menu_heading">Pizza & Pasta Hub</p>
        <div className="app__specialMenu-menu_img">
          <div className="img-container">
            <img src={images.Pizza} alt="menu__img" />
            <div className="dropdown-content">
              {/* Content for the dropdown */}
              {/* You can customize this content as needed */}
              <p>
                <strong>Cuisines</strong> <br /> Pasta, Pizza, Garlic Bread
                <br />
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.zomato}
                    alt="zomato_image"
                    className="icon"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      <div className="app__specialMenu-menu_wine flex__center">
        <p className="app__specialMenu-menu_heading">Rambabu ke Parathe</p>
        <div className="app__specialMenu-menu_img">
          <div className="img-container">
            <img src={images.rambabu} alt="menu__img" />
            <div className="dropdown-content">
              {/* Content for the dropdown */}
              {/* You can customize this content as needed */}
              <p>
                <strong>Cuisines</strong> <br /> Parathe
                <br />
                <a
                  href="https://example.com"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <img
                    src={images.zomato}
                    alt="zomato_image"
                    className="icon"
                  />
                </a>
              </p>
            </div>
          </div>
        </div>
      </div>

      {/*

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
