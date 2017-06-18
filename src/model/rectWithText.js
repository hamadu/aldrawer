export default class RectWithText {
  constructor(x, y, w, h, text = '', shapeStyle = RectWithText.defaultShapeStyle(), textStyle = RectWithText.defaultTextStyle(w, h)) {
    this.type = 'rect'
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.text = text
    this.style = {
      shape: shapeStyle,
      text: textStyle
    }
  }

  get cx() {
    return this.x + this.w / 2
  }

  get cy() {
    return this.y + this.h / 2
  }

  static defaultShapeStyle() {
    return {
      fill: '#fff',
      stroke: '#000',
      'stroke-width': 2
    }
  }

  static defaultTextStyle(w = 0, h = 0) {
    return {
      'fill': '#000',
      'font-size': Math.min(w, h) / 2,
      'text-anchor': 'middle',
      'alignment-baseline': 'central',
      'dominant-baseline': 'central'
    }
  }

  getShapeStyle() {
    return this.style.shape
  }

  getTextStyle() {
    return this.style.text
  }

  setShapeStyles(styles) {
    this.style.shape = styles
  }

  setTextStyles(styles) {
    this.style.text = styles
  }

  setShapeStyle(arg, value) {
    this.style.shape[arg] = value
  }

  setTextStyle(arg, value) {
    this.style.text[arg] = value
  }
}
