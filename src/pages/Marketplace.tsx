import React from "react";
import { Link } from "react-router-dom";

import { SearchBar } from "../components";
import { categories, marketplace } from "../data";

const Marketplace = () => {
  return (
    <div>
      <div className="container">
        <div className="grid grid-cols-12 gap-x-12 items-center">
          <div className="col-span-3">
            <SearchBar />
          </div>

          <div className="col-span-9">
            <div className="shadow-[4px_4px_64px_rgba(0,0,0,0.1)] rounded-xl flex justify-between items-center p-3">
              <span className="text-textPrimary ml-4 text-lg font-medium">
                See 1-6 of 15 results
              </span>
              <select className="px-4 py-2 rounded-lg border border-textGray">
                Sort by
                <option value="price_lowest">Price (Lowest first)</option>
                <option value="price_highest">Price (Highest first)</option>
                <option value="category">Category</option>
              </select>
            </div>
          </div>
        </div>

        <div className="grid grid-cols-12 gap-x-12 mt-12">
          <div className="col-span-3">
            <div className="flex flex-col">
              <h4>
                <span>Filter</span>
              </h4>
              <div className="w-full h-1 bg-[#AFB091] rounded-full"></div>

              <div>
                <div className="flex justify-between">
                  <h5 className="text-textPrimary">By category</h5>
                </div>

                <form>
                  {categories.map((category) => (
                    <div className="flex space-x-2">
                      <input type="checkbox" id={category} />
                      <label htmlFor={category} className="capitalize">
                        {category}
                      </label>
                    </div>
                  ))}
                </form>
              </div>

              <div>
                <div className="flex justify-between">
                  <h5 className="text-textPrimary">By Price</h5>
                </div>

                <p>$100.00 - $150.00</p>

                <form>
                  <input type="range" className="w-full" />
                </form>
              </div>

              <div>
                <div className="flex justify-between">
                  <h5 className="text-textPrimary">By artist</h5>
                </div>

                <div className="flex flex-col">
                  <span>All</span>
                  <span>Below $100.00</span>
                  <span>$100.00 - $150.00</span>
                  <span>$150.00 - $200.00</span>
                  <span>Above $200.00</span>
                </div>
              </div>
            </div>
          </div>

          <div className="col-span-9">
            <div className="grid grid-cols-3 gap-12">
              {marketplace.map((item) => (
                <div className="rounded-xl p-3 flex flex-col shadow-[0px_34px_68px_rgba(217,225,244,0.36)] bg-white">
                  <img
                    src={item.image}
                    alt=""
                    className="object-cover w-full h-[250px] rounded-xl mb-2"
                  />

                  <Link to="/" className="uppercase mb-4 text-textPrimary">
                    {item.name}
                  </Link>

                  <span className="font-bold text-2xl">{`$${item.price}0`}</span>
                </div>
              ))}
            </div>
          </div>
        </div>

        <div className="text-center mt-12">
          <button className="border border-textMuted px-8 py-1.5 rounded-lg text-lg">
            See more
          </button>
        </div>
      </div>
    </div>
  );
};

export default Marketplace;
