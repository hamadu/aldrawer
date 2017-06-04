import Rect from './rect'
import Text from './text'
import ElementGroup from './elementGroup'

export default class RectWithText extends ElementGroup {
  constructor(x, y, w, h, value) {
    const rect = new Rect(x, y, w, h)
    const text = new Text(x, y, w, h, value)
    super([rect, text])
    this.text = text
    this.rect = rect
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
}
