export default class Circle {
  constructor(x, y, r, style = { fill: '#fff', stroke: '#000', 'stroke-width': 2 }) {
    this.type = 'ellipse'
    this.cx = x
    this.cy = y
    this.r = r
    this.style = style
  }

  set x(x) {
    this.cx = x + this.r
  }

  set y(y) {
    this.cy = y + this.r
  }

  get y() {
    return this.cy - this.r
  }

  get x() {
    return this.cx - this.r
  }

  get y() {
    return this.cy - this.r
  }

  toElements() {
    return [this]
  }
}
