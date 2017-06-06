import RectWithText from '/src/model/rectWithText'
import Text from '/src/model/text'
import ElementGroup from './elementGroup'
import ArrayElementHandler from './arrayElementHandler'

export default class ArrayColumn extends ElementGroup {
  constructor(x, y, w, h, values, options = { index: false }) {
    const rects = values.map((v, idx) => RectWithText.create(x + idx * w, y, w, h, v))
    const indices = options.index ? values.map((_, idx) => {
      return new Text(x + idx * w, y - h * 2 / 3, w, h * 2 / 3, idx)
    }) : []

    super([...rects, ...indices])

    this.rects = rects
    this.indices = indices

    // add ability ArrayColumn to handle array elements
    new ArrayElementHandler(rects).methods().forEach(m => this[m.name] = m)
  }

  get rectElements() {
    return this.rects
  }

  get indiceElements() {
    return this.indices
  }
}
