// A class providing methods for getting the transform
// state of a graph. For instance, scale and translation due to
// zoom and pan. Also client -> graph and graph -> postion conversion

class GraphTransformState {
  constructor(graphRef, wrapperRef) {
    // Ref to the graph element, used to get pan-zoom properties
    this.graphRef = graphRef;
    // Ref to the div wrapping the graph (should have identical dimensions to graph)
    // Used to get the boundingRect of the graph
    this.wrapperRef = wrapperRef;
    this.graphPosition = [];
    this.transform = [];
    this.translation = [];
    this.scale = null;
  }

  // Gets the graph scale/zoom
  getScale() {
    this._setScale();
    return this.scale;
  }
  // Gets the x/y translation due to panning
  getTranslation() {
    this._setTranslationArray();
    return this.translation;
  }

  // Gets the absolute graph position from a client position
  clientToGraph(inputPosition) {
    if (this._initializePositionConversion());
    return inputPosition.map(
      (position, i) =>
        (position - this.graphPosition[i] - this.translation[i]) / this.scale
    );
  }
  // Gets the absolute client position from a client position
  graphToClient(inputPosition) {
    if (this._initializePositionConversion());
    return inputPosition.map(
      (position, i) =>
        this.scale * position + this.graphPosition[i] + this.translation[i]
    );
  }

  // Initializes all quantities for position conversion
  // return false if any step fails
  _initializePositionConversion() {
    this._setGraphPosition();
    if (!this.graphPosition) return false;
    this._setTransformArray();
    if (!this.transform) return false;
    this._setTranslationArray();
    if (!this.translation) return false;
    this._setScale();
    if (!this.scale) return false;
    return true;
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

export default GraphTransformState;
