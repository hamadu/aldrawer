export default class Text {
  constructor(x, y, width, height, text, style = { 'fill': '#000', 'font-size': Math.min(width, height) / 2, 'text-anchor': 'middle' }) {
    this.type = 'text'
    this.x = x
    this.y = y
    this.width = width
    this.height = height
    this.text = text
    this.style = style
    this.padding = 16
  }

  get cx() {
    switch (this.style['text-anchor']) {
      case 'start':
        return this.x + this.padding
      case 'middle':
        return this.x + this.width / 2
      case 'end':
        return this.x + this.width - this.padding
    }
  }

  get cy() {
    return this.y + this.height / 2
  }

  toElements() {
    return [this]
  }
}
