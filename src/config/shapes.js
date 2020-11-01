export const EmptyNodeShape = (
  <symbol viewBox="0 0 154 154" width="154" height="154" id="emptyNode">
    <circle cx="77" cy="77" r="76" />
  </symbol>
);

export const CustomEmptyShape = (
  <symbol viewBox="0 0 100 100" id="customEmpty">
    <circle cx="50" cy="50" r="45" />
  </symbol>
);

export const Circle = (
  <symbol viewBox="0 0 100 100" id="circle" key="0" width="200" height="200">
    <circle cx="50" cy="50" r="45" fill="rgba(30, 144, 255, 0.5)"></circle>
  </symbol>
);

export const SpecialShape = (
  <symbol viewBox="-27 0 154 154" id="special" width="180" height="180">
    <rect transform="translate(50) rotate(45)" width="109" height="109" />
  </symbol>
);

export const PolyShape = (
  <symbol viewBox="0 0 88 72" id="poly" width="88" height="88">
    <path d="M 0 36 18 0 70 0 88 36 70 72 18 72Z" />
  </symbol>
);

export const ComplexCircleShape = (
  <symbol viewBox="0 0 100 100" id="complexCircle" width="200" height="200">
    <circle cx="50" cy="50" r="50" fill="transparent" stroke="transparent" />
    <circle cx="50" cy="50" r="34" fill="rgba(245, 51, 55, 0.5)" />
    <path
      d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Zm0,90A40,40,0,1,1,90,50,40,40,0,0,1,50,90Z"
      data-intersect-ignore="true"
      fill="rgba(245, 51, 55, 0.8)"
    />
  </symbol>
);

export const SkinnyShape = (
  <symbol viewBox="0 0 154 54" width="154" height="54" id="skinny">
    <rect x="0" y="0" rx="2" ry="2" width="154" height="54" />
  </symbol>
);

export const SpecialChildShape = (
  <symbol viewBox="0 0 154 154" id="specialChild">
    <rect
      x="2.5"
      y="0"
      width="154"
      height="154"
      fill="rgba(30, 144, 255, 0.12)"
    />
  </symbol>
);

export const EmptyEdgeShape = (
  <symbol viewBox="0 0 50 50" id="emptyEdge">
    <circle cx="25" cy="25" r="8" fill="currentColor" />
  </symbol>
);

export const SpecialEdgeShape = (
  <symbol viewBox="0 0 50 50" id="specialEdge">
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
