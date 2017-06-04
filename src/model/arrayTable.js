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

    // add ability ArrayColumn to handle array elements
    // new ArrayElementHandler(rects).methods().forEach(m => this[m.name] = m)
  }
}
