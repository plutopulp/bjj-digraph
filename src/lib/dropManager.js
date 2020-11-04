// A class for managing external dropping of elements onto the graph canvas
export class DropManager {
  constructor(graphRef, dropEvent) {
    this.graphRef = graphRef;
    this.clientPosition = [dropEvent.clientX, dropEvent.clientY];
    this.transform = [];
    this.translation = [];
    this.scale = null;
    this.dropPosition = [];
  }
  // Gets the absolute position for the dropped node
  getDropPosition() {
    this._setDropPosition();
    return this.dropPosition;
  }
  // Sets the position for dropping the node
  _setDropPosition() {
    this._setTransformArray();
    if (!this.transform) return;
    this._setTranslationArray();
    if (!this.translation) return;
    this._setScale();
    if (!this.scale) return;
    this.dropPosition = this.clientPosition.map(
      (position, i) => (position - this.translation[i]) / this.scale
    );
  }

  // Gets the current translation + scale properties due to zoom/pan
  // And stores in transform property
  _setTransformArray() {
    const viewWrapper = this.graphRef.current.view;
    const transform = viewWrapper.getAttribute("transform");
    this.transform = transform ? transform.split(" ") : null;
  }

  // Sets the current x - y translation due to panning
  _setTranslationArray() {
    const parenRegExp = /\(([^)]+)\)/g;
    const translation = parenRegExp.exec(this.transform[0]);
    if (!translation) this.translation = [];
    const translationArray = translation[1].split(",");
    this.translation = [
      Number(translationArray[0]),
      Number(translationArray[1]),
    ];
  }

  // Sets the current scale due to zooming
  _setScale() {
    const parenRegExp = /\(([^)]+)\)/g;
    const scale = parenRegExp.exec(this.transform[1]);
    this.scale = scale ? Number(scale[1]) : null;
  }
}
