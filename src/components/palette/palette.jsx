import React from "react";
import uuid from "react-uuid";
import styled from "styled-components";

import NodeTypeList from "./nodeTypeList/nodeTypeList";

const PaletteWrapper = styled.div`
  width: 16.67%;
  display: flex;
  flex-direction: column;
  align-items: center;
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
  return (
    <PaletteWrapper>
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
