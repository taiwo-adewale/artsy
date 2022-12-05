import React from "react";

import { Drop, Breadcrumbs, Newsletter } from "../components";
import { dropsData } from "../data";

const Drops = () => {
  return (
    <div className="container">
      <Breadcrumbs path="Home/ Auctions/ Live bid/ " page="Drop" />

      <div className="flex flex-col text-center items-center mt-12 mb-16">
        <h2 className="text-3xl font-medium mb-8">Upcoming drops</h2>
        <p className="text-[#616161] text-xl mb-6">
          Turn on notifications so that no drops will miss you.
        </p>
        <div className="text-center">
          <button className="border border-textMuted px-14 sm:px-20 py-2 sm:py-2.5 rounded-lg text-lg">
            Notify me
          </button>
        </div>
      </div>

      {dropsData.map((drop, index) => (
        <Drop
          key={`drop-${index}`}
          name={drop.name}
          description={drop.description}
          creator={drop.creator}
          status={drop.status}
          statusColor={drop.statusColor}
          image={drop.image}
        />
      ))}

      <div className="text-center mb-20">
        <button className="border border-textMuted px-8 py-1.5 rounded-lg text-lg">
          See more
        </button>
      </div>

      <Newsletter />
    </div>
  );
};

export default Drops;
