import React, { useState } from "react";
import "./ExpandVG.css";
import { FiChevronDown } from "react-icons/fi";
import { images } from "../../../constants";

const ExpandVG = () => {
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
        <img src={images.VegGrill} alt="" />
        <p>
          <strong>Cuisines</strong> <br /> Chaap
          <br />
          <a
            href="https://example.com"
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

export default ExpandVG;
