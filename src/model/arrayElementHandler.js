export default class ArrayElementHandler {
  constructor(elements) {
    this.elements = elements
  }

  methods() {
    return [this.setStyle, this.setStyles, this.getElement, this.getValue, this.setValue]
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
}
