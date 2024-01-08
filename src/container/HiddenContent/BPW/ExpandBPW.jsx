import React, { useState } from "react";
import "./ExpandBPW.css";
import { FiChevronDown } from "react-icons/fi";
import { images } from "../../../constants";

const ExpandBPW = () => {
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
        <img src={images.Bankey} alt="" />
        <p>
          <strong>Cuisines</strong> <br /> Indian Sweets, Mithai, Street Food
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

export default ExpandBPW;
