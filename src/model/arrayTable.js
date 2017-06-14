import RectWithText from '/src/model/rectWithText'
import Text from '/src/model/text'
import ElementGroup from './elementGroup'

export default class ArrayTable extends ElementGroup {
  constructor(x, y, w, h, table) {
    const arrayOfRects = table.map((row, yidx) => {
      return row.map((v, xidx) => RectWithText.create(x + xidx * w, y + yidx * h, w, h, v))
    })
    const rects = Array.prototype.concat.apply([], arrayOfRects)
    super(rects)

    this.rectTable = arrayOfRects
    this.rects = rects
  }

  setStyle(rowIndex, colIndex, arg, value) {
    this.getElement(rowIndex, colIndex).setStyle(arg, value)
  }

  setTextStyle(rowIndex, colIndex, arg, value) {
    this.getElement(rowIndex, colIndex).setTextStyle(arg, value)
  }

  getElement(rowIndex, colIndex) {
    return this.rectTable[rowIndex][colIndex]
  }

  setStyles(styles) {
    this.rects.forEach(e => e.setStyles(Object.assign({}, styles)))
  }
}
