import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import img1 from "../images/image-daniel.jpg";
import img3 from "../images/image-jeanette.jpg";
import img2 from "../images/image-jonathan.jpg";
import img5 from "../images/image-kira.jpg";
import img4 from "../images/image-patrick.jpg";
const Card = ({ name, content, quote, id }) => {
  const [img, setImg] = useState();
  const [textColor, setColor] = useState(false);
  const [bgColor, setBgCOlor] = useState("bg-red-300");
  const [gridArea, setGridArea] = useState();

  useEffect(() => {
    switch (id) {
      case 1:
        setImg(img1);
        setBgCOlor("bg-moderateViolet");
        setGridArea("Grid1");
        break;
      case 2:
        setImg(img2);
        setBgCOlor("bg-veryDarkGrayishBlue");
        setGridArea("Grid2");
        break;
      case 3:
        setImg(img3);
        setColor(true);
        setBgCOlor("bg-white");
        setGridArea("Grid3");
        break;
      case 4:
        setImg(img4);
        setBgCOlor("bg-veryDarkBlackishBlue");
        setGridArea("Grid4");
        break;
      default:
        setImg(img5);
        setColor(true);
        setBgCOlor("bg-white");
        setGridArea("Grid5");
    }
  }, [id]);
  return (
    <div
      className={`px-12 py-5 rounded-xl shadow-xl first:bg-firstImg bg-no-repeat  shadow-gray-400 ${bgColor} ${gridArea} space-y-4`}>
      <div>
        <span className='flex items-center space-x-4'>
          <img className='rounded-full object-cover w-10' src={img} alt='' />
          <span>
            <h1
              className={`text-[13px] font-semibold  ${
                !textColor === true ? "text-white" : "text-veryDarkBlackishBlue"
              }`}>
              {name}
            </h1>
            <h2
              className={`text-[13px] font-medium
            ${
              !textColor === true
                ? "text-white/50"
                : "text-veryDarkBlackishBlue/50"
            }
            `}>
              Verified Graduate
            </h2>
          </span>
        </span>
      </div>
      <p
        className={`
        font-semibold text-xl
      ${!textColor === true ? "text-white" : "text-veryDarkBlackishBlue"}
      `}>
        {content}
      </p>
      <p
        className={`
        text-[13px] leading-5
      ${!textColor === true ? "text-white/70" : "text-veryDarkBlackishBlue/70"}
      `}>
        {quote}
      </p>
    </div>
  );
};

export default Card;
