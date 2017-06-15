import RectWithText from '/src/model/rectWithText'

export default class TabularObject {
  constructor(x, y, w, h, values, options = { index: true }) {
    this.type = 'tabularObject'
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.values = values

    this.shapeStyles = values.map(row => row.map(_ => RectWithText.defaultShapeStyle()))
    this.textStyles = values.map(row => row.map(_ => RectWithText.defaultTextStyle(w, h)))

    this.options = options
  }

  static table(x, y, w, h, values = [], options = { index: false }) {
    return new ArrayedObject(x, y, w, h, values, options)
  }

  getColIndexElement(colIndex) {
    return new RectWithText(this.x + this.w * colIndex, this.y - this.h / 2, this.w, this.h / 2, colIndex, { fill: '#fff' })
  }

  getRowIndexElement(rowIndex) {
    return new RectWithText(this.x - this.w / 2, this.y + this.h * rowIndex, this.w / 2, this.h, rowIndex, { fill: '#fff' })
  }

  getElement(rowIndex, colIndex) {
    return new RectWithText(
      this.x + this.w * colIndex, this.y + this.h * rowIndex, this.w, this.h,
      this.values[rowIndex][colIndex],
      this.shapeStyles[rowIndex][colIndex],
      this.textStyles[rowIndex][colIndex]
    )
  }

  get(rowIndex, colIndex) {
    return this.values[rowIndex][colIndex]
  }

  set(rowIndex, colIndex, x) {
    this.values[rowIndex].splice(colIndex, 1, x)
  }

  getShapeStyle(rowIndex, colIndex) {
    return this.shapeStyles[rowIndex][colIndex]
  }

  setShapeStyle(rowIndex, colIndex, arg, value) {
    this.shapeStyles[rowIndex][colIndex][arg] = value
  }

  getTextStyle(rowIndex, colIndex) {
    return this.textStyles[rowIndex][colIndex]
  }

  setTextStyle(rowIndex, colIndex, arg, value) {
    this.textStyles[rowIndex][colIndex][arg] = value
  }
}
