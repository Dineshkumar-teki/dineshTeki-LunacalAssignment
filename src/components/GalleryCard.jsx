import { useState } from "react";
import {
  frame,
  vector,
  rightArrow,
  leftArrow,
  sampleImg,
  plus,
} from "../assets";

const GalleryCard = () => {
  const [gallery, setGallery] = useState([]);

  const addImgBtn = () => {
    setGallery([...gallery, sampleImg]);
  };
  return (
    <div className="bg-[#363C43] w-[100%] h-[280px] rounded-[19px] shadow-2xl flex justify-between px-3 py-5">
      <div className="flex flex-col gap-[103px] items-center w-[5%] ">
        <img src={vector} alt="vector" className="w-6 h-6" />
        <img src={frame} alt="frame" className="w-6 h-8" />
      </div>
      <div className="w-[93%] h-full flex flex-col gap-8 ">
        <div className="text-white flex justify-between items-center">
          <button 
          type="button"
          className="bg-[#171717] rounded-[20px] h-[62px] w-[150px] lg:w-[100px] xl:w-[150px] flex justify-center items-center  shadow-4xl font-semibold">
            Gallery
          </button>
          <div className="flex items-center gap-4 lg:gap-3 pr-4">
            <button
              type="button"
              className="bg-[#6F787C] px-8 lg:px-4 xl:px-6 py-4 flex gap-1 items-center font-extrabold text-xs rounded-full shadow-3xli"
              onClick={addImgBtn}
            >
              <img src={plus} alt="plus" />
              ADD IMAGE
            </button>
            <div className="flex items-center gap-3">
              <button className="w-[45px] h-[45px] rounded-full bg-gradient-primary flex justify-center items-center shadow-5xl">
                <img src={leftArrow} alt="leftArrow"  />
              </button>
              <button className="w-[45px] h-[45px] rounded-full bg-gradient-primary flex justify-center items-center shadow-5xl">
                <img src={rightArrow} alt="rightArrow" />
              </button>
            </div>
          </div>
        </div>
        <div className="h-full overflow-x-auto">
          {gallery.length ? (
            <ul className="flex flex-row items-center gap-3.5 ">
              {gallery.map((item, index) => (
                <li key={index} className="w-[25%] lg:w-[30%] xl:w-[24%]  flex-shrink-0">
                  <img
                    src={item}
                    alt="image"
                    className="object-cover "
                  />
                </li>
              ))}
            </ul>
          ) : (
            <p className="text-center text-base flex items-center text-white h-full">
              Your gallery appears to be empty. Please add images by clicking
              the 'Add Image' button.
            </p>
          )}
        </div>
      </div>
    </div>
  );
};

export default GalleryCard;
