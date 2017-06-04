import RectElement from '/src/model/svg/rectElement'

export default class Rect {
  constructor(x, y, width, height, style = { fill: '#fff', stroke: '#000', 'stroke-width': 2 }) {
    this.type = 'rect'
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.style = style
  }

  get cx() {
    return this.x + this.width / 2
  }

  get cy() {
    return this.y + this.height / 2
  }

  toElements() {
    return [this]
  }
}
