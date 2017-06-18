import RectWithText from '/src/model/rectWithText'

export default class CircleWithText {
  constructor(x, y, r, text = '', shapeStyle = RectWithText.defaultShapeStyle(), textStyle = RectWithText.defaultTextStyle(r * 2, r * 2)) {
    this.type = 'circle'
    this.x = x - r
    this.y = y - r
    this.w = r * 2
    this.h = r * 2
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
