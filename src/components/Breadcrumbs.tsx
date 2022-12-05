import React from "react";

type Props = {
  path: string;
  page: string;
};

const Breadcrumbs = ({ path, page }: Props) => {
  return (
    <nav className="mt-4 mb-8">
      <span className="text-textGray capitalize">{path}</span>
      <span className="capitalize">{page}</span>
    </nav>
  );
};

export default Breadcrumbs;
