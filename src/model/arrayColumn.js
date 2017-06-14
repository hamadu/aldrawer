import RectWithText from '/src/model/rectWithText'

export default class ArrayColumn {
  constructor(x, y, w, h, values, options = { index: false }) {


    // const rects = values.map((v, idx) => RectWithText.create(x + idx * w, y, w, h, v))
    // const indices = options.index ? values.map((_, idx) => {
    //   return new Text(x + idx * w, y - h * 2 / 3, w, h * 2 / 3, idx)
    // }) : []
    // super([...rects, ...indices])

    this.type = 'arrayColumn'
    this.x = x
    this.y = y
    this.w = w
    this.h = h
    this.values = values
    this.groupStyle = {
    }
    this.options = options
  }

  getElement(index) {
    return new RectWithText(this.x + this.w * index, this.y, this.w, this.h, this.values[index])
  }

  // setStyle(index, arg, value) {
  //   this.getElement(index).setStyle(arg, value)
  // }
  //
  // setStyles(styles) {
  //   this.rectElements.forEach(e => e.setStyles(Object.assign({}, styles)))
  // }
  //
  // setTextStyle(index, arg, value) {
  //   this.getElement(index).setTextStyle(arg, value)
  // }
  //
  // setTextStyles(styles) {
  //   this.rectElements.forEach(e => e.setTextStyles(Object.assign({}, styles)))
  // }
  //
  // getElement(index) {
  //   return this.rectElements[index]
  // }
  //
  // getValue(index) {
  //   return this.getElement(index).value
  // }
  //
  // setValue(index, newValue) {
  //   this.getElement(index).value = newValue
  // }
  //
  // get rectElements() {
  //   return this.rects
  // }
  //
  // get indiceElements() {
  //   return this.indices
  // }
}
