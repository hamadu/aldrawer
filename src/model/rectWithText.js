import Rect from './rect'
import Text from './text'
import ElementGroup from './elementGroup'

export default class RectWithText extends ElementGroup {
  constructor(x, y, w, h, value) {
    const rect = new Rect(x, y, w, h)
    const text = new Text(x, y, w, h, value)
    super([rect, text])
    this.rect = rect
    this.text = text
  }

  static create(x, y, w, h, value) {
    return new RectWithText(x, y, w, h, value)
  }

  get cx() {
    return this.rect.cx
  }

  get cy() {
    return this.rect.cy
  }

  get value() {
    return this.text.text
  }

  set width(width) {
    this.elements.forEach(e => e.width = width)
  }

  set height(height) {
    this.elements.forEach(e => e.height = height)
  }

  set value(value) {
    this.text.text = value
  }



  setStyle(arg, value) {
    this.rect.style[arg] = value
  }
}
