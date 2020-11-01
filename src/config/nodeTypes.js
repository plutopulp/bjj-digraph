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
  poly: {
    typeText: "New Poly",
    shapeId: "#poly",
    shape: shapes.PolyShape,
  },
};
