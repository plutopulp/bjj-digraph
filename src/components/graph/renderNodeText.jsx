import styled from "styled-components";

const NodeContentWrapper = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  justify-content: center;
  align-items: center;
  text-align: center;
  font-size: 1.5em;
`;

const renderNodeText = (data) => {
  return (
    <foreignObject x="-77" y="-77" width="154" height="154">
      <NodeContentWrapper>
        <span>{data.title} </span>
      </NodeContentWrapper>
    </foreignObject>
  );
};

export default renderNodeText;
