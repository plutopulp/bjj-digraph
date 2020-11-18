import React from "react";
import styled from "styled-components";

const Wrapper = styled.div`
  width: 10em;
  height: 5em;
  background: crimson;
`;
// Appears as a toolbox above the selected node
const NodeToolBox = ({ selected }) => {
  React.useEffect(() => console.log(selected));
  return <Wrapper />;
};

export default NodeToolBox;
