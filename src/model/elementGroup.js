export default class ElementGroup {
  constructor(elements) {
    this.elements = elements
    this._x = elements[0].x
    this._y = elements[0].y
    this.positionDiffX = elements.map(e => e.x - this._x)
    this.positionDiffY = elements.map(e => e.y - this._y)
  }

  get x() {
    return this._x
  }

  get y() {
    return this._y
  }

  set x(x) {
    this._x = x
    this.elements.forEach((e, index) => e.x = x + this.positionDiffX[index])
  }

  set y(y) {
    this._y = y
    this.elements.forEach((e, index) => e.y = y + this.positionDiffY[index])
  }

  toElements() {
    return Array.prototype.concat.apply([], this.elements.map(e => e.toElements()))
  }
}
