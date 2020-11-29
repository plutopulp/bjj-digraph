import React from "react";

import { shapes } from "../lib/config/shapes/shapes";

export const NodeTypesContext = React.createContext();

const gameNodeProps = {
  effectiveness: 50,
  priority: 50,
  proficiency: 50,
  comment: "",
  description: "",
};

export const NodeTypesProvider = ({ children }) => {
  const [gameNodeTypes, setGameNodeTypes] = React.useState([
    {
      type: "position",
      shapeId: "#square",
      shape: shapes.Square,
      typeText: "New Position",
      fill: [173, 86, 14],
      ...gameNodeProps,
    },
    {
      type: "submission",
      shapeId: "#complex-cirlce",
      shape: shapes.ComplexCircle,
      typeText: "New Submission",
      fill: [245, 51, 55],
      ...gameNodeProps,
    },
    {
      type: "transition",
      shapeId: "#skinny-rectangle",
      shape: shapes.SkinnyRectangle,
      typeText: "New Transition",
      fill: [159, 74, 224],
      ...gameNodeProps,
    },
    {
      type: "entry",
      shapeId: "#hexagon-pointed",
      shape: shapes.HexagonPointed,
      typeText: "New Entry",
      fill: [134, 250, 92],
      ...gameNodeProps,
    },
    {
      type: "takedown",
      shapeId: "#trapezoid",
      shape: shapes.Trapezoid,
      typeText: "New Takedown",
      fill: [134, 250, 222],
      ...gameNodeProps,
    },
    {
      type: "sweep",
      shapeId: "#trapezoid-flipped",
      shape: shapes.TrapezoidFlipped,
      typeText: "New Sweep",
      fill: [34, 150, 92],
      ...gameNodeProps,
    },
    {
      type: "guardPull",
      shapeId: "#hexagon",
      shape: shapes.Hexagon,
      typeText: "New Guard-Pull",
      fill: [53, 174, 240],
      ...gameNodeProps,
    },
  ]);
  const [userGameNodeTypes, setUserGameNodeTypes] = React.useState(
    gameNodeTypes.map((nodeType) => {
      return { ...nodeType, subtype: "user" };
    })
  );
  const [oppGameNodeTypes, setOppGameNodeTypes] = React.useState(
    gameNodeTypes.map((nodeType) => {
      return { ...nodeType, subtype: "opponent" };
    })
  );

  return (
    <NodeTypesContext.Provider
      value={{
        gameNodeTypes,
        setGameNodeTypes,
        userGameNodeTypes,
        setUserGameNodeTypes,
        oppGameNodeTypes,
        setOppGameNodeTypes,
      }}
    >
      {children}
    </NodeTypesContext.Provider>
  );
};
