import * as shapes from "../shapes/shapes";
const userOpacity = 0.9;
const oppOpacity = 0.6;

const getFill = (fillArray, opacity) => {
  const newFill = [...fillArray];
  newFill.push(opacity);
  return `rgba(${newFill})`;
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
  fill: [173, 86, 14],
  ...commonProps,
};

export const nodeTypes = {
  userPosition: {
    ...position,
    fill: getFill(position.fill, userOpacity),
    subtype: "user",
    name: "userPosition",
    typeText: "My Position",
    textColor: "#fff",
  },

  userSubmission: {
    name: "userSubmission",
    typeText: "My Submission",
    shapeId: "#complex-circle",
    shape: shapes.CompleCircle,
    ...commonProps,
  },
  conditional: {
    name: "conditional",
    typeText: "New Conditional",
    shapeId: "#lozenge",
    shape: shapes.Lozenge,
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
    typeText: "New Entry",
    shapeId: "#hexagon",
    shape: shapes.Hexagon,
    ...commonProps,
  },
  guardPull: {
    name: "guardPull",
    typeText: "New Guard-Pull",
    shapeId: "#poly-star",
    shape: shapes.PolyStar,
    ...commonProps,
  },

  takedown: {
    name: "takedown",
    typeText: "New Takedown",
    shapeId: "#trial",
    shape: shapes.trial,
    ...commonProps,
  },

  dummy: {
    name: "dummy",
    typeText: "New Takedown",
    shapeId: "#dummy",
    shape: shapes.Dummy,
    ...commonProps,
  },

  oppPosition: {
    ...position,
    fill: getFill(position.fill, oppOpacity),
    subtype: "opponent",
    name: "oppPosition",
    typeText: "Opp. Position",
    textColor: "#fff",
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
