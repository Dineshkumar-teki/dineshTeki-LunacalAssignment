import { TabItem } from "../components";
import { useState } from "react";
import { frame, vector } from "../assets";

const tabsList = [
  {
    id: "ABOUT",
    value: "About me",
    description:
      "Hello! I am Dave, your sales rep here from Salesforce. I have been working at this awesome company for 3 years now. I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...",
  },
  {
    id: "EXPERIENCE",
    value: "Experiences",
    description:
      "Hello! I am Dave, your sales rep here from Salesforce. I have been working at this awesome company for 3 years now. I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school.",
  },
  {
    id: "RECOMMENDED",
    value: "Recommended",
    description:
      "Hello! I am Dave, your sales rep here from Salesforce. I have been working at this awesome company for 3 years now. I was born and raised in Albany, NY& have been living in Santa Carla for the past 10 years my wife Tiffany and my 4 year old twin daughters- Emma and Ella. Both of them are just starting school, so my calender is usually blocked between 9-10 AM. This is a...",
  },
];

const ProfileCard = () => {
  const [tab, setTab] = useState(tabsList[0].id);

  return (
    <div className="bg-[#363C43] w-[100%] h-[280px] rounded-[19px] shadow-2xl flex justify-between px-3 py-5">
      <div className="flex flex-col gap-[103px] items-center w-[5%] ">
        <img src={vector} alt="vector" className="w-6 h-6" />
        <img src={frame} alt="frame" className="w-6 h-8" />
      </div>
      <div className="w-[93%] h-full flex flex-col gap-8 ">
        <ul className="flex justify-between items-center bg-[#171717] rounded-[23px] h-[62px] p-1.5">
          {tabsList.map((eachTab) => (
            <TabItem
              key={eachTab.id}
              tab={eachTab}
              activeTab={tab === eachTab.id}
              setTab={setTab}
            />
          ))}
        </ul>
        <div className="text-[#969696] text-base xl:text-[18px] overflow-auto pr-2">
          {tabsList.filter((eachTab) => eachTab.id === tab)[0].description}
        </div>
      </div>
    </div>
  );
};

export default ProfileCard;
