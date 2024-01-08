import React, { useState } from "react";
import "./ExpandTCH.css";
import { FiChevronDown } from "react-icons/fi";
import { images } from "../../../constants";

const ExpandTCH = () => {
  const [isHidden, setIsHidden] = useState(true);

  const toggleHidden = () => {
    setIsHidden(!isHidden);
  };

  return (
    <div>
      <button
        onClick={toggleHidden}
        className={`toggle_button ${isHidden ? "" : "active"}`}
      >
        <FiChevronDown size={32} />
      </button>
      <div
        className={`dropdown ${isHidden ? "" : "active"}`}
        style={{ maxHeight: isHidden ? "0" : "200px" }} // Adjust the maxHeight value
      >
        <img src={images.TCH} alt="" className="res_image"/>
        <p>
          <strong>Cuisines</strong> <br /> Waffle, Coffee, Shakes, Burgers, Wraps
          <br />
          <a
            href="https://link.zomato.com/xqzv/rshare?id=56037054720b9c7a"
            target="_blank"
            rel="noopener noreferrer"
          >
            <img src={images.zomato} alt="zomato_image" style={{ width: '47px', height: '17px'}} />
          </a>
        </p>
      </div>
    </div>
  );
};

export default ExpandTCH;
