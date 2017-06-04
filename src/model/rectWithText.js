import Rect from '/src/model/rect'
import Text from '/src/model/text'

export default class RectWithText {
  constructor(x, y, w, h, value) {
    this.rect = new Rect(x, y, w, h)
    this.text = new Text(x + w / 2, y + h / 2, w, h, value)
  }

  get x() {
    return this.rect.x
  }

  get y() {
    return this.rect.y
  }

  set x(x) {
    this.rect.x = x
    this.text.x = x + this.text.width / 2
  }

  set y(y) {
    this.rect.y = y
    this.text.y = y + this.text.height / 2
  }

  set width(width) {
    this.rect.width = width
    this.text.width = width
  }

  set height(height) {
    this.rect.height = height
    this.text.height = height
  }

  set value(value) {
    this.text.text = value
  }

  toElements() {
    return [this.rect, this.text]
  }
}
