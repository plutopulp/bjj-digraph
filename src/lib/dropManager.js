// A class for managing external dropping of elements onto the graph canvas
// Single public method for getting the exact drop position
export class DropManager {
  constructor(mousePosition, graphRef, wrapperRef) {
    // Ref to the graph element, used to get pan-zoom properties
    this.graphRef = graphRef;
    // Ref to the div wrapping the graph (should have identical dimensions to graph)
    // Used to get the boundingRect of the graph
    this.wrapperRef = wrapperRef;
    this.mousePosition = mousePosition;
    this.graphPosition = [];
    this.transform = [];
    this.translation = [];
    this.scale = null;
    this.dropPosition = [];
  }

  // Gets the absolute drop position
  getDropPosition() {
    this._setDropPosition();
    return this.dropPosition;
  }

  // Sets the drop position
  _setDropPosition() {
    if (!this.mousePosition) return;
    this._setGraphPosition();
    if (!this.graphPosition) return;
    this._setTransformArray();
    if (!this.transform) return;
    this._setTranslationArray();
    if (!this.translation) return;
    this._setScale();
    if (!this.scale) return;
    this.dropPosition = this.mousePosition.map(
      (position, i) =>
        (position - this.graphPosition[i] - this.translation[i]) / this.scale
    );
  }

  // Sets the position of the graph within the viewport
  _setGraphPosition() {
    if (!this.wrapperRef.current) {
      this.graphPosition = null;
      return;
    }
    const boundingRect = this.wrapperRef.current.getBoundingClientRect();
    this.graphPosition = [boundingRect.left, boundingRect.top];
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
