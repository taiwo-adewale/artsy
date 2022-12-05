import React from "react";
import { BsArrowRight } from "react-icons/bs";

import { productsHome } from "../data";
import { images } from "../constants";
import { Link } from "react-router-dom";

const Products = () => {
  return (
    <div className="mb-20">
      <div className="container">
        <h2 className="text-2xl md:text-3xl md:mb-6 font-medium">
          Featured products
        </h2>

        {productsHome.map((product, index) => (
          <div
            key={`home-product-${index}`}
            className="py-8 lg:py-10 border-b md:border-t border-textGray"
          >
            <div className="flex flex-wrap md:flex-nowrap gap-x-6">
              <div
                className={`relative bg-cover bg-center w-full md:w-[52%] min-h-[200px] sm:min-h-[250px] md:min-h-[200px] lg:min-h-[250px] ${
                  index % 2 === 0 ? "md:order-2" : "md:order-1"
                }`}
                style={{ backgroundImage: `url(${product.image})` }}
              >
                <div className="absolute md:hidden inset-0 bg-[rgba(0,0,0,0.6)] flex justify-center">
                  <div className="w-[80%] py-6 sm:py-10 flex flex-col justify-between">
                    <h3 className="text-2xl sm:text-3xl font-medium text-white self-center">
                      {product.name}
                    </h3>

                    <Link
                      to="/"
                      className="w-10 sm:w-14 h-10 sm:h-14 flex items-center justify-center border-2 border-white self-end rounded-full group hover:bg-white transition-300"
                    >
                      <BsArrowRight className="text-2xl fill-white group-hover:fill-textSecondary transition-300" />
                    </Link>
                  </div>
                </div>
              </div>

              <div
                className={`flex flex-col justify-between w-full md:w-[48%] ${
                  index % 2 === 0 ? "md:order-1" : "md:order-2"
                }`}
              >
                <h3 className="text-2xl font-medium hidden md:block">
                  {product.name}
                </h3>

                <p className="my-5 text-sm sm:text-base">
                  {product.description}
                </p>

                <div className="flex justify-between pr-5">
                  <div className="flex flex-wrap sm:flex-nowrap gap-y-2 gap-x-4 items-center">
                    <div className="flex">
                      <img
                        src={images.creator01}
                        alt=""
                        className="rounded-full h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10 border border-[#78A3AD]"
                      />
                      <img
                        src={images.creator02}
                        alt=""
                        className="rounded-full h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10 -ml-[15px] border border-[#78A3AD]"
                      />
                      <img
                        src={images.creator03}
                        alt=""
                        className="rounded-full h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10 -ml-[15px] border border-[#78A3AD]"
                      />
                      <img
                        src={images.creator04}
                        alt=""
                        className="rounded-full h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10 -ml-[15px] border border-[#78A3AD]"
                      />
                      <img
                        src={images.creator05}
                        alt=""
                        className="rounded-full h-10 w-10 md:h-8 md:w-8 lg:h-10 lg:w-10 -ml-[15px] border border-[#78A3AD]"
                      />
                    </div>

                    <span className="font-medium">64 major creators</span>
                  </div>

                  <Link
                    to="/"
                    className="w-10 lg:w-12 h-10 lg:h-12 hidden md:flex items-center justify-center border border-textSecondary rounded-full group hover:bg-textSecondary transition-300"
                  >
                    <BsArrowRight className="text-2xl fill-textSecondary group-hover:fill-white transition-300" />
                  </Link>
                </div>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default Products;
