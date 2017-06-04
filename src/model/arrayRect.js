import RectWithText from '/src/model/rectWithText'

export default class ArrayRect {
  constructor(x, y, w, h, values) {
    this.rects = values.map((v, idx) => {
      return new RectWithText(x + idx * w, y, w, h, values[idx])
    })
  }

  getRectBox(index) {
    return this.rects[index].rect
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

  toElements() {
    return Array.prototype.concat.apply([], this.rects.map(rect => rect.toElements()))
  }
}
