import React from "react";
import uuid from "react-uuid";
import styled from "styled-components";
import { useWindowSize } from "../../hooks";

import NodeTypeList from "./nodeTypeList/nodeTypeList";

const PaletteWrapper = styled.div`
  width: 18%;
  height: ${({ height }) => height}}px;
  display: flex;
  flex-direction: column;
  align-items: start;
  background: #94858545;
`;

// NodeTypeList props
const NODE_TYPE_LISTS = [
  { title: "My Nodes", type: "score", subtype: "user" },
  { title: "Opponent Nodes", type: "score", subtype: "opponent" },
];

// A Palette of nodes available to the user which may
// be dropped onto the graph
export const Palette = () => {
  const windowSize = useWindowSize();
  return (
    <PaletteWrapper height={windowSize.height}>
      {NODE_TYPE_LISTS.map((typeProp) => (
        <NodeTypeList
          key={uuid()}
          title={typeProp.title}
          type={typeProp.type}
          subtype={typeProp.subtype}
        />
      ))}
    </PaletteWrapper>
  );
};
