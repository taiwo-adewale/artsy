import React from "react";
import { Link } from "react-router-dom";
import { MdOutlineLocationOn, MdMailOutline } from "react-icons/md";

import { links, footerExtraLinks } from "../data";

const Footer = () => {
  return (
    <footer className="py-10">
      <div className="container">
        <div className="grid grid-cols-12 lg:grid-cols-10 gap-y-8 text-textSecondary">
          <div className="flex flex-center mt-4 lg:mt-0 order-4 lg:order-1 col-span-12 lg:col-span-3">
            <span className="font-bold text-4xl text-textPrimary">ARTSY.</span>
          </div>

          <ul className="flex flex-col space-y-4 order-1 lg:order-2 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 text-center sm:text-left">
            {links.map((link) => (
              <li key={`footer-link-${link.title}`}>
                <Link to={link.url} className="capitalize">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <ul className="flex flex-col space-y-4 order-2 lg:order-3 col-span-12 sm:col-span-6 md:col-span-4 lg:col-span-2 text-center sm:text-left">
            {footerExtraLinks.map((link) => (
              <li key={`footer-link-${link.title}`}>
                <Link to={link.url} className="capitalize">
                  {link.title}
                </Link>
              </li>
            ))}
          </ul>

          <div className="flex flex-col space-y-4 order-3 lg:order-4 col-span-12 sm:col-span-12 md:col-span-4 lg:col-span-3">
            <div className="flex items-center justify-center sm:justify-start space-x-2 5">
              <MdMailOutline className="text-4xl fill-textSecondary" />
              <a href="mailto:artsystudios@gmail.com">artsystudios@gmail.com</a>
            </div>
            <div className="flex items-center justify-center sm:justify-start space-x-2 5">
              <MdOutlineLocationOn className="text-4xl fill-textSecondary" />
              <span>Lagos, Nigeria.</span>
            </div>
          </div>
        </div>

        <div className="text-center mt-6 lg:mt-20">
          <p className="text-[rgba(51,51,51,0.5)] font-medium">
            Artsystudios © 2022. All Rights Reserved.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
