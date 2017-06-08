import RectWithText from '/src/model/rectWithText'
import Text from '/src/model/text'
import ElementGroup from './elementGroup'
import ArrayElementHandler from './arrayElementHandler'

export default class ArrayRow extends ElementGroup {
  constructor(x, y, w, h, values, options = { index: false }) {
    const rects = values.map((v, idx) => RectWithText.create(x, y + idx * h, w, h, values[idx]))
    const indices = options.index ? values.map((_, idx) => {
      return new Text(x - w * 2 / 3, y + idx * h, w * 2 / 3, h, idx)
    }) : []

    super([...rects, ...indices])

    this.rects = rects
    this.indices = indices
  }

  get rectElements() {
    return this.rects
  }

  get indiceElements() {
    return this.indices
  }

  setStyle(index, arg, value) {
    this.getElement(index).setStyle(arg, value)
  }

  setStyles(styles) {
    this.rectElements.forEach(e => e.setStyles(Object.assign({}, styles)))
  }

  getElement(index) {
    return this.rectElements[index]
  }

  getValue(index) {
    return this.getElement(index).value
  }

  setValue(index, newValue) {
    this.getElement(index).value = newValue
  }

  get rectElements() {
    return this.rects
  }

  get indiceElements() {
    return this.indices
  }
}
