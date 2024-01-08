import React, { useState } from "react";
import "./ExpandUP85.css";
import { FiChevronDown } from "react-icons/fi";
import { images } from "../../../constants";

const ExpandUP85 = () => {
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
        <img src={images.UP85} alt="" />
        <p>
          <strong>Cuisines</strong> <br /> Punjabi, North Indian
          <br />
          <a
            href="https://link.zomato.com/xqzv/rshare?id=52920944517b96e1"
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

export default ExpandUP85;
