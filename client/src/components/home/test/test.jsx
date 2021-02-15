import React from "react";
import { useContextRef } from "react-context-refs";
import StatefullGraphView from "../../common/graph/detailViews/statefull";

const Test = () => {
  const ref = useContextRef("section", { name: "test" });
  return (
    <div ref={ref} id="test">
      <StatefullGraphView />
    </div>
  );
};

export default Test;
