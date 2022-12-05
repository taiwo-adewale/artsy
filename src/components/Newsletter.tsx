import React from "react";

const Newsletter = () => {
  return (
    <div className="container">
      <div className="md:border border-textMuted py-14 md:px-6 md:text-center flex flex-col mb-6">
        <h2 className="uppercase mb-8 text-3xl font-medium">Newsletter</h2>
        <p className="mb-8 md:text-2xl uppercase">
          Subscribe to get daily updates on new drops & exciting deals
        </p>

        <form className="flex flex-wrap sm:flex-nowrap gap-6 md:justify-center">
          <input
            type="text"
            placeholder="ENTER YOUR EMAIL"
            className="border border-textSecondary placeholder:text-xs px-6 w-full md:max-w-[300px] py-2.5 placeholder:text-textSecondary"
          />
          <button className="bg-btnBlack text-white text-sm px-12 py-3 sm:px-8 sm:py-2.5">
            SUBSCRIBE
          </button>
        </form>
      </div>
    </div>
  );
};

export default Newsletter;
