import React from "react";
import { formatDistance } from "date-fns";

const DateCreated = ({ createdAt }) => {
  return (
    <div>
      Created{" "}
      {formatDistance(new Date(createdAt), new Date(), {
        addSuffix: true,
      })}
    </div>
  );
};

export default DateCreated;
