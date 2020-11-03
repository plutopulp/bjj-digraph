import * as shapes from "./shapes";
export const nodeTypes = {
  position: {
    typeText: "New Position",
    shapeId: "#circle",
    shape: shapes.Circle,
  },
  conditional: {
    typeText: "New Conditional",
    shapeId: "#special",
    shape: shapes.SpecialShape,
  },
  submission: {
    typeText: "New Submission",
    shapeId: "#complexCircle",
    shape: shapes.ComplexCircleShape,
  },
  transition: {
    typeText: "New Transition",
    shapeId: "#skinny",
    shape: shapes.SkinnyRectangle,
  },
  sweep: {
    typeText: "New Poly",
    shapeId: "#hexagon-flat",
    shape: shapes.HexagonFlat,
  },

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
  entry: {
    typeText: "New Hex",
    shapeId: "#hexagon",
    shape: shapes.Hexagon,
  },
};
