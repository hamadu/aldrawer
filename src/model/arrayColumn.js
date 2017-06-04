import RectWithText from '/src/model/rectWithText'
import ElementGroup from './elementGroup'

export default class ArrayColumn extends ElementGroup {
  constructor(x, y, w, h, values) {
    const rects = values.map((v, idx) => {
      return new RectWithText(x + idx * w, y, w, h, values[idx])
    })
    super(rects)
    this.rects = rects
  }

  getRect(index) {
    return this.rects[index]
  }

  setRect(index, newRect) {
    return this.rects[index] = newRect
  }

  getValue(index) {
    return this.rects[index].value
  }

  setValue(index, newValue) {
    this.rects[index].value = newValue
  }
}
