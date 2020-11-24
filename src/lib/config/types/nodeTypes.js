import { take } from "lodash";
import * as shapes from "../shapes/shapes";

export const userShapeProps = {
  opacity: 0.8,
  stroke: "#777",
  strokeWidth: "2",
};

export const opponentShapeProps = {
  opacity: 0.5,
  stroke: "#000",
  strokeWidth: "2",
};

const commonProps = {
  effectiveness: 50,
  priority: 50,
  proficiency: 50,
  comment: "",
  description: "",
};

const position = {
  shapeId: "#square",
  shape: shapes.Square,
  typeText: "New Position",
  fill: `rgb(173, 86, 14)`,
  ...commonProps,
};
const submission = {
  shapeId: "#complex-circle",
  shape: shapes.ComplexCircle,
  typeText: "New Submission",
  fill: `rgb(245, 51, 55)`,
  ...commonProps,
};
const transition = {
  shapeId: "#skinny-rectangle",
  shape: shapes.SkinnyRectangle,
  typeText: "New Transition",
  fill: `rgb(159, 74, 224)`,
  ...commonProps,
};
const entry = {
  shapeId: "#hexagon-pointed",
  shape: shapes.HexagonPointed,
  typeText: "New Entry",
  fill: `rgb(134, 250, 92)`,
  ...commonProps,
};
const takedown = {
  shapeId: "#trapezoid",
  shape: shapes.Trapezoid,
  typeText: "New Takedown",
  fill: `rgb(134, 250, 222)`,
  ...commonProps,
};
const sweep = {
  shapeId: "#trapezoid-flipped",
  shape: shapes.TrapezoidFlipped,
  typeText: "New Sweep",
  fill: `rgb(34, 150, 92)`,
  ...commonProps,
};

const guardPull = {
  shapeId: "#hexagon-flat",
  shape: shapes.HexagonFlat,
  typeText: "New Guard-Pull",
  fill: `rgb(124, 50, 122)`,
  ...commonProps,
};
export const nodeTypes = {
  userPosition: {
    ...position,
    subtype: "user",
    name: "userPosition",
  },
  userEntry: {
    ...entry,
    subtype: "user",
    name: "userEntry",
  },
  userSubmission: {
    ...submission,
    subtype: "user",
    name: "userSubmission",
  },
  userTakedown: {
    ...takedown,
    subtype: "user",
    name: "userTakedown",
  },
  userGuardPull: {
    ...guardPull,
    subtype: "user",
    name: "userGuardPull",
  },
  userTransition: {
    ...transition,
    subtype: "user",
    name: "userTransition",
  },
  userSweep: {
    ...sweep,
    subtype: "user",
    name: "userSweep",
  },
  conditional: {
    name: "conditional",
    typeText: "New Conditional",
    shapeId: "#lozenge",
    shape: shapes.Lozenge,
    ...commonProps,
  },
  oppPosition: {
    ...position,
    subtype: "opponent",
    name: "oppPosition",
    stroke: "black",
    strokeWidth: "3",
    textColor: "#fff",
  },
  oppSweep: {
    ...sweep,
    subtype: "opponent",
    name: "oppSweep",
  },
};
