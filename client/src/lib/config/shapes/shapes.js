export const Square = (
  <symbol id="square" viewBox="-10 -10 200 200" width="200" height="200">
    <rect width="180" height="180" rx="5" ry="5" transform="translate(3, 3)" />
  </symbol>
);

export const SkinnyRectangle = (
  <symbol
    viewBox="-10 -5 200 100"
    width="200"
    height="100"
    id="skinny-rectangle"
  >
    <rect x="0" y="0" rx="2" ry="2" width="180" height="90" />
  </symbol>
);

export const ComplexCircle = (
  <symbol viewBox="0 0 102 102" id="complex-circle" width="154" height="154">
    <circle
      cx="50"
      cy="50"
      r="50"
      fill="transparent"
      stroke="transparent"
      transform="translate(1, 1)"
    />
    <circle cx="50" cy="50" r="36" transform="translate(1, 1)" />
    <path
      d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Zm0,90A40,40,0,1,1,90,50,40,40,0,0,1,50,90Z"
      data-intersect-ignore="true"
      transform="translate(1, 1)"
    />
  </symbol>
);

export const Circle = (
  <symbol viewBox="0 0 154 154" id="circle-dark" width="154" height="154">
    <circle cx="77" cy="77" r="77" />
  </symbol>
);

export const Trapezoid = (
  <symbol id="trapezoid" viewBox="0 0 154 154" height="154" width="154">
    <path d="M 0 154 24 0 130 0 154 154Z" />
  </symbol>
);
export const TrapezoidFlipped = (
  <symbol id="trapezoid-flipped" viewBox="0 0 154 154" height="154" width="154">
    <path
      d="M 0 154 24 0 130 0 154 154Z"
      transform="translate(154, 154) rotate(180)"
    />
  </symbol>
);

export const Hexagon = (
  <symbol id="hexagon" viewBox="0 0 154 154" height="154" width="154">
    <path d="M 0 77 38.5 14 115.5 14 154 77 115.5 140 38.5 140Z" />
  </symbol>
);
export const HexagonPointed = (
  <symbol id="hexagon-pointed" viewBox="0 0 200 200" height="200" width="200">
    <path d="M 100 0 186.6 50 186.6 150 100 200 13.4 150 13.4 50Z" />
  </symbol>
);

export const Lozenge = (
  <symbol viewBox="-50 0 200 200" id="lozenge" width="200" height="200">
    <rect transform="translate(50) rotate(45)" width="140" height="140" />
  </symbol>
);

const scale = 2;
export const HexagonFlat = (
  <symbol
    viewBox={`0 0 ${scale * 88} ${scale * 88}`}
    id="hexagon-flat"
    width={`${scale * 88}`}
    height={`${scale * 88}`}
  >
    <path
      d={`M ${scale * 0} ${scale * 36} ${scale * 18} ${scale * 0} ${
        scale * 70
      } ${scale * 0} ${scale * 88} ${scale * 36} ${scale * 70} ${scale * 72} ${
        scale * 18
      } ${scale * 72}Z`}
      transform={`translate(0, ${8 * scale})`}
    />
  </symbol>
);

export const EmptyEdgeShape = (
  <symbol viewBox="0 0 50 50" id="empty-edge">
    <circle cx="25" cy="25" r="8" fill="currentColor" />
  </symbol>
);

export const SpecialEdgeShape = (
  <symbol viewBox="0 0 50 50" id="special-edge">
    <rect
      transform="rotate(45)"
      x="27.5"
      y="-7.5"
      width="15"
      height="15"
      fill="currentColor"
    />
  </symbol>
);

export const ChoiceShape = (
  <symbol viewBox="0 0 100 100" id="choice" width="100" height="100">
    <rect transform="translate(50, 5) rotate(45)" width="65" height="65" />
  </symbol>
);

export const TerminatorShape = (
  <symbol viewBox="0 0 100 100" id="terminator" width="100" height="100">
    <rect
      width="80"
      height="80"
      rx="15"
      ry="15"
      transform="translate(10, 10)"
    />
  </symbol>
);

export const Ellipse = (
  <symbol viewBox="0 0 154 154" id="ellipse" width="154" height="154">
    <ellipse rx="77" ry="35" cx="77" cy="77" />
  </symbol>
);

export const Triangle = (
  <symbol viewBox="0 0 172 172" id="triangle" width="172" height="172">
    <polygon
      points="75 10, 150 150, 0 150"
      transform="translate(154, 174) rotate(180)"
    />
  </symbol>
);

export const Hexagons = (
  <symbol width="174" height="200" viewBox="0 0 174 200" id="hexagon">
    <path
      fill="rgba(134, 250, 92, 0.8)"
      d="M 86.60254037844386 0 L 173.20508075688772 50 L 173.20508075688772 150 L 86.60254037844386 200 L 0 150 L 0 50"
      data-intersect-ignore="true"
    ></path>
  </symbol>
);
export const EmptyNodeShape = (
  <symbol viewBox="0 0 154 154" width="154" height="154" id="empty-node">
    <circle cx="77" cy="77" r="76" />
  </symbol>
);

export const CustomEmptyShape = (
  <symbol viewBox="0 0 100 100" id="custom-empty">
    <circle cx="50" cy="50" r="45" />
  </symbol>
);

export const shapes = [
  Square,
  SkinnyRectangle,
  ComplexCircle,
  Circle,
  Trapezoid,
  TrapezoidFlipped,
  Hexagon,
  HexagonPointed,
  Lozenge,
  HexagonFlat,
  EmptyEdgeShape,
  SpecialEdgeShape,
  ChoiceShape,
  TerminatorShape,
  Ellipse,
  Triangle,
  Hexagons,
  EmptyNodeShape,
  CustomEmptyShape,
];
