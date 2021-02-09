import React from "react";
import styled from "styled-components";
import { Palette } from "../../components/palette/palette";

const Wrapper = styled.div`
  display: flex;
  flex-flow: row wrap;
`;

// A HOC which wraps a graphview component with a palette.
// Made HOC as could be wrapping authenticated graph or
// basic statefull graph etc..
const withPaletteHOC = (Graph) => (props) => (
  <Wrapper>
    <Palette />
    <Graph {...props} />
  </Wrapper>
);

export default withPaletteHOC;
