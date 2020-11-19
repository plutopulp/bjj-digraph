import React from "react";
import { Icon, Button } from "semantic-ui-react";
import styled from "styled-components";

import GraphTransformState from "../../../lib/graph/transformState";

const Wrapper = styled.div`
  position: absolute;
  width: ${({ scale }) => Math.pow(scale, 0.5) * 10}em;
  height: ${({ scale }) => Math.pow(scale, 0.5) * 3}em;
  background: #fff;
  border-radius: 5px;
  border: solid 1px #777;
  top: calc(${({ y }) => y}px);
  left: ${({ x }) => x}px;
`;
// Appears as a toolbox above the selected node
const NodeToolBox = ({
  selected,
  graphRef,
  wrapperRef,
  scale,
  translation,
}) => {
  const [boxPosition, setBoxPosition] = React.useState([]);
  const transformManager = new GraphTransformState(graphRef, wrapperRef);
  React.useEffect(() => {
    setBoxPosition(transformManager.graphToClient([selected.x, selected.y]));
  }, [selected.x, selected.y, scale, translation]);

  return (
    <Wrapper x={boxPosition[0]} y={boxPosition[1]} scale={scale}>
      ToolBox
    </Wrapper>
  );
};

export default NodeToolBox;
