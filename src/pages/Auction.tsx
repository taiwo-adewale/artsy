import React from "react";

import { Breadcrumbs } from "../components";

const Auction = () => {
  return (
    <div className="container">
      <Breadcrumbs path="Home / " page="Auctions" />

      <p>Here’s an overview of products actively on auction, explore!</p>
    </div>
  );
};

export default Auction;
