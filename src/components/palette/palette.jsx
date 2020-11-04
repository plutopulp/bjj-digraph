import React from "react";
import styled from "styled-components";

import { NodeList } from "./nodeList";

const PaletteWrapper = styled.div`
  width: 20%;
  background: #fffdd0;
`;
export const Palette = () => {
  return (
    <PaletteWrapper>
      <NodeList />
    </PaletteWrapper>
  );
};
