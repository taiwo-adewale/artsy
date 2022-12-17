import React from "react";
import { Link } from "react-router-dom";
import { HiX } from "react-icons/hi";

import { Breadcrumbs, ButtonPrimary } from "../components";
import { cartItems } from "../data";

const Cart = () => {
  return (
    <main className="container">
      <Breadcrumbs path="Home / Marketplace / " page="Cart" />

      <div className="my-12 w-[80%] bg-[#3a3a3a] rounded-full py-1 px-4 text-center mx-auto">
        <button className="bg-white rounded-full px-6 py-1.5">Shop</button>
        <button className="text-white px-6 py-2">Scheduled</button>
      </div>

      {cartItems.map((item) => (
        <div
          key={`cart-item-${item.name}`}
          className="flex flex-wrap mb-20 gap-4 relative"
        >
          <img
            src={item.image}
            alt={item.name}
            className="xs:w-[100px] xs:h-[100px] w-[125px] h-[125px] object-cover flex-shrink-0"
          />

          <div className="flex flex-col justify-between flex-grow">
            <span className="text-sm italic mb-2 text-[#616161]">
              Editorials
            </span>

            <Link to="/" className="font-bold text-xl capitalize mb-4">
              {item.name}
            </Link>

            <div className="flex justify-between">
              <form className="flex mr-4">
                <div className="px-2 py-1 border rounded-l-lg  w-8 flex-center border-textGray cursor-pointer">
                  -
                </div>
                <input
                  type="number"
                  className="border-y border-textGray w-12 px-3 text-center py-1"
                />
                <div className="px-2 py-1 border rounded-r-lg w-8 flex-center border-textGray cursor-pointer">
                  +
                </div>
              </form>

              <span className="font-bold text-xl">${item.price}0</span>
            </div>

            <div className="absolute right-0 top-0 rounded-full w-9 h-9 border-2 border-textMuted flex-center cursor-pointer">
              <HiX className="fill-textMuted" />
            </div>
          </div>
        </div>
      ))}

      <div>
        <div className="flex justify-between mb-5">
          <span className="text-[#888888]">Products in cart :</span>
          <span className="font-medium">4 items</span>
        </div>
        <div className="flex justify-between mb-5">
          <span className="text-[#888888]">Shipping :</span>
          <span className="font-medium">$2.50</span>
        </div>
        <div className="flex justify-between mb-5">
          <span className="text-[#888888]">Total :</span>
          <span className="font-medium">$114.00</span>
        </div>

        <div className="border-b border-dashed border-#[616161] mb-6"></div>

        <div className="flex justify-between mb-10">
          <span className="text-[#888888]">Grand total:</span>
          <span className="font-medium">$116.50</span>
        </div>
      </div>

      <div className="text-center flex flex-col items-center">
        <ButtonPrimary>Proceed to checkout</ButtonPrimary>
        <Link
          to="/"
          className="underline text-[#006CA2] decoration-[#006CA2] mt-6"
        >
          Continue shopping
        </Link>
      </div>
    </main>
  );
};

export default Cart;
