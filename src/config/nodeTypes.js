import * as shapes from "./shapes";
const commonProps = {
  effectiveness: 50,
  priority: 50,
  proficiency: 50,
  comment: "",
  description: "",
};
export const nodeTypes = {
  position: {
    name: "position",
    typeText: "New Position",
    shapeId: "#circle",
    shape: shapes.Circle,
    ...commonProps,
  },
  conditional: {
    name: "conditional",
    typeText: "New Conditional",
    shapeId: "#special",
    shape: shapes.SpecialShape,
    ...commonProps,
  },
  submission: {
    name: "submission",
    typeText: "New Submission",
    shapeId: "#complexCircle",
    shape: shapes.ComplexCircleShape,
    ...commonProps,
  },
  transition: {
    name: "transition",
    typeText: "New Transition",
    shapeId: "#skinny",
    shape: shapes.SkinnyRectangle,
    ...commonProps,
  },
  sweep: {
    name: "sweep",
    typeText: "New Poly",
    shapeId: "#hexagon-flat",
    shape: shapes.HexagonFlat,
    ...commonProps,
  },

  entry: {
    name: "entry",
    typeText: "New Hex",
    shapeId: "#hexagon",
    shape: shapes.Hexagon,
    ...commonProps,
  },
};

const extras = {
  pass: {
    typeText: "New Poly",
    shapeId: "#pass",
    shape: shapes.PassShape,
  },

  choice: {
    typeText: "New Poly",
    shapeId: "#choice",
    shape: shapes.ChoiceShape,
  },

  task: {
    typeText: "New Poly",
    shapeId: "#task",
    shape: shapes.TaskShape,
  },

  wait: {
    typeText: "New Poly",
    shapeId: "#wait",
    shape: shapes.WaitShape,
  },

  terminator: {
    typeText: "New Poly",
    shapeId: "#terminator",
    shape: shapes.TerminatorShape,
  },
  ellipse: {
    typeText: "New Ellipse",
    shapeId: "#ellipse",
    shape: shapes.Ellipse,
  },
  triangle: {
    typeText: "New Hex",
    shapeId: "#triangle",
    shape: shapes.Triangle,
  },
};
