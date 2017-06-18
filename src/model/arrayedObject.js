import RectWithText from '/src/model/rectWithText'

export default class ArrayedObject {
  constructor(x, y, w, h, values, options = { index: false, orientation: 'column' }) {
    this.type = 'arrayedObject'
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.values = values
    this.shapeStyles = values.map(_ => RectWithText.defaultShapeStyle())
    this.textStyles = values.map(_ => RectWithText.defaultTextStyle(w, h))

    this.options = options
  }

  static column(x, y, w, h, values = [], options = {}) {
    return new ArrayedObject(x, y, w, h, values, Object.assign(options, { orientation: 'column' }))
  }

  static row(x, y, w, h, values = [], options = {}) {
    return new ArrayedObject(x, y, w, h, values, Object.assign(options, { orientation: 'row' }))
  }

  getIndexElement(index) {
    if (this.options.orientation === 'column') {
      return new RectWithText(this.x + this.w * index, this.y - this.h / 2, this.w, this.h / 2, index, { fill: '#fff' })
    } else {
      return new RectWithText(this.x - this.w / 2, this.y + this.h * index, this.w / 2, this.h, index, { fill: '#fff' })
    }
  }

  getElement(index) {
    if (this.options.orientation === 'column') {
      return new RectWithText(this.x + this.w * index, this.y, this.w, this.h, this.values[index], this.shapeStyles[index], this.textStyles[index])
    } else {
      return new RectWithText(this.x, this.y + this.h * index, this.w, this.h, this.values[index], this.shapeStyles[index], this.textStyles[index])
    }
  }

  get(idx) {
    return this.values[idx]
  }

  set(idx, x) {
    this.values.splice(idx, 1, x)
  }

  get length() {
    return this.values.length
  }

  push(x) {
    this.values.push(x)
  }

  pop() {
    return this.values.pop()
  }

  unshift(...x) {
    this.values.unshift(...x)
  }

  shift() {
    return this.values.shift()
  }

  getShapeStyle(index) {
    return this.shapeStyles[index]
  }

  setShapeStyle(index, arg, value) {
    this.shapeStyles[index][arg] = value
  }

  getTextStyle(index) {
    return this.textStyles[index]
  }

  setTextStyle(index, arg, value) {
    this.textStyles[index][arg] = value
  }
}
