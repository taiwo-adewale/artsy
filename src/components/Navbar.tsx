import React, { useState } from "react";
import { Link, NavLink } from "react-router-dom";
import { BiSearch } from "react-icons/bi";
import { BsCart3 } from "react-icons/bs";
import { VscBell } from "react-icons/vsc";
import { HiOutlineMenu } from "react-icons/hi";

import { links } from "../data";
import { NavMobile } from ".";

const Navbar = () => {
  const [isNavMobileActive, setIsNavMobileActive] = useState<boolean>(false);

  return (
    <>
      <nav className="py-6 md:py-8 lg:py-10">
        <div className="container">
          <div className="flex justify-between items-center lg:items-end">
            <div className="lg:hidden">
              <HiOutlineMenu
                className="text-2xl cursor-pointer xs:mr-4 mr-8"
                onClick={() => setIsNavMobileActive(true)}
              />
            </div>

            <Link to="/" className="font-bold xs:text-2xl text-3xl">
              ARTSY.
            </Link>

            <ul className="lg:flex hidden">
              {links.map((link) => (
                <li key={`navlink-${link.title}`} className="px-2">
                  <NavLink
                    to={link.url}
                    className={({ isActive }) =>
                      `capitalize px-2 py-1 font-medium ${
                        isActive && "underline underline-offset-4 decoration-2"
                      }`
                    }
                  >
                    {link.title}
                  </NavLink>
                </li>
              ))}
            </ul>

            <div className="flex xs:space-x-2 space-x-4 sm:space-x-6">
              <BiSearch className="text-2xl" />
              <div className="relative">
                <BsCart3 className="text-2xl" />
                <div className="absolute w-1.5 h-1.5 bg-[#E31616] rounded-full -top-1 -right-1"></div>
              </div>
              <VscBell className="text-2xl hidden lg:block" />
            </div>
          </div>
        </div>
      </nav>

      {isNavMobileActive && (
        <NavMobile setIsNavMobileActive={setIsNavMobileActive} />
      )}
    </>
  );
};

export default Navbar;
