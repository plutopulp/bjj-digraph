import React from "react";
import { useToggle } from "../../../hooks";
import StatefullGraphView from "../../common/graph/detailViews/statefull";
import ModalMessage from "./message";

const TestGraph = () => {
  const [modalOpen, toggleModal] = useToggle(false);
  React.useEffect(() => toggleModal(), []);
  return (
    <React.Fragment>
      <StatefullGraphView />
      <ModalMessage open={modalOpen} handleClose={toggleModal} />
    </React.Fragment>
  );
};

export default TestGraph;
