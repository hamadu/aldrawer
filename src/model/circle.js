export default class Circle {
  constructor(x, y, r, style = { fill: '#fff', stroke: '#000', 'stroke-width': 2 }) {
    this.type = 'ellipse'
    this.cx = x
    this.cy = y
    this.rx = r
    this.ry = r
    this.style = style
  }

  toElements() {
    return [this]
  }
}
