class CanvasRenderer {
  options;
  domElement;

  constructor(options) {
    this.options = options;
    this.createDomElement();
  }

  get ctx() {
    return this.domElement?.getContext("2d");
  }

  createDomElement() {
    this.domElement = document.createElement("canvas");
    this.domElement.width = this.options.size.x;
    this.domElement.height = this.options.size.y;
  }
}

export default CanvasRenderer;
