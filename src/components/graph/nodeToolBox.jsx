import React from "react";
import styled from "styled-components";
import GraphTransformState from "../../lib/graph/transformState";

const Wrapper = styled.div`
  position: absolute;
  width: 10em;
  height: 5em;
  background: crimson;
  top: ${({ y }) => y}px;
  left: ${({ x }) => x}px;
`;
// Appears as a toolbox above the selected node
const NodeToolBox = ({ selected, graphRef, wrapperRef }) => {
  React.useEffect(() => console.log(selected));
  const positionConverter = new GraphTransformState(
    [selected.x, selected.y],
    graphRef,
    wrapperRef
  );
  //const position = positionConverter.graphToClient([selected.x, selected.y]);
  //console.log(position);
  return null;
};

//<Wrapper x={position[0]} y={position[1]} />;
export default NodeToolBox;
