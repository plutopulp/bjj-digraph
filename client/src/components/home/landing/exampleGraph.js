const x0 = 0,
  y0 = -1800;
const nodes = [
  {
    id: 1,
    title: "Closed Guard",
    type: "score-position-user",
    x: x0,
    y: y0,
  },

  { id: 3, title: "Kimura", type: "score-grip-user", x: x0 + 300, y: y0 },
  {
    id: 4,
    title: "Posture Up",
    type: "score-action-opponent",
    x: x0 + 600,
    y: y0 + 80,
  },

  {
    id: 6,
    title: "Pressure Down",
    type: "score-action-opponent",
    x: x0 + 600,
    y: y0 + 520,
  },
  {
    id: 7,
    title: "Hip Bump Sweep",
    type: "score-transition-user",
    x: x0 + 900,
    y: y0 + 80,
  },
  {
    id: 8,
    title: "Mount",
    type: "score-position-user",
    x: x0 + 1200,
    y: y0 + 80,
  },
  {
    id: 9,
    title: "Guillotine",
    type: "score-submission-user",
    x: x0 + 1200,
    y: y0 + 80,
  },
];

const edges = [
  { id: 1, source: 1, target: 3 },
  { id: 2, source: 3, target: 4 },
  { id: 3, source: 3, target: 6 },
  { id: 4, source: 4, target: 7 },
  { id: 5, source: 7, target: 8 },
  { id: 6, source: 6, target: 9 },
];
const graph = { edges, nodes };

export default graph;
