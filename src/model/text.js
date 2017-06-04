export default class Text {
  constructor(x, y, width, height, text, style = { 'fill': '#000', 'font-size': Math.min(width, height) / 2 }) {
    this.type = 'text'
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.text = text
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
