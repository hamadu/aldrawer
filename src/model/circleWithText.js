import Circle from './circle'
import Text from './text'
import ElementGroup from './elementGroup'

export default class CircleWithText extends ElementGroup {
  constructor(x, y, r, value) {
    const circle = new Circle(x, y, r)
    const text = new Text(x - r, y - r, r * 2, r * 2, value)
    super([circle, text])
    this.text = text
    this.circle = circle
  }

  static create(x, y, r, value) {
    return new CircleWithText(x, y, r, value)
  }

  get cx() {
    return this.circle.x
  }

  get cy() {
    return this.circle.y
  }

  get value() {
    return this.text.text
  }

  set value(value) {
    this.text.text = value
  }
}
