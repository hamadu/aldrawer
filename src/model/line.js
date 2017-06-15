export default class Line {
  constructor(x1, y1, x2, y2, style = { stroke: '#000', 'stroke-width': 2 }) {
    this.type = 'line'
    this.x1 = x1
    this.y1 = y1
    this.x2 = x2
    this.y2 = y2
    this.style = style
  }
}
