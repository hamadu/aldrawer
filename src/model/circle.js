export default class Circle {
  constructor(x, y, r, style = { fill: '#fff', stroke: '#000', 'stroke-width': 2 }) {
    this.type = 'ellipse'
    this.x = x
    this.y = y
    this.r = r
    this.style = style
  }

  toElements() {
    return [this]
  }
}
