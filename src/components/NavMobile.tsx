import React, { useEffect } from "react";
import { Link, NavLink } from "react-router-dom";
import { MdOutlineClose, MdChatBubble } from "react-icons/md";

import { links } from "../data";

type Props = {
  setIsNavMobileActive: React.Dispatch<React.SetStateAction<boolean>>;
};

const NavMobile = ({ setIsNavMobileActive }: Props) => {
  useEffect(() => {
    document.querySelector("body")?.classList.add("overflow-hidden");
    document.querySelector("body")?.classList.add("lg:overflow-auto");

    return () => {
      document.querySelector("body")?.classList.remove("overflow-hidden");
      document.querySelector("body")?.classList.remove("lg:overflow-auto");
    };
  }, []);

  return (
    <nav className="fixed inset-0 py-4 px-6 overflow-auto bg-white lg:hidden z-[99]">
      <div className="flex justify-between items-center">
        <Link to="/" className="font-bold text-2xl">
          ARTSY.
        </Link>

        <MdOutlineClose
          className="w-8 h-8 flex-shrink-0 cursor-pointer"
          onClick={() => setIsNavMobileActive(false)}
        />
      </div>

      <ul className="py-10 flex flex-col space-y-6">
        {links.map((link) => (
          <li key={`navmobile-${link.title}`}>
            <NavLink
              to={link.url}
              className={({ isActive }) =>
                `capitalize font-medium py-1 inline-block ${
                  isActive && "underline underline-offset-4 decoration-2"
                }`
              }
            >
              {link.title}
            </NavLink>
          </li>
        ))}
      </ul>

      <div className="fixed bottom-8 right-6 rounded-full bg-btnPrimary w-14 h-14 flex-center">
        <MdChatBubble className="fill-white w-8 h-8" />
      </div>
    </nav>
  );
};

export default NavMobile;
