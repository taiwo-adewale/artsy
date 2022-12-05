import React from "react";
import { Link } from "react-router-dom";

type Props = {
  name: string;
  description: string;
  creator: string;
  status: string;
  statusColor: string;
  image: string;
};

const Drop = ({
  name,
  description,
  creator,
  status,
  statusColor,
  image,
}: Props) => {
  return (
    <div className="grid grid-cols-5 gap-x-8 gap-y-6 mb-14 md:mb-20">
      <div className="col-span-5 md:col-span-3 relative rounded-xl overflow-hidden">
        <img
          src={image}
          alt={name}
          className="w-full rounded-xl min-h-[250px] object-cover"
        />

        <div className="drop-time absolute bottom-3.5 w-[90%] lg:w-[80%] left-[5%] lg:left-[10%] right-[5%] lg:right-[10%] py-2 lg:py-4 px-4 lg:px-8 flex flex-wrap sm:flex-nowrap gap-4 justify-between rounded-lg border border-textGray">
          <div className="flex flex-col">
            <span className="text-white sm:text-lg lg:text-xl mb-1">
              {status === "ended" ? "Auction ended" : "Time remaining"}
            </span>
            <span className="text-white text-xl sm:text-2xl lg:text-3xl">
              {status === "ended" ? "2 hours ago" : "06 hrs : 45 min : 22 s"}
            </span>
          </div>

          <div className="flex flex-col justify-end">
            <Link
              to="/"
              style={{
                backgroundColor: status === "ended" ? "#B8BABC" : "#4693ED",
              }}
              className="px-4 text-white rounded-lg"
            >
              {status === "ended" ? "View" : "Join"}
            </Link>
          </div>
        </div>

        <div className="absolute top-4 right-4 md:hidden">
          <span
            style={{ backgroundColor: statusColor }}
            className="px-8 text-white rounded-lg uppercase text-xs lg:text-sm py-2"
          >
            {status}
          </span>
        </div>
      </div>

      <div className="col-span-5 md:col-span-2 flex flex-col justify-between py-1">
        <div className="hidden md:block mb-1">
          <span
            style={{ backgroundColor: statusColor }}
            className="px-8 text-white rounded-lg uppercase text-xs lg:text-sm py-1.5"
          >
            {status}
          </span>
        </div>

        <p className="text-textPrimary text-sm font-medium">
          November 21 at 11 am WAT
        </p>

        <Link to="/" className="text-textPrimary text-3xl font-bold my-4">
          {name}
        </Link>

        <p className="text-[#616161] text-sm">{description}</p>

        <span className="font-medium my-4">
          <span className="text-textPrimary">Creator: </span>
          <Link to="" className="text-[#006CA2]">
            {creator}
          </Link>
        </span>

        <Link
          to="/"
          className="text-sm text-[#006CA2] underline underline-offset-2"
        >
          {status === "ended" ? "View" : "Get notified"}
        </Link>
      </div>
    </div>
  );
};

export default Drop;
