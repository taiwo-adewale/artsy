import React from "react";
import { Link } from "react-router-dom";
import { FaArrowRight } from "react-icons/fa";

import {
  Header,
  TopCreators,
  Newsletter,
  UpcomingAuctions,
  Products,
} from "../components";

const Home = () => {
  return (
    <main>
      <Header />

      <div className="h-[250px] bg-blue-400 mb-16"></div>
      <Products />
      <UpcomingAuctions />

      <div className="flex flex-col mb-20">
        <div className="border-y border-textGray">
          <div className="container">
            <div className="flex justify-between my-6 items-center">
              <Link to="/" className="xs:text-lg text-xl">
                Explore marketplace
              </Link>

              <Link to="/" className="hover:translate-x-1 transition-300 mr-5">
                <FaArrowRight className="fill-[#4693ED] xs:text-2xl text-3xl" />
              </Link>
            </div>
          </div>
        </div>

        <div className="border-b border-textGray">
          <div className="container">
            <div className="flex justify-between my-6 items-center">
              <Link to="/" className="xs:text-lg text-xl">
                See auctions
              </Link>

              <Link to="/" className="hover:translate-x-1 transition-300 mr-5">
                <FaArrowRight className="fill-[#4693ED] xs:text-2xl text-3xl" />
              </Link>
            </div>
          </div>
        </div>
      </div>

      <TopCreators />
      <Newsletter />
    </main>
  );
};

export default Home;
