import React, { useEffect, useState } from "react";

import { tabs } from "../data";

const TopCreators = () => {
  const [currentTab, setCurrentTab] = useState<number>(0);

  return (
    <div className="bg-[#E2E2E2] py-12 mb-20">
      <div className="container">
        <div className="flex justify-between">
          <h2 className="text-3xl leading-10 font-bold">
            TOP CREATORS OF <br /> THE WEEK
          </h2>

          <div className="flex">
            <div className="w-1 h-full bg-[#AEAEAE] rounded-full"></div>

            <div className="flex flex-col">
              {tabs.map((tab, index) => (
                <div
                  key={`tab-${index}`}
                  className="flex items-center relative pl-8 cursor-pointer"
                  onClick={() => setCurrentTab(index)}
                >
                  <div
                    className={`absolute w-1 -left-1 top-0 bottom-0 rounded-full h-full ${
                      currentTab === index ? "bg-textPrimary" : "bg-transparent"
                    } `}
                  ></div>

                  <h3 className="py-1 text-lg">{tab.title}</h3>
                </div>
              ))}
            </div>
          </div>
        </div>

        <p className="text-textMuted mt-10 mb-20 max-w-[90%]">
          {tabs[currentTab].text}
        </p>
      </div>
    </div>
  );
};

export default TopCreators;
