export default class ArrayElementHandler {
  constructor(elements) {
    this.elements = elements
  }

  methods() {
    return [this.setStyle, this.getElement, this.getValue, this.setValue]
  }

  setStyle(index, arg, value) {
    this.getElement(index).setStyle(arg, value)
  }

  getElement(index) {
    return this.elements[index]
  }

  getValue(index) {
    return this.getElement(index).value
  }

  setValue(index, newValue) {
    this.getElement(index).value = newValue
  }
}
