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
  <symbol viewBox="0 0 154 154" id="circle" key="0" width="154" height="154">
    <circle cx="77" cy="77" r="77" fill="rgba(30, 144, 255, 0.5)"></circle>
  </symbol>
);

export const SpecialShape = (
  <symbol viewBox="-27 0 154 154" id="special" width="154" height="154">
    <rect
      transform="translate(50) rotate(45)"
      width="109"
      height="109"
      fill="rgba(240, 166, 38, 0.8)"
    />
  </symbol>
);

export const PolyShape = (
  <symbol viewBox="0 0 88 72" id="poly" width="88" height="88">
    <path d="M 0 36 18 0 70 0 88 36 70 72 18 72Z" />
  </symbol>
);

export const ComplexCircleShape = (
  <symbol viewBox="0 0 100 100" id="complexCircle" width="154" height="154">
    <circle cx="50" cy="50" r="50" fill="transparent" stroke="transparent" />
    <circle cx="50" cy="50" r="36" fill="rgba(245, 51, 55, 0.5)" />
    <path
      d="M50,0a50,50,0,1,0,50,50A50,50,0,0,0,50,0Zm0,90A40,40,0,1,1,90,50,40,40,0,0,1,50,90Z"
      data-intersect-ignore="true"
      fill="rgba(245, 51, 55, 0.8)"
    />
  </symbol>
);

export const SkinnyRectangle = (
  <symbol viewBox="0 0 154 77" width="154" height="77" id="skinny">
    <rect
      x="0"
      y="0"
      rx="2"
      ry="2"
      width="154"
      height="77"
      fill="rgba(159, 74, 224, 0.5)"
      stroke="#777"
    />
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
export const ChoiceShape = (
  <symbol viewBox="0 0 100 100" id="choice" width="100" height="100">
    <rect transform="translate(50, 5) rotate(45)" width="65" height="65" />
  </symbol>
);

export const TaskShape = (
  <symbol viewBox="0 0 100 100" id="task" width="100" height="100">
    <rect
      width="80"
      height="80"
      rx="15"
      ry="15"
      transform="translate(10, 10)"
    />
  </symbol>
);

export const PassShape = (
  <symbol viewBox="0 0 100 100" id="pass" width="100" height="100">
    <rect transform="translate(7.5, 10)" width="85" height="85" />
  </symbol>
);

export const WaitShape = (
  <symbol viewBox="0 0 100 100" id="wait" width="100" height="100">
    <circle cx="50" cy="50" r="45" transform="translate(0, 2)" />
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

export const Rectangle = (
  <symbol viewBox="0 0 154 154" id="rectangle">
    <rect
      x="0"
      y="0"
      width="154"
      height="154"
      stroke="black"
      fill="transparent"
      stroke-width="5"
    />
  </symbol>
);
export const Ellipse = (
  <symbol viewBox="0 0 154 154" id="ellipse" width="154" height="154">
    <ellipse rx="77" ry="35" cx="77" cy="77" />
  </symbol>
);

export const Triangle = (
  <symbol viewBox="0 0 154 154" id="triangle" width="154" height="154">
    <polygon points="75 10, 150 150, 0 150" />
  </symbol>
);

export const Cylinder = (
  <symbol viewBox="0 0 512 512" id="cylinder">
    <path d="M425.621,38.187C414.763,1.216,272.789,0,256,0S97.237,1.216,86.379,38.187c-0.64,1.387-1.045,2.859-1.045,4.48v426.667c0,1.621,0.405,3.093,1.045,4.48C97.237,510.784,239.211,512,256,512s158.763-1.216,169.621-38.187c0.64-1.387,1.045-2.859,1.045-4.48V42.667C426.667,41.045,426.261,39.573,425.621,38.187z M256,21.333c87.723,0,137.685,13.248,148.075,21.333C393.685,50.752,343.723,64,256,64S118.315,50.752,107.925,42.667C118.315,34.581,168.277,21.333,256,21.333z M405.333,467.989c-6.101,7.851-56.448,22.677-149.333,22.677c-93.995,0-144.619-15.211-149.333-21.333V65.429C149.312,84.544,242.603,85.333,256,85.333s106.688-0.789,149.333-19.904V467.989z" />
  </symbol>
);
