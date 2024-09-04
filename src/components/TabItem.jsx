import React from "react";

const TabItem = ({ tab, activeTab, setTab }) => {
  return (
    <li>
      <button
        type="button"
        className={`${
          activeTab ? "text-white bg-[#363C43] shadow-3xl" : "text-[#A3ADB2]"
        } font-medium text-[16px] h-12 rounded-2xl flex items-center px-8 outline-none lg:text-sm lg:px-3 xl:text-lg xl:px-6`}
        onClick={() => {
          setTab(tab.id);
        }}
      >
        {tab.value}
      </button>
    </li>
  );
};

export default TabItem;
